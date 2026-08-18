import type { Game, GameStatus, Player, Position, Team, Conference, NewsArticle, NewsCategory } from "@/types/basketball";

export function filterGamesByStatus(games: Game[], status: GameStatus | "ALL"): Game[] {
  if (status === "ALL") return games;
  return games.filter((g) => g.status === status);
}

export function searchGames(games: Game[], query: string, teamName: (id: string) => string): Game[] {
  const q = query.trim().toLowerCase();
  if (!q) return games;
  return games.filter((g) => {
    const home = teamName(g.homeTeamId).toLowerCase();
    const away = teamName(g.awayTeamId).toLowerCase();
    return home.includes(q) || away.includes(q) || g.venue.toLowerCase().includes(q);
  });
}

export function filterTeamsByConference(teamsList: Team[], conference: Conference | "ALL"): Team[] {
  if (conference === "ALL") return teamsList;
  return teamsList.filter((t) => t.conference === conference);
}

export function searchTeams(teamsList: Team[], query: string): Team[] {
  const q = query.trim().toLowerCase();
  if (!q) return teamsList;
  return teamsList.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.city.toLowerCase().includes(q) ||
      t.abbreviation.toLowerCase().includes(q)
  );
}

export type TeamSortKey = "wins" | "winPct" | "name";

export function sortTeams(teamsList: Team[], key: TeamSortKey): Team[] {
  const copy = [...teamsList];
  switch (key) {
    case "wins":
      return copy.sort((a, b) => b.wins - a.wins);
    case "winPct":
      return copy.sort((a, b) => b.wins / (b.wins + b.losses) - a.wins / (a.wins + a.losses));
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return copy;
  }
}

export function filterPlayersByPosition(playersList: Player[], position: Position | "ALL"): Player[] {
  if (position === "ALL") return playersList;
  return playersList.filter((p) => p.position === position);
}

export function filterPlayersByTeam(playersList: Player[], teamId: string | "ALL"): Player[] {
  if (teamId === "ALL") return playersList;
  return playersList.filter((p) => p.teamId === teamId);
}

export function searchPlayers(playersList: Player[], query: string): Player[] {
  const q = query.trim().toLowerCase();
  if (!q) return playersList;
  return playersList.filter((p) => `${p.firstName} ${p.lastName}`.toLowerCase().includes(q));
}

export type PlayerSortKey = "points" | "rebounds" | "assists" | "name";

export function sortPlayers(playersList: Player[], key: PlayerSortKey): Player[] {
  const copy = [...playersList];
  switch (key) {
    case "points":
      return copy.sort((a, b) => b.seasonStats.pointsPerGame - a.seasonStats.pointsPerGame);
    case "rebounds":
      return copy.sort((a, b) => b.seasonStats.reboundsPerGame - a.seasonStats.reboundsPerGame);
    case "assists":
      return copy.sort((a, b) => b.seasonStats.assistsPerGame - a.seasonStats.assistsPerGame);
    case "name":
      return copy.sort((a, b) => `${a.lastName}`.localeCompare(b.lastName));
    default:
      return copy;
  }
}

export function filterNewsByCategory(newsList: NewsArticle[], category: NewsCategory | "ALL"): NewsArticle[] {
  if (category === "ALL") return newsList;
  return newsList.filter((n) => n.category === category);
}

export function searchNews(newsList: NewsArticle[], query: string): NewsArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return newsList;
  return newsList.filter(
    (n) => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q)
  );
}
