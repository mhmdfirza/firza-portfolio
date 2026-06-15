# Muhammad Firzatullah AR - Full Stack Developer Portfolio (Development Branch)

This branch is for development purposes only.

## Development Branch
- Branch "main/dev/..." sudah tidak digunakan lagi
- Branch "main/development/..." adalah branch utama yang merupakan hasil percabangan dari banyak pengembangan informasi atau fitur terbaru
- Menambahkan script react refresh menyesuaikan dengan versi vite terbaru.
- 

## Features

- ✨ **Modern Design** — Ultra-minimal dark theme with soft blue accent
- 📱 **Fully Responsive** — Mobile-first approach, optimized for all devices
- ⚡ **High Performance** — Built with Vite for instant development and optimized builds
- 🎨 **Tailwind CSS** — Utility-first styling, no custom CSS
- 🔄 **Smooth Animations** — Scroll reveal and parallax effects using native APIs
- ♿ **Accessible** — Semantic HTML and keyboard navigation
- 🎯 **No Dependencies** — No animation libraries, pure React + CSS

## Tech Stack

- **React** 18.2 — UI framework
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **IntersectionObserver API** — Scroll reveal animations
- **Inter Font** — Google Fonts

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Optimized build files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation
│   ├── Hero.jsx            # Hero section with parallax
│   ├── About.jsx           # About section with terminal block
│   ├── Projects.jsx        # Projects grid with hover effects
│   ├── Skills.jsx          # Tech stack badges
│   ├── Experience.jsx      # Timeline layout
│   ├── Contact.jsx         # Contact section
│   └── Footer.jsx          # Footer
├── hooks/
│   └── useScrollReveal.js  # Custom scroll reveal hook
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Tailwind imports & custom styles
```

## Customization

### Update Your Information

Edit each component to add your personal information:

- **Navbar.jsx** — Update your name/logo
- **Hero.jsx** — Change "Your Name" and role
- **About.jsx** — Update bio and terminal content
- **Projects.jsx** — Add your projects
- **Skills.jsx** — Update tech stack
- **Experience.jsx** — Add your experience
- **Contact.jsx** — Add your contact info
- **Footer.jsx** — Update copyright name

### Color Scheme

Colors are defined in `tailwind.config.js` and used throughout:

- **Background** — `#080808` (pure black)
- **Text** — `#f0f0f0`
- **Muted** — `#555555` to `#666666`
- **Accent** — `#6b9fff` (soft blue)

To modify, update the color values in components and `tailwind.config.js`.

### Animations

Scroll reveal animations are handled by the `useScrollReveal` hook using IntersectionObserver. Adjust threshold and timing in `src/hooks/useScrollReveal.js`.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Built with Vite for ~30ms cold start
- Tailwind CSS is tree-shaken to ~15KB gzipped
- No JavaScript animation libraries
- Uses native CSS transitions and IntersectionObserver API

## Deployment

Deploy the `dist/` directory to any static hosting:

- **Vercel** — Auto-deploys from git
- **Netlify** — Connect your repo
- **GitHub Pages** — Simple and free
- **AWS S3 + CloudFront** — Enterprise option

## License

MIT — Feel free to use this as a template for your own portfolio.

## Author

Muhammad Firzatullah AR — [GitHub](https://github.com/mhmdfirza) | [LinkedIn](https://linkedin.com/in/muhammad-firzatullah-29a240356/)
