import type { Standing } from "@/types/basketball";
import { teams } from "@/data/teams";

function buildStandings(): Standing[] {
  const rows: Standing[] = teams.map((t) => {
    const gamesPlayed = t.wins + t.losses;
    return {
      teamId: t.id,
      rank: 0,
      gamesPlayed,
      wins: t.wins,
      losses: t.losses,
      winPct: gamesPlayed > 0 ? t.wins / gamesPlayed : 0,
      pointsFor: t.stats.pointsFor,
      pointsAgainst: t.stats.pointsAgainst,
      diff: Math.round((t.stats.pointsFor - t.stats.pointsAgainst) * 10) / 10,
      streak: t.streak,
      conference: t.conference
    };
  });

  (["Eastern", "Western"] as const).forEach((conf) => {
    const confRows = rows.filter((r) => r.conference === conf).sort((a, b) => b.winPct - a.winPct);
    confRows.forEach((r, idx) => {
      r.rank = idx + 1;
    });
  });

  return rows;
}

export const standings: Standing[] = buildStandings();

export function getStandingByTeam(teamId: string): Standing | undefined {
  return standings.find((s) => s.teamId === teamId);
}
