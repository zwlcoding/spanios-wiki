# Spanios.wiki Frontend-Only 实施总结

## 当前方向

项目已从前后端 CMS 架构调整为 frontend-only SSR：

- 去掉 Strapi 后端、CMS 内容类型和数据库依赖。
- 保留 TanStack Start SSR、TanStack Router、React Query 和 Paraglide。
- 疾病、医院、公益组织、分类、标签等内容直接维护在 TypeScript 数据文件中。
- 原有页面继续通过 hooks 获取数据，底层从远程 API 改为本地内容客户端。

## 核心文件

- `frontend/src/content/wikiData.ts`：中英文内容数据和关系组装。
- `frontend/src/content/data/taxonomy.ts`：稳定医学分类定义，分类 slug 与多语言展示文案分离。
- `frontend/src/content/data/catalogs/`：国家罕见病目录来源数据、目录来源信息和目录条目医学分类。
- `frontend/src/content/locales/<locale>/disease-summaries.ts`：按语言维护列表、搜索和站点地图使用的轻量疾病索引。
- `frontend/src/content/locales/<locale>/disease-loaders.ts`：详情页按 slug 懒加载完整疾病文章。
- `frontend/src/content/locales/<locale>/disease-drafts/<slug>.ts`：每个疾病一份独立维护文件，避免单个内容文件过大。
- `frontend/src/lib/contentClient.ts`：本地内容查询、筛选、详情读取和全局搜索。
- `frontend/src/types/content.ts`：内容类型定义。
- `frontend/src/hooks/`：页面继续使用 React Query hooks。

## 内容模型

本地内容仍保留原有领域结构：

- `Disease`：疾病基础信息、症状、诊断、治疗、预后。
- `DiseaseCategory`：按医学系统/主要诊疗方向组织的疾病分类；国家目录批次不再作为分类。
- `Hospital`：医院、科室、位置、联系方式。
- `CharityOrganization`：公益组织、联系方式、服务内容。
- `Tag`：疾病标签。

疾病、医院、公益组织之间的关联在 `wikiData.ts` 中通过 `slug` 或 `id` 组装。国家第一批/第二批罕见病目录作为疾病来源、目录引用和标签维护，生成的占位疾病会通过 `catalogClassification.ts` 放入对应医学分类。

## 多语言

内容数据按 locale 分为 `zh` 和 `en` 两套。当前 locale 来自 Paraglide 的 `getLocale()`，所以 `/zh/...` 和 `/en/...` 会读取对应语言的数据。稳定关系尽量使用 slug/id，新增语言时只补翻译和正文，不复制分类逻辑。

详细疾病文章按 slug 拆分在 `disease-drafts/` 目录中；列表页和搜索页只读取 `disease-summaries.ts` 的轻量字段，详情页通过 `disease-loaders.ts` 懒加载单个完整文章。新增疾病时，需要同时创建对应 locale 的单病种文件，并补充轻量索引。

UI 文案仍可继续逐步迁移到 Paraglide messages；内容正文已经不需要 CMS i18n。

## 运行

```bash
cd frontend
pnpm dev
```

构建：

```bash
cd frontend
pnpm build
pnpm start
```

## 后续建议

1. 把首页、列表页、详情页中的固定中文 UI 文案逐步迁移到 `frontend/messages/*.json`。
2. 继续补充详细疾病文章，把目录占位条目逐步扩展为“症状、诊断、治疗、科室、医院、公益组织、来源”完整页面。
3. 为内容查询补充单元测试，尤其是搜索、语言切换、目录引用和分类关系。
