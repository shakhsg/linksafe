# 🛡️ LinkSafe

> **Check any link before you click.** Instant phishing detection built for Singapore.

🌐 **Live demo:** [shakhsg.github.io/linksafe](https://shakhsg.github.io/linksafe)

![Status](https://img.shields.io/badge/Status-Live-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Made with](https://img.shields.io/badge/Made%20with-Vanilla%20JS-yellow?style=flat-square)
![Built in](https://img.shields.io/badge/Built%20in-Singapore%20🇸🇬-red?style=flat-square)

---

## 🚨 The problem

Singapore lost **S$913 million to scams in 2025** — with **41,974 reported cases** and a median loss of **S$1,644 per case**. Phishing is now a top 5 scam type, and almost every attack starts the same way: **a single suspicious link**.

A fake DBS "verify your account" SMS. A fake SingPass login. A fake SingPost "redelivery fee" message. One click, and it's over.

**Source:** [Singapore Police Force, Annual Scams and Cybercrime Brief 2025](https://www.police.gov.sg/Media-Room/Statistics)

---

## ✨ The solution

LinkSafe is a **free, instant phishing link checker** built specifically for Singapore.

🔗 Paste any suspicious link → ⚡ Get a verdict in **under 2 seconds**.

- ✅ No signup required
- ✅ No data stored
- ✅ Open source
- ✅ Tuned for Singapore-specific scams

---

## 🎯 What it detects

LinkSafe runs **8 detection signals** in parallel:

| Signal | What it checks |
|--------|----------------|
| 🔒 No HTTPS | Unencrypted connections |
| 💻 IP addresses | Raw IPs instead of domains (phishing red flag) |
| ⚠️ Suspicious TLDs | `.tk`, `.ml`, `.xyz` and other low-trust extensions |
| 🎣 Phishing keywords | Words like `verify`, `secure`, `login`, `paypal-` in URL |
| 🌳 Excessive subdomains | Multiple subdomains used to disguise links |
| 🅰️ Punycode | Internationalized domains used for brand impersonation |
| 🐌 Unusually long URLs | A common phishing tactic |
| 🎭 Deceptive `@` syntax | URL manipulation tricks |

---

## 🇸🇬 Singapore-specific patterns

LinkSafe is tuned to detect the scams that actually hit Singapore:

- **Banks:** DBS, OCBC, UOB, POSB impersonation
- **Government:** SingPass, IRAS, MOM, ICA, HDB, CPF fake pages
- **Logistics:** SingPost, Ninja Van, Lalamove tracking scams
- **E-commerce:** Shopee, Lazada, Carousell fake refund pages

---

## 🚀 For Business

**LinkSafe for Business** (coming soon) brings phishing detection directly into your team's WhatsApp and Telegram chats.

- ✅ Telegram & WhatsApp bot for team chats
- ✅ Monthly threat reports for owners
- ✅ Singapore-specific scam database
- ✅ Up to 20 team members per plan
- ✅ Priority email support

**Early access waitlist:** [shakhsg.github.io/linksafe#business](https://shakhsg.github.io/linksafe#business)

---

## 🛠️ Tech stack

- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
- **Fonts:** Inter + JetBrains Mono via Google Fonts
- **APIs:**
  - [microlink.io](https://microlink.io) — screenshot previews
  - [unshorten.me](https://unshorten.me) — short link expansion
- **Lead capture:** [Formspree](https://formspree.io)
- **Analytics:** Google Analytics 4
- **Hosting:** GitHub Pages

---

## 🏃 Run locally

Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/shakhsg/linksafe.git
cd linksafe
open index.html
```

No build step. No dependencies. Just pure HTML/CSS/JS.

---

## 🤝 Contributing

Contributions are welcome — especially:

- 🇸🇬 **New Singapore-specific scam patterns** (open an issue with examples)
- 🐛 **Bug reports** (especially false positives/negatives)
- 🌍 **Translations** (Mandarin, Malay, Tamil)
- 🎨 **UI/UX improvements**
- 📚 **Documentation**

To contribute:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add: your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📊 Roadmap

- [x] Live web checker
- [x] 8 phishing detection signals
- [x] Singapore-specific scam patterns
- [x] Business waitlist
- [ ] Telegram bot for SMBs
- [ ] WhatsApp bot for SMBs
- [ ] Chrome browser extension
- [ ] Public API for fintechs and e-commerce platforms
- [ ] Mandarin and Malay language support
- [ ] Mobile app (iOS + Android)

---

## 📰 Press & mentions

*Building in public. Mentions and write-ups will be linked here as they come.*

- **2026-05-21** — [Launch post on LinkedIn](https://www.linkedin.com/posts/shukhratmirzaev-cs_singapore-cybersecurity-phishing-share-7462951393507643392-apMN)

---

## ⚠️ Disclaimer

LinkSafe is **not affiliated** with the Singapore Police Force, ScamShield, or any government agency.

For official scam reporting in Singapore, please visit [scamshield.gov.sg](https://www.scamshield.gov.sg) or call the **Anti-Scam Helpline at 1799**.

LinkSafe is a **best-effort detection tool** — it can reduce risk, but no system catches 100% of phishing attempts. Always exercise judgment when clicking links from unknown sources.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this code. If you build something cool with it, [let me know](https://www.linkedin.com/in/shukhratmirzaev-cs) — I'd love to hear about it.

---

## 👤 Author

**Shukhrat Mirzayev** — Building LinkSafe from Singapore.

- 🌐 [LinkedIn](https://www.linkedin.com/in/shukhratmirzaev-cs)
- 💻 [GitHub](https://github.com/shakhsg)
- 📧 [hello@linksafe.sg](mailto:hello@linksafe.sg)

---

<p align="center">
  <strong>🛡️ Built in Singapore, for Singapore.</strong><br>
  <em>Stop phishing in 2 seconds.</em>
</p>