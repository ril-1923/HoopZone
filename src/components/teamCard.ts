import type { Team } from "@/types/basketball";
import { escapeHtml } from "@/utils/formatters";

export function renderTeamCard(team: Team): string {
  const gp = team.wins + team.losses;
  const winPct = gp > 0 ? (team.wins / gp).toFixed(3).replace(/^0/, "") : ".000";
  return `
    <div class="hz-card h-100 p-3 d-flex flex-column">
      <div class="d-flex align-items-center gap-3 mb-3">
        <span class="hz-team-badge hz-team-badge-lg" style="background:${team.primaryColor}; border: 2px solid ${team.secondaryColor}">${team.abbreviation}</span>
        <div>
          <div class="hz-eyebrow">${team.conference} · ${escapeHtml(team.division)}</div>
          <h3 class="h5 mb-0">${escapeHtml(team.city)} ${escapeHtml(team.name)}</h3>
        </div>
      </div>
      <div class="row text-center g-2 mb-3">
        <div class="col-4">
          <div class="hz-mono fw-bold fs-5">${team.wins}</div>
          <div class="hz-text-muted small">Wins</div>
        </div>
        <div class="col-4">
          <div class="hz-mono fw-bold fs-5">${team.losses}</div>
          <div class="hz-text-muted small">Losses</div>
        </div>
        <div class="col-4">
          <div class="hz-mono fw-bold fs-5">${winPct}</div>
          <div class="hz-text-muted small">Win%</div>
        </div>
      </div>
      <a href="#/teams/${team.id}" data-link="teams/${team.id}" class="btn btn-hz-outline mt-auto w-100">View Team</a>
    </div>
  `;
}
