(function () {
  "use strict";
  const d = document;
  const c = window.PORTFOLIO;
  const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const externalLink = (label, url) => `<a href="${esc(url)}" ${url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${esc(label)} <span>↗</span></a>`;

  d.querySelector("#hero-copy").textContent = c.person.hero;
  d.querySelector("#profile-copy").textContent = c.person.profile;
  d.querySelector("#hero-links").innerHTML = externalLink("LinkedIn", c.person.linkedin) + externalLink("E-mail", "mailto:" + c.person.email);
  d.querySelectorAll(".cv-link").forEach(link => link.href = c.person.cv);

  d.querySelector("#method-grid").innerHTML = c.method.map(item => `
    <article>
      <span class="method-number">${esc(item[0])}</span>
      <div><h3>${esc(item[1])}</h3><p>${esc(item[2])}</p></div>
    </article>`).join("");

  d.querySelector("#projects-list").innerHTML = c.cases.map((project, index) => `
    <details class="case" ${index === 0 ? "open" : ""}>
      <summary>
        <span class="case-number">0${index + 1}</span>
        <span class="case-title"><small>${esc(project.sector)}</small><strong>${esc(project.title)}</strong></span>
        <span class="case-role">${esc(project.role)}</span>
        <span class="case-icon" aria-hidden="true"></span>
      </summary>
      <div class="case-body">
        <p class="case-lead">${esc(project.intro)}</p>
        <div class="case-columns">
          <section><h4>La sfida</h4><p>${esc(project.challenge)}</p></section>
          <section><h4>Il mio contributo</h4><p>${esc(project.contribution)}</p></section>
          <section><h4>La soluzione</h4><p>${esc(project.solution)}</p></section>
          <section><h4>Decisioni chiave</h4><ul>${project.decisions.map(item => `<li>${esc(item)}</li>`).join("")}</ul></section>
        </div>
        <div class="case-result"><span>Risultato</span><p>${esc(project.result)}</p></div>
        <div class="case-footer"><div>${project.tech.map(item => `<span>${esc(item)}</span>`).join("")}</div><p>${project.skills.map(esc).join(" · ")}</p></div>
      </div>
    </details>`).join("");

  d.querySelectorAll(".case").forEach(item => item.addEventListener("toggle", () => {
    if (!item.open) return;
    d.querySelectorAll(".case[open]").forEach(other => { if (other !== item) other.removeAttribute("open"); });
  }));

  d.querySelector("#timeline").innerHTML = c.experience.map((item, index) => `
    <article>
      <span class="timeline-index">0${index + 1}</span>
      <time>${esc(item.date)}</time>
      <div><small>${esc(item.company)}</small><h3>${esc(item.role)}</h3><p>${esc(item.text)}</p></div>
    </article>`).join("");

  d.querySelector("#skills-grid").innerHTML = Object.entries(c.skills).map(([title, items], index) => `
    <article><span>0${index + 1}</span><h3>${esc(title)}</h3><ul>${items.map(item => `<li>${esc(item)}</li>`).join("")}</ul></article>`).join("");

  d.querySelector("#certs").innerHTML = c.certifications.map((item, index) => `
    <article><span>SF / 0${index + 1}</span><div><small>Salesforce certification</small><h3>${esc(item)}</h3></div></article>`).join("");

  const email = d.querySelector("#email-link");
  email.href = "mailto:" + c.person.email;
  email.innerHTML = `${esc(c.person.email)} <span>↗</span>`;
  d.querySelector("#contact-links").innerHTML = externalLink("LinkedIn", c.person.linkedin) + `<a href="${esc(c.person.cv)}" download>Download CV <span>↓</span></a>`;
  d.querySelector("#year").textContent = new Date().getFullYear();

  const menuButton = d.querySelector(".menu-toggle");
  const nav = d.querySelector("#nav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); });

  const themeButton = d.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) d.documentElement.dataset.theme = savedTheme;
  themeButton.addEventListener("click", () => {
    const next = d.documentElement.dataset.theme === "dark" ? "light" : "dark";
    d.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    d.querySelector('meta[name="theme-color"]').content = next === "dark" ? "#101319" : "#f2f0e9";
  });
})();
