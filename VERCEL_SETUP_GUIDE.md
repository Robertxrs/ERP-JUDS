# Deploy Vercel: Guia Passo a Passo

## 📋 Checklist Pré-Deploy

- [ ] Repositório criado no GitHub
- [ ] `apps/api/vercel.json` ✓ (já criado)
- [ ] `apps/frontend/vercel.json` ✓ (já criado)
- [ ] Scripts `vercel-build-api` e `vercel-build-frontend` no package.json ✓
- [ ] `.env.example` preenchido ✓
- [ ] Banco de dados em nuvem criado (Supabase/Neon)
- [ ] Redis em nuvem criado (Redis Cloud/Railway)

---

## 🚀 Passo 1: Preparar o Banco de Dados PostgreSQL

### Opção 1: Supabase (Mais fácil para iniciantes)

```bash
# 1. Acesse https://supabase.com e crie uma conta
# 2. Crie um novo projeto
# 3. Vá em Settings → Database → Connection pooling (ative PgBouncer)
# 4. Copie a CONNECTION STRING (com sslmode=require)

# 5. Salve em um lugar seguro (não commit no Git!)
DATABASE_URL="postgresql://user:password@pooling-host:6543/postgres?sslmode=require"
```

### Opção 2: Neon (PostgreSQL Serverless)

```bash
# 1. Acesse https://neon.tech
# 2. Crie um projeto
# 3. Copie a connection string automática (já com pooling)

DATABASE_URL="postgresql://user:password@ep-host.neon.tech/neondb?sslmode=require"
```

### Executar Migrações Localmente

```bash
# Defina a variável (Windows PowerShell)
$env:DATABASE_URL = "seu-url-postgres-aqui"

# Linux/Mac
export DATABASE_URL="seu-url-postgres-aqui"

# Execute as migrações
npx prisma migrate deploy

# Verifique (opcional)
npx prisma studio
```

---

## 🔴 Passo 2: Preparar o Redis

### Opção 1: Redis Cloud

```bash
# 1. Acesse https://redis.com/cloud
# 2. Crie um banco de dados gratuito
# 3. Copie a connection string

REDIS_URL="redis://:password@host:port"
```

### Opção 2: Railway

```bash
# 1. Acesse https://railway.app
# 2. Crie um novo projeto → Add service → Redis
# 3. Copie a connection string
```

---

## 🌐 Passo 3: Criar Conta na Vercel e Conectar Git

```bash
# 1. Acesse https://vercel.com
# 2. Clique em "Sign Up" → GitHub
# 3. Autorize Vercel acessar seus repositórios
# 4. Clique em "New Project" → Selecione este repositório
```

---

## ⚙️ Passo 4: Configurar Variáveis de Ambiente na Vercel

No painel da Vercel, vá em **Settings → Environment Variables** e adicione:

### Backend (API)

```
DATABASE_URL = postgresql://user:password@host:port/db?sslmode=require
REDIS_URL = redis://:password@host:port
JWT_SECRET = (gere com: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
NODE_ENV = production
PORT = 3000
```

### Frontend

```
API_URL = (deixe em branco agora, será preenchido após deploy da API)
ENVIRONMENT = production
```

---

## 📦 Passo 5: Deploy Automático

### Primeira vez (Setup Completo)

```bash
# 1. Push para main
git add .
git commit -m "feat: setup Vercel deploy"
git push origin main

# 2. Vercel detecta mudanças e inicia build automaticamente
# Monitore em: https://vercel.com/dashboard

# 3. Aguarde o build terminar (5-10 min)
# Se falhar, verifique os logs
```

### Verificar Deploy

```bash
# A Vercel gera uma URL automática:
https://seu-projeto.vercel.app/api/health (deve retornar 200 OK)
```

---

## 🔗 Passo 6: Conectar Frontend à API de Produção

Após o backend estar online na Vercel:

1. Copie a URL da API: `https://seu-projeto-api.vercel.app`

2. Atualize `apps/frontend/src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://seu-projeto-api.vercel.app/api'
};
```

3. Vá ao painel Vercel do Frontend → Settings → Environment Variables

4. Adicione:
```
API_URL = https://seu-projeto-api.vercel.app/api
ENVIRONMENT = production
```

5. Atualize a variável e aguarde o rebuild automático

---

## ✅ Passo 7: Testar em Produção

```bash
# Acesse a URL do frontend
https://seu-projeto-frontend.vercel.app

# Tente:
# 1. Fazer login
# 2. Cadastrar um insumo
# 3. Criar uma receita
# 4. Fazer uma produção de teste

# Verifique os logs em Vercel → Logs
```

---

## 🔍 Monitoramento Contínuo

### Verificar Logs

```bash
# Backend
https://vercel.com/dashboard → seu-projeto-api → Logs

# Frontend
https://vercel.com/dashboard → seu-projeto-frontend → Logs
```

### Ativar Alertas

No painel Vercel → Settings → Integrations:
- Conectar Slack (para notificações de deploy/erro)
- Conectar Discord

### Sentry (Rastreamento de Erros)

Opcional, mas recomendado para produção:

```bash
# 1. Crie conta em https://sentry.io
# 2. Crie um projeto NestJS
# 3. Copie o DSN
# 4. Adicione em Vercel → Environment Variables: SENTRY_DSN
```

---

## 🐛 Troubleshooting

### Erro: "Database connection failed"

```bash
# 1. Verifique DATABASE_URL na Vercel
# 2. Teste localmente:
export DATABASE_URL="sua-url"
npx prisma db push

# 3. Se usar Supabase, certifique-se de estar na aba "Connection pooling"
```

### Erro: "Cannot find module @mini-erp/shared-types"

```bash
# O monorepo pode ter path aliases
# Verifique tsconfig.base.json e atualize imports se necessário
```

### Frontend não conecta à API (404 ou 502)

```bash
# 1. Confirme API_URL no painel Vercel
# 2. Teste a URL da API diretamente no navegador:
https://seu-api.vercel.app/api/health

# 3. Se retornar erro, verifique logs da API
# 4. Possível timeout: aumente maxDuration em apps/api/vercel.json
```

### Build timeout (>60s)

No arquivo `apps/api/vercel.json`:

```json
{
  "functions": {
    "dist/apps/api/main.js": {
      "maxDuration": 60,
      "memory": 3008
    }
  }
}
```

---

## 📝 Próximos Passos

- [ ] Configurar custom domain (ex: erp.suaempresa.com)
- [ ] Ativar HTTPS automático (Vercel faz isso por padrão)
- [ ] Configurar backups automáticos do banco (Supabase/Neon fazem isso)
- [ ] Adicionar monitoramento de performance (Vercel Analytics)
- [ ] Configurar CI/CD com testes automáticos antes de deploy

---

## 📚 Referências

- [Vercel Docs](https://vercel.com/docs)
- [Prisma + Vercel](https://www.prisma.io/docs/orm/deployment/deployment-guides/deploying-to-vercel)
- [NestJS + Vercel](https://docs.nestjs.com/deployment)
- [Supabase Docs](https://supabase.com/docs)
- [Neon Docs](https://neon.tech/docs)
