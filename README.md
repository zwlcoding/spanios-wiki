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
cd frontend
pnpm dev
```

访问：http://localhost:3000

## 构建

```bash
cd frontend
pnpm build
pnpm start
```

## 内容维护

主要内容写在：

- `frontend/src/content/wikiData.ts`
- `frontend/src/types/content.ts`

新增疾病、医院、公益组织时，在 `wikiData.ts` 中分别补充中英文数据。页面仍通过 hooks 读取内容，所以列表页、详情页、搜索页和 SSR 预取逻辑都可以继续复用。

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
