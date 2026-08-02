(() => {
  const routeViews = Array.from(document.querySelectorAll(".route-view"));
  const mobileNavigation = document.getElementById("mobileNavigation");
  const menuToggle = document.getElementById("menuToggle");
  let hasLoadedRoute = false;

  function getRouteFromHash(hash) {
    const route = String(hash || "").replace(/^#\/?/, "").split(/[?#]/)[0].trim().toLowerCase();
    return routeViews.some((view) => view.dataset.route === route) ? route : "inicio";
  }

  function closeMobileNavigation() {
    if (!mobileNavigation || !menuToggle) return;
    mobileNavigation.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function setActiveRoute(route, shouldScroll) {
    const activeView = routeViews.find((view) => view.dataset.route === route);
    if (!activeView) return;

    routeViews.forEach((view) => {
      const isActive = view === activeView;
      view.hidden = !isActive;
      view.classList.toggle("is-active", isActive);
      view.setAttribute("aria-hidden", String(!isActive));
    });

    document.title = activeView.dataset.title || "OceanoTech Innova";
    document.querySelectorAll("a[href^='#/']").forEach((link) => {
      if (getRouteFromHash(link.getAttribute("href")) === route) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    closeMobileNavigation();
    if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function synchronizeRoute() {
    const route = getRouteFromHash(window.location.hash);
    if (window.location.hash && window.location.hash !== "#/" + route) {
      window.history.replaceState(null, "", "#/" + route);
    }
    setActiveRoute(route, hasLoadedRoute);
    hasLoadedRoute = true;
  }

  if (menuToggle && mobileNavigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mobileNavigation.hidden = isOpen;
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("a[href^='#/']")) closeMobileNavigation();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNavigation();
  });
  window.addEventListener("hashchange", synchronizeRoute);
  synchronizeRoute();
})();
