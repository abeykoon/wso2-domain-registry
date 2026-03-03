FROM node:20-alpine
WORKDIR /app

RUN addgroup -S appgroup && adduser -S -u 10001 appuser -G appgroup

COPY package*.json ./
RUN npm ci --ignore-scripts
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
RUN npm run build

RUN chown -R appuser:appgroup /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

USER 10001

EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
