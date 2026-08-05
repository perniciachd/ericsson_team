# SIP Tracker — Capstone Prototype

A single-file, interactive prototype of the **SIP (Systematic Investment Plan) Tracker**
built for the *React.js + TypeScript Training*. It's the target UX that participants
rebuild as a real React + TypeScript app.

**No build step, no dependencies** — one self-contained `index.html`.

## Run it

Open `index.html` in any browser. That's it.

```bash
open index.html          # macOS
# or just double-click the file
```

For a local server (optional):

```bash
npx serve .
# or: python3 -m http.server
```

## What it does

| Screen | What happens |
|---|---|
| **Login** | Demo auth — any username & password works |
| **Explore funds** | Marketplace of 12 mutual funds; search + category filter |
| **Start a SIP** | Invest form with a fund dropdown, amount validation |
| **My portfolio** | Your investments, invested amount, value today, total gain |
| **Holding detail** | One investment; edit or redeem |

State is saved in **`localStorage`** (survives refresh). Light/dark theme toggle included.

> Demo only — the login accepts anything and there is no backend. Fine for training and
> preview; **not** production auth.

## Deploy (free, ~3 minutes)

Because it's static HTML, any static host works:

- **GitHub Pages** — push this repo, then Settings → Pages → deploy from `main` / root.
  Live at `https://<user>.github.io/<repo>/`.
- **Netlify / Vercel** — drag the folder in, or connect the repo. No build command needed.

## The capstone (what participants build)

This prototype maps 1:1 to the course topics. Participants rebuild it in React + TS:

1. Typed `Sip` / `Fund` models · fund list (Lists & Keys)
2. Routing + protected routes (React Router)
3. Filter + derived totals (useState, "you might not need an effect")
4. Invest form + validation (Events, Controlled Components, RHF + Zod)
5. Persist with `useLocalStorage` (useEffect, Custom Hooks)
6. *Stretch:* live NAV via fetch (Data Fetching)

## Tech

Plain HTML + CSS + vanilla JS. No framework, no bundler — deliberately, so the prototype
stays a readable reference and deploys anywhere.
