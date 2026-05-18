# Spanios.wiki — Agent 指令

> 本文件供 AI agent 使用，补充 README 中未涵盖的构建步骤、代码规范与项目约定。

## Agent skills

### Issue tracker（问题跟踪器）

项目使用 GitHub Issues 管理工作项，通过 `gh` CLI 操作。详见 `docs/agents/issue-tracker.md`。

### Triage labels（分类标签）

采用五个标准分类角色，标签名使用默认值。详见 `docs/agents/triage-labels.md`。

### Domain docs（领域文档）

单上下文布局（仓库根目录一个 `CONTEXT.md` + `docs/adr/`）。详见 `docs/agents/domain.md`。

## 宪法 — 开发服务器使用禁令（Dev Server Ban）

**禁止长时间空转开发服务器。**

本项目（`frontend/` 下的 Vite / TanStack Start 开发服务器）依赖 esbuild，已知存在一个 bug：esbuild 的常驻进程会导致外挂硬盘持续高负载并过热断连。

因此，AI agent 必须严格遵守以下规则：

1. **不得后台常驻**：不要以 `run_in_background=true` 启动 `pnpm dev`（或 `vite dev`），也不要在 Shell 中启动后放任其空转。
2. **即用即停**：只有在明确需要浏览器验证时才启动 dev server；验证完成后必须**立即**停止。
3. **禁止空转等待**：不要在写代码、思考或 plan 的过程中让 dev server 继续运行。启动它只有一个目的——验证你刚刚改的东西。
4. **停止方式**：`Ctrl+C` 终止前台进程；如果使用了后台任务，务必用 `TaskStop` 停止。
5. **首选替代方案**：
   - 单元测试用 `pnpm test`（无需 dev server）。
   - 类型检查用 `pnpm typecheck`（无需 dev server）。
   - 只有必须打开浏览器才能验证的改动，才允许临时启动 dev server，且必须在同一次 tool call 或紧接着的 tool call 中关闭。

> 违反此规则会直接导致用户硬件损坏（硬盘过热断连）。请将这条禁令视为最高优先级约束。
