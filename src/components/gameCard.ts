import type { Game } from "@/types/basketball";
import { getTeamById } from "@/data/teams";
import { statusBadgeClass, formatDateShort, escapeHtml } from "@/utils/formatters";

export function renderGameCard(game: Game): string {
  const home = getTeamById(game.homeTeamId);
  const away = getTeamById(game.awayTeamId);
  if (!home || !away) return "";

  const isLive = game.status === "LIVE";

  const metaRight =
    game.status === "LIVE"
      ? `<span class="badge-live">${escapeHtml(game.currentQuarter)} · ${escapeHtml(game.clock)}</span>`
      : game.status === "UPCOMING"
      ? `<span class="badge-upcoming">UPCOMING</span>`
      : `<span class="badge-final">FINAL</span>`;

  return `
    <div class="hz-game-card" data-link="games/${game.id}" role="button" tabindex="0" aria-label="View game details">
      <div class="hz-game-row">
        <div class="hz-game-team">
          <span class="hz-team-badge hz-team-badge-sm" style="background:${away.primaryColor}">${away.abbreviation}</span>
          <span class="name">${escapeHtml(away.city)} ${escapeHtml(away.name)}</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          ${
            game.status === "UPCOMING"
              ? `<span class="hz-text-muted hz-mono">VS</span>`
              : `<span class="hz-game-score ${isLive ? "is-live" : ""}">${game.awayScore}</span>
                 <span class="hz-text-muted hz-mono" style="font-size:1rem;">-</span>
                 <span class="hz-game-score ${isLive ? "is-live" : ""}">${game.homeScore}</span>`
          }
        </div>
      </div>
      <div class="hz-game-row mt-2">
        <div class="hz-game-team">
          <span class="hz-team-badge hz-team-badge-sm" style="background:${home.primaryColor}">${home.abbreviation}</span>
          <span class="name">${escapeHtml(home.city)} ${escapeHtml(home.name)}</span>
        </div>
      </div>
      <div class="hz-game-meta">
        <span><i class="bi bi-geo-alt me-1"></i>${escapeHtml(game.venue)}</span>
        <span class="d-flex align-items-center gap-2">
          <span class="hz-mono">${game.status === "UPCOMING" ? `${formatDateShort(game.date)} · ${escapeHtml(game.time)}` : formatDateShort(game.date)}</span>
          ${metaRight}
        </span>
      </div>
    </div>
  `;
}
