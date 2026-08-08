# Star Trek Warp Speed Encyclopedia

A static, vanilla HTML/CSS/JS information hub exploring Warp Speeds 1–10 from the Star Trek universe.

---

# 🖖 About

This project presents a clean, interactive reference for all canonical warp speeds in Star Trek. Designed with a deep-space aesthetic, left-side navigation, and dynamic content rendering, it's perfect for Trekkies, developers learning vanilla web tech, or anyone curious about faster-than-light travel.

Features:

· 🚀 Warp 1–10 – each with speed in multiples of c, descriptions, and notable episode references
· 🌌 Immersive Theme – Starfleet-inspired colors, animated starfield hero banner
· 📱 Responsive – works on desktop, tablet, and mobile
· ♿ Accessible – semantic HTML, ARIA labels, keyboard navigation
· ⚡ No Frameworks – pure vanilla JavaScript, CSS, and HTML

---

📁 Project Structure

```
star-trek-warp/
│
├── index.html          # Main page
├── css/
│   └── styles.css      # All styling (Star Trek theme)
├── js/
│   └── app.js          # Data + dynamic rendering logic
├── assets/
│   ├── images/
│   │   └── hero-banner.jpg   # (replace with your own)
│   └── fonts/          # (optional custom fonts)
├── PLAN.md             # Planning document
├── PROGRESS.md         # Development tracker
└── README.md           # You are here
```

---

🚀 Getting Started

Prerequisites

· Any modern web browser (Chrome, Firefox, Safari, Edge)
· (Optional) A local development server like Live Server for VS Code

Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/star-trek-warp.git
   ```
   Or download the ZIP and extract it.
2. Open index.html directly in your browser – no build step required!
3. Replace the hero image (optional):
   · Add your own image at assets/images/hero-banner.jpg
   · Or keep the CSS-generated starfield background

---

🧭 Usage

· Navigate – Click any Warp speed (1–10) in the left sidebar
· View details – Speed, description, and episodes appear in the main panel
· Deep links – Share specific warp speeds via URL hash (e.g., index.html#warp-7)
· Hero banner – Click it to return to a grid overview (if implemented)

---

🛠️ Customization

Add or edit warp data

Open js/app.js and modify the warpData array:

```javascript
const warpData = [
  {
    number: 1,
    speedInC: '1c',
    description: 'Your custom description...',
    episodes: ['Episode 1', 'Episode 2'],
    tosReference: true,
    tngReference: false
  },
  // ...
];
```

Change the color scheme

Edit CSS variables in css/styles.css:

```css
:root {
  --space-black: #0b0e14;
  --gold: #d4a843;
  --red-alert: #b22234;
  --star-blue: #4a8db7;
  --panel-bg: rgba(11, 14, 20, 0.85);
}
```

---

🎨 Design Notes

· Typography – Uses system fonts for speed; optional Google Fonts (e.g., Orbitron for headings)
· Starfield – Pure CSS animated dots – no image required
· Glassmorphism – Semi-transparent panels with backdrop blur for a "viewscreen" effect

---

📚 Resources

· Star Trek Warp Speed (Memory Alpha)
· TNG Technical Manual
· CSS Starfield Tutorial

---

🤝 Contributing

Contributions are welcome! Please:

1. Fork the repo
2. Create a feature branch (git checkout -b feature/amazing-addition)
3. Commit your changes (git commit -m 'Add some amazing thing')
4. Push (git push origin feature/amazing-addition)
5. Open a Pull Request

---

📄 License

MIT License – feel free to use, modify, and share.

---

🖖 Live Long and Prosper

Made with 🖖 and JavaScript

"To boldly go where no one has gone before… at Warp 10!"
