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

### 首页卡片与结构化数据维护
- 首页服务直接写在 `index.html` 的 `<main class="container">` 内，使用静态 `article.card`、`h2.card-title`、`p.card-text` 和按钮链接；不使用 JavaScript 动态渲染或单独维护卡片数据数组。
- 推荐和官网标签分别使用 `recommend-tag` 与 `official-tag`；修改卡片时同步维护标题、描述、标签、链接和按钮文字。
- 卡片链接保留 `target="_blank"` 与 `rel="noopener noreferrer"`，`aria-label` 同时包含站点名称和按钮文字。
- 首页静态 JSON-LD 包含 `WebSite`、`CollectionPage` 及其 `mainEntity` 下的 `ItemList`；增删或调整卡片时，同步条目名称、绝对 URL、顺序、`position` 与 `numberOfItems`，保持与可见卡片一致。
- 线上首页为 `https://bin9.top/`，站内结构化数据链接使用该域名下的绝对 URL；新增本地工具页时同步 `sitemap.xml`。
- 首页保留唯一可见 h1、SEO 元信息和共享 `seo.css` 引用；无需 Bootstrap bundle 或其他运行时卡片渲染脚本。

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
