# Spanios.wiki - Frontend SSR

这是一个 frontend-only 的罕见病信息 Wiki。项目不再依赖 Strapi/CMS/数据库，内容直接维护在前端代码里，方便快速做中英文内容迭代。

## 技术栈

- React 19
- TanStack Start / TanStack Router SSR
- TanStack Query
- Tailwind CSS 4 + DaisyUI
- Paraglide 多语言路由

## 启动

```bash
pnpm dev
```

访问：http://localhost:3000

## 构建

```bash
pnpm build
pnpm start
```

## 内容维护

主要内容写在：

- `frontend/src/content/data/`：跨语言的目录、分类、标签和关系聚合逻辑
- `frontend/src/content/locales/zh/`：中文内容
- `frontend/src/content/locales/en/`：英文内容
- `frontend/src/content/locales/<locale>/disease-drafts/<slug>.ts`：单个疾病详情
- `frontend/src/content/locales/<locale>/disease-summaries.ts`：列表、搜索和站点地图使用的轻量疾病索引
- `frontend/src/content/locales/<locale>/disease-loaders.ts`：详情页按 slug 懒加载完整疾病文件

新增疾病详情时，为中英文各建一个同名 slug 文件，并同步补充对应语言的
`disease-summaries.ts` 轻量索引。医院、公益组织和服务线索仍按 locale
维护在各自内容文件中。列表页和搜索页读取轻量索引，详情页再懒加载完整正文。

## 已实现页面

- 首页：`/`
- 疾病列表：`/diseases`
- 疾病详情：`/diseases/:slug`
- 医院列表：`/hospitals`
- 医院详情：`/hospitals/:id`
- 公益组织：`/charity`
- 公益组织详情：`/charity/:id`
- 全局搜索：`/search`
- 健康检查：`/api/health`
