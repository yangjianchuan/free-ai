# Project Context for Qwen Code Agent

## Project Overview

This is a **static web application** project named "Free AI". Its primary purpose is to serve as a navigation hub or directory for various free AI-related online services and resources. The project is built using standard web technologies: HTML, CSS (with Bootstrap 5.3.0-alpha1), and JavaScript.

The main page (`index.html`) dynamically renders a list of website cards based on embedded data. Each card represents an AI service, providing its name, description, tags (like 'recommended' or 'official'), and a link to access it. A secondary page (`siliconFlowApiBalanceQuery.html`) is included to check API key balances for the SiliconFlow platform.

Key technologies and frameworks used:
*   **HTML5**: For the basic structure.
*   **CSS3**: For styling, including custom styles and Bootstrap utility classes.
*   **Bootstrap 5.3.0-alpha1**: For responsive layout and UI components.
*   **Vanilla JavaScript**: For dynamic content rendering, data handling, and interactivity (e.g., fetching API balances).

## Building and Running

This is a client-side static website. There is no build process required. The project can be run directly by opening the HTML files in a web browser.

### Key Commands

*   **Run/View**: Open `index.html` in a web browser.
*   **Run/View SiliconFlow Balance Checker**: Open `siliconFlowApiBalanceQuery.html` in a web browser.

### Deployment

The project can be deployed by simply copying all files to a web server's directory. It does not require a specific runtime environment or server-side processing.

## Development Conventions

*   **File Structure**: The main entry point is `index.html`. A dedicated page for the SiliconFlow API balance check exists in `siliconFlowApiBalanceQuery.html`. Bootstrap assets are located in `bootstrap-5.3.0-alpha1-dist/`.
*   **Styling**: Custom CSS is embedded within `<style>` tags in the HTML files. Bootstrap classes are used for layout and basic component styling.
*   **Scripting**: JavaScript logic, including data definition and DOM manipulation, is embedded within `<script>` tags in the HTML files.
*   **Data**: The list of AI websites is defined as a JavaScript array (`sitesData`) directly within `index.html`. The SiliconFlow balance checker handles data through user input and API responses.