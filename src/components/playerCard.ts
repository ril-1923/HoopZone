import type { Player } from "@/types/basketball";
import { getTeamById } from "@/data/teams";
import { escapeHtml } from "@/utils/formatters";

export function renderPlayerCard(player: Player): string {
  const team = getTeamById(player.teamId);
  const teamLabel = team ? `${team.city} ${team.name}` : "Free Agent";
  const bg = team ? `linear-gradient(160deg, ${team.primaryColor}, ${team.secondaryColor}33)` : "var(--hz-surface-hover)";

  return `
    <div class="hz-card h-100 overflow-hidden" data-link="players/${player.id}" role="button" tabindex="0">
      <div class="hz-player-avatar" style="background:${bg}">
        <i class="bi bi-person-fill"></i>
        <span class="jersey">${player.jerseyNumber}</span>
      </div>
      <div class="p-3">
        <div class="d-flex justify-content-between align-items-start mb-1">
          <h3 class="h6 mb-0">${escapeHtml(player.firstName)} ${escapeHtml(player.lastName)}</h3>
          <span class="hz-eyebrow">${player.position}</span>
        </div>
        <div class="hz-text-muted small mb-3">${escapeHtml(teamLabel)} · #${player.jerseyNumber}</div>
        <div class="row text-center g-2">
          <div class="col-4">
            <div class="hz-mono fw-bold">${player.seasonStats.pointsPerGame.toFixed(1)}</div>
            <div class="hz-text-muted" style="font-size:0.72rem;">PPG</div>
          </div>
          <div class="col-4">
            <div class="hz-mono fw-bold">${player.seasonStats.reboundsPerGame.toFixed(1)}</div>
            <div class="hz-text-muted" style="font-size:0.72rem;">RPG</div>
          </div>
          <div class="col-4">
            <div class="hz-mono fw-bold">${player.seasonStats.assistsPerGame.toFixed(1)}</div>
            <div class="hz-text-muted" style="font-size:0.72rem;">APG</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
