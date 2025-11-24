FROM node:18-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

FROM node:18-alpine AS server-build
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --production
COPY server/ .
COPY --from=client-build /app/client/dist ../client/dist
ENV NODE_ENV=production
ENV SERVE_CLIENT=true
EXPOSE 4000
CMD ["node", "src/index.js"]

