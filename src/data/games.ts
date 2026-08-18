import type { Game } from "@/types/basketball";

export const games: Game[] = [
  {
    id: "g01", homeTeamId: "lal", awayTeamId: "bos", homeScore: 102, awayScore: 98,
    status: "LIVE", date: "2026-08-18", time: "7:30 PM", venue: "Crypto.com Arena, Los Angeles",
    currentQuarter: "Q4", clock: "02:35",
    quarterScores: [
      { quarter: "Q1", home: 28, away: 24 }, { quarter: "Q2", home: 24, away: 27 },
      { quarter: "Q3", home: 26, away: 25 }, { quarter: "Q4", home: 24, away: 22 }
    ],
    events: [
      { time: "02:35", quarter: "Q4", description: "Doyle hits a step-back three", teamAbbr: "LAL", type: "score" },
      { time: "03:10", quarter: "Q4", description: "Whitfield draws the foul, two free throws", teamAbbr: "BOS", type: "foul" },
      { time: "04:02", quarter: "Q4", description: "Rivers with the putback slam", teamAbbr: "LAL", type: "score" },
      { time: "05:48", quarter: "Q4", description: "Okafor timeout, offense stalling", teamAbbr: "BOS", type: "timeout" }
    ],
    topPerformers: [
      { playerId: "p01", points: 31, rebounds: 5, assists: 9 },
      { playerId: "p03", points: 29, rebounds: 7, assists: 5 }
    ]
  },
  {
    id: "g02", homeTeamId: "den", awayTeamId: "phx", homeScore: 61, awayScore: 55,
    status: "LIVE", date: "2026-08-18", time: "8:00 PM", venue: "Ball Arena, Denver",
    currentQuarter: "Q3", clock: "06:12",
    quarterScores: [
      { quarter: "Q1", home: 30, away: 26 }, { quarter: "Q2", home: 31, away: 29 }
    ],
    events: [
      { time: "06:12", quarter: "Q3", description: "Vukic dishes to Osei for the corner three", teamAbbr: "DEN", type: "score" },
      { time: "07:04", quarter: "Q3", description: "Boateng steals it and finishes in transition", teamAbbr: "PHX", type: "score" }
    ],
    topPerformers: [
      { playerId: "p11", points: 18, rebounds: 9, assists: 7 },
      { playerId: "p13", points: 16, rebounds: 4, assists: 3 }
    ]
  },
  {
    id: "g03", homeTeamId: "mil", awayTeamId: "cle", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-18", time: "9:00 PM", venue: "Fiserv Forum, Milwaukee",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g04", homeTeamId: "mia", awayTeamId: "nyk", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-19", time: "7:00 PM", venue: "Kaseya Center, Miami",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g05", homeTeamId: "okc", awayTeamId: "dal", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-19", time: "8:30 PM", venue: "Paycom Center, Oklahoma City",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g06", homeTeamId: "gsw", awayTeamId: "phi", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-20", time: "10:00 PM", venue: "Chase Center, San Francisco",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g07", homeTeamId: "bos", awayTeamId: "mia", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-21", time: "7:30 PM", venue: "TD Garden, Boston",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g08", homeTeamId: "lal", awayTeamId: "gsw", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-22", time: "9:30 PM", venue: "Crypto.com Arena, Los Angeles",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g09", homeTeamId: "mia", awayTeamId: "nyk", homeScore: 108, awayScore: 112,
    status: "FINAL", date: "2026-08-08", time: "7:00 PM", venue: "Kaseya Center, Miami",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 26, away: 30 }, { quarter: "Q2", home: 27, away: 25 },
      { quarter: "Q3", home: 28, away: 29 }, { quarter: "Q4", home: 27, away: 28 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Danforth's late jumper seals it for New York", teamAbbr: "NYK", type: "score" }
    ],
    topPerformers: [
      { playerId: "p15", points: 25, rebounds: 8, assists: 4 },
      { playerId: "p07", points: 24, rebounds: 6, assists: 5 }
    ]
  },
  {
    id: "g10", homeTeamId: "den", awayTeamId: "phx", homeScore: 121, awayScore: 116,
    status: "FINAL", date: "2026-08-11", time: "8:00 PM", venue: "Ball Arena, Denver",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 31, away: 28 }, { quarter: "Q2", home: 29, away: 30 },
      { quarter: "Q3", home: 30, away: 27 }, { quarter: "Q4", home: 31, away: 31 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Vukic seals it with a triple-double", teamAbbr: "DEN", type: "score" }
    ],
    topPerformers: [
      { playerId: "p11", points: 28, rebounds: 15, assists: 11 },
      { playerId: "p13", points: 20, rebounds: 7, assists: 4 }
    ]
  },
  {
    id: "g11", homeTeamId: "mil", awayTeamId: "cle", homeScore: 119, awayScore: 111,
    status: "FINAL", date: "2026-08-11", time: "9:00 PM", venue: "Fiserv Forum, Milwaukee",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 30, away: 27 }, { quarter: "Q2", home: 28, away: 29 },
      { quarter: "Q3", home: 31, away: 26 }, { quarter: "Q4", home: 30, away: 29 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Brantley closes it out at the line", teamAbbr: "MIL", type: "score" }
    ],
    topPerformers: [
      { playerId: "p09", points: 34, rebounds: 12, assists: 6 },
      { playerId: "p23", points: 20, rebounds: 11, assists: 2 }
    ]
  },
  {
    id: "g12", homeTeamId: "okc", awayTeamId: "dal", homeScore: 128, awayScore: 121,
    status: "FINAL", date: "2026-08-09", time: "8:30 PM", venue: "Paycom Center, Oklahoma City",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 33, away: 29 }, { quarter: "Q2", home: 31, away: 32 },
      { quarter: "Q3", home: 32, away: 30 }, { quarter: "Q4", home: 32, away: 30 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Kingston's 38 points power OKC past Dallas", teamAbbr: "OKC", type: "score" }
    ],
    topPerformers: [
      { playerId: "p21", points: 38, rebounds: 9, assists: 7 },
      { playerId: "p17", points: 32, rebounds: 8, assists: 10 }
    ]
  },
  {
    id: "g13", homeTeamId: "phi", awayTeamId: "mil", homeScore: 114, awayScore: 119,
    status: "FINAL", date: "2026-08-05", time: "7:30 PM", venue: "Wells Fargo Center, Philadelphia",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 27, away: 30 }, { quarter: "Q2", home: 30, away: 28 },
      { quarter: "Q3", home: 29, away: 31 }, { quarter: "Q4", home: 28, away: 30 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Brantley's double-double edges out Philadelphia", teamAbbr: "MIL", type: "score" }
    ],
    topPerformers: [
      { playerId: "p19", points: 29, rebounds: 13, assists: 5 },
      { playerId: "p09", points: 27, rebounds: 10, assists: 5 }
    ]
  },
  {
    id: "g14", homeTeamId: "lal", awayTeamId: "gsw", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-23", time: "7:00 PM", venue: "Crypto.com Arena, Los Angeles",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g15", homeTeamId: "cle", awayTeamId: "bos", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-24", time: "6:30 PM", venue: "Rocket Mortgage FieldHouse, Cleveland",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g16", homeTeamId: "nyk", awayTeamId: "phi", homeScore: 0, awayScore: 0,
    status: "UPCOMING", date: "2026-08-25", time: "7:30 PM", venue: "Madison Square Garden, New York",
    currentQuarter: "-", clock: "-",
    quarterScores: [], events: [], topPerformers: []
  },
  {
    id: "g17", homeTeamId: "dal", awayTeamId: "okc", homeScore: 109, awayScore: 115,
    status: "FINAL", date: "2026-08-02", time: "8:00 PM", venue: "American Airlines Center, Dallas",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 26, away: 29 }, { quarter: "Q2", home: 28, away: 27 },
      { quarter: "Q3", home: 27, away: 30 }, { quarter: "Q4", home: 28, away: 29 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Nakamura's floater puts OKC ahead for good", teamAbbr: "OKC", type: "score" }
    ],
    topPerformers: [
      { playerId: "p21", points: 33, rebounds: 7, assists: 6 },
      { playerId: "p17", points: 30, rebounds: 6, assists: 9 }
    ]
  },
  {
    id: "g18", homeTeamId: "phx", awayTeamId: "lal", homeScore: 110, awayScore: 118,
    status: "FINAL", date: "2026-08-04", time: "9:00 PM", venue: "Footprint Center, Phoenix",
    currentQuarter: "Final", clock: "00:00",
    quarterScores: [
      { quarter: "Q1", home: 27, away: 29 }, { quarter: "Q2", home: 28, away: 30 },
      { quarter: "Q3", home: 26, away: 29 }, { quarter: "Q4", home: 29, away: 30 }
    ],
    events: [
      { time: "00:00", quarter: "Q4", description: "Doyle closes the door with clutch free throws", teamAbbr: "LAL", type: "score" }
    ],
    topPerformers: [
      { playerId: "p01", points: 19, rebounds: 6, assists: 7 },
      { playerId: "p13", points: 26, rebounds: 5, assists: 4 }
    ]
  }
];

export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
