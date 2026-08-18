import { players } from "@/data/players";
import { getTeamById } from "@/data/teams";
import { escapeHtml } from "@/utils/formatters";

function topFive(key: (p: (typeof players)[number]) => number): (typeof players)[number][] {
  return [...players].sort((a, b) => key(b) - key(a)).slice(0, 5);
}

function renderLeaderboard(title: string, icon: string, list: (typeof players)[number][], key: (p: (typeof players)[number]) => number, suffix = ""): string {
  const max = Math.max(...list.map(key));
  const rows = list
    .map((p) => {
      const team = getTeamById(p.teamId);
      const value = key(p);
      const pct = max > 0 ? (value / max) * 100 : 0;
      return `
        <div class="hz-progress-row">
          <span class="label text-truncate">${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)} <span class="hz-text-muted">(${team?.abbreviation ?? "--"})</span></span>
          <div class="progress"><div class="progress-bar" role="progressbar" style="width:${pct}%"></div></div>
          <span class="value hz-mono">${value.toFixed(1)}${suffix}</span>
        </div>`;
    })
    .join("");

  return `
    <div class="hz-card p-3 h-100">
      <h3 class="h6 mb-3"><i class="bi ${icon} me-2" style="color: var(--hz-accent);"></i>${title}</h3>
      ${rows}
    </div>`;
}

export function render(): string {
  const leagueTotalPoints = players.reduce((sum, p) => sum + p.seasonStats.pointsPerGame, 0);
  const leagueAvgFg = players.reduce((sum, p) => sum + p.seasonStats.fieldGoalPct, 0) / players.length;
  const leagueTotalRebounds = players.reduce((sum, p) => sum + p.seasonStats.reboundsPerGame, 0);
  const leagueAvgAssistTurnover = (
    players.reduce((sum, p) => sum + p.seasonStats.assistsPerGame, 0) / players.length
  ).toFixed(1);

  return `
    <div class="hz-page-header">
      <div class="container">
        <div class="hz-eyebrow">League Dashboard</div>
        <h1 class="h2 mb-2">Statistics</h1>
        <p class="hz-text-muted mb-0">Scoring, rebounding, playmaking, and defensive leaders across the league.</p>
      </div>
    </div>
    <div class="container hz-section">
      <div class="row g-3 mb-4">
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center"><div class="hz-stat-value">${leagueTotalPoints.toFixed(0)}</div><div class="hz-stat-label">Combined PPG (roster)</div></div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center"><div class="hz-stat-value">${leagueAvgFg.toFixed(1)}%</div><div class="hz-stat-label">League Avg FG%</div></div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center"><div class="hz-stat-value">${leagueTotalRebounds.toFixed(0)}</div><div class="hz-stat-label">Combined RPG (roster)</div></div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center"><div class="hz-stat-value">${leagueAvgAssistTurnover}</div><div class="hz-stat-label">League Avg APG</div></div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-6">
          ${renderLeaderboard("Scoring — Points Per Game", "bi-bullseye", topFive((p) => p.seasonStats.pointsPerGame), (p) => p.seasonStats.pointsPerGame)}
        </div>
        <div class="col-lg-6">
          ${renderLeaderboard("Scoring — 3-Point %", "bi-badge-3d", topFive((p) => p.seasonStats.threePointPct), (p) => p.seasonStats.threePointPct, "%")}
        </div>
        <div class="col-lg-6">
          ${renderLeaderboard("Rebounding — Total RPG", "bi-arrow-repeat", topFive((p) => p.seasonStats.reboundsPerGame), (p) => p.seasonStats.reboundsPerGame)}
        </div>
        <div class="col-lg-6">
          ${renderLeaderboard("Playmaking — Assists Per Game", "bi-signpost-split", topFive((p) => p.seasonStats.assistsPerGame), (p) => p.seasonStats.assistsPerGame)}
        </div>
        <div class="col-lg-6">
          ${renderLeaderboard("Defense — Steals Per Game", "bi-shield-check", topFive((p) => p.seasonStats.stealsPerGame), (p) => p.seasonStats.stealsPerGame)}
        </div>
        <div class="col-lg-6">
          ${renderLeaderboard("Defense — Blocks Per Game", "bi-hand-index-thumb", topFive((p) => p.seasonStats.blocksPerGame), (p) => p.seasonStats.blocksPerGame)}
        </div>
      </div>
    </div>
  `;
}

export function init(): void {
  // Static dashboard — no interactive controls beyond global nav/search.
}
