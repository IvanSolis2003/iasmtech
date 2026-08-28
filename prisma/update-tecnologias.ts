import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// Pone al dia el stack de cada proyecto contra lo que declara su repo
// (package.json / composer.json), no contra lo que se escribio al publicarlo.
// El orden importa: la tarjeta del portafolio solo muestra los primeros 4,
// asi que adelante va lo mas distintivo de cada proyecto.
const updates: { title: string; techStack: string[]; longDesc?: string }[] = [
  {
    title: 'E-Shop Multivendedor',
    techStack: ['Next.js 16', 'Strapi 5', 'PostgreSQL', 'AWS EC2', 'Docker', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
    longDesc:
      'Frontend en Next.js 16 con TypeScript sobre Vercel y backend Strapi 5 en Docker sobre una instancia EC2 de AWS. La base corre en PostgreSQL serverless y las imágenes en Cloudinary, con la imagen del backend construida en GitHub Actions. Permite múltiples vendedores con sus propios dashboards, gestión de productos, órdenes y reportes de ventas.',
  },
  {
    title: 'FamilyTasks',
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Auth.js', 'Resend'],
    longDesc:
      'Desarrollada con Next.js 14 y TypeScript, con Drizzle ORM sobre PostgreSQL serverless en Neon. Incluye autenticación familiar con Auth.js, asignación de tareas por miembro, recordatorios por correo con Resend e imágenes en Cloudinary.',
  },
  {
    title: 'Salón Bella — Reservas Online',
    techStack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'n8n', 'Prisma', 'Material UI', 'Vercel'],
    longDesc:
      'Sitio completo para salón de belleza en Talca hecho con Next.js 16 y MUI, con PostgreSQL vía Prisma. Reservas en tiempo real, catálogo de servicios con precios y duración, perfiles del equipo, galería y testimonios. Los recordatorios por WhatsApp y las confirmaciones por correo corren solos con flujos de n8n. Diseño mobile-first.',
  },
  {
    title: 'Vidriería Demo — Cotizador y Panel Autogestionable',
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Material UI', 'Auth.js', 'Vercel Blob'],
  },
  {
    title: 'Davielle Orfebres — E-commerce de Joyería',
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Cloudinary', 'Prisma', 'Material UI', 'NextAuth.js'],
  },
  {
    title: 'Bóveda Personal — Gestor Seguro de Credenciales',
    techStack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'MCP', 'Prisma', 'Auth.js', 'Material UI'],
  },
]

async function main() {
  for (const { title, ...data } of updates) {
    const r = await prisma.project.updateMany({ where: { title }, data })
    console.log(`${r.count === 1 ? 'OK   ' : 'AVISO'} ${title} (${r.count} fila/s)`)
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
