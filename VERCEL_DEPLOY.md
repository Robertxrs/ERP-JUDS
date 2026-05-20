# Guia de Deploy na Vercel

## Pré-requisitos

1. **Banco de Dados em Nuvem** (com Connection Pooling)
   - [Supabase](https://supabase.com) - PostgreSQL gerenciado + Prisma support
   - [Neon](https://neon.tech) - PostgreSQL serverless com pooling nativo
   - [AWS RDS](https://aws.amazon.com/rds/) - RDS Proxy para pooling
   - [Railway](https://railway.app) - PostgreSQL e Redis tudo gerenciado

2. **Redis em Nuvem** (para filas BullMQ)
   - [Redis Cloud](https://redis.com/cloud/)
   - [Railway](https://railway.app)
   - [Upstash](https://upstash.com)

3. **Conta Vercel**
   - Conectar repositório GitHub: https://vercel.com

---

## Passo 1: Preparar o Banco de Dados

### Opção A: Supabase (Recomendado para iniciantes)

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Copie a string de conexão (Database URL) com `sslmode=require`
3. Execute as migrações localmente:
   ```bash
   export DATABASE_URL="seu-url-aqui"
   npx prisma migrate deploy
   ```

### Opção B: Neon

1. Crie um projeto em [neon.tech](https://neon.tech)
2. Copie a connection string com `sslmode=require`
3. Neon já tem pooling nativo via `?sslmode=require`

---

## Passo 2: Deploy do Backend (NestJS/API)

### Via Vercel CLI

1. Instale: `npm i -g vercel`
2. Na raiz do projeto: `vercel`
3. Configure as variáveis de ambiente no Vercel:
   - `DATABASE_URL`: sua string PostgreSQL
   - `REDIS_URL`: sua URL Redis
   - `JWT_SECRET`: gere uma chave segura (ex: `openssl rand -base64 32`)
   - `NODE_ENV`: `production`

### Via GitHub (Automático)

1. Push para `main`: `git push origin main`
2. Vercel detecta `apps/api/vercel.json` e faz deploy automático
3. Crie migrations com `npx prisma migrate dev --name nome_da_mudanca`
4. A Vercel executará `vercel-build-api` automaticamente

---

## Passo 3: Deploy do Frontend (Angular PWA)

### Via Vercel

1. Na pasta raiz, crie `.vercelignore`:
   ```
   apps/api
   apps/api-e2e
   ```

2. Vercel detecta `apps/frontend/vercel.json` automaticamente
3. Configura variáveis:
   - `API_URL`: `https://seu-api-domain.com` (sem `/api`)

---

## Passo 4: Conectar Frontend à API

No arquivo de configuração do Angular (`apps/frontend/src/environment.ts`):

```typescript
// development
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

```typescript
// production (environment.prod.ts)
export const environment = {
  production: true,
  apiUrl: 'https://seu-api-vercel.vercel.app/api'
};
```

Importe e use no serviço:
```typescript
import { environment } from '../../environment';

constructor(private http: HttpClient) {
  this.apiUrl = environment.apiUrl;
}
```

---

## Passo 5: Variáveis de Ambiente na Vercel

No painel Vercel:

### Backend
```
DATABASE_URL = postgres://...@host/db?sslmode=require
REDIS_URL = redis://...@host:port
JWT_SECRET = (gere com: openssl rand -hex 32)
NODE_ENV = production
```

### Frontend
```
API_URL = https://seu-api-backend.vercel.app
ENVIRONMENT = production
```

---

## Passo 6: Testar em Produção

```bash
# Push para main dispara CI/CD automática
git add .
git commit -m "Deploy: versão 1.0.0"
git push origin main

# Monitore em: https://vercel.com/dashboard
```

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| Build falha no Prisma | Verifique `DATABASE_URL` e execute `npx prisma db push` localmente |
| API retorna 502 | Cheque Redis connection e timeout (aumentar em `vercel.json`: `"maxDuration": 60`) |
| Frontend não conecta à API | Confirme `API_URL` correto e CORS habilitado no NestJS |
| Migrations não rodaram | Execute manualmente no Vercel Shell: `npx prisma migrate deploy` |

---

## Monitoramento

- **Vercel Logs**: https://vercel.com/dashboard → projeto → Logs
- **Uptime & Performance**: Vercel Analytics integrado
- **Erros de Produção**: Configure webhooks ou sentry.io

---

## Referências

- [Vercel + NestJS](https://vercel.com/docs/frameworks/nestjs)
- [Prisma + Vercel](https://www.prisma.io/docs/orm/deployment/deployment-guides/deploying-to-vercel)
- [Angular + Vercel](https://vercel.com/docs/frameworks/angular)
