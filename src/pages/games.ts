import type { GameStatus } from "@/types/basketball";
import { games, getGameById } from "@/data/games";
import { getTeamById } from "@/data/teams";
import { getPlayerById } from "@/data/players";
import { renderGameCard } from "@/components/gameCard";
import { filterGamesByStatus, searchGames } from "@/utils/filters";
import { formatDate, escapeHtml } from "@/utils/formatters";

const FILTERS: { label: string; value: GameStatus | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Live", value: "LIVE" },
  { label: "Upcoming", value: "UPCOMING" },
  { label: "Completed", value: "FINAL" }
];

function renderList(): string {
  const filterBtns = FILTERS.map(
    (f, i) => `<button class="hz-filter-btn ${i === 0 ? "active" : ""}" data-filter="${f.value}">${f.label}</button>`
  ).join("");

  return `
    <div class="hz-page-header">
      <div class="container">
        <div class="hz-eyebrow">Scoreboard</div>
        <h1 class="h2 mb-2">Games</h1>
        <p class="hz-text-muted mb-0">Follow every matchup — live, upcoming, and completed.</p>
      </div>
    </div>
    <div class="container hz-section">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div class="d-flex flex-wrap gap-2" id="hzGameFilters">${filterBtns}</div>
        <div class="input-group" style="max-width: 320px;">
          <span class="input-group-text hz-input"><i class="bi bi-search"></i></span>
          <input type="search" class="form-control hz-input" id="hzGameSearch" placeholder="Search team or venue...">
        </div>
      </div>
      <div class="row g-3" id="hzGamesGrid"></div>
    </div>
  `;
}

function teamName(id: string): string {
  const t = getTeamById(id);
  return t ? `${t.city} ${t.name}` : id;
}

function renderGrid(status: GameStatus | "ALL", query: string): void {
  const grid = document.getElementById("hzGamesGrid");
  if (!grid) return;

  let list = filterGamesByStatus(games, status);
  list = searchGames(list, query, teamName);

  if (!list.length) {
    grid.innerHTML = `<div class="col-12"><div class="hz-empty-state"><i class="bi bi-search"></i>No games found. Try a different filter or search.</div></div>`;
    return;
  }

  grid.innerHTML = list.map((g) => `<div class="col-md-6">${renderGameCard(g)}</div>`).join("");
}

function initList(): void {
  let currentFilter: GameStatus | "ALL" = "ALL";
  let currentQuery = "";

  renderGrid(currentFilter, currentQuery);

  document.getElementById("hzGameFilters")?.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".hz-filter-btn");
    if (!btn) return;
    document.querySelectorAll("#hzGameFilters .hz-filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter as GameStatus | "ALL";
    renderGrid(currentFilter, currentQuery);
  });

  document.getElementById("hzGameSearch")?.addEventListener("input", (e) => {
    currentQuery = (e.target as HTMLInputElement).value;
    renderGrid(currentFilter, currentQuery);
  });
}

function renderDetail(id: string): string {
  const game = getGameById(id);
  if (!game) {
    return `<div class="container hz-section"><div class="hz-empty-state"><i class="bi bi-exclamation-triangle"></i>Game not found.<div class="mt-3"><a href="#/games" data-link="games" class="btn btn-hz-outline">Back to Games</a></div></div></div>`;
  }

  const home = getTeamById(game.homeTeamId);
  const away = getTeamById(game.awayTeamId);
  if (!home || !away) return "";

  const quarterHeader = game.quarterScores.map((q) => `<th class="text-center">${q.quarter}</th>`).join("");
  const homeQuarters = game.quarterScores.map((q) => `<td class="text-center hz-mono">${q.home}</td>`).join("");
  const awayQuarters = game.quarterScores.map((q) => `<td class="text-center hz-mono">${q.away}</td>`).join("");

  const performers = game.topPerformers
    .map((tp) => {
      const p = getPlayerById(tp.playerId);
      if (!p) return "";
      const team = getTeamById(p.teamId);
      return `
        <div class="col-md-6">
          <div class="hz-card p-3 d-flex align-items-center gap-3">
            <span class="hz-team-badge" style="background:${team?.primaryColor ?? "#333"}">${team?.abbreviation ?? "--"}</span>
            <div class="flex-grow-1">
              <a href="#/players/${p.id}" data-link="players/${p.id}" class="fw-semibold text-decoration-none" style="color: var(--hz-text)">${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)}</a>
              <div class="hz-text-muted small">${tp.points} PTS · ${tp.rebounds} REB · ${tp.assists} AST</div>
            </div>
          </div>
        </div>`;
    })
    .join("");

  const events = game.events.length
    ? game.events
        .map(
          (ev) => `
        <div class="d-flex gap-3 py-2 hz-divider-dashed">
          <div class="hz-mono hz-text-muted" style="width:90px;flex-shrink:0;">${ev.quarter} · ${ev.time}</div>
          <div><span class="badge-final me-2">${ev.teamAbbr}</span>${escapeHtml(ev.description)}</div>
        </div>`
        )
        .join("")
    : `<div class="hz-empty-state py-4"><i class="bi bi-clock-history"></i>No play-by-play yet.</div>`;

  const statusBadge =
    game.status === "LIVE"
      ? `<span class="badge-live fs-6">${escapeHtml(game.currentQuarter)} · ${escapeHtml(game.clock)}</span>`
      : game.status === "UPCOMING"
      ? `<span class="badge-upcoming fs-6">UPCOMING</span>`
      : `<span class="badge-final fs-6">FINAL</span>`;

  return `
    <div class="hz-page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item"><a href="#/games" data-link="games">Games</a></li>
            <li class="breadcrumb-item active hz-text-muted">${escapeHtml(away.abbreviation)} @ ${escapeHtml(home.abbreviation)}</li>
          </ol>
        </nav>
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <div class="hz-eyebrow">${formatDate(game.date)} · ${escapeHtml(game.venue)}</div>
            <h1 class="h3 mb-0">${escapeHtml(away.city)} ${escapeHtml(away.name)} at ${escapeHtml(home.city)} ${escapeHtml(home.name)}</h1>
          </div>
          ${statusBadge}
        </div>
      </div>
    </div>

    <div class="container hz-section">
      <div class="hz-card p-4 mb-4">
        <div class="row align-items-center text-center g-4">
          <div class="col-5">
            <span class="hz-team-badge hz-team-badge-lg mb-2" style="background:${away.primaryColor}">${away.abbreviation}</span>
            <h2 class="h5 mb-0">${escapeHtml(away.city)} ${escapeHtml(away.name)}</h2>
            <div class="hz-mono display-5 fw-bold mt-2 ${game.status === "LIVE" ? "text-danger" : ""}">${game.awayScore}</div>
          </div>
          <div class="col-2">
            <div class="hz-text-muted hz-mono">FINAL</div>
            <i class="bi bi-dribbble fs-2" style="color: var(--hz-accent);"></i>
          </div>
          <div class="col-5">
            <span class="hz-team-badge hz-team-badge-lg mb-2" style="background:${home.primaryColor}">${home.abbreviation}</span>
            <h2 class="h5 mb-0">${escapeHtml(home.city)} ${escapeHtml(home.name)}</h2>
            <div class="hz-mono display-5 fw-bold mt-2 ${game.status === "LIVE" ? "text-danger" : ""}">${game.homeScore}</div>
          </div>
        </div>

        ${
          game.quarterScores.length
            ? `
        <div class="table-responsive mt-4">
          <table class="table hz-table mb-0">
            <thead><tr><th>Team</th>${quarterHeader}<th class="text-center">Total</th></tr></thead>
            <tbody>
              <tr><td>${away.abbreviation}</td>${awayQuarters}<td class="text-center hz-mono fw-bold">${game.awayScore}</td></tr>
              <tr><td>${home.abbreviation}</td>${homeQuarters}<td class="text-center hz-mono fw-bold">${game.homeScore}</td></tr>
            </tbody>
          </table>
        </div>`
            : `<div class="hz-empty-state py-4 mt-3"><i class="bi bi-hourglass-split"></i>Tip-off hasn't happened yet — check back soon.</div>`
        }
      </div>

      <div class="row g-4">
        <div class="col-lg-6">
          <h2 class="h5 mb-3">Top Performers</h2>
          <div class="row g-3">${performers || `<div class="col-12 hz-empty-state py-3"><i class="bi bi-person-x"></i>No stats yet.</div>`}</div>

          <h2 class="h5 mb-3 mt-4">Team Comparison</h2>
          <div class="hz-card p-3">
            ${renderTeamStatCompare(away, home)}
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="h5 mb-3">Recent Events</h2>
          <div class="hz-card p-3">${events}</div>
        </div>
      </div>
    </div>
  `;
}

function renderTeamStatCompare(away: NonNullable<ReturnType<typeof getTeamById>>, home: NonNullable<ReturnType<typeof getTeamById>>): string {
  const rows: { label: string; a: number; h: number; suffix?: string }[] = [
    { label: "PPG", a: away.stats.pointsFor, h: home.stats.pointsFor },
    { label: "FG%", a: away.stats.fieldGoalPct, h: home.stats.fieldGoalPct, suffix: "%" },
    { label: "3PT%", a: away.stats.threePointPct, h: home.stats.threePointPct, suffix: "%" },
    { label: "RPG", a: away.stats.reboundsPerGame, h: home.stats.reboundsPerGame },
    { label: "APG", a: away.stats.assistsPerGame, h: home.stats.assistsPerGame }
  ];
  return rows
    .map(
      (r) => `
    <div class="d-flex align-items-center justify-content-between py-2 hz-divider-dashed">
      <span class="hz-mono">${r.a}${r.suffix ?? ""}</span>
      <span class="hz-text-muted small text-uppercase">${r.label}</span>
      <span class="hz-mono">${r.h}${r.suffix ?? ""}</span>
    </div>`
    )
    .join("");
}

export function render(param?: string): string {
  if (param) return renderDetail(param);
  return renderList();
}

export function init(param?: string): void {
  if (!param) initList();
}
