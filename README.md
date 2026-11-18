# Kotana Sashank – Portfolio Website

A responsive, dark-themed (black + neon pink) personal portfolio built with **React** and **Vite**.

**Sections:** Home · About · Education · Skills · Projects · Certifications · Achievements · Contact
**Extras:** typing animation, scroll-reveal animations, glowing buttons, project filter, portfolio assistant chat, validated contact form, mobile menu.

---

## 1. What you need

- [Node.js](https://nodejs.org) **version 18 or newer** (download the LTS version)
- [VS Code](https://code.visualstudio.com) (or any editor)

Check Node is installed: open a terminal and run `node -v`.

## 2. Run it locally (VS Code)

1. Unzip the project and open the folder in VS Code (**File → Open Folder**).
2. Open the terminal in VS Code (**Terminal → New Terminal**).
3. Install the packages (only needed once):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the address shown in the terminal (usually http://localhost:5173). The page refreshes automatically when you save a file.

Other commands:

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the site locally while you edit         |
| `npm run build`   | Create the production version in `dist/`     |
| `npm run preview` | Preview the production build locally          |

## 3. How to edit your content

**Almost everything is in one file: `src/data/portfolio.js`.**

| I want to…                         | Edit this                                               |
| ---------------------------------- | ------------------------------------------------------- |
| Change my name, about text, links  | `profile` in `src/data/portfolio.js`                    |
| Change typing-animation words      | `profile.typingRoles`                                   |
| Add a project description / tags   | `projects` in `src/data/portfolio.js`                   |
| Add a project's GitHub link        | set `github: "https://github.com/..."` on that project  |
| Add or remove skills               | `skillGroups` (icons are listed in `Skills.jsx`)        |
| Add certificate files              | see below                                               |
| Change colours                     | the `:root` block at the top of `src/index.css`         |

### Add your resume (shows a "Resume" button in the hero)
1. Copy your PDF into the `public/` folder and name it `resume.pdf`.
2. In `src/data/portfolio.js` change `resume: null` to `resume: "/resume.pdf"`.

### Add certificate images or PDFs (shows a "View" button on the card)
1. Create `public/certificates/` and copy your files in (for example `aws.pdf`).
2. In `src/data/portfolio.js` set `file: "/certificates/aws.pdf"` on that certificate.

### Project GitHub links
Until you add a repository link, the project button opens your GitHub repositories page so it is never broken.

### Contact form
The site has no server. When a visitor fills in the form correctly, their email app opens with the message ready to send to your email address. To receive messages directly in the page later, you can connect a service such as Formspree or EmailJS.

## 4. Folder structure

```
sashank-portfolio/
├── index.html            Page shell, fonts, title
├── package.json          Dependencies and scripts
├── vite.config.js        Vite settings
├── public/               Files served as-is (favicon, resume, certificates)
└── src/
    ├── main.jsx          App entry point
    ├── App.jsx           Puts all sections together
    ├── index.css         All styles and colours
    ├── data/portfolio.js ★ Your content
    ├── utils/
    │   ├── assistant.js  Answers for the chat assistant (uses only your data)
    │   └── hooks.js      Typing effect + active-menu helper
    └── components/       One file per section (Hero, About, Skills, ...)
```

## 5. Deploy to Vercel (free)

**Option A – with GitHub (recommended)**
1. Create a new repository on GitHub and upload this project (do not upload `node_modules`; `.gitignore` already excludes it).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, then **Import** your repository.
4. Vercel detects Vite automatically (Build command `npm run build`, Output directory `dist`). Click **Deploy**.
5. After about a minute you get a live link like `https://your-project.vercel.app`. Every time you push changes to GitHub, the site updates automatically.

**Option B – with the Vercel CLI**
```bash
npm install -g vercel
vercel          # follow the prompts
vercel --prod   # publish to production
```

## 6. Troubleshooting

- **`npm` is not recognized** – install Node.js, then restart VS Code.
- **Port already in use** – Vite will pick another port; use the address it prints.
- **Blank page after deploy** – make sure the build command is `npm run build` and the output directory is `dist`.
