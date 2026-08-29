import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const existing = await prisma.project.findFirst({
    where: {
      OR: [
        { title: { contains: 'RutinIA' } },
        { projectUrl: 'https://rutinia-ten.vercel.app' },
      ],
    },
  })

  const projectData = {
    title: 'RutinIA — App de Entrenamiento Inteligente',
    description:
      'App mobile-first que genera rutinas de entrenamiento personalizadas según tu objetivo y equipamiento, con asistente conversacional IA y seguimiento por fotos.',
    longDesc:
      'Desarrollada con Next.js 16 (App Router con Turbopack) y TypeScript, con PostgreSQL serverless en Neon vía Prisma 7. Incluye motor de sobrecarga progresiva sin librerías externas, asistente inteligente con Gemini API y grounding, análisis de postura con MediaPipe Pose en cliente sin costo de servidor, subida de fotos firmada a Cloudinary, recordatorios con Resend y soporte PWA para instalación en el celular y uso offline.',
    techStack: [
      'Next.js 16',
      'Gemini API',
      'MediaPipe Pose',
      'PostgreSQL',
      'Prisma',
      'TypeScript',
      'Material UI',
      'Cloudinary',
      'Resend',
      'PWA',
    ],
    category: 'APP_MOVIL' as const,
    featured: true,
    order: 3,
    imageUrl: '/assets/rutinia.png',
    projectUrl: 'https://rutinia-ten.vercel.app',
    githubUrl: 'https://github.com/IvanSolis2003/RutinIA',
    testUser: 'demo@iasmtech.com',
    testPassword: 'RutinIA-Demo-2026',
    testRole: 'Usuario Demo',
  }

  if (existing) {
    const updated = await prisma.project.update({
      where: { id: existing.id },
      data: projectData,
    })
    console.log('Proyecto RutinIA actualizado:', updated.title)
  } else {
    const created = await prisma.project.create({
      data: projectData,
    })
    console.log('Proyecto RutinIA creado:', created.title)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

