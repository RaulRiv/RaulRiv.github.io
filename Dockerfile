# Stage 1: install & build
FROM node:22-alpine AS builder
WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: production runtime
FROM node:22-alpine AS runtime
WORKDIR /app

COPY --from=builder /build/.output ./.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3001

EXPOSE 3001
CMD ["node", ".output/server/index.mjs"]
