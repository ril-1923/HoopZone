import { games } from "@/data/games";
import { teams } from "@/data/teams";
import { players } from "@/data/players";
import { news } from "@/data/news";
import { renderGameCard } from "@/components/gameCard";
import { renderTeamCard } from "@/components/teamCard";
import { renderPlayerCard } from "@/components/playerCard";
import { renderNewsCard } from "@/components/newsCard";

function statLeader<T>(list: T[], key: (item: T) => number): T {
  return [...list].sort((a, b) => key(b) - key(a))[0];
}

export function render(): string {
  const todaysGames = games.filter((g) => g.status === "LIVE" || g.status === "UPCOMING").slice(0, 4);
  const featuredTeams = [...teams].sort((a, b) => b.wins - a.wins).slice(0, 4);
  const topPlayers = [...players].sort((a, b) => b.seasonStats.pointsPerGame - a.seasonStats.pointsPerGame).slice(0, 4);
  const latestNews = [...news].sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1)).slice(0, 3);

  const topScorer = statLeader(players, (p) => p.seasonStats.pointsPerGame);
  const topRebounder = statLeader(players, (p) => p.seasonStats.reboundsPerGame);
  const topAssister = statLeader(players, (p) => p.seasonStats.assistsPerGame);
  const topShooter = statLeader(players, (p) => p.seasonStats.threePointPct);

  return `
    <section class="hz-hero">
      <div class="container hz-hero-inner">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <span class="hz-hero-tip"><i class="bi bi-broadcast"></i> LIVE · ${todaysGames.filter((g) => g.status === "LIVE").length} games in progress</span>
            <h1>The Game <span class="hz-accent-text">Starts</span> Here</h1>
            <p class="lead">Live scores, deep stats, and every storyline from around the league — HoopZone keeps you courtside, all season long.</p>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a href="#/games" data-link="games" class="btn btn-hz-primary btn-lg"><i class="bi bi-play-fill me-1"></i>View Games</a>
              <a href="#/teams" data-link="teams" class="btn btn-hz-outline btn-lg">Explore Teams</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hz-section container">
      <div class="hz-section-head">
        <div>
          <div class="hz-eyebrow">Tip-off</div>
          <h2 class="h3 mb-0">Today's Games</h2>
        </div>
        <a href="#/games" data-link="games" class="btn btn-hz-outline btn-sm">All Games <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row g-3">
        ${
          todaysGames.length
            ? todaysGames.map((g) => `<div class="col-md-6">${renderGameCard(g)}</div>`).join("")
            : `<div class="col-12"><div class="hz-empty-state"><i class="bi bi-calendar-x"></i>No games scheduled right now.</div></div>`
        }
      </div>
    </section>

    <section class="hz-section container">
      <div class="hz-section-head">
        <div>
          <div class="hz-eyebrow">League Leaders</div>
          <h2 class="h3 mb-0">Statistics Overview</h2>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card">
            <div class="hz-stat-value">${topScorer.seasonStats.pointsPerGame.toFixed(1)}</div>
            <div class="hz-stat-label">Highest Scorer</div>
            <div class="small mt-1">${topScorer.firstName} ${topScorer.lastName}</div>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card">
            <div class="hz-stat-value">${topRebounder.seasonStats.reboundsPerGame.toFixed(1)}</div>
            <div class="hz-stat-label">Best Rebounder</div>
            <div class="small mt-1">${topRebounder.firstName} ${topRebounder.lastName}</div>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card">
            <div class="hz-stat-value">${topAssister.seasonStats.assistsPerGame.toFixed(1)}</div>
            <div class="hz-stat-label">Best Assists</div>
            <div class="small mt-1">${topAssister.firstName} ${topAssister.lastName}</div>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="hz-stat-card">
            <div class="hz-stat-value">${topShooter.seasonStats.threePointPct.toFixed(1)}%</div>
            <div class="hz-stat-label">Best 3PT Shooter</div>
            <div class="small mt-1">${topShooter.firstName} ${topShooter.lastName}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="hz-section container">
      <div class="hz-section-head">
        <div>
          <div class="hz-eyebrow">Around The League</div>
          <h2 class="h3 mb-0">Featured Teams</h2>
        </div>
        <a href="#/teams" data-link="teams" class="btn btn-hz-outline btn-sm">All Teams <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row g-3">
        ${featuredTeams.map((t) => `<div class="col-sm-6 col-lg-3">${renderTeamCard(t)}</div>`).join("")}
      </div>
    </section>

    <section class="hz-section container">
      <div class="hz-section-head">
        <div>
          <div class="hz-eyebrow">Rising Stars</div>
          <h2 class="h3 mb-0">Top Players</h2>
        </div>
        <a href="#/players" data-link="players" class="btn btn-hz-outline btn-sm">All Players <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row g-3">
        ${topPlayers.map((p) => `<div class="col-sm-6 col-lg-3">${renderPlayerCard(p)}</div>`).join("")}
      </div>
    </section>

    <section class="hz-section container">
      <div class="hz-section-head">
        <div>
          <div class="hz-eyebrow">Off The Court</div>
          <h2 class="h3 mb-0">Latest News</h2>
        </div>
        <a href="#/news" data-link="news" class="btn btn-hz-outline btn-sm">All News <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row g-3">
        ${latestNews.map((n) => `<div class="col-md-4">${renderNewsCard(n)}</div>`).join("")}
      </div>
    </section>
  `;
}

export function init(): void {
  // No interactive controls on the home page beyond global nav/search.
}
