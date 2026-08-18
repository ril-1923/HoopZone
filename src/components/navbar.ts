export interface NavItem {
  label: string;
  route: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", route: "" },
  { label: "Games", route: "games" },
  { label: "Teams", route: "teams" },
  { label: "Players", route: "players" },
  { label: "Standings", route: "standings" },
  { label: "Statistics", route: "statistics" },
  { label: "News", route: "news" }
];

export function renderNavbar(): string {
  const links = NAV_ITEMS.map(
    (item) => `
      <li class="nav-item">
        <a class="nav-link hz-nav-link" data-link="${item.route}" data-route="${item.route}" href="#/${item.route}">${item.label}</a>
      </li>`
  ).join("");

  return `
    <nav class="navbar navbar-expand-lg hz-navbar py-2">
      <div class="container">
        <a class="navbar-brand hz-brand" data-link="" href="#/">
          <span class="hz-brand-ball"><i class="bi bi-dribbble"></i></span>
          Hoop<span class="hz-brand-zone">Zone</span>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#hzNavCollapse" aria-controls="hzNavCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-2" style="color: var(--hz-text);"></i>
        </button>
        <div class="collapse navbar-collapse" id="hzNavCollapse">
          <ul class="navbar-nav mx-lg-auto my-2 my-lg-0 gap-lg-1" id="hzNavList">
            ${links}
          </ul>
          <div class="d-flex align-items-center gap-2">
            <button class="hz-icon-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#hzSearchOffcanvas" aria-controls="hzSearchOffcanvas" aria-label="Search HoopZone">
              <i class="bi bi-search"></i>
            </button>
            <button class="hz-icon-btn" type="button" id="hzThemeToggle" aria-label="Toggle dark or light theme">
              <i class="bi bi-moon-stars" id="hzThemeIcon"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="offcanvas offcanvas-top hz-offcanvas-search" tabindex="-1" id="hzSearchOffcanvas" aria-labelledby="hzSearchOffcanvasLabel">
      <div class="offcanvas-header container">
        <h5 class="offcanvas-title hz-eyebrow" id="hzSearchOffcanvasLabel">Search HoopZone</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body container">
        <div class="input-group input-group-lg mb-3">
          <span class="input-group-text hz-input"><i class="bi bi-search"></i></span>
          <input type="search" class="form-control hz-input" id="hzSearchInput" placeholder="Search teams, players, games, news..." aria-label="Search">
        </div>
        <div id="hzSearchResults"></div>
      </div>
    </div>
  `;
}

export function setActiveNavItem(currentRoute: string): void {
  const topLevel = currentRoute.split("/")[0] ?? "";
  document.querySelectorAll<HTMLAnchorElement>("#hzNavList .hz-nav-link").forEach((link) => {
    const route = link.dataset.route ?? "";
    link.classList.toggle("active", route === topLevel);
  });
}
