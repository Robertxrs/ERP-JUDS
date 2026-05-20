# Backend Dockerfile para apps/api
# Multi-stage build para reduzir o tamanho final e deixar somente o código compilado.
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Pacotes de compilação para dependências nativas.
RUN apk add --no-cache python3 make g++ bash

# Copia metadados do workspace para instalar dependências.
COPY package*.json ./
COPY tsconfig.base.json ./
COPY nx.json ./

# Instala dependências do monorepo.
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copia todo o projeto e gera o Prisma Client.
COPY . .
RUN npx prisma generate --schema=apps/api/prisma/schema.prisma

# Compila o backend NestJS em modo produção.
RUN npx nx build api --configuration=production

# Runtime final com apenas dependências de produção.
FROM node:22-alpine AS runtime

WORKDIR /usr/src/app
RUN addgroup -S app && adduser -S app -G app

# Copia o build e o package.json gerado pelo Nx Webpack plugin.
COPY --from=builder /usr/src/app/dist/apps/api ./
COPY --from=builder /usr/src/app/dist/apps/api/package.json ./

# Instala apenas dependências de produção.
RUN npm install --production --ignore-scripts

ENV NODE_ENV=production
EXPOSE 3000
USER app

CMD ["node", "main.js"]
