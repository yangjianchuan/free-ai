# Qwen Context for D:\SVNYJC\yangjianchuan\free-ai

This document provides an overview of the `free-ai` project for use by Qwen Code in future interactions. It describes the project's nature, structure, and key components.

## Project Type and Overview

This is a **static HTML/CSS/JavaScript project**. It serves as a multi-purpose web portal, primarily consisting of:

1.  **A Navigation Hub (`index.html`)**: A main page aggregating links to various online AI tools, services, and resources. It uses Bootstrap for layout and responsiveness.
2.  **A Data Visualization Dashboard (`dashboard/`)**: A directory containing specialized HTML files for data visualization, focusing on the financial performance of a company (e.g., `dashboard/gemini-2.5-pro-exp-03-25/2024.html`). These dashboards use modern libraries like Tailwind CSS, ECharts, and Framer Motion.

## Key Technologies

*   **HTML5**
*   **CSS3** (Including custom styles in `style.css` and Bootstrap classes)
*   **Bootstrap 5.3.0-alpha1** (For the main navigation page)
*   **Tailwind CSS** (For the dashboard pages)
*   **JavaScript** (Vanilla JS for interactivity and ECharts for data visualization on dashboard pages)
*   **ECharts** (For rendering charts on dashboard pages)
*   **Framer Motion** (For animations on dashboard pages)

## Project Structure

```
free-ai/
├── index.html              # Main navigation page
├── style.css               # Custom CSS for the main page
├── LICENSE                 # Project license
├── README.md               # Project description and usage
├── .gitignore              # Git ignore rules
├── bootstrap-5.3.0-alpha1-dist/  # Local Bootstrap distribution
│   ├── css/
│   └── js/
└── dashboard/              # Directory for specialized dashboards
    ├── gemini-2.5-pro-exp-03-25/
    │   ├── 2024.html       # Dashboard for 2024 financial data
    │   ├── 2024CashFlow.html # (Potentially) Cash flow specific dashboard
    │   └── 2025-Q1.html    # (Potentially) 2025 Q1 data dashboard
    ├── gemini-2.5-pro-preview-05-06/ # (Potentially) Another dashboard set
    ├── gpt-5/              # (Potentially) Another dashboard set
    └── microsoft-copilot/  # (Potentially) Another dashboard set
```

## Main Components

### 1. Main Navigation (`index.html`)

*   **Purpose:** Acts as a central hub linking to various external AI-related websites and resources.
*   **Features:**
    *   Responsive design using Bootstrap.
    *   Cards for each link with titles, descriptions, and tags (e.g., "官网" for official sites, "👍" for recommendations).
    *   Header with safety, privacy tips, and links to other resources.
*   **Customization:** Styles are primarily in `style.css`.

### 2. Data Dashboards (`dashboard/`)

*   **Purpose:** Provide detailed, visually rich data visualizations, currently focused on financial analysis.
*   **Example (`dashboard/gemini-2.5-pro-exp-03-25/2024.html`):**
    *   **Theme:** Analysis of a company's 2024 financial performance, highlighting significant losses and strategic responses.
    *   **Technology Stack:** Uses Tailwind CSS for layout, ECharts for dynamic charts, and Framer Motion for entrance animations.
    *   **Content:** Key financial metrics (Revenue, Net Loss, Assets, Liabilities, Cash Flow, Debt Ratios) displayed in a "bento grid" layout with a detailed summary table and chart.
    *   **Structure:** Single HTML file containing all HTML, CSS (in `<style>` tags), and JavaScript for rendering and interactivity.

## Development and Usage

*   **Running:** Simply open the relevant `.html` file in a web browser. The main navigation (`index.html`) requires `bootstrap-5.3.0-alpha1-dist` and `style.css` to be present. Dashboard files are self-contained.
*   **Editing:** Modify `index.html` and `style.css` for the main navigation. For dashboards, edit the specific `.html` files directly.
*   **Adding Content:**
    *   To the main navigation: Add new `<div class="card">` elements in `index.html`.
    *   To dashboards: Create new HTML files within the relevant subdirectories under `dashboard/`.

## Building and Testing

There is no build process required for this static project. It runs directly in the browser. Testing involves manually opening the HTML files and verifying layout and functionality in different browsers.

## Conventions

*   The main navigation uses a consistent card-based layout for links.
*   Dashboard pages use a Tailwind-based "bento grid" structure for organizing information.
*   Visual styling for tags (`.official-tag`, `.recommend-tag`) is defined in `style.css`.
*   Dashboard pages use a dark theme with a specific red (`#E31937`) accent color.
