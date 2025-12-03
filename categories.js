// Сопоставление категорий с подписями и иконками
const categoriesConfig = [
  { id: 'all', label: 'Все', icon: 'fa-solid fa-shapes' },
  { id: 'history', label: 'История', icon: 'fa-solid fa-scroll' },
  { id: 'internet', label: 'Интернет', icon: 'fa-solid fa-network-wired' },
  { id: 'web', label: 'Веб', icon: 'fa-solid fa-globe' },
  { id: 'software', label: 'Софт', icon: 'fa-solid fa-floppy-disk' },
  { id: 'hardware', label: 'Железо', icon: 'fa-solid fa-microchip' },
  { id: 'dev', label: 'Разработка', icon: 'fa-solid fa-code' },
  { id: 'design', label: 'Дизайн', icon: 'fa-solid fa-pen-nib' },
  { id: 'security', label: 'Безопасность', icon: 'fa-solid fa-shield-halved' },
  { id: 'games', label: 'Игры', icon: 'fa-solid fa-gamepad' }
];

globalThis.categoriesConfig = categoriesConfig;
