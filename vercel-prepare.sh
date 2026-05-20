#!/bin/bash
# Script de Preparação para Deploy na Vercel
# Use: bash vercel-prepare.sh

set -e

echo "🚀 Iniciando preparação para deploy na Vercel..."

# 1. Verificar NODE_ENV
echo "📋 Verificando ambiente..."
if [ -z "$DATABASE_URL" ]; then
  echo "❌ ERRO: DATABASE_URL não definida!"
  echo "   Execute: export DATABASE_URL='sua-url-postgres-aqui'"
  exit 1
fi

if [ -z "$REDIS_URL" ]; then
  echo "⚠️  AVISO: REDIS_URL não definida (opcional para teste)"
fi

# 2. Instalar dependências
echo "📦 Instalando dependências..."
npm ci

# 3. Gerar Prisma Client
echo "🔧 Gerando Prisma Client..."
npx prisma generate --schema=apps/api/prisma/schema.prisma

# 4. Aplicar migrações
echo "🗄️  Aplicando migrações ao banco de dados..."
npx prisma migrate deploy --schema=apps/api/prisma/schema.prisma

# 5. Build do Backend
echo "🏗️  Compilando API (NestJS)..."
npx nx build api --configuration=production

# 6. Build do Frontend
echo "🏗️  Compilando Frontend (Angular)..."
npx nx build frontend --configuration=production

# 7. Resumo final
echo ""
echo "✅ Preparação concluída com sucesso!"
echo ""
echo "📍 Próximos passos:"
echo "1. Revise apps/api/vercel.json"
echo "2. Revise apps/frontend/vercel.json"
echo "3. Commit e push para GitHub: git push origin main"
echo "4. A Vercel detectará e fará deploy automaticamente"
echo ""
echo "🔗 Monitore em: https://vercel.com/dashboard"
