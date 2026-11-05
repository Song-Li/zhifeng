# 智锋安全官网

AI 原生、全自动闭环防御产品官网。静态 HTML、CSS 和 JavaScript，无需安装 npm 依赖。

## 本地开发

使用 Node.js 运行：

```sh
node scripts/build.mjs
node scripts/preview.mjs
```

预览地址：http://127.0.0.1:8768/ 。预览服务只监听本机，按 Ctrl+C 停止；可用 PORT 环境变量修改端口。

## 内容与资产

- `scripts/build.mjs`：页面模板、产品文案、团队与页面元信息。编辑后重新构建，不直接维护生成的 HTML。
- `scripts/diagrams.mjs`：产品机制图及四锋协作详解。
- `scripts/product-experience.mjs`：真实产品界面与信锋接入说明。
- `scripts/positioning.mjs`：AI 时代行业背景与公司定位。
- `assets/site.css`、`assets/diagrams.css`：响应式样式。
- `assets/site.js`：导航、产品切换与咨询邮件交互。
- `assets/visuals/`：首页及四锋协作视觉；`assets/interfaces/`：产品手册中的真实界面。

构建生成 12 个主页面、2 个旧入口跳转、404、robots.txt 和 sitemap.xml。原有域名配置保留在 CNAME。
咨询表单生成邮件或复制内容，由访客确认发送；不向后台提交个人信息。

内部研究底稿和未使用的概念素材保留在本地，不纳入仓库。正式静态发布只需页面、assets、站点图标、manifest、robots.txt、sitemap.xml、CNAME 与 .nojekyll。