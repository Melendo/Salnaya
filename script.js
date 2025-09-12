const toggleBtn = document.getElementById('darkToggle');
  const logoImg = document.getElementById('logoImg');
  const LIGHT_LOGO = './resources/img/logo.png';
  const DARK_LOGO = './resources/img/logoDark.png';

  // --- Al cargar la página ---
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    // Si no hay preferencia guardada => usar dark por defecto
    if (savedTheme === 'dark' || !savedTheme) {
      document.body.classList.add('dark-mode');
      logoImg.src = DARK_LOGO;
      toggleBtn.querySelector('i').classList.replace('bi-moon', 'bi-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      logoImg.src = LIGHT_LOGO;
    }
  });

  // --- Al hacer clic ---
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggleBtn.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.replace('bi-moon', 'bi-sun');
      logoImg.src = DARK_LOGO;
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.replace('bi-sun', 'bi-moon');
      logoImg.src = LIGHT_LOGO;
      localStorage.setItem('theme', 'light');
    }
  });