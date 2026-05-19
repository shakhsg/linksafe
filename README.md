# 🛡️ LinkSafe

> Check any link before you click. Instantly detect phishing, expand short URLs, and preview where a link really takes you.

**Live demo:** [shakhsg.github.io/linksafe](https://shakhsg.github.io/linksafe/)

![LinkSafe Banner](https://img.shields.io/badge/Status-Live-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Made with](https://img.shields.io/badge/Made%20with-Vanilla%20JS-yellow?style=flat-square)

---

## ✨ Why LinkSafe?

Every day, millions of people receive suspicious links via SMS, email, and social media. Most don't know how to check if a link is safe before clicking — and that's how phishing attacks succeed.

**LinkSafe is built to change that.** Paste any link, get an instant safety verdict in under 2 seconds. No signup. No tracking. Just safety.

---

## 🚀 Features

- 🛡️ **Instant phishing detection** — 8+ heuristic checks for suspicious patterns
- 🔗 **Short URL expansion** — see where `bit.ly`, `tinyurl`, `t.co` links really go
- 🔒 **HTTPS verification** — checks encryption status
- 🌐 **Domain reputation** — flags trusted vs unknown sites
- 📸 **Preview screenshot** — see the site before visiting it
- 🎯 **Safety score** — clear 0–100 rating
- ⚡ **Lightning fast** — results in under 2 seconds
- 🌍 **Works worldwide** — no region restrictions
- 🔐 **Privacy-first** — we don't store any links you check

## 🎯 What it detects

| Signal | What it checks |
|--------|---------------|
| 🔒 No HTTPS | Unencrypted connections |
| 🚨 IP addresses | Raw IPs instead of domains (phishing red flag) |
| ⚠️ Suspicious TLDs | `.tk`, `.ml`, `.xyz` and other low-trust extensions |
| 🔎 Phishing keywords | Words like `verify`, `secure`, `login`, `paypal-` in URL |
| 🪜 Excessive subdomains | Multiple subdomains used to disguise links |
| 🅰️ Punycode | Internationalized domains used for brand impersonation |
| 📏 Unusually long URLs | A common phishing tactic |
| 🎭 Deceptive `@` syntax | URL manipulation tricks |

---

## 🛠️ Tech Stack

- **HTML5** + **CSS3** + **Vanilla JavaScript** (no frameworks!)
- **Fonts:** Inter + JetBrains Mono via Google Fonts
- **APIs:**
  - [microlink.io](https://microlink.io) — screenshot previews
  - [unshorten.me](https://unshorten.me) — short link expansion

## 🏃 Run Locally

Clone the repo and open `index.html` in any browser:

```bash
