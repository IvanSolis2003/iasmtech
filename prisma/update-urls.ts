import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.project.updateMany({
    where: { title: 'E-Shop Multivendedor' },
    data: { projectUrl: 'https://ecommerce.iasmtech.com/' },
  })

  await prisma.project.updateMany({
    where: { title: 'FamilyTasks' },
    data: { projectUrl: 'https://familytaskiasm20tech.vercel.app' },
  })

  await prisma.project.updateMany({
    where: { title: 'Sistema de Gestión de Activos' },
    data: { projectUrl: 'https://sistema-de-prestamos-w51n.onrender.com/' },
  })

  console.log('URLs actualizadas correctamente')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
