<div align="center">

# 🛡️ LinkSafe

### Check any link before you click.

**Instant phishing detection built for Singapore.**

[![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)](https://shakhsg.github.io/linksafe)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Built in](https://img.shields.io/badge/Built%20in-Singapore%20🇸🇬-red?style=for-the-badge)](https://shakhsg.github.io/linksafe)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](https://github.com/shakhsg/linksafe/pulls)

[**🚀 Try it Live**](https://shakhsg.github.io/linksafe) · [**📖 Documentation**](#-how-it-works) · [**🐛 Report Bug**](https://github.com/shakhsg/linksafe/issues) · [**💡 Request Feature**](https://github.com/shakhsg/linksafe/issues)

---

<p align="center">
  <strong>Singapore lost S$913 million to scams in 2025.</strong><br>
  <em>One suspicious link. One click. Game over.</em><br><br>
  <strong>LinkSafe stops that — in under 2 seconds.</strong>
</p>

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [The Problem](#-the-problem)
- [Features](#-features)
- [Demo](#-demo)
- [How It Works](#-how-it-works)
- [Singapore-Specific Detection](#-singapore-specific-detection)
- [For Business](#-for-business)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [Press & Mentions](#-press--mentions)
- [License](#-license)
- [Author](#-author)

---

## 🎯 About

**LinkSafe** is a free, open-source phishing detection tool built specifically for **Singapore's threat landscape**. Paste any suspicious URL and get an instant verdict — no signup, no data storage, no friction.

Built by a developer, for everyone — from grandparents receiving fake DBS messages to SME owners protecting their teams.

> 🌟 **Star this repo** if LinkSafe has helped you or someone you know stay safe online.

---

## 🚨 The Problem

Singapore is one of the most digitally connected nations on Earth — and scammers know it.

<table>
<tr>
<td align="center"><h2>S$913M</h2><sub>Lost to scams in 2025</sub></td>
<td align="center"><h2>41,974</h2><sub>Reported scam cases</sub></td>
<td align="center"><h2>S$1,644</h2><sub>Median loss per victim</sub></td>
</tr>
</table>

Phishing is now a **top 5 scam type** in Singapore. Every attack follows the same pattern:

```
📱 Suspicious message arrives
   ↓
🔗 Contains an urgent link
   ↓
🖱️ One careless click
   ↓
💸 Bank account drained
```

LinkSafe breaks the cycle at step 3.

**Source:** [Singapore Police Force — Annual Scams and Cybercrime Brief 2025](https://www.police.gov.sg/Media-Room/Statistics)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Instant Verdicts** | Results in under 2 seconds |
| 🛡️ **8 Detection Signals** | Multi-layered analysis on every link |
| 🇸🇬 **Singapore-Tuned** | Knows local scams (DBS, SingPass, SingPost...) |
| 🔓 **Open Source** | Audit the code yourself — full transparency |
| 🚫 **Zero Data Storage** | We never save your links or queries |
| 📱 **Mobile-Friendly** | Works on any device, any browser |
| 💸 **100% Free** | No signup, no ads, no paywalls |
| 🌐 **No Install** | Just a URL — works instantly |

---

## 🎥 Demo

> 🚀 **[Try it live →](https://shakhsg.github.io/linksafe)**

### Example detection flow:

```
INPUT:  http://dbs-verify-account.tk/login
        ↓
OUTPUT: 🚨 DANGER — Multiple red flags detected:
        ✗ Suspicious TLD (.tk)
        ✗ Brand impersonation (DBS)
        ✗ Phishing keyword ("verify")
        ✗ No HTTPS
```

```
INPUT:  https://www.dbs.com.sg
        ↓
OUTPUT: ✅ SAFE — No suspicious indicators found.
```

---

## 🔍 How It Works

LinkSafe runs **8 detection signals in parallel** on every URL you submit. Here's the full breakdown:

<table>
<thead>
<tr><th>#</th><th>Signal</th><th>What It Catches</th><th>Why It Matters</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>🔒 <strong>HTTPS Check</strong></td><td>Unencrypted HTTP connections</td><td>Legit banks/services always use HTTPS</td></tr>
<tr><td>2</td><td>💻 <strong>IP Address URLs</strong></td><td>Raw IPs like <code>http://192.168.1.1</code></td><td>Phishers use IPs to hide domain names</td></tr>
<tr><td>3</td><td>⚠️ <strong>Suspicious TLDs</strong></td><td><code>.tk</code>, <code>.ml</code>, <code>.xyz</code>, <code>.gq</code></td><td>Free TLDs are scammer favorites</td></tr>
<tr><td>4</td><td>🎣 <strong>Phishing Keywords</strong></td><td><code>verify</code>, <code>secure</code>, <code>login</code>, <code>account</code></td><td>Common urgency triggers in fake URLs</td></tr>
<tr><td>5</td><td>🌳 <strong>Excessive Subdomains</strong></td><td><code>dbs.com.fake-site.xyz</code></td><td>Used to mimic trusted brands</td></tr>
<tr><td>6</td><td>🅰️ <strong>Punycode Detection</strong></td><td><code>xn--</code> encoded domains</td><td>Visually identical fake characters</td></tr>
<tr><td>7</td><td>🐌 <strong>URL Length</strong></td><td>Unusually long URLs (>75 chars)</td><td>Hides the real destination</td></tr>
<tr><td>8</td><td>🎭 <strong>@ Symbol Tricks</strong></td><td><code>dbs.com@evil.site</code></td><td>Browser shows DBS, opens evil.site</td></tr>
</tbody>
</table>

Each signal contributes to a **risk score**. Multiple red flags = higher danger rating.

---

## 🇸🇬 Singapore-Specific Detection

What sets LinkSafe apart from generic phishing tools is **deep tuning for Singapore's threat landscape**:

### 🏦 Banks & Finance
DBS · POSB · OCBC · UOB · Standard Chartered · HSBC · Citibank · Maybank

### 🏛️ Government Services
SingPass · IRAS · MOM · ICA · HDB · CPF · MOH · LTA · CDC

### 📦 Logistics & Delivery
SingPost · Ninja Van · Lalamove · Qxpress · Park N Parcel · Speedpost

### 🛒 E-commerce & Marketplaces
Shopee · Lazada · Carousell · Amazon SG · Qoo10 · Taobao SG

### 📱 Telecom & Utilities
Singtel · StarHub · M1 · SP Group · Singapore Power

> 💡 **Have you spotted a new Singapore scam pattern?** [Open an issue](https://github.com/shakhsg/linksafe/issues/new) — we'll add it to the detection engine.

---

## 🚀 For Business

**LinkSafe for Business** (coming soon) brings phishing protection into your team's daily workflow:

### What's included:

- 🤖 **Telegram & WhatsApp bots** — paste links in team chats, get instant verdicts
- 📊 **Monthly threat reports** — see what attacks your team faced
- 🇸🇬 **Singapore scam database** — updated weekly
- 👥 **Up to 20 team members** per plan
- 🎯 **Priority email support**
- 📈 **Analytics dashboard** — track team safety metrics

### Who it's for:

🍔 **F&B operators** · 🚚 **Logistics & last-mile** · 🏠 **Real estate agencies** · 💼 **Recruitment firms** · 🏥 **Clinics & SMB healthcare** · 🛍️ **Retail & e-commerce**

> 📩 **[Join the early access waitlist →](https://shakhsg.github.io/linksafe#business)**
>
> Early adopters get **1 month free** and **lifetime 30% discount**.

---

## 🛠️ Tech Stack

LinkSafe is built with **simplicity and performance** in mind. No frameworks, no build steps, no bloat.

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Services & APIs
| Service | Purpose |
|---------|---------|
| [Microlink.io](https://microlink.io) | Website screenshot previews |
| [Unshorten.me](https://unshorten.me) | Short URL expansion (bit.ly, tinyurl) |
| [Formspree](https://formspree.io) | Business waitlist lead capture |
| [Google Analytics 4](https://analytics.google.com) | Anonymous usage tracking |
| [GitHub Pages](https://pages.github.com) | Static hosting (free, fast, secure) |

### Design
- **Typography:** [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Theme:** Custom "Midnight Trust" dark palette
- **Icons:** Native emoji (universal, accessible, zero dependencies)

### Why no frameworks?
> Security tools should be **inspectable**. Anyone with basic HTML/CSS/JS knowledge can audit LinkSafe in 10 minutes. No webpack, no transpilation, no hidden dependencies.

---

## 🚀 Quick Start

Get LinkSafe running locally in under 60 seconds:

```bash
# Clone the repository
git clone https://github.com/shakhsg/linksafe.git

# Navigate into the project
cd linksafe

# Open in your browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

That's it. No `npm install`, no build step, no environment variables.

### Want to deploy your own version?

1. **Fork** this repo
2. Go to **Settings → Pages** in your fork
3. Set source to `main` branch, root directory
4. Done! Your version is live at `https://YOURUSERNAME.github.io/linksafe`

---

## 📁 Project Structure

```
linksafe/
├── index.html          # Main page (hero, checker, stats, business section)
├── styles.css          # All styling (Midnight Trust theme)
├── script.js           # Detection engine + UI logic
├── README.md           # You're here 👋
├── LICENSE             # MIT
└── assets/             # Images, icons (if any)
```

**Key files:**

- 📄 [`index.html`](index.html) — Page structure and content
- 🎨 [`styles.css`](styles.css) — Visual design and responsive layout
- ⚙️ [`script.js`](script.js) — **The detection engine** (start here if you want to contribute)

---

## 📊 Roadmap

LinkSafe is built in public. Here's what's done and what's coming:

### ✅ Shipped
- [x] Live web checker with 8 detection signals
- [x] Singapore-specific scam pattern database
- [x] Mobile-responsive UI
- [x] Business waitlist with lead capture
- [x] Open Graph tags for social sharing

### 🚧 In Progress
- [ ] **Telegram bot** for SMB team chats (Q3 2026)
- [ ] **WhatsApp bot** integration (Q3 2026)
- [ ] **Real product demo screenshots** in How It Works section

### 🔮 Future
- [ ] Chrome browser extension
- [ ] Public REST API for fintechs & e-commerce platforms
- [ ] Mandarin (中文) language support
- [ ] Malay (Bahasa) language support
- [ ] Tamil (தமிழ்) language support
- [ ] Native mobile apps (iOS + Android)
- [ ] Integration with Singapore's ScamShield ecosystem
- [ ] ML-based detection layer (in addition to rules)

> 💡 **Want to influence the roadmap?** [Open an issue](https://github.com/shakhsg/linksafe/issues) or [start a discussion](https://github.com/shakhsg/linksafe/discussions).

---

## 🤝 Contributing

Contributions are what make open source amazing. **All contributions are welcome** — code, documentation, bug reports, design feedback, or new scam patterns.

### 🇸🇬 Especially looking for:

- **New Singapore-specific scam patterns** — seen a new SMS scam? Share it
- **Bug reports** — false positives or false negatives
- **Translations** — Mandarin, Malay, Tamil
- **UI/UX improvements** — accessibility, mobile experience
- **Documentation** — explainers for non-technical users

### How to contribute:

```bash
# 1. Fork the repository (click the Fork button above)

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/linksafe.git
cd linksafe

# 3. Create a feature branch
git checkout -b feature/amazing-new-feature

# 4. Make your changes and commit
git add .
git commit -m "Add: amazing new feature"

# 5. Push to your fork
git push origin feature/amazing-new-feature

# 6. Open a Pull Request on GitHub
```

### Code style:
- Vanilla JS — no frameworks or transpilation
- 2-space indentation
- Descriptive variable names over comments
- Mobile-first CSS

---

## ❓ FAQ

<details>
<summary><strong>Is LinkSafe really free?</strong></summary>
<br>
Yes — the web checker is 100% free forever. We never charge individuals for safety. The optional <strong>Business plan</strong> (for teams using the Telegram/WhatsApp bots) will be paid, but the core tool stays free.
</details>

<details>
<summary><strong>Do you store the links I check?</strong></summary>
<br>
<strong>No.</strong> LinkSafe processes URLs in your browser and through third-party APIs (Microlink for previews, Unshorten.me for short links). Nothing is saved on our servers — we don't even have a database.
</details>

<details>
<summary><strong>Is LinkSafe affiliated with the Singapore government or ScamShield?</strong></summary>
<br>
<strong>No.</strong> LinkSafe is an independent open-source project. For official scam reporting, please use <a href="https://www.scamshield.gov.sg">ScamShield</a> or call the <strong>Anti-Scam Helpline at 1799</strong>.
</details>

<details>
<summary><strong>Can LinkSafe catch every phishing attempt?</strong></summary>
<br>
<strong>No tool can.</strong> LinkSafe uses 8 strong signals and Singapore-specific patterns, but phishing evolves daily. Always combine LinkSafe with critical thinking — if something feels wrong, don't click.
</details>

<details>
<summary><strong>How can I support the project?</strong></summary>
<br>
<ul>
<li>⭐ <strong>Star this repo</strong> — it helps others discover LinkSafe</li>
<li>🐛 <strong>Report bugs</strong> or false positives</li>
<li>📢 <strong>Share LinkSafe</strong> with friends, family, and colleagues in Singapore</li>
<li>💬 <strong>Send scam examples</strong> so we can improve detection</li>
<li>🤝 <strong>Contribute code</strong> — PRs are very welcome</li>
</ul>
</details>

<details>
<summary><strong>Why focus on Singapore specifically?</strong></summary>
<br>
Most phishing tools are built for Western markets. Singapore has unique brands (DBS, SingPass, SingPost), unique scam patterns (parcel redelivery, SMS impersonation), and a unique threat landscape. LinkSafe is built by someone living and working in Singapore — for Singapore.
</details>

---

## 📰 Press & Mentions

*Building in public. Mentions and write-ups will be linked here as they come.*

- **2026-05-21** — 🚀 [Launch announcement on LinkedIn](https://www.linkedin.com/posts/shukhratmirzaev-cs_singapore-cybersecurity-phishing-share-7462951393507643392-apMN)

> 📣 **Featured LinkSafe somewhere?** [Let me know on LinkedIn](https://www.linkedin.com/in/shukhratmirzaev-cs/) and I'll add it here.

---

## ⚠️ Disclaimer

LinkSafe is **not affiliated** with the Singapore Police Force, ScamShield, or any government agency.

For official scam reporting in Singapore:
- 🌐 Visit [scamshield.gov.sg](https://www.scamshield.gov.sg)
- 📞 Call the **Anti-Scam Helpline at 1799**
- 🚨 Report fraud to the Singapore Police Force at **999** (emergency) or **1800-255-0000** (non-emergency)

LinkSafe is a **best-effort detection tool** — no system catches 100% of phishing attempts. Always exercise judgment when clicking links from unknown sources.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full text.

```
You can:    ✅ Use commercially    ✅ Modify    ✅ Distribute    ✅ Use privately
You must:   📋 Include the license and copyright notice
You can't:  ❌ Hold the author liable
```

If you build something cool with LinkSafe, [tell me about it](https://www.linkedin.com/in/shukhratmirzaev-cs/) — I'd love to feature it here.

---

## 👤 Author

<div align="center">

### **Shukhrat Mirzayev**

*Junior Software Developer · Building from Singapore 🇸🇬*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shukhratmirzaev-cs/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/shakhsg)

</div>

---

## 🌟 Show Your Support

If LinkSafe helped you or someone you care about stay safe online:

⭐ **Star this repository** — it takes 2 seconds and means a lot.

🔁 **Share it** with friends, family, and colleagues — especially in Singapore.

🐛 **Report scams you encounter** so we can protect others.

---

<div align="center">

### 🛡️ Built in Singapore, for Singapore.

**Stop phishing in 2 seconds.**

[**🚀 Try LinkSafe Now →**](https://shakhsg.github.io/linksafe)

</div>