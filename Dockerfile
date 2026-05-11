# https://github.com/Dokploy/production-example
FROM jysbrdlkrbcayf.xuanyuan.run/library/node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app

# Install the workspace dependencies with enough package metadata for pnpm's
# filter resolution while keeping Docker layer cache effective.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/package.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile --filter ./frontend...

COPY frontend ./frontend

WORKDIR /app/frontend
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=build /app/frontend/package.json ./frontend/package.json
COPY --from=build /app/frontend/.output ./frontend/.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/frontend/node_modules ./frontend/node_modules

WORKDIR /app/frontend
USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1

CMD ["node", ".output/server/index.mjs"]
