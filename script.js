const state = {
  currentRoute: 'inicio',
};

const appShell = document.getElementById('appShell');
const routeViews = Array.from(document.querySelectorAll('.route-view'));
const routeLinks = Array.from(document.querySelectorAll('[data-route-link]'));
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');

function normalizeRoute(rawHash) {
  const cleaned = String(rawHash || '')
    .replace('#', '')
    .replace('/', '')
    .trim()
    .toLowerCase();

  if (!cleaned) {
    return 'inicio';
  }

  const exists = routeViews.some((view) => view.dataset.route === cleaned);
  return exists ? cleaned : 'inicio';
}

function updateActiveLinks(route) {
  routeLinks.forEach((link) => {
    const isActive = link.dataset.routeLink === route;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

function updateViews(route) {
  routeViews.forEach((view) => {
    const isActive = view.dataset.route === route;
    view.classList.toggle('is-active', isActive);
    view.hidden = !isActive;
  });
}

function navigateTo(route, options = { replaceHash: true }) {
  state.currentRoute = route;
  updateViews(route);
  updateActiveLinks(route);

  if (options.replaceHash) {
    window.location.hash = `/${route}`;
  }

  if (appShell) {
    appShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function handleHashRoute() {
  const route = normalizeRoute(window.location.hash);
  navigateTo(route, { replaceHash: false });
}

function bindLinks() {
  routeLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetRoute = link.dataset.routeLink;
      navigateTo(targetRoute, { replaceHash: true });

      if (mobilePanel && !mobilePanel.hidden) {
        mobilePanel.hidden = true;
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

function bindMobileToggle() {
  if (!menuToggle || !mobilePanel) {
    return;
  }

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    mobilePanel.hidden = isExpanded;
  });
}

function initRouting() {
  bindLinks();
  bindMobileToggle();
  handleHashRoute();

  window.addEventListener('hashchange', handleHashRoute);
}

initRouting();
