import type { Position } from "@/types/basketball";
import { players, getPlayerById } from "@/data/players";
import { teams, getTeamById } from "@/data/teams";
import { renderPlayerCard } from "@/components/playerCard";
import { filterPlayersByPosition, filterPlayersByTeam, searchPlayers, sortPlayers, type PlayerSortKey } from "@/utils/filters";
import { escapeHtml, heightToFeetInches, kgToLbs, formatDate } from "@/utils/formatters";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

function renderList(): string {
  const teamOptions = teams
    .map((t) => `<option value="${t.id}">${escapeHtml(t.city)} ${escapeHtml(t.name)}</option>`)
    .join("");
  const positionOptions = POSITIONS.map((p) => `<option value="${p}">${p}</option>`).join("");

  return `
    <div class="hz-page-header">
      <div class="container">
        <div class="hz-eyebrow">Player Directory</div>
        <h1 class="h2 mb-2">Players</h1>
        <p class="hz-text-muted mb-0">Search the league roster by name, team, or position.</p>
      </div>
    </div>
    <div class="container hz-section">
      <div class="row g-3 mb-4 align-items-center">
        <div class="col-md-3">
          <div class="input-group">
            <span class="input-group-text hz-input"><i class="bi bi-search"></i></span>
            <input type="search" class="form-control hz-input" id="hzPlayerSearch" placeholder="Search players...">
          </div>
        </div>
        <div class="col-md-3">
          <select class="form-select hz-input" id="hzPlayerPosition"><option value="ALL">All Positions</option>${positionOptions}</select>
        </div>
        <div class="col-md-3">
          <select class="form-select hz-input" id="hzPlayerTeam"><option value="ALL">All Teams</option>${teamOptions}</select>
        </div>
        <div class="col-md-3">
          <select class="form-select hz-input" id="hzPlayerSort">
            <option value="points">Sort by Points</option>
            <option value="rebounds">Sort by Rebounds</option>
            <option value="assists">Sort by Assists</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>
      <div class="row g-3" id="hzPlayersGrid"></div>
    </div>
  `;
}

function renderGrid(query: string, position: Position | "ALL", teamId: string | "ALL", sortKey: PlayerSortKey): void {
  const grid = document.getElementById("hzPlayersGrid");
  if (!grid) return;

  let list = searchPlayers(players, query);
  list = filterPlayersByPosition(list, position);
  list = filterPlayersByTeam(list, teamId);
  list = sortPlayers(list, sortKey);

  if (!list.length) {
    grid.innerHTML = `<div class="col-12"><div class="hz-empty-state"><i class="bi bi-search"></i>No players found. Try adjusting your filters.</div></div>`;
    return;
  }

  grid.innerHTML = list.map((p) => `<div class="col-sm-6 col-lg-3">${renderPlayerCard(p)}</div>`).join("");
}

function initList(): void {
  let query = "";
  let position: Position | "ALL" = "ALL";
  let teamId: string | "ALL" = "ALL";
  let sortKey: PlayerSortKey = "points";

  renderGrid(query, position, teamId, sortKey);

  document.getElementById("hzPlayerSearch")?.addEventListener("input", (e) => {
    query = (e.target as HTMLInputElement).value;
    renderGrid(query, position, teamId, sortKey);
  });
  document.getElementById("hzPlayerPosition")?.addEventListener("change", (e) => {
    position = (e.target as HTMLSelectElement).value as Position | "ALL";
    renderGrid(query, position, teamId, sortKey);
  });
  document.getElementById("hzPlayerTeam")?.addEventListener("change", (e) => {
    teamId = (e.target as HTMLSelectElement).value;
    renderGrid(query, position, teamId, sortKey);
  });
  document.getElementById("hzPlayerSort")?.addEventListener("change", (e) => {
    sortKey = (e.target as HTMLSelectElement).value as PlayerSortKey;
    renderGrid(query, position, teamId, sortKey);
  });
}

function renderDetail(id: string): string {
  const player = getPlayerById(id);
  if (!player) {
    return `<div class="container hz-section"><div class="hz-empty-state"><i class="bi bi-exclamation-triangle"></i>Player not found.<div class="mt-3"><a href="#/players" data-link="players" class="btn btn-hz-outline">Back to Players</a></div></div></div>`;
  }

  const team = getTeamById(player.teamId);
  const s = player.seasonStats;

  const statCards = [
    { label: "PPG", value: s.pointsPerGame.toFixed(1) },
    { label: "RPG", value: s.reboundsPerGame.toFixed(1) },
    { label: "APG", value: s.assistsPerGame.toFixed(1) },
    { label: "SPG", value: s.stealsPerGame.toFixed(1) },
    { label: "BPG", value: s.blocksPerGame.toFixed(1) },
    { label: "FG%", value: `${s.fieldGoalPct.toFixed(1)}%` }
  ]
    .map(
      (c) => `
      <div class="col-6 col-md-4 col-lg-2">
        <div class="hz-stat-card text-center">
          <div class="hz-stat-value" style="font-size:1.6rem;">${c.value}</div>
          <div class="hz-stat-label">${c.label}</div>
        </div>
      </div>`
    )
    .join("");

  const recentRows = player.recentPerformances
    .map(
      (r) => `
      <tr>
        <td>${formatDate(r.date)}</td>
        <td>vs ${escapeHtml(r.opponentAbbr)}</td>
        <td class="hz-mono">${r.points}</td>
        <td class="hz-mono">${r.rebounds}</td>
        <td class="hz-mono">${r.assists}</td>
        <td>${r.result === "W" ? `<span class="badge-upcoming">W</span>` : `<span class="badge-final">L</span>`}</td>
      </tr>`
    )
    .join("");

  return `
    <div class="hz-page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item"><a href="#/players" data-link="players">Players</a></li>
            <li class="breadcrumb-item active hz-text-muted">${escapeHtml(player.firstName)} ${escapeHtml(player.lastName)}</li>
          </ol>
        </nav>
        <div class="d-flex align-items-center gap-3 flex-wrap">
          <span class="hz-team-badge hz-team-badge-lg" style="background:${team?.primaryColor ?? "#333"}">${team?.abbreviation ?? "--"}</span>
          <div>
            <div class="hz-eyebrow">${team ? `${team.city} ${team.name}` : "Free Agent"} · #${player.jerseyNumber} · ${player.position}</div>
            <h1 class="h2 mb-0">${escapeHtml(player.firstName)} ${escapeHtml(player.lastName)}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container hz-section">
      <div class="row g-3 text-center mb-2">
        <div class="col-4 col-md-2"><div class="hz-text-muted small">Age</div><div class="hz-mono fw-bold">${player.age}</div></div>
        <div class="col-4 col-md-2"><div class="hz-text-muted small">Height</div><div class="hz-mono fw-bold">${heightToFeetInches(player.heightCm)}</div></div>
        <div class="col-4 col-md-2"><div class="hz-text-muted small">Weight</div><div class="hz-mono fw-bold">${kgToLbs(player.weightKg)} lbs</div></div>
      </div>

      <h2 class="h5 mt-4 mb-3">Season Statistics</h2>
      <div class="row g-3 mb-4">${statCards}</div>

      <div class="row g-4">
        <div class="col-lg-6">
          <h2 class="h5 mb-3">Career vs Season Averages</h2>
          <div class="hz-card p-3">
            ${renderCompareRow("PPG", player.careerStats.pointsPerGame, player.seasonStats.pointsPerGame)}
            ${renderCompareRow("RPG", player.careerStats.reboundsPerGame, player.seasonStats.reboundsPerGame)}
            ${renderCompareRow("APG", player.careerStats.assistsPerGame, player.seasonStats.assistsPerGame)}
            ${renderCompareRow("FG%", player.careerStats.fieldGoalPct, player.seasonStats.fieldGoalPct, "%")}
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="h5 mb-3">Recent Performances</h2>
          <div class="table-responsive">
            <table class="table hz-table">
              <thead><tr><th>Date</th><th>Opp</th><th>PTS</th><th>REB</th><th>AST</th><th>Result</th></tr></thead>
              <tbody>${recentRows || `<tr><td colspan="6" class="text-center hz-text-muted py-3">No recent games.</td></tr>`}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCompareRow(label: string, career: number, season: number, suffix = ""): string {
  return `
    <div class="d-flex align-items-center justify-content-between py-2 hz-divider-dashed">
      <span class="hz-mono">${career.toFixed(1)}${suffix}</span>
      <span class="hz-text-muted small text-uppercase">${label} <span class="d-none d-sm-inline">(career vs season)</span></span>
      <span class="hz-mono fw-bold">${season.toFixed(1)}${suffix}</span>
    </div>`;
}

export function render(param?: string): string {
  if (param) return renderDetail(param);
  return renderList();
}

export function init(param?: string): void {
  if (!param) initList();
}
