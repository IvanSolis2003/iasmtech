import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const images: Record<string, string> = {
  'E-Shop Multivendedor': '/assets/proyecto-ecommerce.png',
  'FamilyTasks': '/assets/proyecto-familytasks.png',
  'Salón Bella — Reservas Online': '/assets/proyecto-salon.png',
  'Vidriería Demo — Cotizador y Panel Autogestionable': '/assets/vidrieria.png',
  'Davielle Orfebres — E-commerce de Joyería': '/assets/davielle.png',
  'Bóveda Personal — Gestor Seguro de Credenciales': '/assets/boveda.png',
}

async function main() {
  for (const [title, imageUrl] of Object.entries(images)) {
    const updated = await prisma.project.updateMany({
      where: { title },
      data: { imageUrl },
    })
    console.log(`${title}: ${updated.count} actualizado`)
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
