import type { Conference } from "@/types/basketball";
import { standings } from "@/data/standings";
import { getTeamById } from "@/data/teams";
import { escapeHtml } from "@/utils/formatters";

const PLAYOFF_CUTOFF = 6;

function renderRows(conference: Conference): string {
  const rows = standings
    .filter((s) => s.conference === conference)
    .sort((a, b) => a.rank - b.rank);

  return rows
    .map((s) => {
      const team = getTeamById(s.teamId);
      if (!team) return "";
      const isPlayoff = s.rank <= PLAYOFF_CUTOFF;
      return `
        <tr class="${s.rank === PLAYOFF_CUTOFF ? "playoff-line" : ""}">
          <td class="hz-mono">${s.rank}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <span class="hz-team-badge hz-team-badge-sm" style="background:${team.primaryColor}">${team.abbreviation}</span>
              <a href="#/teams/${team.id}" data-link="teams/${team.id}" class="text-decoration-none fw-semibold" style="color: var(--hz-text)">${escapeHtml(team.city)} ${escapeHtml(team.name)}</a>
              ${isPlayoff ? `<span class="badge-upcoming" title="Playoff position">${"\u2713"}</span>` : ""}
            </div>
          </td>
          <td class="hz-mono text-center">${s.gamesPlayed}</td>
          <td class="hz-mono text-center">${s.wins}</td>
          <td class="hz-mono text-center">${s.losses}</td>
          <td class="hz-mono text-center">${s.winPct.toFixed(3).replace(/^0/, "")}</td>
          <td class="hz-mono text-center">${s.pointsFor.toFixed(1)}</td>
          <td class="hz-mono text-center">${s.pointsAgainst.toFixed(1)}</td>
          <td class="hz-mono text-center ${s.diff >= 0 ? "text-success" : "text-danger"}">${s.diff >= 0 ? "+" : ""}${s.diff.toFixed(1)}</td>
          <td class="hz-mono text-center">${escapeHtml(s.streak)}</td>
        </tr>`;
    })
    .join("");
}

function renderTable(conference: Conference): string {
  return `
    <div class="table-responsive">
      <table class="table hz-table align-middle">
        <thead>
          <tr>
            <th>Rank</th><th>Team</th><th class="text-center">GP</th><th class="text-center">W</th><th class="text-center">L</th>
            <th class="text-center">Win%</th><th class="text-center">PF</th><th class="text-center">PA</th><th class="text-center">Diff</th><th class="text-center">Streak</th>
          </tr>
        </thead>
        <tbody>${renderRows(conference)}</tbody>
      </table>
    </div>
    <p class="hz-text-muted small mt-2 mb-0"><i class="bi bi-check-circle me-1" style="color: var(--hz-upcoming);"></i>Top ${PLAYOFF_CUTOFF} teams per conference currently hold a playoff position.</p>
  `;
}

export function render(): string {
  return `
    <div class="hz-page-header">
      <div class="container">
        <div class="hz-eyebrow">League Table</div>
        <h1 class="h2 mb-2">Standings</h1>
        <p class="hz-text-muted mb-0">Conference standings updated after every game.</p>
      </div>
    </div>
    <div class="container hz-section">
      <ul class="nav nav-pills mb-4 gap-2" id="hzStandingsTabs">
        <li class="nav-item"><button class="hz-filter-btn active" data-conf="Western">Western Conference</button></li>
        <li class="nav-item"><button class="hz-filter-btn" data-conf="Eastern">Eastern Conference</button></li>
      </ul>
      <div class="hz-card p-3" id="hzStandingsTableWrap">${renderTable("Western")}</div>
    </div>
  `;
}

export function init(): void {
  document.getElementById("hzStandingsTabs")?.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".hz-filter-btn");
    if (!btn) return;
    document.querySelectorAll("#hzStandingsTabs .hz-filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const conf = btn.dataset.conf as Conference;
    const wrap = document.getElementById("hzStandingsTableWrap");
    if (wrap) wrap.innerHTML = renderTable(conf);
  });
}
