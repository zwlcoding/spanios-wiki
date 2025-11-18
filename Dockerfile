# https://github.com/Dokploy/production-example
FROM jysbrdlkrbcayf.xuanyuan.run/library/node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
# 设置工作目录
WORKDIR /app
# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# 复制源代码
COPY . .

# 构建应用
RUN pnpm build

USER node

# 暴露端口
EXPOSE 3000

# 设置健康检查
# 健康检查使用 wget
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1

# 直接启动 Strapi
CMD ["pnpm", "start"]