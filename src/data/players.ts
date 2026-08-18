import type { Player } from "@/types/basketball";

export const players: Player[] = [
  { id: "p01", firstName: "Marcus", lastName: "Doyle", teamId: "lal", position: "PG", jerseyNumber: 3, age: 27, heightCm: 191, weightKg: 84,
    seasonStats: { pointsPerGame: 24.8, reboundsPerGame: 4.9, assistsPerGame: 8.6, stealsPerGame: 1.4, blocksPerGame: 0.3, fieldGoalPct: 47.2, threePointPct: 38.5, freeThrowPct: 86.1, minutesPerGame: 35.2 },
    careerStats: { pointsPerGame: 22.1, reboundsPerGame: 4.5, assistsPerGame: 7.9, stealsPerGame: 1.3, blocksPerGame: 0.3, fieldGoalPct: 46.0, threePointPct: 37.2, freeThrowPct: 84.9, minutesPerGame: 33.8 },
    recentPerformances: [
      { opponentAbbr: "BOS", date: "2026-08-10", points: 31, rebounds: 5, assists: 9, result: "W" },
      { opponentAbbr: "GSW", date: "2026-08-07", points: 22, rebounds: 4, assists: 11, result: "W" },
      { opponentAbbr: "PHX", date: "2026-08-04", points: 19, rebounds: 6, assists: 7, result: "L" }
    ] },
  { id: "p02", firstName: "Elijah", lastName: "Rivers", teamId: "lal", position: "C", jerseyNumber: 33, age: 29, heightCm: 213, weightKg: 118,
    seasonStats: { pointsPerGame: 19.2, reboundsPerGame: 12.4, assistsPerGame: 3.1, stealsPerGame: 0.8, blocksPerGame: 2.6, fieldGoalPct: 58.9, threePointPct: 0, freeThrowPct: 68.4, minutesPerGame: 31.5 },
    careerStats: { pointsPerGame: 17.5, reboundsPerGame: 11.6, assistsPerGame: 2.8, stealsPerGame: 0.7, blocksPerGame: 2.3, fieldGoalPct: 57.1, threePointPct: 0, freeThrowPct: 66.9, minutesPerGame: 29.7 },
    recentPerformances: [
      { opponentAbbr: "BOS", date: "2026-08-10", points: 21, rebounds: 14, assists: 2, result: "W" },
      { opponentAbbr: "GSW", date: "2026-08-07", points: 18, rebounds: 11, assists: 4, result: "W" }
    ] },
  { id: "p03", firstName: "Jalen", lastName: "Whitfield", teamId: "bos", position: "SF", jerseyNumber: 7, age: 26, heightCm: 201, weightKg: 100,
    seasonStats: { pointsPerGame: 27.3, reboundsPerGame: 8.1, assistsPerGame: 4.4, stealsPerGame: 1.6, blocksPerGame: 0.9, fieldGoalPct: 49.6, threePointPct: 40.8, freeThrowPct: 89.2, minutesPerGame: 36.0 },
    careerStats: { pointsPerGame: 24.0, reboundsPerGame: 7.4, assistsPerGame: 3.9, stealsPerGame: 1.5, blocksPerGame: 0.8, fieldGoalPct: 48.1, threePointPct: 39.0, freeThrowPct: 87.5, minutesPerGame: 34.4 },
    recentPerformances: [
      { opponentAbbr: "LAL", date: "2026-08-10", points: 29, rebounds: 7, assists: 5, result: "L" },
      { opponentAbbr: "MIA", date: "2026-08-06", points: 33, rebounds: 9, assists: 3, result: "W" }
    ] },
  { id: "p04", firstName: "Terrence", lastName: "Okafor", teamId: "bos", position: "PF", jerseyNumber: 21, age: 24, heightCm: 206, weightKg: 108,
    seasonStats: { pointsPerGame: 16.4, reboundsPerGame: 9.8, assistsPerGame: 2.5, stealsPerGame: 1.0, blocksPerGame: 1.8, fieldGoalPct: 52.3, threePointPct: 34.1, freeThrowPct: 75.0, minutesPerGame: 30.1 },
    careerStats: { pointsPerGame: 14.1, reboundsPerGame: 8.9, assistsPerGame: 2.1, stealsPerGame: 0.9, blocksPerGame: 1.6, fieldGoalPct: 51.0, threePointPct: 32.7, freeThrowPct: 73.8, minutesPerGame: 27.6 },
    recentPerformances: [
      { opponentAbbr: "LAL", date: "2026-08-10", points: 15, rebounds: 10, assists: 3, result: "L" }
    ] },
  { id: "p05", firstName: "Devon", lastName: "Marsh", teamId: "gsw", position: "SG", jerseyNumber: 11, age: 28, heightCm: 196, weightKg: 92,
    seasonStats: { pointsPerGame: 25.6, reboundsPerGame: 4.4, assistsPerGame: 5.9, stealsPerGame: 1.3, blocksPerGame: 0.4, fieldGoalPct: 46.8, threePointPct: 41.5, freeThrowPct: 90.3, minutesPerGame: 34.7 },
    careerStats: { pointsPerGame: 23.8, reboundsPerGame: 4.1, assistsPerGame: 5.4, stealsPerGame: 1.2, blocksPerGame: 0.4, fieldGoalPct: 45.9, threePointPct: 40.2, freeThrowPct: 89.6, minutesPerGame: 33.9 },
    recentPerformances: [
      { opponentAbbr: "PHX", date: "2026-08-09", points: 30, rebounds: 5, assists: 6, result: "W" }
    ] },
  { id: "p06", firstName: "Ricardo", lastName: "Vance", teamId: "gsw", position: "C", jerseyNumber: 5, age: 25, heightCm: 211, weightKg: 113,
    seasonStats: { pointsPerGame: 14.7, reboundsPerGame: 10.9, assistsPerGame: 2.0, stealsPerGame: 0.6, blocksPerGame: 2.2, fieldGoalPct: 55.4, threePointPct: 0, freeThrowPct: 70.1, minutesPerGame: 27.3 },
    careerStats: { pointsPerGame: 12.9, reboundsPerGame: 9.8, assistsPerGame: 1.8, stealsPerGame: 0.5, blocksPerGame: 1.9, fieldGoalPct: 54.0, threePointPct: 0, freeThrowPct: 68.5, minutesPerGame: 24.5 },
    recentPerformances: [
      { opponentAbbr: "PHX", date: "2026-08-09", points: 13, rebounds: 12, assists: 1, result: "W" }
    ] },
  { id: "p07", firstName: "Andre", lastName: "Colston", teamId: "mia", position: "SG", jerseyNumber: 14, age: 30, heightCm: 198, weightKg: 95,
    seasonStats: { pointsPerGame: 21.9, reboundsPerGame: 5.2, assistsPerGame: 4.6, stealsPerGame: 1.5, blocksPerGame: 0.5, fieldGoalPct: 45.3, threePointPct: 37.9, freeThrowPct: 88.0, minutesPerGame: 33.4 },
    careerStats: { pointsPerGame: 20.4, reboundsPerGame: 4.8, assistsPerGame: 4.1, stealsPerGame: 1.4, blocksPerGame: 0.4, fieldGoalPct: 44.5, threePointPct: 36.6, freeThrowPct: 87.1, minutesPerGame: 32.0 },
    recentPerformances: [
      { opponentAbbr: "NYK", date: "2026-08-08", points: 24, rebounds: 6, assists: 5, result: "W" }
    ] },
  { id: "p08", firstName: "Bryce", lastName: "Halloway", teamId: "mia", position: "PF", jerseyNumber: 44, age: 23, heightCm: 208, weightKg: 111,
    seasonStats: { pointsPerGame: 13.5, reboundsPerGame: 8.6, assistsPerGame: 1.9, stealsPerGame: 0.7, blocksPerGame: 1.4, fieldGoalPct: 50.7, threePointPct: 31.4, freeThrowPct: 74.2, minutesPerGame: 26.8 },
    careerStats: { pointsPerGame: 11.2, reboundsPerGame: 7.5, assistsPerGame: 1.6, stealsPerGame: 0.6, blocksPerGame: 1.2, fieldGoalPct: 49.3, threePointPct: 29.8, freeThrowPct: 72.0, minutesPerGame: 23.9 },
    recentPerformances: [
      { opponentAbbr: "NYK", date: "2026-08-08", points: 12, rebounds: 9, assists: 2, result: "W" }
    ] },
  { id: "p09", firstName: "Isaiah", lastName: "Brantley", teamId: "mil", position: "PF", jerseyNumber: 34, age: 31, heightCm: 208, weightKg: 116,
    seasonStats: { pointsPerGame: 29.4, reboundsPerGame: 11.2, assistsPerGame: 5.8, stealsPerGame: 1.1, blocksPerGame: 1.0, fieldGoalPct: 55.8, threePointPct: 29.4, freeThrowPct: 65.9, minutesPerGame: 34.9 },
    careerStats: { pointsPerGame: 27.6, reboundsPerGame: 10.8, assistsPerGame: 5.3, stealsPerGame: 1.1, blocksPerGame: 1.0, fieldGoalPct: 54.9, threePointPct: 28.6, freeThrowPct: 64.7, minutesPerGame: 34.1 },
    recentPerformances: [
      { opponentAbbr: "CLE", date: "2026-08-11", points: 34, rebounds: 12, assists: 6, result: "W" }
    ] },
  { id: "p10", firstName: "Trevon", lastName: "Ashby", teamId: "mil", position: "PG", jerseyNumber: 6, age: 26, heightCm: 188, weightKg: 82,
    seasonStats: { pointsPerGame: 17.8, reboundsPerGame: 3.9, assistsPerGame: 7.2, stealsPerGame: 1.7, blocksPerGame: 0.2, fieldGoalPct: 44.9, threePointPct: 36.0, freeThrowPct: 85.3, minutesPerGame: 32.6 },
    careerStats: { pointsPerGame: 15.9, reboundsPerGame: 3.6, assistsPerGame: 6.5, stealsPerGame: 1.6, blocksPerGame: 0.2, fieldGoalPct: 43.8, threePointPct: 35.1, freeThrowPct: 84.0, minutesPerGame: 30.7 },
    recentPerformances: [
      { opponentAbbr: "CLE", date: "2026-08-11", points: 16, rebounds: 4, assists: 9, result: "W" }
    ] },
  { id: "p11", firstName: "Nikola", lastName: "Vukic", teamId: "den", position: "C", jerseyNumber: 15, age: 29, heightCm: 213, weightKg: 120,
    seasonStats: { pointsPerGame: 26.7, reboundsPerGame: 13.1, assistsPerGame: 9.4, stealsPerGame: 1.2, blocksPerGame: 0.7, fieldGoalPct: 57.6, threePointPct: 35.5, freeThrowPct: 81.2, minutesPerGame: 35.8 },
    careerStats: { pointsPerGame: 24.3, reboundsPerGame: 12.2, assistsPerGame: 8.6, stealsPerGame: 1.1, blocksPerGame: 0.7, fieldGoalPct: 56.4, threePointPct: 33.9, freeThrowPct: 80.0, minutesPerGame: 34.5 },
    recentPerformances: [
      { opponentAbbr: "PHX", date: "2026-08-11", points: 28, rebounds: 15, assists: 11, result: "W" }
    ] },
  { id: "p12", firstName: "Kellan", lastName: "Osei", teamId: "den", position: "SG", jerseyNumber: 23, age: 25, heightCm: 195, weightKg: 90,
    seasonStats: { pointsPerGame: 20.1, reboundsPerGame: 4.6, assistsPerGame: 4.0, stealsPerGame: 1.4, blocksPerGame: 0.4, fieldGoalPct: 47.5, threePointPct: 39.8, freeThrowPct: 87.6, minutesPerGame: 31.9 },
    careerStats: { pointsPerGame: 18.3, reboundsPerGame: 4.2, assistsPerGame: 3.6, stealsPerGame: 1.3, blocksPerGame: 0.3, fieldGoalPct: 46.2, threePointPct: 38.4, freeThrowPct: 86.1, minutesPerGame: 30.2 },
    recentPerformances: [
      { opponentAbbr: "PHX", date: "2026-08-11", points: 22, rebounds: 5, assists: 3, result: "W" }
    ] },
  { id: "p13", firstName: "Quentin", lastName: "Boateng", teamId: "phx", position: "SF", jerseyNumber: 1, age: 27, heightCm: 201, weightKg: 99,
    seasonStats: { pointsPerGame: 23.5, reboundsPerGame: 6.3, assistsPerGame: 4.1, stealsPerGame: 1.0, blocksPerGame: 0.6, fieldGoalPct: 46.4, threePointPct: 37.1, freeThrowPct: 88.9, minutesPerGame: 33.8 },
    careerStats: { pointsPerGame: 21.7, reboundsPerGame: 5.9, assistsPerGame: 3.8, stealsPerGame: 0.9, blocksPerGame: 0.5, fieldGoalPct: 45.5, threePointPct: 36.0, freeThrowPct: 87.4, minutesPerGame: 32.5 },
    recentPerformances: [
      { opponentAbbr: "DEN", date: "2026-08-11", points: 20, rebounds: 7, assists: 4, result: "L" }
    ] },
  { id: "p14", firstName: "Malik", lastName: "Fontaine", teamId: "phx", position: "PG", jerseyNumber: 9, age: 24, heightCm: 190, weightKg: 86,
    seasonStats: { pointsPerGame: 16.2, reboundsPerGame: 3.5, assistsPerGame: 8.9, stealsPerGame: 1.6, blocksPerGame: 0.2, fieldGoalPct: 44.1, threePointPct: 35.4, freeThrowPct: 83.7, minutesPerGame: 31.0 },
    careerStats: { pointsPerGame: 14.0, reboundsPerGame: 3.2, assistsPerGame: 7.6, stealsPerGame: 1.5, blocksPerGame: 0.2, fieldGoalPct: 43.0, threePointPct: 34.0, freeThrowPct: 82.1, minutesPerGame: 28.9 },
    recentPerformances: [
      { opponentAbbr: "DEN", date: "2026-08-11", points: 14, rebounds: 4, assists: 10, result: "L" }
    ] },
  { id: "p15", firstName: "Corey", lastName: "Danforth", teamId: "nyk", position: "SF", jerseyNumber: 27, age: 26, heightCm: 203, weightKg: 102,
    seasonStats: { pointsPerGame: 22.4, reboundsPerGame: 7.7, assistsPerGame: 3.6, stealsPerGame: 1.1, blocksPerGame: 0.8, fieldGoalPct: 48.0, threePointPct: 36.7, freeThrowPct: 85.5, minutesPerGame: 34.2 },
    careerStats: { pointsPerGame: 19.8, reboundsPerGame: 7.0, assistsPerGame: 3.2, stealsPerGame: 1.0, blocksPerGame: 0.7, fieldGoalPct: 47.1, threePointPct: 35.5, freeThrowPct: 84.0, minutesPerGame: 32.4 },
    recentPerformances: [
      { opponentAbbr: "MIA", date: "2026-08-08", points: 25, rebounds: 8, assists: 4, result: "L" }
    ] },
  { id: "p16", firstName: "Julian", lastName: "Mackey", teamId: "nyk", position: "C", jerseyNumber: 32, age: 28, heightCm: 210, weightKg: 115,
    seasonStats: { pointsPerGame: 15.9, reboundsPerGame: 10.1, assistsPerGame: 2.8, stealsPerGame: 0.7, blocksPerGame: 1.9, fieldGoalPct: 56.2, threePointPct: 0, freeThrowPct: 71.5, minutesPerGame: 28.6 },
    careerStats: { pointsPerGame: 13.7, reboundsPerGame: 9.3, assistsPerGame: 2.4, stealsPerGame: 0.6, blocksPerGame: 1.7, fieldGoalPct: 55.0, threePointPct: 0, freeThrowPct: 69.9, minutesPerGame: 26.0 },
    recentPerformances: [
      { opponentAbbr: "MIA", date: "2026-08-08", points: 17, rebounds: 11, assists: 3, result: "L" }
    ] },
  { id: "p17", firstName: "Damon", lastName: "Ellery", teamId: "dal", position: "PG", jerseyNumber: 77, age: 25, heightCm: 193, weightKg: 88,
    seasonStats: { pointsPerGame: 28.9, reboundsPerGame: 7.9, assistsPerGame: 9.1, stealsPerGame: 1.3, blocksPerGame: 0.4, fieldGoalPct: 46.6, threePointPct: 38.0, freeThrowPct: 87.9, minutesPerGame: 36.4 },
    careerStats: { pointsPerGame: 25.9, reboundsPerGame: 7.2, assistsPerGame: 8.3, stealsPerGame: 1.2, blocksPerGame: 0.3, fieldGoalPct: 45.4, threePointPct: 36.8, freeThrowPct: 86.5, minutesPerGame: 34.8 },
    recentPerformances: [
      { opponentAbbr: "OKC", date: "2026-08-09", points: 32, rebounds: 8, assists: 10, result: "L" }
    ] },
  { id: "p18", firstName: "Zion", lastName: "Castellano", teamId: "dal", position: "PF", jerseyNumber: 42, age: 24, heightCm: 206, weightKg: 110,
    seasonStats: { pointsPerGame: 17.6, reboundsPerGame: 9.4, assistsPerGame: 2.3, stealsPerGame: 0.9, blocksPerGame: 1.3, fieldGoalPct: 53.1, threePointPct: 33.6, freeThrowPct: 76.8, minutesPerGame: 29.5 },
    careerStats: { pointsPerGame: 15.2, reboundsPerGame: 8.5, assistsPerGame: 2.0, stealsPerGame: 0.8, blocksPerGame: 1.1, fieldGoalPct: 51.8, threePointPct: 32.0, freeThrowPct: 75.0, minutesPerGame: 27.0 },
    recentPerformances: [
      { opponentAbbr: "OKC", date: "2026-08-09", points: 18, rebounds: 10, assists: 2, result: "L" }
    ] },
  { id: "p19", firstName: "Aaron", lastName: "Steppe", teamId: "phi", position: "C", jerseyNumber: 21, age: 30, heightCm: 213, weightKg: 122,
    seasonStats: { pointsPerGame: 30.2, reboundsPerGame: 11.6, assistsPerGame: 4.3, stealsPerGame: 1.0, blocksPerGame: 1.7, fieldGoalPct: 54.7, threePointPct: 38.2, freeThrowPct: 88.5, minutesPerGame: 34.0 },
    careerStats: { pointsPerGame: 27.4, reboundsPerGame: 11.0, assistsPerGame: 3.9, stealsPerGame: 0.9, blocksPerGame: 1.6, fieldGoalPct: 53.6, threePointPct: 36.1, freeThrowPct: 87.0, minutesPerGame: 33.2 },
    recentPerformances: [
      { opponentAbbr: "MIL", date: "2026-08-05", points: 29, rebounds: 13, assists: 5, result: "W" }
    ] },
  { id: "p20", firstName: "Xavier", lastName: "Lombard", teamId: "phi", position: "SG", jerseyNumber: 25, age: 23, heightCm: 196, weightKg: 91,
    seasonStats: { pointsPerGame: 18.4, reboundsPerGame: 4.0, assistsPerGame: 4.8, stealsPerGame: 1.2, blocksPerGame: 0.3, fieldGoalPct: 45.0, threePointPct: 37.6, freeThrowPct: 84.4, minutesPerGame: 30.9 },
    careerStats: { pointsPerGame: 15.6, reboundsPerGame: 3.6, assistsPerGame: 4.1, stealsPerGame: 1.1, blocksPerGame: 0.2, fieldGoalPct: 43.9, threePointPct: 36.0, freeThrowPct: 83.0, minutesPerGame: 28.5 },
    recentPerformances: [
      { opponentAbbr: "MIL", date: "2026-08-05", points: 19, rebounds: 5, assists: 6, result: "W" }
    ] },
  { id: "p21", firstName: "Shamar", lastName: "Kingston", teamId: "okc", position: "SF", jerseyNumber: 2, age: 22, heightCm: 201, weightKg: 93,
    seasonStats: { pointsPerGame: 31.5, reboundsPerGame: 8.8, assistsPerGame: 6.2, stealsPerGame: 2.1, blocksPerGame: 1.0, fieldGoalPct: 51.4, threePointPct: 36.4, freeThrowPct: 87.2, minutesPerGame: 35.6 },
    careerStats: { pointsPerGame: 27.9, reboundsPerGame: 8.0, assistsPerGame: 5.5, stealsPerGame: 1.9, blocksPerGame: 0.9, fieldGoalPct: 50.2, threePointPct: 35.0, freeThrowPct: 85.9, minutesPerGame: 34.0 },
    recentPerformances: [
      { opponentAbbr: "DAL", date: "2026-08-09", points: 38, rebounds: 9, assists: 7, result: "W" }
    ] },
  { id: "p22", firstName: "Reggie", lastName: "Nakamura", teamId: "okc", position: "PG", jerseyNumber: 4, age: 24, heightCm: 188, weightKg: 83,
    seasonStats: { pointsPerGame: 19.6, reboundsPerGame: 4.3, assistsPerGame: 7.8, stealsPerGame: 1.8, blocksPerGame: 0.3, fieldGoalPct: 46.9, threePointPct: 37.9, freeThrowPct: 86.0, minutesPerGame: 32.8 },
    careerStats: { pointsPerGame: 17.1, reboundsPerGame: 4.0, assistsPerGame: 6.9, stealsPerGame: 1.7, blocksPerGame: 0.3, fieldGoalPct: 45.6, threePointPct: 36.5, freeThrowPct: 84.8, minutesPerGame: 31.1 },
    recentPerformances: [
      { opponentAbbr: "DAL", date: "2026-08-09", points: 21, rebounds: 5, assists: 9, result: "W" }
    ] },
  { id: "p23", firstName: "Deshawn", lastName: "Prather", teamId: "cle", position: "PF", jerseyNumber: 8, age: 27, heightCm: 208, weightKg: 112,
    seasonStats: { pointsPerGame: 22.7, reboundsPerGame: 10.3, assistsPerGame: 3.0, stealsPerGame: 0.9, blocksPerGame: 1.5, fieldGoalPct: 52.9, threePointPct: 32.8, freeThrowPct: 77.4, minutesPerGame: 32.9 },
    careerStats: { pointsPerGame: 20.1, reboundsPerGame: 9.6, assistsPerGame: 2.6, stealsPerGame: 0.8, blocksPerGame: 1.3, fieldGoalPct: 51.5, threePointPct: 31.2, freeThrowPct: 76.0, minutesPerGame: 31.3 },
    recentPerformances: [
      { opponentAbbr: "MIL", date: "2026-08-11", points: 20, rebounds: 11, assists: 2, result: "L" }
    ] },
  { id: "p24", firstName: "Cameron", lastName: "Oduya", teamId: "cle", position: "SG", jerseyNumber: 13, age: 26, heightCm: 197, weightKg: 94,
    seasonStats: { pointsPerGame: 19.8, reboundsPerGame: 4.7, assistsPerGame: 4.4, stealsPerGame: 1.3, blocksPerGame: 0.4, fieldGoalPct: 46.1, threePointPct: 38.7, freeThrowPct: 89.1, minutesPerGame: 33.0 },
    careerStats: { pointsPerGame: 17.5, reboundsPerGame: 4.3, assistsPerGame: 3.9, stealsPerGame: 1.2, blocksPerGame: 0.3, fieldGoalPct: 45.0, threePointPct: 37.4, freeThrowPct: 87.8, minutesPerGame: 31.2 },
    recentPerformances: [
      { opponentAbbr: "MIL", date: "2026-08-11", points: 17, rebounds: 5, assists: 5, result: "L" }
    ] }
];

export function getPlayerById(id: string): Player | undefined {
  return players.find((p) => p.id === id);
}

export function getPlayersByTeam(teamId: string): Player[] {
  return players.filter((p) => p.teamId === teamId);
}
