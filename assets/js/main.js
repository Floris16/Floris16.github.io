(function () {
  "use strict";
  const d = document;
  const data = window.PORTFOLIO;
  const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const icon = name => `<svg aria-hidden="true"><use href="assets/images/icons.svg#${esc(name)}"></use></svg>`;

  function projectCard(project) {
    return `<a class="project-card" href="progetto-${esc(project.id)}.html">
      <div class="project-card-top"><span>P${esc(project.number)}</span>${icon(project.icon)}</div>
      <p class="project-context">${esc(project.context)}</p>
      <h3>${esc(project.title)}</h3>
      <p class="project-summary">${esc(project.summary)}</p>
      <div class="project-card-foot"><span>${esc(project.role)}</span><b aria-hidden="true">↗</b></div>
    </a>`;
  }

  const homeProjects = d.querySelector("#home-projects");
  if (homeProjects) homeProjects.innerHTML = data.projects.slice(0, 3).map(projectCard).join("");
  const projectGrid = d.querySelector("#project-grid");
  if (projectGrid) projectGrid.innerHTML = data.projects.map(projectCard).join("");

  const projectId = d.body.dataset.projectId;
  if (projectId) {
    const project = data.projects.find(item => item.id === projectId);
    if (project) {
      d.title = `${project.title} — Gabriele Floris`;
      d.querySelector("#case-number").textContent = project.number;
      d.querySelector("#case-context").textContent = project.context;
      d.querySelector("#case-title").textContent = project.title;
      d.querySelector("#case-role").textContent = project.role;
      d.querySelector("#case-summary").textContent = project.summary;
      d.querySelector("#case-start").textContent = project.startingPoint;
      d.querySelector("#case-work").textContent = project.work;
      d.querySelector("#case-outcome").textContent = project.outcome;
      d.querySelector("#case-decisions").innerHTML = project.decisions.map(item => `<li>${esc(item)}</li>`).join("");
      d.querySelector("#case-tech").innerHTML = project.tech.map(item => `<span>${esc(item)}</span>`).join("");
      const current = data.projects.indexOf(project);
      const next = data.projects[(current + 1) % data.projects.length];
      const nextLink = d.querySelector("#next-project");
      nextLink.href = `progetto-${next.id}.html`;
      nextLink.querySelector("strong").textContent = next.title;
    }
  }

  const activePage = d.body.dataset.page;
  d.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === activePage) link.setAttribute("aria-current", "page");
  });

  const themeButton = d.querySelector(".theme-button");
  function updateThemeControl() {
    if (!themeButton) return;
    const dark = d.documentElement.dataset.theme === "dark";
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.setAttribute("aria-label", dark ? "Attiva modalità giorno" : "Attiva modalità notte");
    themeButton.querySelector("span").textContent = dark ? "☀" : "☾";
    const meta = d.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#121316" : "#f5f5f1";
  }
  updateThemeControl();
  if (themeButton) themeButton.addEventListener("click", () => {
    const next = d.documentElement.dataset.theme === "dark" ? "light" : "dark";
    d.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (_) {}
    updateThemeControl();
  });

  const menu = d.querySelector(".menu-button");
  const nav = d.querySelector(".site-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }

  d.querySelectorAll("[data-year]").forEach(item => item.textContent = new Date().getFullYear());
})();
