# Project Context for Qwen Code

## Project Overview

This is a simple, static web application project named "Free AI". Its primary purpose is to serve as a navigation page or directory for various free AI-related online tools and resources. The project is built using basic web technologies: HTML, CSS, and JavaScript, leveraging the Bootstrap 5.3.0-alpha1 framework for responsive design and UI components.

Key features include:
- A responsive grid layout for displaying resource cards.
- Dynamically rendered cards for each AI tool/resource, loaded from a JavaScript data file (`sites.js`).
- Custom styling via `style.css`.
- Use of Bootstrap for base styling and layout utilities.

There is also a `dashboard` directory containing subdirectories, but these appear unrelated to the main index page and may be for a separate part of the site or future development.

## Building and Running

This is a client-side static website. There is no build process required.

### Running the Application
1.  Open the `index.html` file directly in a web browser.
2.  Alternatively, serve the project directory using any static file server (e.g., `python -m http.server`, `npx serve .`).

### Development Commands
There are no specific build, test, or development commands defined for this project. It's a simple static site.

## Development Conventions

Based on the code:
- **File Naming:** Files use lowercase names with hyphens (e.g., `style.css`, `sites.js`).
- **HTML Structure:** Uses standard HTML5 doctype and structure.
- **CSS:** Uses a separate `style.css` file for custom styles. Classes are named using kebab-case (e.g., `.card-title`, `.official-tag`). Leverages Bootstrap classes extensively.
- **JavaScript:** Logic for rendering the site's content is contained in `sites.js`. It uses standard DOM manipulation and event listeners.
- **Bootstrap:** Heavily relies on Bootstrap 5.3.0-alpha1 for layout (`container`, `card` classes) and responsive behavior.
- **Data:** Website data is stored directly within `sites.js` as a JavaScript array of objects.
