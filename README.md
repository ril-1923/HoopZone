# 🏀 HoopZone

A modern, responsive basketball information website — live scores, teams, players, standings, statistics, and news. Built with **Vite + TypeScript + Bootstrap 5**, no framework, no backend. All data is local/mock TypeScript data.

## Tech Stack

- HTML5, CSS3, Bootstrap 5, Bootstrap Icons
- TypeScript (strict mode, no `any`)
- Vite (dev server + bundler)
- No React / Angular / Vue
- Local/mock JSON-like TS data — no backend required

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

This runs `tsc` (type-checking) followed by `vite build`, producing an optimized bundle in `dist/`.

```bash
npm run preview
```

Serves the production build locally so you can sanity-check it before deploying.

## Project Structure

```
src/
├── main.ts               # App bootstrap, hash router, global nav/search/theme
├── types/
│   └── basketball.ts      # Team, Player, Game, Standing, NewsArticle, etc.
├── data/
│   ├── teams.ts            # 12 mock teams
│   ├── players.ts          # 24 mock players
│   ├── games.ts             # 18 mock games (live / upcoming / final)
│   ├── news.ts               # 12 mock articles
│   └── standings.ts           # Standings derived from team records
├── components/
│   ├── navbar.ts            # Responsive navbar + search offcanvas
│   ├── gameCard.ts           # Scoreboard-style game card
│   ├── teamCard.ts            # Team summary card
│   ├── playerCard.ts           # Player summary card
│   └── newsCard.ts              # News article card
├── pages/
│   ├── home.ts               # Hero, today's games, leaders, featured teams/players/news
│   ├── games.ts                # Games list + filters/search + game detail/scoreboard
│   ├── teams.ts                 # Teams directory + filters/sort + team detail/roster
│   ├── players.ts                 # Player directory + filters/sort + player profile
│   ├── standings.ts                # Conference standings table
│   ├── statistics.ts                # League statistics dashboard
│   └── news.ts                       # News list + filters/search + article detail
├── utils/
│   ├── filters.ts             # Filtering/sorting helpers for games, teams, players, news
│   ├── search.ts               # Global cross-entity search
│   └── formatters.ts            # Date, percent, height/weight, and badge formatting
└── styles/
    └── main.css                  # Design tokens + component styling (arena/scoreboard theme)

public/
└── images/                        # Static assets (empty — no external images used)

index.html
package.json
tsconfig.json
vite.config.ts
```

## How Routing Works

HoopZone uses a lightweight **hash router** written in `main.ts` — no router library required:

- `#/` → Home
- `#/games`, `#/games/:id` → Games list & game detail (scoreboard, quarter-by-quarter, play-by-play)
- `#/teams`, `#/teams/:id` → Teams directory & team detail (roster, stats, recent/upcoming games)
- `#/players`, `#/players/:id` → Player directory & player profile (career vs. season stats)
- `#/standings` → Conference standings table
- `#/statistics` → League statistics dashboard
- `#/news`, `#/news/:id` → News list & article detail

Every page module exports `render(param?: string): string` (returns HTML) and `init(param?: string): void` (wires up event listeners for that page's filters/search/sort). `main.ts` swaps `#hzPage`'s content on every `hashchange` and re-runs `init`.

## Key TypeScript Functionality

- **Typed domain model** (`src/types/basketball.ts`): `Team`, `Player`, `Game`, `GameEvent`, `Standing`, `NewsArticle`, `PlayerStats`, `TeamStats`, plus union types like `GameStatus`, `Position`, `Conference`.
- **Search** (`utils/search.ts`): scans teams, players, games, and news and returns typed `SearchResult[]`, rendered live in the navbar's search offcanvas.
- **Filtering & sorting** (`utils/filters.ts`): typed, composable functions (`filterGamesByStatus`, `sortPlayers`, `searchTeams`, etc.) used by every list page.
- **Dynamic rendering**: components are pure functions that take typed data and return HTML strings; pages compose them and inject into the DOM, then attach typed event listeners (`e.target as HTMLInputElement`, etc.) — no `any` used except where DOM APIs require narrow casts.
- **Standings derivation**: `data/standings.ts` computes ranks, win %, and point differential from team records at module load time.

## Bootstrap 5 Components Used

Navbar, Cards, Buttons, Badges, Tables, Offcanvas (search), Dropdown/Collapse (mobile nav), Progress bars, Breadcrumbs, Nav pills (standings tabs), Input groups, Forms/selects.

## Design Notes

Dark "arena" theme with a hardwood-amber accent and scoreboard-red `LIVE` badges. Headings and scores use a condensed display face (Oswald); body copy uses Inter; stat numbers and scoreboard digits use JetBrains Mono for an LED-scoreboard feel. A light theme is available via the navbar toggle (persisted in `localStorage`).

## Deploying

### GitHub Pages

1. Set `base` in `vite.config.ts` to your repo name, e.g. `base: "/hoopzone/"`.
2. Build: `npm run build`.
3. Push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package / a GitHub Actions workflow that runs `npm run build` and publishes `dist/`).
4. Enable GitHub Pages on that branch in your repo settings.

### Vercel

1. Import the repo in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel handles the rest automatically.

## Notes

This is a demo/portfolio project. All teams, players, games, and stats are illustrative mock data (players are fictional). No real images are used — team and player visuals are CSS-generated badges/initials in team colors.
