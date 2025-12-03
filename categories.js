// Сопоставление категорий с подписями и иконками
const categoriesConfig = [
  { id: 'all', label: 'Все', icon: '✨' },
  { id: 'history', label: 'История', icon: '📜' },
  { id: 'internet', label: 'Интернет', icon: '🌐' },
  { id: 'web', label: 'Веб', icon: '🕸' },
  { id: 'software', label: 'Софт', icon: '💾' },
  { id: 'hardware', label: 'Железо', icon: '🛠' },
  { id: 'dev', label: 'Разработка', icon: '👩‍💻' },
  { id: 'design', label: 'Дизайн', icon: '🎨' },
  { id: 'security', label: 'Безопасность', icon: '🛡' },
  { id: 'games', label: 'Игры', icon: '🎮' }
];

globalThis.categoriesConfig = categoriesConfig;
