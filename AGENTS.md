# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Project Overview

This is a static web application for AI service navigation and browser-based utility tools, built with pure HTML5, CSS3, and vanilla JavaScript using Bootstrap 5.3.0-alpha1.

**Key Files:**
- `index.html` - Main AI service navigation portal with AI service listings
- `htmlPreview.html` - Online HTML preview and debugging tool
- `base64.html` - Base64 text encoding/decoding tool
- `url.html` - URL encoding/decoding tool
- `json.html` - JSON formatting, validation, sorting, and compression tool

- `guid.html` - Batch GUID (UUID v4) generator
- `password.html` - Local secure random password generator
- `bootstrap-5.3.0-alpha1-dist/` - Local Bootstrap framework files

## Development Commands

This is a static HTML project with no build process. Development can be done using:

```bash
# Method 1: VSCode Live Server
# Right-click on HTML file → "Open with Live Server"

# Method 2: Python HTTP server
python -m http.server 8000
# Access via: http://localhost:8000/index.html

# Method 3: Node.js HTTP server
npx http-server -p 8080

# Method 4: Direct file access (double-click HTML files)
```

## Architecture & Code Patterns

### Frontend Structure
- **No build tools or frameworks** - Pure HTML/CSS/JavaScript
- **Bootstrap 5.3.0-alpha1** for responsive design and components
- **CSS Custom Properties** for theming and consistent styling
- **Modular JavaScript functions** for specific tasks

### Key JavaScript Patterns
- **Event-driven architecture** with DOM event listeners
- **Async/await** for browser clipboard and local asynchronous operations
- **Error handling** with user-friendly status messages
- **Web Crypto API** for secure random GUID/UUID and password generation

## Important Implementation Details

### AI Service Data Structure
Services are embedded directly in `index.html` as JavaScript objects with:
- `title`, `tags`, `description`, `link`, `buttonText` properties
- Tags: `"recommend"` (👍推荐) and `"official"` (官网)
- Dynamic card rendering based on this data

### Local Utility Tools
- **Base64 (`base64.html`)**: Text Base64 encoding/decoding with UTF-8, UTF-16LE, and UTF-16BE support. Processing stays in the browser.
- **URL (`url.html`)**: Native `encodeURI`, `decodeURI`, `encodeURIComponent`, and `decodeURIComponent` operations.
- **JSON (`json.html`)**: JSON formatting, validation, compression, recursive key sorting, and escape/unescape processing. Supports local JSON file input.
- **GUID / UUID (`guid.html`)**: UUID v4 generation with `crypto.randomUUID()` when available and `crypto.getRandomValues()` fallback; supports batch generation, case and hyphen options, copy, random copy, and download.
- **Password (`password.html`)**: Secure random password generation using `crypto.getRandomValues()`, with quantity, length range, character-set presets, custom character sets, copy, random copy, and download.
- **HTML Preview (`htmlPreview.html`)**: Local HTML editing and preview in a new window or the current page.

### Browser-Side Data Handling
- Utility pages that generate or transform user data perform processing locally in the browser.
- No utility page uploads generated passwords, GUIDs, Base64/URL/JSON content, or other local tool input to a server.
- Password generation uses Web Crypto API random values rather than `Math.random()`.
## Performance Considerations

- **Local processing**: Utility tools avoid unnecessary network requests
- **Responsive design**: Utility pages adapt to desktop and mobile layouts
- **Minimal DOM manipulation**: Keep interactions lightweight and direct

## Browser Compatibility

- **Modern browsers**: Chrome, Firefox, Safari, Edge (ES6+ support required)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers
