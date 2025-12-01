# Free AI 项目

这是一个基于Web的AI应用前端项目，使用HTML、CSS、JavaScript和Bootstrap框架构建。

## 功能特性

### 主页面 (index.html)
- 响应式布局
- 使用Bootstrap 5.3.0-alpha1构建
- 动态渲染网站卡片 (内嵌JavaScript)
- 自定义样式(内嵌CSS)

### AI服务导航
- 分类展示（推荐标签、官网标签）
- 一键直达AI服务页面

### 工具页面
- **硅基流动余额查询**: 批量查询API密钥余额
- **HTML预览工具**: 在线快速预览和调试HTML代码

## 项目结构

```
free-ai/
├── index.html                         # 主页面（AI服务导航）
├── htmlPreview.html                   # 在线HTML预览工具
├── siliconFlowApiBalanceQuery.html    # 硅基流动余额查询工具
├── LICENSE                            # 许可证文件
├── README.md                          # 项目说明
├── CLAUDE.md                          # Claude开发规范文档
└── bootstrap-5.3.0-alpha1-dist/     # Bootstrap框架文件
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
   - 方式1: 使用VSCode Live Server插件，右键点击 `index.html` → "Open with Live Server" (默认端口5500)
   - 方式2: 使用Python内置服务器
     ```bash
     python -m http.server 8000
     # 访问 http://localhost:8000
     ```
   - 方式3: 直接双击 `index.html` 文件用浏览器打开

3. **在线演示**: [https://bin9.top/](https://bin9.top/)

### 各页面功能

#### AI服务导航 (index.html)
- **免登录AI服务**: 汇集支持免登录或邮箱注册的AI服务
- **分类展示**: 40+个AI服务平台，按推荐、官网等标签分类
- **一键直达**: 点击卡片即可访问对应AI服务

#### HTML预览工具 (htmlPreview.html)
- **在线预览**: 输入HTML代码，实时预览效果
- **新窗口预览**: 在新标签页中预览
- **当前页面预览**: 在当前页面全屏预览
- **快速清空**: 一键清空代码

#### 硅基流动余额查询 (siliconFlowApiBalanceQuery.html)
- **批量查询**: 支持同时查询6个API密钥
- **进度跟踪**: 实时显示查询进度
- **结果筛选**: 支持按有效、零余额、无效密钥筛选
- **导出功能**: 支持导出CSV格式结果
- **历史记录**: 自动保存查询历史

### 自定义开发

#### 添加新的AI服务
在 `index.html` 的 `sitesData` 数组中添加新的服务对象：

```javascript
{
  "title": "服务商名称",
  "tags": ["recommend", "official"],  // 可选标签：recommend(推荐)/official(官网)
  "description": "服务描述",
  "link": "https://example.com",
  "buttonText": "点击访问"
}
```

#### 修改样式
- 内嵌CSS样式位于 `index.html` 的 `<style>` 标签中
- 使用CSS变量统一主题色
- 遵循BEM命名规范

#### 前端开发规范
详细开发规范请参见 `CLAUDE.md` 文件，包含：
- 技术栈选择
- 代码结构规范
- 样式规范
- JavaScript规范
- 图表规范

### 技术栈

- **前端框架**: Bootstrap 5.3.0-alpha1
- **样式系统**: CSS3 + CSS变量
- **脚本语言**: ES6 JavaScript
- **图标库**: Font Awesome (可选)
- **编辑器**: CodeMirror (硅基流动工具页)

## 依赖

- [Bootstrap 5.3.0-alpha1](https://getbootstrap.com/)

## 许可证

本项目采用MIT许可证，详见LICENSE文件。