# Cafetería Salnaya - Menú Digital

Menú digital interactivo y responsive para la Cafetería Salnaya, diseñado para ofrecer una visualización clara y moderna de la oferta gastronómica del establecimiento con soporte para modo oscuro.

# Descripción detallada

Este proyecto surge con el objetivo de digitalizar la carta física de la **Cafetería Salnaya** (ubicada en Calle del Prof. José García Santesmases, 9, Moncloa). Permite a los clientes acceder de forma rápida y sencilla al menú escaneando un código QR en el local, mejorando la experiencia del cliente y facilitando la consulta de la oferta del establecimiento desde cualquier dispositivo móvil o de escritorio.

El menú carga de forma dinámica los productos desde un archivo JSON estructurado, dividiendo la carta en cuatro secciones principales: desayuno, comida y aperitivos, bebidas y extras. Los usuarios pueden colapsar y expandir cada categoría cómodamente mediante menús desplegables. Asimismo, la aplicación incluye una funcionalidad para alternar entre modo claro y modo oscuro que recuerda la preferencia del usuario a través de almacenamiento local (`localStorage`).

## Índice
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución y Uso](#ejecución-y-uso)
- [Arquitectura y Stack Tecnológico](#arquitectura-y-stack-tecnológico)
- [Contribuciones](#contribuciones)
- [Licencia y Créditos](#licencia-y-créditos)

## Requisitos Previos

Dado que se trata de un sitio web estático, no se requiere un servidor de base de datos ni un compilador específico. Solo se necesita:
- **Sistema Operativo:** Linux, macOS o Windows.
- **Navegador Web:** Chrome, Firefox, Safari, Edge o cualquier navegador web moderno.
- **Servidor Web Local (Recomendado para desarrollo):** Python, Node.js (con `http-server` o similar), o la extensión Live Server en VS Code para evitar restricciones de CORS al cargar el archivo JSON local.

## Instalación

Sigue estos pasos para clonar el repositorio y configurar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Melendo/Salnaya.git
   cd Salnaya
   ```

2. **Instalar dependencias:**
   *Este proyecto no requiere de gestores de paquetes como npm o pip, ya que todas las librerías se cargan mediante CDN.*

## Ejecución y Uso

Al cargar el archivo `menu.json` local a través de peticiones HTTP en JavaScript, abrir el archivo `index.html` directamente en el navegador haciendo doble clic puede provocar errores de política de seguridad (CORS). Se recomienda utilizar un servidor web local para el desarrollo:

### Servidor Local con Python
Si tienes Python instalado, levanta un servidor de forma inmediata en el puerto 8000:
```bash
python -m http.server 8000
```
Luego accede desde tu navegador a `http://localhost:8000`.

### Servidor Local con Node.js
Si prefieres usar Node.js, puedes levantar un servidor con `npx` sin necesidad de instalación global:
```bash
npx http-server -p 8080
```
Luego accede desde tu navegador a `http://localhost:8080`.

### Servidor Local con VS Code
Si utilizas Visual Studio Code, puedes instalar la extensión **Live Server**, hacer clic derecho sobre `index.html` y seleccionar **Open with Live Server**.

## Arquitectura y Stack Tecnológico

El proyecto está diseñado bajo una arquitectura web estática sin dependencias de backend complejas:

- **Frontend / Core:** HTML5 semántico estructurado.
- **Estilos y Componentes:** [Bootstrap v5.3.3](https://getbootstrap.com/) (cargado por CDN) para garantizar un diseño responsivo y mobile-first junto con [Bootstrap Icons v1.11.3](https://icons.getbootstrap.com/).
- **Tipografía:** Google Fonts utilizando las fuentes *Cinzel Decorative*, *Montserrat* y *Playfair Display* para otorgar una estética clásica y elegante.
- **Interactividad y Carga Dinámica:** Vanilla JavaScript (ES6) en `script.js` encargado de:
  - Realizar una petición asíncrona para leer y procesar el menú desde `menu.json`.
  - Generar dinámicamente la estructura HTML del menú interactivo (tipo acordeón).
  - Gestionar el estado del tema oscuro/claro y persistirlo en el navegador mediante `localStorage`.
  - Controlar el colapso automático del menú de navegación móvil y realizar desplazamientos suaves (*smooth scroll*) a las secciones seleccionadas.
- **Almacenamiento de Datos:** Archivo JSON estructurado (`menu.json`) con las distintas categorías de platos, descripciones, iconos y precios, permitiendo un mantenimiento del menú sin necesidad de modificar el código HTML de la interfaz.
- **DevOps y Despliegue:** Configurado para su despliegue automático en **GitHub Pages** bajo el dominio personalizado [salnaya.es](http://salnaya.es) (definido en el archivo `CNAME`).

## Contribuciones

Si deseas contribuir al desarrollo de este proyecto, por favor sigue los siguientes pasos:
1. Haz un Fork del repositorio.
2. Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit claro siguiendo convenciones (`git commit -m 'Añade nueva funcionalidad'`).
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre una Pull Request explicando detalladamente los cambios realizados.

## Licencia y Créditos

### Créditos y Agradecimientos
- Desarrollado por [Melendo](https://github.com/Melendo) e [Iván Alcalde](https://github.com/IAlcCamDev).
