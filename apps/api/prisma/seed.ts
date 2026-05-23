import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Iniciando inserção de dados falsos...');

  // Inserir Insumos
  const farinha = await prisma.insumo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: 'Farinha de Trigo',
      unidade: 'KG',
      estoqueAtual: 50,
      estoqueMin: 20,
      custoUnitario: 4.5,
    },
  });

  const acucar = await prisma.insumo.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nome: 'Açúcar Refinado',
      unidade: 'KG',
      estoqueAtual: 30,
      estoqueMin: 10,
      custoUnitario: 3.2,
    },
  });

  const fermento = await prisma.insumo.upsert({
    where: { id: 3 },
    update: {},
    create: {
      nome: 'Fermento Biológico',
      unidade: 'G',
      estoqueAtual: 500,
      estoqueMin: 100,
      custoUnitario: 0.05,
    },
  });

  // Inserir Produtos
  const paoFrances = await prisma.produto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: 'Pão Francês',
      precoVenda: 0.8,
      estoqueAtual: 100,
      estoqueMin: 50,
      unidade: 'UN',
    },
  });

  // Inserir Receita
  const receitaPao = await prisma.receita.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: 'Receita Padrão Pão Francês',
      rendimento: 50,
      produtoId: paoFrances.id,
      itens: {
        create: [
          { insumoId: farinha.id, quantidade: 1 }, // 1KG de farinha
          { insumoId: acucar.id, quantidade: 0.05 }, // 50g de açúcar
          { insumoId: fermento.id, quantidade: 10 }, // 10g de fermento
        ],
      },
    },
  });

  console.log('Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
