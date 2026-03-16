import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL y ADMIN_PASSWORD son requeridos en .env')
  }

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: await bcrypt.hash(password, 12),
      name: 'Iván Solís Manqueo',
    },
  })

  await prisma.project.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'E-Shop Multivendedor',
        description: 'Plataforma de comercio electrónico multivendedor con panel de administración, gestión de inventario y pagos integrados.',
        longDesc: 'Desarrollado con Next.js, Strapi como CMS headless y PostgreSQL. Permite múltiples vendedores con sus propios dashboards, gestión de productos, órdenes y reportes de ventas.',
        techStack: ['Next.js', 'Strapi', 'PostgreSQL', 'TypeScript', 'MUI'],
        category: 'ECOMMERCE',
        featured: true,
        order: 1,
      },
      {
        title: 'Sistema de Gestión de Activos',
        description: 'Sistema para gestión de activos tecnológicos y préstamos internos en empresas. Control de inventario, asignaciones y mantenimientos.',
        longDesc: 'Desarrollado con Laravel y MySQL. Incluye módulos de registro de activos, asignación a usuarios, control de préstamos, historial de mantenimiento y reportes exportables.',
        techStack: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'jQuery'],
        category: 'SISTEMA',
        featured: true,
        order: 2,
      },
      {
        title: 'Mermax — Control de Vencimientos',
        description: 'App móvil para PYMES que alerta sobre el vencimiento de productos, documentos y contratos. Reduce pérdidas por vencimiento.',
        longDesc: 'Desarrollada con React Native para Android y Node.js en el backend. Notificaciones push, dashboard de ítems próximos a vencer, categorización por tipo y exportación de reportes.',
        techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Express', 'TypeScript'],
        category: 'APP_MOVIL',
        featured: true,
        order: 3,
      },
      {
        title: 'FamilyTasks',
        description: 'Aplicación web para gestión colaborativa de tareas familiares. Asignación de responsables, fechas límite y seguimiento de progreso.',
        longDesc: 'Desarrollada con Next.js App Router y PostgreSQL. Incluye autenticación familiar, asignación de tareas por miembro, recordatorios y panel de progreso en tiempo real.',
        techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind'],
        category: 'WEB',
        featured: false,
        order: 4,
      },
    ],
  })

  console.log('Seed completado')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
