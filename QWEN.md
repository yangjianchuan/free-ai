# Project Context for Qwen Code

## Project Overview

This is a simple, static web application project named "Free AI". Its primary purpose is to serve as a navigation page for various free AI-related websites and resources. The project is built using fundamental web technologies: HTML, CSS, and JavaScript, leveraging the Bootstrap 5.3.0-alpha1 framework for responsive design and UI components.

The core functionality involves dynamically loading a list of AI websites from a JSON data file (`sitesData.json`) and rendering them as interactive cards on the main page (`index.html`). Users can click the buttons on these cards to visit the respective websites.

Key technologies used:
- **HTML5**: For the basic structure.
- **CSS3**: For custom styling, including card layouts, hover effects, and loading indicators. It imports Bootstrap's CSS.
- **JavaScript (ES6)**: For dynamic content loading and DOM manipulation. It fetches data and renders the site cards.
- **Bootstrap 5.3.0-alpha1**: Provides a responsive grid system and base styling.

## Building and Running

This is a client-side static website. There is no build step required for development. You can run it directly in a web browser.

1.  **Local Development/Viewing**:
    *   Open `index.html` directly in a web browser (e.g., Chrome, Firefox, Edge).
    *   Alternatively, serve the project directory using a local HTTP server for a more robust development environment. For example, using Python's built-in server:
        ```bash
        # Navigate to the project directory first
        python -m http.server 8000
        ```
        Then open `http://localhost:8000` in your browser.
2.  **Deployment**:
    *   As a static site, it can be deployed by simply copying all files to any standard web server or a static site hosting service (e.g., GitHub Pages, Netlify, Vercel).
3.  **Testing**:
    *   There are currently no automated tests configured for this project. Testing is manual by viewing the page in a browser and ensuring links and functionality work as expected.

## Development Conventions

- **File Structure**: Files are organized simply at the root level for easy access, with Bootstrap assets in a dedicated folder and a `dashboard` folder which seems to be currently unused or for future expansion.
- **Data Management**: Website link data is externalized in `sitesData.json`. This separation allows for easy updates to the list of sites without modifying the core HTML or JavaScript logic.
- **Styling**: Custom styles are defined in `style.css`. These styles build upon the Bootstrap base, adding specific look and feel for cards, tags, and the loading indicator. CSS classes are used semantically (e.g., `.card`, `.recommend-tag`).
- **JavaScript**: The `sites.js` file handles the dynamic loading and rendering logic. It uses modern JavaScript features like `fetch` for asynchronous data loading and DOM APIs for manipulation. The code waits for the `DOMContentLoaded` event to ensure the DOM is ready before attempting to modify it.
- **Responsiveness**: Bootstrap is used to ensure the layout adapts to different screen sizes.
- **Loading State**: A loading indicator is displayed while the site data is being fetched from `sitesData.json`.
