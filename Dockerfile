FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci --production=false
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* ./
RUN npm ci --production=true
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]