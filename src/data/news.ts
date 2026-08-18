import type { NewsArticle } from "@/types/basketball";

export const news: NewsArticle[] = [
  {
    id: "n01", title: "Thunder roll to fifth straight win behind Kingston's 38",
    category: "Game Review",
    excerpt: "Shamar Kingston erupted for a season-high 38 points as Oklahoma City pulled away in the fourth quarter.",
    body: "Shamar Kingston erupted for a season-high 38 points, adding 9 rebounds and 7 assists, as the Oklahoma City Thunder pulled away from the Dallas Mavericks in the final frame to extend their winning streak to five games. The Thunder's defense forced 16 turnovers, turning them into 24 fast-break points. Head coach praised the team's depth off the bench, which outscored Dallas's reserves 38-19.",
    publishedDate: "2026-08-09", featured: true, relatedTeamId: "okc", relatedPlayerId: "p21"
  },
  {
    id: "n02", title: "Lakers host Celtics tonight in marquee Western-Eastern clash",
    category: "Game Preview",
    excerpt: "Two of the league's top scoring offenses meet at Crypto.com Arena in a game with early playoff-seeding implications.",
    body: "The Los Angeles Lakers welcome the Boston Celtics tonight in one of the most anticipated matchups of the week. Both teams enter on winning streaks, with Boston riding a six-game surge and Los Angeles winners of three straight. Marcus Doyle's playmaking against Jalen Whitfield's two-way scoring punch headlines the individual battles to watch.",
    publishedDate: "2026-08-18", featured: true, relatedTeamId: "lal"
  },
  {
    id: "n03", title: "Nuggets clinch season series over Suns with 121-116 win",
    category: "Game Review",
    excerpt: "Nikola Vukic posted a triple-double as Denver held off a late Phoenix rally.",
    body: "Nikola Vukic recorded 28 points, 15 rebounds and 11 assists for his eighth triple-double of the season as the Denver Nuggets outlasted the Phoenix Suns 121-116. Phoenix cut the lead to two in the final minute, but Denver closed the game on a 7-2 run to secure the season series.",
    publishedDate: "2026-08-11", featured: false, relatedTeamId: "den", relatedPlayerId: "p11"
  },
  {
    id: "n04", title: "Bucks survive late Cavaliers push in Central Division showdown",
    category: "Game Review",
    excerpt: "Isaiah Brantley's double-double leads Milwaukee to a hard-fought win over Cleveland.",
    body: "Isaiah Brantley finished with 34 points and 12 rebounds to lift the Milwaukee Bucks past the Cleveland Cavaliers 119-111. Cleveland trimmed a 15-point deficit to four in the fourth quarter before Milwaukee closed the door at the free-throw line.",
    publishedDate: "2026-08-11", featured: false, relatedTeamId: "mil", relatedPlayerId: "p09"
  },
  {
    id: "n05", title: "Player Spotlight: Marcus Doyle's ascent into the MVP conversation",
    category: "Player News",
    excerpt: "Doyle's efficient, pass-first game has the Lakers' offense humming at a top-five clip this season.",
    body: "Marcus Doyle is quietly having the best season of his career, averaging 24.8 points and 8.6 assists while shooting a career-best 38.5 percent from three. Teammates credit his film study and leadership for the Lakers' surge up the Western Conference standings.",
    publishedDate: "2026-08-15", featured: false, relatedPlayerId: "p01", relatedTeamId: "lal"
  },
  {
    id: "n06", title: "Celtics extend win streak to six with road victory over Heat",
    category: "Game Review",
    excerpt: "Boston's defense clamped down in the second half to close out Miami on the road.",
    body: "The Boston Celtics held the Miami Heat to just 44 second-half points in a road win that extended their winning streak to six games. Jalen Whitfield led all scorers with 33 points on efficient shooting.",
    publishedDate: "2026-08-06", featured: false, relatedTeamId: "bos", relatedPlayerId: "p03"
  },
  {
    id: "n07", title: "76ers look to bounce back as Milwaukee comes to town",
    category: "Game Preview",
    excerpt: "Philadelphia searches for consistency after dropping three of its last five games.",
    body: "The Philadelphia 76ers aim to right the ship as the Milwaukee Bucks visit Wells Fargo Center. Aaron Steppe has been the bright spot, averaging over 30 points per game in his last five outings, but the team's supporting cast has struggled to find rhythm.",
    publishedDate: "2026-08-05", featured: false, relatedTeamId: "phi"
  },
  {
    id: "n08", title: "League roundup: scoring is up league-wide this season",
    category: "League",
    excerpt: "Pace and three-point volume continue to climb across the league, pushing average scoring to a decade high.",
    body: "Teams are averaging more possessions per game than at any point in the last ten seasons, driven by increased three-point attempts and faster transition offense. Analysts point to rule changes and shifting roster construction as key factors behind the trend.",
    publishedDate: "2026-08-14", featured: false
  },
  {
    id: "n09", title: "Rookie Watch: Xavier Lombard is turning heads in Philadelphia",
    category: "Player News",
    excerpt: "The 23-year-old guard has emerged as a reliable secondary scorer for the 76ers down the stretch.",
    body: "Xavier Lombard has developed into a dependable secondary scoring option for the 76ers, averaging 18.4 points on 37.6 percent three-point shooting since entering the starting lineup. Coaches highlight his defensive versatility as a growing strength.",
    publishedDate: "2026-08-07", featured: false, relatedPlayerId: "p20", relatedTeamId: "phi"
  },
  {
    id: "n10", title: "Mavericks-Thunder rivalry renews with playoff seeding on the line",
    category: "Game Preview",
    excerpt: "Dallas looks for revenge after a season-series loss to a red-hot Oklahoma City squad.",
    body: "The Dallas Mavericks host the Oklahoma City Thunder in a rematch of a tightly contested earlier meeting. Damon Ellery will look to control the pace against a Thunder defense that leads the league in steals per game.",
    publishedDate: "2026-08-19", featured: false, relatedTeamId: "dal"
  },
  {
    id: "n11", title: "Team News: Warriors adjust rotation ahead of stretch run",
    category: "Team News",
    excerpt: "Golden State shortens its bench as it pushes for a top playoff seed in the West.",
    body: "The Golden State Warriors have trimmed their playing rotation to nine players as the team enters a stretch of six games in nine nights. Devon Marsh and Ricardo Vance remain focal points of an offense looking to climb back into the top tier of the Western Conference.",
    publishedDate: "2026-08-13", featured: false, relatedTeamId: "gsw"
  },
  {
    id: "n12", title: "Knicks hang on to beat Heat in tight fourth-quarter finish",
    category: "Game Review",
    excerpt: "Corey Danforth's late jumper proved decisive in a back-and-forth affair at Kaseya Center.",
    body: "Corey Danforth scored 25 points, including a go-ahead jumper with under a minute remaining, as the New York Knicks edged the Miami Heat 112-108. Julian Mackey added 17 points and 11 rebounds off the bench in a balanced team effort.",
    publishedDate: "2026-08-08", featured: false, relatedTeamId: "nyk", relatedPlayerId: "p15"
  }
];

export function getNewsById(id: string): NewsArticle | undefined {
  return news.find((n) => n.id === id);
}
