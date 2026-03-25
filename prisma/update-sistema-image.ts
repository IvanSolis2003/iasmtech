import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const r = await prisma.project.updateMany({
    where: { title: 'Sistema de Gestión de Activos' },
    data: { imageUrl: '/assets/proyecto-sistema.png' },
  })
  console.log('Actualizado:', r.count)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
