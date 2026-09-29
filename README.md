# Free AI 项目

这是一个基于 Web 的 AI 应用前端项目，使用 HTML、CSS、JavaScript 和 Bootstrap 框架构建。

## 功能特性

### 主页面 (index.html)
- 响应式布局
- 使用 Bootstrap 5.3.0-alpha1 构建
- 动态渲染网站卡片（内嵌 JavaScript）
- 自定义样式（内嵌 CSS）

### AI 服务导航
- 分类展示（推荐标签、官网标签）
- 一键直达 AI 服务页面

### 工具页面
- **Base64 编码/解码**: 在线进行文本 Base64 编码与解码，支持 UTF-8、UTF-16LE、UTF-16BE 字符编码
- **URL 编码/解码**: 在线进行 URL 和 URL 组件的编码与解码
- **密码生成器**: 随机生成安全密码，支持数量、长度和字符集设置
- **JSON 格式化**: 在线进行 JSON 格式化、校验、排序、压缩和转义处理
- **GUID / UUID 生成器**: 批量生成 UUID v4，支持大小写、连字符、复制和下载
- **HTML 预览工具**: 在线快速预览和调试 HTML 代码

## 项目结构

```text
free-ai/
├── index.html                         # 主页面（AI服务导航）
├── htmlPreview.html                   # 在线HTML预览工具
├── base64.html                         # Base64编码/解码工具
├── url.html                            # URL编码/解码工具
├── json.html                           # JSON格式化工具
├── guid.html                           # GUID/UUID生成器
├── password.html                       # 密码生成器
├── LICENSE                             # 许可证文件
├── README.md                           # 项目说明
├── AGENTS.md                           # Codex开发规范文档
└── bootstrap-5.3.0-alpha1-dist/        # Bootstrap框架文件
    ├── css/
    └── js/
```

## 使用方法

### 快速开始

1. **克隆本仓库**
   ```bash
   git clone https://github.com/yangjianchuan/free-ai.git
   cd free-ai
   ```

2. **本地预览**
   - 方式1: 使用 VSCode Live Server 插件，右键点击 `index.html` → "Open with Live Server"
   - 方式2: 使用 Python 内置服务器
     ```bash
     python -m http.server 8000
     # 访问 http://localhost:8000
     ```
   - 方式3: 直接双击 `index.html` 文件用浏览器打开

3. **在线演示**: [https://bin9.top/](https://bin9.top/)

### 各页面功能

#### AI 服务导航 (index.html)
- **免登录 AI 服务**: 汇集支持免登录或邮箱注册的 AI 服务
- **分类展示**: 按推荐、官网等标签分类展示
- **一键直达**: 点击卡片即可访问对应 AI 服务

#### Base64 编码/解码工具 (base64.html)
- **编码与解码**: 支持 UTF-8、UTF-16LE、UTF-16BE
- **本地处理**: 数据仅在浏览器本地处理

#### URL 编码/解码工具 (url.html)
- **URL 编码**: 使用原生 `encodeURI`
- **URL 解码**: 使用原生 `decodeURI`
- **组件编码**: 使用原生 `encodeURIComponent`
- **组件解码**: 使用原生 `decodeURIComponent`
- **本地处理**: 数据仅在浏览器本地处理

#### JSON 格式化工具 (json.html)
- **格式化**: JSON 美化与压缩
- **校验**: 检查 JSON 格式是否有效
- **键排序**: 按键名递归排序
- **转义处理**: 支持添加转义和移除多层转义
- **本地处理**: 支持读取 JSON 文件，数据不上传服务器

#### GUID / UUID 生成器 (guid.html)
- **批量生成**: 一次生成 1～1000 个 UUID v4
- **格式选项**: 支持十六进制大写和连字符开关
- **复制与下载**: 可复制全部结果或下载 TXT 文件
- **本地处理**: GUID 在浏览器本地生成，不上传数据

#### 密码生成器 (password.html)
- **批量生成**: 一次生成 1～1000 个密码
- **长度设置**: 支持 1～256 位密码长度范围
- **字符集**: 支持数字、小写字母、大写字母和常用符号
- **复制下载**: 支持复制全部、随机复制一个和下载 TXT
- **本地处理**: 使用浏览器 Web Crypto API，数据不上传服务器

#### HTML 预览工具 (htmlPreview.html)
- **在线预览**: 输入 HTML 代码，实时预览效果
- **新窗口预览**: 在新标签页中预览
- **当前页面预览**: 在当前页面全屏预览
- **快速清空**: 一键清空代码

### 自定义开发

#### 添加新的 AI 服务
在 `index.html` 的 `sitesData` 数组中添加新的服务对象：

```javascript
{
  "title": "服务商名称",
  "tags": ["recommend", "official"],
  "description": "服务描述",
  "link": "https://example.com",
  "buttonText": "点击访问"
}
```

#### 修改样式
- 内嵌 CSS 样式位于 `index.html` 的 `<style>` 标签中
- 使用 CSS 变量统一主题色
- 遵循 BEM 命名规范

### 技术栈

- **前端框架**: Bootstrap 5.3.0-alpha1
- **样式系统**: CSS3 + CSS变量
- **脚本语言**: ES6 JavaScript
- **图标库**: Font Awesome（可选）
- **编辑器**: CodeMirror（历史工具页使用）

## 依赖

- [Bootstrap 5.3.0-alpha1](https://getbootstrap.com/)

## 许可证

本项目采用 MIT 许可证，详见 LICENSE 文件。