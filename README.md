# Kotana Sashank — Portfolio

A dark, space-themed personal portfolio built with **React + Vite**. It features a twinkling starfield with shooting stars, purple/blue glowing nebulae, a KS initials avatar, scroll-reveal animations, cursor-glow cards, a working navigation bar, and a contact form that opens your email app.

## Sections

Hero · About · Skills · Education timeline · Projects · Experience (Fresher) · Certificates & Achievements · Contact · Footer

## Tech stack

- React 19 and Vite 7
- Plain CSS (no CSS framework) and small custom hooks for animations
- No extra animation library is required: all effects use CSS, `IntersectionObserver` and `<canvas>`

## Requirements

- [Node.js](https://nodejs.org/) **22.12 or newer** (or 20.19+), which includes npm

## Install and run

```bash
# 1. Open a terminal in this folder
cd sashank-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

### Production build

```bash
npm run build     # creates the dist/ folder
npm run preview   # serves the production build locally
```

## Customising your content

All text lives in **`src/data.js`**:

- `profile`: name, email, GitHub, LinkedIn, about text
- `skillGroups`, `education`, `projects`, `experience`, `certificates`

**Project links:** every project button currently points to your GitHub profile, because individual repository URLs were not provided. When a repository is ready, set it in `src/data.js`:

```js
{
  title: "ScamShield AI",
  repo: "https://github.com/Sashankkotana14/your-repo-name",
  ...
}
```

**Project descriptions and tags** were written from the project names, so please review them and edit them to match what you actually built.

## Project structure

```
sashank-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js              <- edit your content here
    ├── styles.css
    └── components/
        ├── Starfield.jsx    (canvas background)
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Education.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Certificates.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── BackToTop.jsx
        ├── GlowCard.jsx
        ├── Reveal.jsx
        ├── SectionHeading.jsx
        └── Icons.jsx
```

## Upload to GitHub

1. Create a new **empty** repository on GitHub (for example `portfolio`), without a README.
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/Sashankkotana14/portfolio.git
git push -u origin main
```

Replace `portfolio` with your repository name. The `.gitignore` already excludes `node_modules` and `dist`.

## Deploy to Vercel

**Option A: from GitHub (recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import your portfolio repository.
3. Vercel detects Vite automatically. Confirm these settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Every `git push` to `main` will redeploy automatically.

**Option B: Vercel CLI**

```bash
npm install -g vercel
vercel          # follow the prompts
vercel --prod   # publish to production
```

## Contact form

The form needs no backend. On submit it opens the visitor's email app with a message addressed to your email, pre-filled with their name, email and text.

## Troubleshooting

- **`npm install` fails:** check your Node version with `node -v` and upgrade if it is below 20.19.
- **Blank page after deploy:** make sure Vercel's output directory is `dist`.
- **Fonts look different offline:** the Inter and Space Grotesk fonts load from Google Fonts and fall back to system fonts when offline.
