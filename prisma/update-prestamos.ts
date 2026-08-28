import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// Pone al dia la ficha del Sistema de Gestion de Activos: el proyecto migro de
// Laravel 10 + MySQL en Render a Laravel 12 + PostgreSQL sobre AWS Lambda, y
// ahora expone credenciales de prueba en la tarjeta del portafolio.
async function main() {
  const r = await prisma.project.updateMany({
    where: { title: 'Sistema de Gestión de Activos' },
    data: {
      longDesc:
        'Desarrollado con Laravel 12 y PostgreSQL serverless, desplegado sobre AWS Lambda con API Gateway mediante Bref. Incluye máquina de estados por activo, códigos QR para registrar movimientos desde el celular, validación por RUT, notificaciones por correo y auditoría por rol.',
      techStack: ['Laravel 12', 'PHP', 'PostgreSQL', 'AWS Lambda', 'Tailwind CSS'],
      projectUrl: 'https://sistemaprestamos.iasmtech.com',
      testUser: 'admin@sistemaprestamos.cl',
      testPassword: 'Admin123*',
      testRole: 'Administrador',
    },
  })
  console.log('Actualizado:', r.count)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
