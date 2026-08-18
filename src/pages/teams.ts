import type { Conference } from "@/types/basketball";
import { teams, getTeamById } from "@/data/teams";
import { getPlayersByTeam } from "@/data/players";
import { games } from "@/data/games";
import { getStandingByTeam } from "@/data/standings";
import { renderTeamCard } from "@/components/teamCard";
import { renderGameCard } from "@/components/gameCard";
import { filterTeamsByConference, searchTeams, sortTeams, type TeamSortKey } from "@/utils/filters";
import { escapeHtml, heightToFeetInches, formatPercent } from "@/utils/formatters";

function renderList(): string {
  return `
    <div class="hz-page-header">
      <div class="container">
        <div class="hz-eyebrow">League Directory</div>
        <h1 class="h2 mb-2">Teams</h1>
        <p class="hz-text-muted mb-0">Browse every franchise, filter by conference, and sort by record.</p>
      </div>
    </div>
    <div class="container hz-section">
      <div class="row g-3 mb-4 align-items-center">
        <div class="col-md-4">
          <div class="input-group">
            <span class="input-group-text hz-input"><i class="bi bi-search"></i></span>
            <input type="search" class="form-control hz-input" id="hzTeamSearch" placeholder="Search teams or cities...">
          </div>
        </div>
        <div class="col-md-4">
          <select class="form-select hz-input" id="hzTeamConference" aria-label="Filter by conference">
            <option value="ALL">All Conferences</option>
            <option value="Eastern">Eastern Conference</option>
            <option value="Western">Western Conference</option>
          </select>
        </div>
        <div class="col-md-4">
          <select class="form-select hz-input" id="hzTeamSort" aria-label="Sort teams">
            <option value="wins">Sort by Wins</option>
            <option value="winPct">Sort by Win %</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>
      <div class="row g-3" id="hzTeamsGrid"></div>
    </div>
  `;
}

function renderGrid(query: string, conference: Conference | "ALL", sortKey: TeamSortKey): void {
  const grid = document.getElementById("hzTeamsGrid");
  if (!grid) return;

  let list = searchTeams(teams, query);
  list = filterTeamsByConference(list, conference);
  list = sortTeams(list, sortKey);

  if (!list.length) {
    grid.innerHTML = `<div class="col-12"><div class="hz-empty-state"><i class="bi bi-search"></i>No teams found.</div></div>`;
    return;
  }

  grid.innerHTML = list.map((t) => `<div class="col-sm-6 col-lg-4">${renderTeamCard(t)}</div>`).join("");
}

function initList(): void {
  let query = "";
  let conference: Conference | "ALL" = "ALL";
  let sortKey: TeamSortKey = "wins";

  renderGrid(query, conference, sortKey);

  document.getElementById("hzTeamSearch")?.addEventListener("input", (e) => {
    query = (e.target as HTMLInputElement).value;
    renderGrid(query, conference, sortKey);
  });
  document.getElementById("hzTeamConference")?.addEventListener("change", (e) => {
    conference = (e.target as HTMLSelectElement).value as Conference | "ALL";
    renderGrid(query, conference, sortKey);
  });
  document.getElementById("hzTeamSort")?.addEventListener("change", (e) => {
    sortKey = (e.target as HTMLSelectElement).value as TeamSortKey;
    renderGrid(query, conference, sortKey);
  });
}

function renderDetail(id: string): string {
  const team = getTeamById(id);
  if (!team) {
    return `<div class="container hz-section"><div class="hz-empty-state"><i class="bi bi-exclamation-triangle"></i>Team not found.<div class="mt-3"><a href="#/teams" data-link="teams" class="btn btn-hz-outline">Back to Teams</a></div></div></div>`;
  }

  const roster = getPlayersByTeam(team.id);
  const standing = getStandingByTeam(team.id);
  const recent = games.filter((g) => (g.homeTeamId === team.id || g.awayTeamId === team.id) && g.status === "FINAL").slice(0, 3);
  const upcoming = games.filter((g) => (g.homeTeamId === team.id || g.awayTeamId === team.id) && g.status !== "FINAL").slice(0, 3);
  const winPct = team.wins + team.losses > 0 ? team.wins / (team.wins + team.losses) : 0;

  const rosterRows = roster
    .map(
      (p) => `
      <tr>
        <td class="hz-mono">#${p.jerseyNumber}</td>
        <td><a href="#/players/${p.id}" data-link="players/${p.id}" style="color: var(--hz-text)" class="text-decoration-none fw-semibold">${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)}</a></td>
        <td>${p.position}</td>
        <td>${heightToFeetInches(p.heightCm)}</td>
        <td class="hz-mono">${p.seasonStats.pointsPerGame.toFixed(1)}</td>
        <td class="hz-mono">${p.seasonStats.reboundsPerGame.toFixed(1)}</td>
        <td class="hz-mono">${p.seasonStats.assistsPerGame.toFixed(1)}</td>
      </tr>`
    )
    .join("");

  return `
    <div class="hz-page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item"><a href="#/teams" data-link="teams">Teams</a></li>
            <li class="breadcrumb-item active hz-text-muted">${escapeHtml(team.name)}</li>
          </ol>
        </nav>
        <div class="d-flex align-items-center gap-3">
          <span class="hz-team-badge hz-team-badge-lg" style="background:${team.primaryColor}; border:2px solid ${team.secondaryColor}">${team.abbreviation}</span>
          <div>
            <div class="hz-eyebrow">${team.conference} Conference · ${escapeHtml(team.division)} Division</div>
            <h1 class="h2 mb-0">${escapeHtml(team.city)} ${escapeHtml(team.name)}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container hz-section">
      <div class="row g-3 mb-4">
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center">
            <div class="hz-stat-value">${team.wins}-${team.losses}</div>
            <div class="hz-stat-label">Record</div>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center">
            <div class="hz-stat-value">${winPct.toFixed(3).replace(/^0/, "")}</div>
            <div class="hz-stat-label">Win Percentage</div>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center">
            <div class="hz-stat-value">#${standing?.rank ?? "-"}</div>
            <div class="hz-stat-label">Conference Rank</div>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card text-center">
            <div class="hz-stat-value">${team.streak}</div>
            <div class="hz-stat-label">Current Streak</div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-7">
          <h2 class="h5 mb-3">Team Roster</h2>
          <div class="table-responsive">
            <table class="table hz-table align-middle">
              <thead><tr><th>#</th><th>Player</th><th>Pos</th><th>Height</th><th>PPG</th><th>RPG</th><th>APG</th></tr></thead>
              <tbody>${rosterRows || `<tr><td colspan="7" class="text-center hz-text-muted py-4">No roster data available.</td></tr>`}</tbody>
            </table>
          </div>

          <h2 class="h5 mb-3 mt-4">Team Statistics</h2>
          <div class="hz-card p-3">
            ${renderStatBar("Field Goal %", team.stats.fieldGoalPct)}
            ${renderStatBar("3-Point %", team.stats.threePointPct)}
            ${renderStatBar("Free Throw %", team.stats.freeThrowPct)}
          </div>
        </div>
        <div class="col-lg-5">
          <h2 class="h5 mb-3">Recent Games</h2>
          <div class="d-flex flex-column gap-3 mb-4">
            ${recent.length ? recent.map((g) => renderGameCard(g)).join("") : `<div class="hz-empty-state py-3"><i class="bi bi-calendar-x"></i>No recent games.</div>`}
          </div>
          <h2 class="h5 mb-3">Upcoming Games</h2>
          <div class="d-flex flex-column gap-3">
            ${upcoming.length ? upcoming.map((g) => renderGameCard(g)).join("") : `<div class="hz-empty-state py-3"><i class="bi bi-calendar-x"></i>No upcoming games.</div>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStatBar(label: string, value: number): string {
  return `
    <div class="hz-progress-row">
      <span class="label">${label}</span>
      <div class="progress"><div class="progress-bar" role="progressbar" style="width:${value}%" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"></div></div>
      <span class="value hz-mono">${formatPercent(value)}</span>
    </div>`;
}

export function render(param?: string): string {
  if (param) return renderDetail(param);
  return renderList();
}

export function init(param?: string): void {
  if (!param) initList();
}
