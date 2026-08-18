export type Conference = "Eastern" | "Western";

export type GameStatus = "LIVE" | "UPCOMING" | "FINAL";

export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export interface TeamStats {
  pointsFor: number;
  pointsAgainst: number;
  fieldGoalPct: number;
  threePointPct: number;
  freeThrowPct: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  turnoversPerGame: number;
  stealsPerGame: number;
  blocksPerGame: number;
}

export interface Team {
  id: string;
  name: string;
  city: string;
  abbreviation: string;
  conference: Conference;
  division: string;
  primaryColor: string;
  secondaryColor: string;
  wins: number;
  losses: number;
  streak: string;
  stats: TeamStats;
}

export interface PlayerStats {
  pointsPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  stealsPerGame: number;
  blocksPerGame: number;
  fieldGoalPct: number;
  threePointPct: number;
  freeThrowPct: number;
  minutesPerGame: number;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  teamId: string;
  position: Position;
  jerseyNumber: number;
  age: number;
  heightCm: number;
  weightKg: number;
  seasonStats: PlayerStats;
  careerStats: PlayerStats;
  recentPerformances: RecentPerformance[];
}

export interface RecentPerformance {
  opponentAbbr: string;
  date: string;
  points: number;
  rebounds: number;
  assists: number;
  result: "W" | "L";
}

export interface QuarterScore {
  quarter: string;
  home: number;
  away: number;
}

export interface GameEvent {
  time: string;
  quarter: string;
  description: string;
  teamAbbr: string;
  type: "score" | "foul" | "turnover" | "timeout" | "substitution" | "rebound";
}

export interface TopPerformer {
  playerId: string;
  points: number;
  rebounds: number;
  assists: number;
}

export interface Game {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  status: GameStatus;
  date: string;
  time: string;
  venue: string;
  currentQuarter: string;
  clock: string;
  quarterScores: QuarterScore[];
  events: GameEvent[];
  topPerformers: TopPerformer[];
}

export interface Standing {
  teamId: string;
  rank: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  winPct: number;
  pointsFor: number;
  pointsAgainst: number;
  diff: number;
  streak: string;
  conference: Conference;
}

export type NewsCategory =
  | "Game Preview"
  | "Game Review"
  | "Team News"
  | "Player News"
  | "League";

export interface NewsArticle {
  id: string;
  title: string;
  category: NewsCategory;
  excerpt: string;
  body: string;
  publishedDate: string;
  featured: boolean;
  relatedTeamId?: string;
  relatedPlayerId?: string;
}

export type SearchResultType = "team" | "player" | "game" | "news";

export interface SearchResult {
  type: SearchResultType;
  id: string;
  title: string;
  subtitle: string;
}
