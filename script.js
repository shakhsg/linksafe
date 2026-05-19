/* ── LinkSafe — link checker logic ─────────────────────── */

const urlInput  = document.getElementById('url-input');
const checkBtn  = document.getElementById('check-btn');
const pasteBtn  = document.getElementById('paste-btn');
const resultsEl = document.getElementById('results');

/* ── Suspicious patterns (phishing signals) ────────────── */
const SUSPICIOUS_KEYWORDS = [
  'verify','verification','secure','update','suspended','locked','confirm',
  'signin','login','account','banking','wallet','password','recovery','urgent',
  'paypal-','apple-id','microsoft-','google-','amazon-','facebook-',
];
const SUSPICIOUS_TLDS = ['.tk','.ml','.ga','.cf','.gq','.top','.xyz','.click','.zip','.country','.review'];
const URL_SHORTENERS = [
  'bit.ly','tinyurl.com','goo.gl','t.co','ow.ly','is.gd','buff.ly',
  'rebrand.ly','cutt.ly','shorte.st','rb.gy','tiny.cc','t.ly','soo.gd','clck.ru',
];
const TRUSTED_DOMAINS = [
  'google.com','github.com','microsoft.com','apple.com','amazon.com',
  'wikipedia.org','youtube.com','linkedin.com','stackoverflow.com','mozilla.org',
  'cloudflare.com','openai.com','anthropic.com','vercel.com','netlify.com',
];

/* ── Paste button ──────────────────────────────────────── */
pasteBtn.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    urlInput.value = text.trim();
    urlInput.focus();
  } catch {
    urlInput.focus();
  }
});

/* ── Input events ──────────────────────────────────────── */
checkBtn.addEventListener('click', checkLink);
urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkLink(); });

/* ── Main check ────────────────────────────────────────── */
async function checkLink() {
  let raw = urlInput.value.trim();
  if (!raw) {
    urlInput.focus();
    return;
  }

  // Auto-add https:// if missing
  if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;

  // Validate URL
  let url;
  try { url = new URL(raw); }
  catch {
    renderError('That doesn\'t look like a valid URL. Try again.');
    return;
  }

  showLoading();
  checkBtn.disabled = true;

  try {
    // Run all analyses
    const analysis = analyzeUrl(url);
    const expanded = await tryExpandShortlink(url.href);
    const finalUrl = expanded ? new URL(expanded) : url;
    const finalAnalysis = expanded ? analyzeUrl(finalUrl) : analysis;
    const screenshot = `https://api.microlink.io/?url=${encodeURIComponent(finalUrl.href)}&screenshot=true&meta=false&embed=screenshot.url`;

    renderResults({
      originalUrl: url,
      finalUrl,
      wasShortened: !!expanded,
      analysis: finalAnalysis,
      screenshotUrl: screenshot,
    });
  } catch (err) {
    console.error(err);
    renderError('Something went wrong. Please try again.');
  } finally {
    checkBtn.disabled = false;
  }
}

/* ── Analyze a URL (frontend-only heuristics) ──────────── */
function analyzeUrl(url) {
  const host = url.hostname.toLowerCase();
  const path = url.pathname.toLowerCase();
  const full = url.href.toLowerCase();
  const signals = [];
  let score = 100; // 100 = safest, 0 = most dangerous

  // HTTPS check
  if (url.protocol === 'https:') {
    signals.push({ type:'ok', icon:'🔒', text:'Uses HTTPS — connection is encrypted.' });
  } else {
    signals.push({ type:'bad', icon:'⚠️', text:'No HTTPS — connection is NOT encrypted. Avoid entering sensitive info.' });
    score -= 25;
  }

  // Trusted domain check
  const isTrusted = TRUSTED_DOMAINS.some(d => host === d || host.endsWith('.' + d));
  if (isTrusted) {
    signals.push({ type:'ok', icon:'✅', text:`Domain "${host}" is a well-known trusted site.` });
    score = Math.min(100, score + 5);
  }

  // Suspicious TLD
  const badTld = SUSPICIOUS_TLDS.find(t => host.endsWith(t));
  if (badTld) {
    signals.push({ type:'warn', icon:'⚠️', text:`The "${badTld}" domain is often used for short-lived or low-trust sites.` });
    score -= 15;
  }

  // Suspicious keywords in URL
  const foundKeywords = SUSPICIOUS_KEYWORDS.filter(k => full.includes(k));
  if (foundKeywords.length > 0 && !isTrusted) {
    signals.push({
      type:'warn',
      icon:'🔎',
      text:`URL contains suspicious words: ${foundKeywords.slice(0,3).join(', ')}. These are common in phishing links.`,
    });
    score -= Math.min(30, foundKeywords.length * 8);
  }

  // IP address as host
  if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    signals.push({ type:'bad', icon:'🚨', text:'URL uses a raw IP address instead of a domain — strong phishing signal.' });
    score -= 30;
  }

  // Lots of subdomains
  const subdomainCount = host.split('.').length;
  if (subdomainCount > 4) {
    signals.push({ type:'warn', icon:'🪜', text:`This URL has ${subdomainCount - 2} subdomains — phishing sites often hide behind long subdomain chains.` });
    score -= 10;
  }

  // "@" in URL (deceptive auth syntax)
  if (url.href.includes('@') && !url.username) {
    signals.push({ type:'bad', icon:'⚠️', text:'URL contains "@" which can be used to disguise the real destination.' });
    score -= 20;
  }

  // Punycode / homograph
  if (host.includes('xn--')) {
    signals.push({ type:'warn', icon:'🅰️', text:'Domain uses punycode (xn--) — can be used to mimic real brand names.' });
    score -= 15;
  }

  // Very long URL
  if (full.length > 200) {
    signals.push({ type:'warn', icon:'📏', text:'URL is unusually long — phishing links often use long URLs to hide their real destination.' });
    score -= 5;
  }

  score = Math.max(0, Math.min(100, score));

  // Verdict
  let verdict;
  if (score >= 80) verdict = 'safe';
  else if (score >= 50) verdict = 'warn';
  else verdict = 'danger';

  return { score, verdict, signals, host, isTrusted };
}

/* ── Try expanding shortlinks ──────────────────────────── */
async function tryExpandShortlink(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    const isShort = URL_SHORTENERS.some(s => host === s || host.endsWith('.' + s));
    if (!isShort) return null;

    // Use unshorten.me API (free, no key)
    const res = await fetch(`https://unshorten.me/json/${encodeURIComponent(url)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.resolved_url && data.resolved_url !== url ? data.resolved_url : null;
  } catch {
    return null;
  }
}

/* ── UI: Loading ───────────────────────────────────────── */
function showLoading() {
  resultsEl.innerHTML = `
    <div class="loading-card">
      <div class="loading-spinner"></div>
      <p class="loading-text">Analyzing link...</p>
    </div>`;
  resultsEl.scrollIntoView({ behavior:'smooth', block:'start' });
}

/* ── UI: Error ─────────────────────────────────────────── */
function renderError(msg) {
  resultsEl.innerHTML = `
    <div class="result-card">
      <div class="verdict verdict-warn">
        <span class="verdict-icon">⚠️</span>
        <div class="verdict-text">
          <div class="verdict-title">Couldn't check this link</div>
          <div class="verdict-sub">${msg}</div>
        </div>
      </div>
    </div>`;
}

/* ── UI: Render results ────────────────────────────────── */
function renderResults({ originalUrl, finalUrl, wasShortened, analysis, screenshotUrl }) {
  const { score, verdict, signals, host, isTrusted } = analysis;

  const verdictMap = {
    safe:   { icon:'🛡️', title:'This link looks safe',     sub:'No major red flags detected.',                     cls:'verdict-safe',   barColor:'#4ADE80' },
    warn:   { icon:'⚠️', title:'Be careful with this link', sub:'Some suspicious signals were found. Proceed cautiously.', cls:'verdict-warn',   barColor:'#FBBF24' },
    danger: { icon:'🚨', title:'This link looks dangerous',  sub:'Multiple phishing signals detected. We recommend NOT clicking.', cls:'verdict-danger', barColor:'#F87171' },
  };
  const v = verdictMap[verdict];

  resultsEl.innerHTML = `
    <div class="result-card">
      <div class="verdict ${v.cls}">
        <span class="verdict-icon">${v.icon}</span>
        <div class="verdict-text">
          <div class="verdict-title">${v.title}</div>
          <div class="verdict-sub">${v.sub}</div>
          <div class="score-bar">
            <div class="score-fill" style="width:${score}%; background:${v.barColor};"></div>
          </div>
        </div>
      </div>

      ${wasShortened ? `
        <div class="detail-label">↗ Short link expanded</div>
        <div class="final-url">${escapeHtml(finalUrl.href)}</div>
      ` : ''}

      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">🌐 Domain</div>
          <div class="detail-value is-mono">${escapeHtml(host)}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">🔒 Encryption</div>
          <div class="detail-value ${finalUrl.protocol === 'https:' ? 'ok' : 'bad'}">
            ${finalUrl.protocol === 'https:' ? 'HTTPS — Encrypted' : 'HTTP — Not encrypted'}
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">⭐ Trust level</div>
          <div class="detail-value ${isTrusted ? 'ok' : ''}">
            ${isTrusted ? 'Well-known site' : 'Unknown / new site'}
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">🎯 Safety score</div>
          <div class="detail-value">${score} / 100</div>
        </div>
      </div>

      <div class="detail-label">🔍 What we found</div>
      <div class="signal-list">
        ${signals.length === 0
          ? `<div class="signal ok"><span class="signal-icon">✓</span>No specific signals found.</div>`
          : signals.map(s => `
              <div class="signal ${s.type}">
                <span class="signal-icon">${s.icon}</span>
                <span>${escapeHtml(s.text)}</span>
              </div>`).join('')}
      </div>

      <div style="margin-top:24px;">
        <div class="screenshot-label">📸 Preview (before clicking)</div>
        <div class="screenshot-wrap">
          <img src="${screenshotUrl}" alt="Screenshot preview of ${escapeHtml(host)}" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      </div>

      <div style="margin-top:20px; display:flex; gap:12px; flex-wrap:wrap;">
        <a href="${escapeHtml(finalUrl.href)}" target="_blank" rel="noopener noreferrer"
           style="flex:1; min-width:140px; text-align:center; background:var(--bg-3); color:var(--text); padding:12px 20px; border-radius:var(--radius); text-decoration:none; font-weight:500; font-size:14px; border:1px solid var(--border-strong);">
          Open link in new tab ↗
        </a>
        <button onclick="navigator.clipboard.writeText('${escapeHtml(finalUrl.href)}'); this.textContent='Copied!'; setTimeout(()=>this.textContent='Copy link',1500);"
           style="flex:1; min-width:140px; background:transparent; color:var(--text-2); padding:12px 20px; border-radius:var(--radius); border:1px solid var(--border); font-family:var(--font); font-weight:500; font-size:14px; cursor:pointer;">
          Copy link
        </button>
      </div>
    </div>`;
}

/* ── Helper ────────────────────────────────────────────── */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}