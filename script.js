const listEl = document.getElementById('facts-list');
const filterEl = document.getElementById('filter');
const countEl = document.querySelector('[data-count]');
const chipsEl = document.getElementById('category-chips');
const randomTextEl = document.querySelector('[data-random-text]');
const randomCatsEl = document.querySelector('[data-random-categories]');
const randomTitleEl = document.querySelector('[data-random-title]');
const randomBtn = document.getElementById('random-btn');
const themeToggle = document.getElementById('theme-toggle');

const categoryOptions = categoriesConfig.map((c) => c.id);
let activeCategory = 'all';
let currentFacts = [...facts];

const getCategoryMeta = (id) => categoriesConfig.find((c) => c.id === id) || { id, label: id, icon: '🏷' };

const renderFacts = (items) => {
  listEl.innerHTML = '';
  items.forEach((fact) => {
    const li = document.createElement('li');
    const title = document.createElement('p');
    title.className = 'fact-title';
    title.textContent = `${items.indexOf(fact) + 1}. ${fact.title}`;

    const text = document.createElement('p');
    text.className = 'fact-text';
    text.textContent = fact.text;
    li.append(title, text);

    if (Array.isArray(fact.categories) && fact.categories.length) {
      const tagsWrap = document.createElement('div');
      tagsWrap.className = 'fact-tags';
      fact.categories.forEach((cat) => {
        const meta = getCategoryMeta(cat);
        const tag = document.createElement('span');
        tag.className = 'tag small';
        tag.textContent = `${meta.icon} ${meta.label}`;
        tagsWrap.append(tag);
      });
      li.append(tagsWrap);
    }

    listEl.append(li);
  });
  const label = items.length === facts.length
    ? `${facts.length} фактов`
    : `${items.length} из ${facts.length}`;
  countEl.textContent = label;
};

const applyFilters = () => {
  const q = filterEl.value.trim().toLowerCase();
  const byCategory = activeCategory === 'all'
    ? facts
    : facts.filter((fact) => fact.categories.includes(activeCategory));
  currentFacts = byCategory.filter((fact) => (
    !q || fact.text.toLowerCase().includes(q)
  ));
  renderFacts(currentFacts);
};

const renderChips = () => {
  chipsEl.innerHTML = '';
  categoryOptions.forEach((cat) => {
    const meta = getCategoryMeta(cat);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `chip ${cat === activeCategory ? 'active' : ''}`.trim();
    btn.dataset.category = cat;
    btn.textContent = `${meta.icon} ${meta.label}`;
    btn.setAttribute('aria-pressed', String(cat === activeCategory));
    btn.addEventListener('click', () => {
      activeCategory = cat;
      Array.from(chipsEl.children).forEach((chip) => {
        const isActive = chip.dataset.category === cat;
        chip.classList.toggle('active', isActive);
        chip.setAttribute('aria-pressed', String(isActive));
      });
      applyFilters();
    });
    chipsEl.append(btn);
  });
};

const pickRandom = () => {
  const source = currentFacts.length ? currentFacts : facts;
  const item = source[Math.floor(Math.random() * source.length)];
  randomTitleEl.textContent = item.title;
  randomTextEl.textContent = item.text;
  randomCatsEl.innerHTML = '';
  item.categories.forEach((cat) => {
    const meta = getCategoryMeta(cat);
    const tag = document.createElement('span');
    tag.className = 'tag small';
    tag.textContent = `${meta.icon} ${meta.label}`;
    randomCatsEl.append(tag);
  });
};

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '🌤' : '🌙';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему');
};

const initTheme = () => {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  setTheme(initial);
};

filterEl.addEventListener('input', applyFilters);
filterEl.addEventListener('search', () => {
  if (!filterEl.value) {
    applyFilters();
  }
});

randomBtn.addEventListener('click', pickRandom);

themeToggle.addEventListener('click', () => {
  const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

renderChips();
renderFacts(currentFacts);
pickRandom();
initTheme();
