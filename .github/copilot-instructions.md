# Copilot 指令

本文档为 `spanios-wiki` 仓库提供高层次的上下文和指令,以帮助编码代理更高效地工作。

## AI 协作工作流

本项目采用 **AI 协作 TDD 工作流**，通过多个专业化智能体协同完成开发任务。

### 标准工作流程

```
老板(业务需求) → 产品经理(PRD) → 架构师(设计) → 测试工程师(用例) 
    → 全栈开发(TDD) → 代码审查 → 安全审查 → 产品验收 → ✅ 完成
```

### 快速开始

1. **新功能开发**: `@product-manager [你的需求]`
2. **技术评估**: `@architect [PRD 或需求描述]`
3. **设计测试**: `@qa-engineer [功能描述]`
4. **开始编码**: `@full-stack-dev [测试用例]`
5. **代码审查**: `@code-reviewer [代码文件]`
6. **安全检查**: `@security-reviewer [代码文件]`

详细工作流文档请参阅: `.github/agents/WORKFLOW.md`

## LLM 文档资源

项目使用的主要框架和库提供了专门的 LLM 文档,以帮助 AI 更好地理解和使用它们:

- **DaisyUI v5**: `.github/llms/daisyui.txt` - 包含组件使用指南、主题配置、颜色系统等
- **TanStack**: `.github/llms/tanstack.txt` - 涵盖 TanStack Router、Query、Start 等库的使用说明
- **Strapi v5**: `.github/llms/strapi.txt` - Strapi CMS 的完整文档索引,包括 API、部署、插件开发等

这些文档提供了框架特定的最佳实践、API 用法和常见模式,在生成代码时应优先参考。

## 高层次概述

- **概述**: 这是一个 "Spanios Wiki" 的 monorepo,包含基于 Strapi 的 Headless CMS 后端和 React (Vite/TanStack Start) 前端。
- **仓库类型**: pnpm Monorepo。
- **语言**: TypeScript, JavaScript。
- **核心技术**:
    -   **后端**: Strapi v5 (Headless CMS), PostgreSQL。
    -   **前端**: React 19, Vite, TanStack Start (SSR), TanStack Router, TanStack Query, Tailwind CSS v4, DaisyUI v5。
    -   **国际化**: Paraglide JS。
    -   **工具链**: Biome (代码检查/格式化), Vitest (测试), Docker。

## 构建和验证指令

### 1. 初始化与设置
在仓库根目录运行以下命令以安装整个工作空间的依赖:
```bash
pnpm install
```

### 2. 后端 (Strapi)
位于 `backend/` 目录。
- **环境配置**: 确保 `.env` 文件存在。参考 `.env.example`。
- **启动开发环境**:
    ```bash
    pnpm --filter spanios-wiki-be develop
    ```
    (或 `cd backend && pnpm develop`)。这将启动管理面板(通常在 http://localhost:1337)和 API。
- **构建**:
    ```bash
    pnpm --filter spanios-wiki-be build
    ```
    这将构建 Strapi 管理面板。

### 3. 前端 (React/TanStack Start)
位于 `frontend/` 目录。
- **启动开发环境**:
    ```bash
    pnpm --filter spanios-wiki-fe dev
    ```
    (或 `cd frontend && pnpm dev`)。运行 Vite 开发服务器(通常在 http://localhost:3000)。
- **构建**:
    ```bash
    pnpm --filter spanios-wiki-fe build
    ```
    这将使用 Vite 和 Nitro 生成生产环境构建(客户端 + 服务器输出)。
- **运行生产环境预览**:
    ```bash
    pnpm --filter spanios-wiki-fe start
    ```
    (执行 `.output/server/index.mjs`)。

### 4. 验证 (代码检查与测试)
主要位于 `frontend/` 目录。
- **代码检查与格式化**: 前端使用 Biome。
    ```bash
    cd frontend && pnpm check
    ```
    这将运行 `biome check`,包括代码检查和格式化验证。
- **测试**:
    ```bash
    cd frontend && pnpm test
    ```
    使用 Vitest 运行单元测试。

## 项目布局与架构

### 工作空间结构
- **`pnpm-workspace.yaml`**: 定义工作空间成员(`frontend/**`, `backend/**`)。
- **`backend/`**: Strapi CMS 应用。
    -   `src/api/`: 包含内容类型定义、控制器、服务和路由。
    -   `config/`: 服务器、数据库、管理面板和插件的配置。
    -   `types/generated/`: 自动生成的内容模式类型。
- **`frontend/`**: Web 应用。
    -   **架构**: 使用 **TanStack Start** 进行 SSR 和路由。
    -   `src/routes/`: 基于文件的路由。如 `__root.tsx`, `index.tsx`, `api/` 等文件定义应用结构。
    -   `src/paraglide/`: 生成的 Paraglide JS 国际化运行时。
    -   `src/features/`: 基于功能的文件夹结构(如 `DarkMode`, `LangMode`)。
    -   `src/integrations/`: 第三方设置(TanStack Query 等)。
    -   `messages/`: 源翻译文件(`en.json`, `zh.json`)。
    -   `project.inlang/`: inlang 国际化项目的配置。
    -   `vite.config.ts`: 配置 Vite,包含 Nitro (SSR)、Paraglide (i18n)、TanStack Start 和 Tailwind 插件。

### 重要依赖与模式
- **路由**: `src/routes` 生成 `routeTree.gen.ts`。不要手动编辑生成的文件。
- **样式**: 使用 Tailwind CSS v4 和 DaisyUI 组件。
- **国际化**: 翻译文件位于 `frontend/messages/`。Paraglide 编译器通过 Vite 插件自动运行。
- **数据获取**: 主要使用 `ky` 或 `@strapi/client` 结合 TanStack Query。

### 验证清单
在请求审查或完成任务之前:
1.  如果依赖项发生变化,运行 `pnpm install`。
2.  如果修改前端代码,运行 `cd frontend && pnpm check` (Biome) 以确保代码风格合规。
3.  如果修改路由,确保开发服务器正在运行或构建步骤通过,因为 `TanStack Router` 依赖代码生成。
4.  如果是新功能开发,确保遵循 TDD 工作流：先写测试 → 写代码 → 重构。
5.  重要功能需经过代码审查和安全审查后才能合并。

## 智能体使用指南

### 何时使用哪个智能体

| 场景 | 推荐智能体 | 说明 |
|------|------------|------|
| 有新的业务想法 | `@product-manager` | 帮你澄清需求、编写 PRD |
| 评估技术方案 | `@architect` | 可行性评估、架构设计 |
| 准备开始编码 | `@qa-engineer` → `@full-stack-dev` | 先设计测试再编码 |
| 代码写完了 | `@code-reviewer` | 代码质量审查 |
| 涉及用户数据/认证 | `@security-reviewer` | 安全漏洞检查 |
| 小 bug 修复 | `@full-stack-dev` | 可跳过完整流程 |

### TDD 循环提醒

使用 `@full-stack-dev` 时，严格遵循：

1. 🔴 **Red**: 先写失败的测试
2. 🟢 **Green**: 写最少代码让测试通过
3. 🔵 **Refactor**: 重构代码，保持测试通过

### 智能体交接

每个智能体都配置了 `handoffs`，完成工作后会提供交接选项。你也可以手动 @ 下一个智能体继续工作流。
