const toggleBtn = document.getElementById('darkToggle');
const logoImg = document.getElementById('logoImg');
const LIGHT_LOGO = './resources/img/LogoD.webp';
const DARK_LOGO = './resources/img/LogoW.webp';

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

async function cargarMenu() {
    const res = await fetch('menu.json');
    const menu = await res.json();

    for (const seccion of ['desayuno', 'comida', 'bebidas', 'extras']) {
        const contenedor = document.getElementById(`${seccion}-content`);
        contenedor.innerHTML = generarAccordion(menu[seccion], seccion);
    }
}

function generarAccordion(categorias, seccionId) {
    let html = `<div class="accordion" id="accordion-${seccionId}">`;
    categorias.forEach((cat, i) => {
        html += `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading-${seccionId}-${i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${seccionId}-${i}" aria-expanded="false" aria-controls="collapse-${seccionId}-${i}">
            <span class="subsection-title"><i class="bi ${cat.icono}"></i> ${cat.categoria}</span>
          </button>
        </h2>
        <div id="collapse-${seccionId}-${i}" class="accordion-collapse collapse" aria-labelledby="heading-${seccionId}-${i}" data-bs-parent="#accordion-${seccionId}">
          <div class="accordion-body">
            <div class="row row-cols-1 row-cols-md-2 g-4 menu-row">
              ${cat.platos.map(plato => `
                <div class="menu-item">
                  <h5><i class="bi ${cat.icono}"></i>${plato.nombre} <span>${plato.precio}</span></h5>
                  ${plato.descripcion ? `<p>${plato.descripcion}</p>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    });
    html += `</div>`;
    return html;
}

document.addEventListener('DOMContentLoaded', cargarMenu);

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).hide();
          setTimeout(() => {
            const section = document.querySelector(targetId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 350); // Ajusta el tiempo si la animación es más lenta
        } else {
          const section = document.querySelector(targetId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });
