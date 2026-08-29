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
        longDesc: 'Frontend en Next.js 16 con TypeScript sobre Vercel y backend Strapi 5 en Docker sobre una instancia EC2 de AWS. La base corre en PostgreSQL serverless y las imágenes en Cloudinary, con la imagen del backend construida en GitHub Actions. Permite múltiples vendedores con sus propios dashboards, gestión de productos, órdenes y reportes de ventas.',
        techStack: ['Next.js 16', 'Strapi 5', 'PostgreSQL', 'AWS EC2', 'Docker', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
        category: 'ECOMMERCE',
        featured: true,
        order: 1,
        projectUrl: 'https://ecommerce.iasmtech.com/',
      },
      {
        title: 'Sistema de Gestión de Activos',
        description: 'Sistema para gestión de activos tecnológicos y préstamos internos en empresas. Control de inventario, asignaciones y mantenimientos.',
        longDesc: 'Desarrollado con Laravel 12 y PostgreSQL serverless, desplegado sobre AWS Lambda con API Gateway mediante Bref. Incluye máquina de estados por activo, códigos QR para registrar movimientos desde el celular, validación por RUT, notificaciones por correo y auditoría por rol.',
        techStack: ['Laravel 12', 'PHP', 'PostgreSQL', 'AWS Lambda', 'Tailwind CSS'],
        category: 'SISTEMA',
        featured: true,
        order: 2,
        projectUrl: 'https://sistemaprestamos.iasmtech.com',
        testUser: 'admin@sistemaprestamos.cl',
        testPassword: 'Admin123*',
        testRole: 'Administrador',
      },
      {
        title: 'RutinIA — App de Entrenamiento Inteligente',
        description: 'App mobile-first que genera rutinas de entrenamiento personalizadas según tu objetivo y equipamiento, con asistente conversacional IA y seguimiento por fotos.',
        longDesc: 'Desarrollada con Next.js 16 (App Router con Turbopack) y TypeScript, con PostgreSQL serverless en Neon vía Prisma 7. Incluye motor de sobrecarga progresiva sin librerías externas, asistente inteligente con Gemini API y grounding, análisis de postura con MediaPipe Pose en cliente sin costo de servidor, subida de fotos firmada a Cloudinary, recordatorios con Resend y soporte PWA para instalación en el celular y uso offline.',
        techStack: ['Next.js 16', 'Gemini API', 'MediaPipe Pose', 'PostgreSQL', 'Prisma', 'TypeScript', 'Material UI', 'Cloudinary', 'Resend', 'PWA'],
        category: 'APP_MOVIL',
        featured: true,
        order: 3,
        imageUrl: '/assets/rutinia.png',
        projectUrl: 'https://rutinia-ten.vercel.app',
        githubUrl: 'https://github.com/IvanSolis2003/RutinIA',
        testUser: 'demo@iasmtech.com',
        testPassword: 'RutinIA-Demo-2026',
        testRole: 'Usuario Demo',
      },
      {
        title: 'FamilyTasks',
        description: 'Aplicación web para gestión colaborativa de tareas familiares. Asignación de responsables, fechas límite y seguimiento de progreso.',
        longDesc: 'Desarrollada con Next.js 14 y TypeScript, con Drizzle ORM sobre PostgreSQL serverless en Neon. Incluye autenticación familiar con Auth.js, asignación de tareas por miembro, recordatorios por correo con Resend e imágenes en Cloudinary.',
        techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Auth.js', 'Resend'],
        category: 'WEB',
        featured: false,
        order: 4,
        projectUrl: 'https://familytaskiasm20tech.vercel.app',
      },
      {
        title: 'Salón Bella — Reservas Online',
        description: 'Plataforma web de reservas para salón de belleza. Los clientes agendan hora en línea 24/7, reciben confirmación automática y recordatorios.',
        longDesc: 'Sitio completo para salón de belleza en Talca hecho con Next.js 16 y MUI, con PostgreSQL vía Prisma. Reservas en tiempo real, catálogo de servicios con precios y duración, perfiles del equipo, galería y testimonios. Los recordatorios por WhatsApp y las confirmaciones por correo corren solos con flujos de n8n. Diseño mobile-first.',
        techStack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'n8n', 'Prisma', 'Material UI', 'Vercel'],
        category: 'WEB',
        featured: true,
        order: 5,
        projectUrl: 'https://salonapp-phi.vercel.app',
      },
      {
        title: 'Vidriería Demo — Cotizador y Panel Autogestionable',
        description: 'Sitio para vidriería (aluminio, PVC y vidrios) con catálogo de productos y proyectos, cotizador multi-paso con carga de fotos y panel de administración totalmente autogestionable.',
        longDesc: 'Desarrollado con Next.js 15 y MUI, con Neon PostgreSQL vía Prisma. Incluye un cotizador en 5 pasos que sube fotos a Vercel Blob, guarda la solicitud en base de datos, notifica por correo con Resend y genera un enlace directo a WhatsApp. El panel de administración permite gestión sin código de cotizaciones con estados, productos, categorías, proyectos, testimonios y el contenido de la propia web.',
        techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Material UI', 'Auth.js', 'Vercel Blob'],
        category: 'WEB',
        featured: true,
        order: 6,
        projectUrl: 'https://vidrieria-demo-xi.vercel.app/',
        testUser: 'admin@vidrieriademo.cl',
        testPassword: 'demo1234',
        testRole: 'Administrador',
      },
      {
        title: 'Davielle Orfebres — E-commerce de Joyería',
        description: 'Sitio de e-commerce para una marca de joyería artesanal, con catálogo filtrable, blog editorial y panel de administración con CRUD completo de productos, categorías y artículos.',
        longDesc: 'Desarrollado con Next.js 14 y MUI, con Neon PostgreSQL vía Prisma y carga de imágenes a Cloudinary. Catálogo con búsqueda y filtros por categoría, blog con editor de texto enriquecido y WhatsApp como canal de venta con mensajes precargados por producto. La dueña administra productos con múltiples imágenes, categorías y artículos desde su propio panel, con SEO y tema claro/oscuro.',
        techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Cloudinary', 'Prisma', 'Material UI', 'NextAuth.js'],
        category: 'ECOMMERCE',
        featured: true,
        order: 7,
        projectUrl: 'https://davielle.iasmtech.com',
      },
      {
        title: 'Bóveda Personal — Gestor Seguro de Credenciales',
        description: 'Aplicación web para guardar de forma segura credenciales, enlaces y documentos, con cifrado en base de datos, segundo factor obligatorio (TOTP) y un servidor MCP por usuario.',
        longDesc: 'Desarrollado con Next.js 16 y MUI, con Neon PostgreSQL vía Prisma. Cifra contraseñas y secretos TOTP con AES-256-GCM a nivel de campo, exige login con segundo factor, organiza los ítems en categorías jerárquicas con drag & drop y almacena documentos en un blob privado de lectura autenticada. Incluye generador de contraseñas, autobloqueo, recordatorios por correo y un servidor MCP aislado por usuario para consultar los datos desde un asistente sin exponer las contraseñas.',
        techStack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'MCP', 'Prisma', 'Auth.js', 'Material UI'],
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
