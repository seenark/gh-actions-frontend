FROM oven/bun:1-alpine AS builder
WORKDIR /app

COPY . .

RUN bun i -g surge && bun install 
CMD ["bun", "/app/index.ts"]

# FROM oven/bun:1-alpine AS runner
# WORKDIR /app
#
# COPY --from=builder /app/dist-action ./
#
# CMD ["bun", "/app/index.js"]


