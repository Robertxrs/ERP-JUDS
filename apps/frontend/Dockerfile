# Frontend Dockerfile para apps/frontend
# Primeira etapa builda a aplicação Angular, segunda etapa serve via Nginx.
FROM node:22-alpine AS builder

WORKDIR /usr/src/app
RUN apk add --no-cache python3 make g++ bash

COPY package*.json ./

# Instala dependências do monorepo.
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .
RUN npx nx build frontend --configuration=production

FROM nginx:1.26-alpine AS runtime

# Limpa conteúdos padrão do Nginx e copia os arquivos estáticos do build.
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/apps/frontend /usr/share/nginx/html
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
