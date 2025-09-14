FROM oven/bun AS builder
WORKDIR /app

COPY . .

RUN bun install && bun run build

FROM oven/bun:1-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist-action ./

CMD ["bun", "index.js"]


