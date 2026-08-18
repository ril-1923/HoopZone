import type { Team } from "@/types/basketball";

export const teams: Team[] = [
  {
    id: "lal", name: "Lakers", city: "Los Angeles", abbreviation: "LAL",
    conference: "Western", division: "Pacific",
    primaryColor: "#552583", secondaryColor: "#FDB927",
    wins: 34, losses: 18, streak: "W3",
    stats: { pointsFor: 116.4, pointsAgainst: 110.8, fieldGoalPct: 48.1, threePointPct: 36.9, freeThrowPct: 78.2, reboundsPerGame: 44.3, assistsPerGame: 27.1, turnoversPerGame: 13.2, stealsPerGame: 7.6, blocksPerGame: 4.9 }
  },
  {
    id: "bos", name: "Celtics", city: "Boston", abbreviation: "BOS",
    conference: "Eastern", division: "Atlantic",
    primaryColor: "#007A33", secondaryColor: "#BA9653",
    wins: 40, losses: 12, streak: "W6",
    stats: { pointsFor: 119.7, pointsAgainst: 108.3, fieldGoalPct: 47.6, threePointPct: 38.4, freeThrowPct: 81.0, reboundsPerGame: 45.8, assistsPerGame: 26.4, turnoversPerGame: 12.1, stealsPerGame: 8.1, blocksPerGame: 5.4 }
  },
  {
    id: "gsw", name: "Warriors", city: "Golden State", abbreviation: "GSW",
    conference: "Western", division: "Pacific",
    primaryColor: "#1D428A", secondaryColor: "#FFC72C",
    wins: 29, losses: 23, streak: "L1",
    stats: { pointsFor: 117.9, pointsAgainst: 115.2, fieldGoalPct: 46.8, threePointPct: 39.1, freeThrowPct: 79.4, reboundsPerGame: 42.7, assistsPerGame: 29.6, turnoversPerGame: 14.0, stealsPerGame: 7.8, blocksPerGame: 4.2 }
  },
  {
    id: "mia", name: "Heat", city: "Miami", abbreviation: "MIA",
    conference: "Eastern", division: "Southeast",
    primaryColor: "#98002E", secondaryColor: "#F9A01B",
    wins: 27, losses: 25, streak: "W2",
    stats: { pointsFor: 111.3, pointsAgainst: 109.6, fieldGoalPct: 46.0, threePointPct: 35.8, freeThrowPct: 80.1, reboundsPerGame: 41.9, assistsPerGame: 24.8, turnoversPerGame: 12.9, stealsPerGame: 7.2, blocksPerGame: 4.0 }
  },
  {
    id: "mil", name: "Bucks", city: "Milwaukee", abbreviation: "MIL",
    conference: "Eastern", division: "Central",
    primaryColor: "#00471B", secondaryColor: "#EEE1C6",
    wins: 32, losses: 20, streak: "W1",
    stats: { pointsFor: 118.5, pointsAgainst: 113.9, fieldGoalPct: 48.9, threePointPct: 36.2, freeThrowPct: 76.5, reboundsPerGame: 45.1, assistsPerGame: 25.3, turnoversPerGame: 13.6, stealsPerGame: 6.9, blocksPerGame: 5.1 }
  },
  {
    id: "den", name: "Nuggets", city: "Denver", abbreviation: "DEN",
    conference: "Western", division: "Northwest",
    primaryColor: "#0E2240", secondaryColor: "#FEC524",
    wins: 36, losses: 16, streak: "W4",
    stats: { pointsFor: 117.2, pointsAgainst: 110.4, fieldGoalPct: 49.5, threePointPct: 37.7, freeThrowPct: 77.9, reboundsPerGame: 45.6, assistsPerGame: 29.9, turnoversPerGame: 12.7, stealsPerGame: 6.8, blocksPerGame: 4.6 }
  },
  {
    id: "phx", name: "Suns", city: "Phoenix", abbreviation: "PHX",
    conference: "Western", division: "Pacific",
    primaryColor: "#1D1160", secondaryColor: "#E56020",
    wins: 28, losses: 24, streak: "L2",
    stats: { pointsFor: 114.8, pointsAgainst: 113.1, fieldGoalPct: 47.3, threePointPct: 37.0, freeThrowPct: 80.6, reboundsPerGame: 42.4, assistsPerGame: 25.9, turnoversPerGame: 13.4, stealsPerGame: 6.5, blocksPerGame: 4.3 }
  },
  {
    id: "nyk", name: "Knicks", city: "New York", abbreviation: "NYK",
    conference: "Eastern", division: "Atlantic",
    primaryColor: "#006BB6", secondaryColor: "#F58426",
    wins: 31, losses: 21, streak: "W2",
    stats: { pointsFor: 113.6, pointsAgainst: 109.9, fieldGoalPct: 47.0, threePointPct: 36.5, freeThrowPct: 78.8, reboundsPerGame: 44.9, assistsPerGame: 24.1, turnoversPerGame: 12.4, stealsPerGame: 7.4, blocksPerGame: 4.4 }
  },
  {
    id: "dal", name: "Mavericks", city: "Dallas", abbreviation: "DAL",
    conference: "Western", division: "Southwest",
    primaryColor: "#00538C", secondaryColor: "#B8C4CA",
    wins: 30, losses: 22, streak: "W1",
    stats: { pointsFor: 118.1, pointsAgainst: 114.7, fieldGoalPct: 47.8, threePointPct: 38.9, freeThrowPct: 79.0, reboundsPerGame: 43.2, assistsPerGame: 25.5, turnoversPerGame: 13.1, stealsPerGame: 6.7, blocksPerGame: 4.1 }
  },
  {
    id: "phi", name: "76ers", city: "Philadelphia", abbreviation: "PHI",
    conference: "Eastern", division: "Atlantic",
    primaryColor: "#006BB6", secondaryColor: "#ED174C",
    wins: 26, losses: 26, streak: "L1",
    stats: { pointsFor: 112.9, pointsAgainst: 112.6, fieldGoalPct: 46.5, threePointPct: 35.6, freeThrowPct: 81.7, reboundsPerGame: 42.0, assistsPerGame: 23.7, turnoversPerGame: 12.8, stealsPerGame: 7.0, blocksPerGame: 5.7 }
  },
  {
    id: "okc", name: "Thunder", city: "Oklahoma City", abbreviation: "OKC",
    conference: "Western", division: "Northwest",
    primaryColor: "#007AC1", secondaryColor: "#EF3B24",
    wins: 38, losses: 14, streak: "W5",
    stats: { pointsFor: 120.3, pointsAgainst: 108.9, fieldGoalPct: 48.7, threePointPct: 37.3, freeThrowPct: 78.4, reboundsPerGame: 44.0, assistsPerGame: 27.8, turnoversPerGame: 11.9, stealsPerGame: 9.2, blocksPerGame: 5.9 }
  },
  {
    id: "cle", name: "Cavaliers", city: "Cleveland", abbreviation: "CLE",
    conference: "Eastern", division: "Central",
    primaryColor: "#860038", secondaryColor: "#041E42",
    wins: 33, losses: 19, streak: "W3",
    stats: { pointsFor: 116.0, pointsAgainst: 110.1, fieldGoalPct: 48.3, threePointPct: 37.6, freeThrowPct: 79.9, reboundsPerGame: 43.8, assistsPerGame: 26.6, turnoversPerGame: 12.5, stealsPerGame: 7.3, blocksPerGame: 4.8 }
  }
];

export function getTeamById(id: string): Team | undefined {
  return teams.find((t) => t.id === id);
}
