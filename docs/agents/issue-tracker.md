# Issue tracker：GitHub

本项目的工作项和 PRD 以 GitHub Issues 形式存在，所有操作通过 `gh` CLI 完成。

## 常用操作

- **创建 issue**：`gh issue create --title "..." --body "..."`。多行正文请使用 heredoc。
- **查看 issue**：`gh issue view <number> --comments`，可配合 `jq` 过滤评论和标签。
- **列出 issue**：`gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`，可附加 `--label` 和 `--state` 过滤。
- **评论**：`gh issue comment <number> --body "..."`
- **添加 / 移除标签**：`gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **关闭**：`gh issue close <number> --comment "..."`

仓库信息从 `git remote -v` 自动推断，`gh` 在克隆目录内运行时会自动识别。

## 当技能要求"发布到问题跟踪器"

创建一条 GitHub issue。

## 当技能要求"获取相关工单"

运行 `gh issue view <number> --comments`。
