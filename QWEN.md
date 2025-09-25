# Free AI 项目 - iFlow 上下文文件

## 项目概述

**Free AI** 是一个基于 Web 的 AI 应用导航网站，为用户提供免费的 AI 工具和服务的快速访问入口。项目采用纯前端技术栈构建，无需后端服务器支持。

### 技术栈
- **前端框架**: HTML5 + CSS3 + JavaScript (ES6+)
- **UI 框架**: Bootstrap 5.3.0-alpha1
- **部署方式**: 静态网站，可直接在浏览器中打开

## 项目结构

```
free-ai/
├── index.html                     # 主页面 - AI 导航网站
├── siliconFlowApiBalanceQuery.html # 硅基流动 API 余额查询工具
├── bootstrap-5.3.0-alpha1-dist/   # Bootstrap 框架文件
│   ├── css/                       # CSS 样式文件
│   └── js/                        # JavaScript 文件
├── temp/                          # 临时文件目录（已忽略）
└── .vscode/                       # VSCode 配置（已忽略）
```

## 核心功能

### 1. 主页面 (index.html)
- **AI 网站导航**: 展示各类免费 AI 工具的卡片式导航
- **响应式设计**: 支持桌面和移动设备访问
- **动态渲染**: 使用 JavaScript 动态生成网站卡片
- **标签系统**: 支持"推荐"、"官网"等标签分类

### 2. 硅基流动余额查询工具 (siliconFlowApiBalanceQuery.html)
- **批量查询**: 支持同时查询多个 API 密钥的余额
- **并发处理**: 支持最多 6 个并发请求
- **数据导出**: 支持 CSV 格式导出查询结果
- **历史记录**: 本地存储查询历史
- **过滤功能**: 按余额状态筛选结果


## 开发指南

### 环境要求
- 现代浏览器（支持 ES6+）
- 无需服务器环境
- 无需构建工具

### 运行方式
```bash
# 直接打开主页面
open index.html

# 或使用本地服务器（推荐）
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 自定义配置

#### 修改网站数据
编辑 `index.html` 中的 `sitesData` 数组来增删改 AI 网站：

```javascript
const sitesData = [
  {
    "title": "网站名称",
    "tags": ["recommend", "official"], // 可选标签
    "description": "网站描述",
    "link": "https://example.com",
    "buttonText": "按钮文字"
  }
  // ... 更多网站
];
```

#### 自定义样式
修改 `index.html` 中的 `<style>` 部分来调整网站外观。

### 部署
- 可直接部署到 GitHub Pages、Netlify、Vercel 等静态网站托管服务
- 也可直接通过文件协议访问（file://）

## 项目约定

### 文件命名
- HTML 文件使用小写字母和连字符
- CSS 和 JavaScript 内嵌在 HTML 文件中
- 看板文件按模型名称和时间周期命名

### 代码风格
- 使用语义化 HTML5 标签
- CSS 采用 Flexbox 布局
- JavaScript 使用 ES6+ 语法
- 内联样式和脚本（为了简化部署）

### Git 忽略规则

- `.vscode/`: VSCode 配置
- `temp/`: 临时文件
- `QWEN.md`: 特定上下文文件

## 维护指南

### 添加新的 AI 网站
1. 在 `index.html` 的 `sitesData` 数组中添加新条目
2. 根据需要添加标签（recommend/official）
3. 测试链接有效性

### 更新 Bootstrap 版本
1. 下载新版 Bootstrap 文件
2. 替换 `bootstrap-5.3.0-alpha1-dist/` 目录内容
3. 更新 HTML 中的引用路径

### 添加新工具页面
1. 创建新的 HTML 文件
2. 确保与现有样式一致
3. 在主页面添加导航链接

## 注意事项

- 所有 AI 网站链接均为第三方服务，使用前请阅读相关服务条款
- API 密钥查询工具仅用于个人使用，请勿滥用
- 项目采用 MIT 许可证，可自由使用和修改