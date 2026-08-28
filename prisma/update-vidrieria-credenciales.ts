import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// Vidrieria Demo es una demo publica y sus credenciales de prueba ya estaban
// publicadas en el portafolio, asi que se cargan tambien aca.
async function main() {
  const r = await prisma.project.updateMany({
    where: { title: 'Vidriería Demo — Cotizador y Panel Autogestionable' },
    data: {
      testUser: 'admin@vidrieriademo.cl',
      testPassword: 'demo1234',
      testRole: 'Administrador',
    },
  })
  console.log('Actualizado:', r.count)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
