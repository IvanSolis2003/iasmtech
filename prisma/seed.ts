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
        projectUrl: 'https://ecommerce.iasmtech.com/',
      },
      {
        title: 'Sistema de Gestión de Activos',
        description: 'Sistema para gestión de activos tecnológicos y préstamos internos en empresas. Control de inventario, asignaciones y mantenimientos.',
        longDesc: 'Desarrollado con Laravel y MySQL. Incluye módulos de registro de activos, asignación a usuarios, control de préstamos, historial de mantenimiento y reportes exportables.',
        techStack: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'jQuery'],
        category: 'SISTEMA',
        featured: true,
        order: 2,
        projectUrl: 'https://sistema-de-prestamos-w51n.onrender.com/',
      },
      {
        title: 'FamilyTasks',
        description: 'Aplicación web para gestión colaborativa de tareas familiares. Asignación de responsables, fechas límite y seguimiento de progreso.',
        longDesc: 'Desarrollada con Next.js App Router y PostgreSQL. Incluye autenticación familiar, asignación de tareas por miembro, recordatorios y panel de progreso en tiempo real.',
        techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind'],
        category: 'WEB',
        featured: false,
        order: 4,
        projectUrl: 'https://familytaskiasm20tech.vercel.app',
      },
      {
        title: 'Salón Bella — Reservas Online',
        description: 'Plataforma web de reservas para salón de belleza. Los clientes agendan hora en línea 24/7, reciben confirmación automática y recordatorios.',
        longDesc: 'Sitio web completo para salón de belleza en Talca con sistema de reservas en tiempo real, catálogo de servicios con precios y duración, perfiles del equipo, galería, testimonios y sección de contacto. Diseño mobile-first con MUI.',
        techStack: ['Next.js', 'MUI', 'TypeScript', 'Vercel'],
        category: 'WEB',
        featured: true,
        order: 5,
        projectUrl: 'https://salonapp-phi.vercel.app',
      },
      {
        title: 'Vidriería Demo — Cotizador y Panel Autogestionable',
        description: 'Sitio para vidriería (aluminio, PVC y vidrios) con catálogo de productos y proyectos, cotizador multi-paso con carga de fotos y panel de administración totalmente autogestionable.',
        longDesc: 'Desarrollado con Next.js 15 y MUI, con Neon PostgreSQL vía Prisma. Incluye un cotizador en 5 pasos que sube fotos a Vercel Blob, guarda la solicitud en base de datos, notifica por correo con Resend y genera un enlace directo a WhatsApp. El panel de administración permite gestión sin código de cotizaciones con estados, productos, categorías, proyectos, testimonios y el contenido de la propia web.',
        techStack: ['Next.js', 'TypeScript', 'MUI', 'Prisma', 'PostgreSQL', 'Auth.js', 'Vercel'],
        category: 'WEB',
        featured: true,
        order: 6,
        projectUrl: 'https://vidrieria-demo-xi.vercel.app/',
      },
      {
        title: 'Davielle Orfebres — E-commerce de Joyería',
        description: 'Sitio de e-commerce para una marca de joyería artesanal, con catálogo filtrable, blog editorial y panel de administración con CRUD completo de productos, categorías y artículos.',
        longDesc: 'Desarrollado con Next.js 14 y MUI, con Neon PostgreSQL vía Prisma y carga de imágenes a Cloudinary. Catálogo con búsqueda y filtros por categoría, blog con editor de texto enriquecido y WhatsApp como canal de venta con mensajes precargados por producto. La dueña administra productos con múltiples imágenes, categorías y artículos desde su propio panel, con SEO y tema claro/oscuro.',
        techStack: ['Next.js', 'TypeScript', 'MUI', 'Prisma', 'PostgreSQL', 'NextAuth', 'Cloudinary'],
        category: 'ECOMMERCE',
        featured: true,
        order: 7,
        projectUrl: 'https://davielle.iasmtech.com',
      },
      {
        title: 'Bóveda Personal — Gestor Seguro de Credenciales',
        description: 'Aplicación web para guardar de forma segura credenciales, enlaces y documentos, con cifrado en base de datos, segundo factor obligatorio (TOTP) y un servidor MCP por usuario.',
        longDesc: 'Desarrollado con Next.js 16 y MUI, con Neon PostgreSQL vía Prisma. Cifra contraseñas y secretos TOTP con AES-256-GCM a nivel de campo, exige login con segundo factor, organiza los ítems en categorías jerárquicas con drag & drop y almacena documentos en un blob privado de lectura autenticada. Incluye generador de contraseñas, autobloqueo, recordatorios por correo y un servidor MCP aislado por usuario para consultar los datos desde un asistente sin exponer las contraseñas.',
        techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'MUI', 'Vercel'],
        category: 'SISTEMA',
        featured: true,
        order: 8,
        projectUrl: 'https://bobeda.vercel.app',
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
