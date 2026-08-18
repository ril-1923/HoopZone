import type { SearchResult } from "@/types/basketball";
import { teams } from "@/data/teams";
import { players } from "@/data/players";
import { games } from "@/data/games";
import { news } from "@/data/news";

function teamName(id: string): string {
  const t = teams.find((team) => team.id === id);
  return t ? `${t.city} ${t.name}` : id;
}

export function globalSearch(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) return [];

  const results: SearchResult[] = [];

  teams.forEach((t) => {
    if (`${t.city} ${t.name}`.toLowerCase().includes(q) || t.abbreviation.toLowerCase().includes(q)) {
      results.push({ type: "team", id: t.id, title: `${t.city} ${t.name}`, subtitle: `${t.conference} Conference` });
    }
  });

  players.forEach((p) => {
    const full = `${p.firstName} ${p.lastName}`;
    if (full.toLowerCase().includes(q)) {
      results.push({ type: "player", id: p.id, title: full, subtitle: `${teamName(p.teamId)} · ${p.position}` });
    }
  });

  games.forEach((g) => {
    const label = `${teamName(g.awayTeamId)} at ${teamName(g.homeTeamId)}`;
    if (label.toLowerCase().includes(q)) {
      results.push({ type: "game", id: g.id, title: label, subtitle: `${g.date} · ${g.status}` });
    }
  });

  news.forEach((n) => {
    if (n.title.toLowerCase().includes(q)) {
      results.push({ type: "news", id: n.id, title: n.title, subtitle: n.category });
    }
  });

  return results.slice(0, 20);
}
