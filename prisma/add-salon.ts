import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const project = await prisma.project.upsert({
    where: { id: 'salon-bella' },
    update: {
      projectUrl: 'https://salonapp-phi.vercel.app',
    },
    create: {
      id: 'salon-bella',
      title: 'Salón Bella — Reservas Online',
      description: 'Plataforma web de reservas para salón de belleza. Los clientes agendan hora en línea 24/7, reciben confirmación automática y recordatorios.',
      longDesc: 'Sitio web completo para salón de belleza en Talca con sistema de reservas en tiempo real, catálogo de servicios con precios y duración, perfiles del equipo, galería, testimonios y sección de contacto. Diseño mobile-first con MUI.',
      techStack: ['Next.js', 'MUI', 'TypeScript', 'Vercel'],
      category: 'WEB',
      featured: true,
      order: 5,
      projectUrl: 'https://salonapp-phi.vercel.app',
    },
  })

  console.log('Proyecto insertado:', project.title)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
