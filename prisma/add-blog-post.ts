import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const post = await prisma.blogPost.upsert({
    where: { slug: 'cuanto-cuesta-sitio-web-chile' },
    update: {},
    create: {
      title: '¿Cuánto cuesta un sitio web en Chile? Guía completa 2025',
      slug: 'cuanto-cuesta-sitio-web-chile',
      excerpt: 'Descubre cuánto cuesta realmente un sitio web en Chile en 2025: desde una landing page hasta un e-commerce completo. Precios reales, sin sorpresas.',
      content: `## ¿Por qué los precios varían tanto?

Una de las preguntas más frecuentes que recibo es: *"¿Cuánto cuesta hacer un sitio web?"*. La respuesta honesta es: depende. Pero eso no te ayuda mucho, así que en este artículo te explico qué factores determinan el precio y qué puedes esperar pagar en Chile en 2025.

## Tipos de sitios web y sus rangos de precio

### 1. Landing Page o Sitio Informativo
**¿Qué es?** Una página de presentación de tu negocio, servicios o producto. Sin funcionalidades complejas.

**Precio estimado:** $120.000 – $300.000 CLP

**Ideal para:** Profesionales independientes, pequeños negocios, servicios locales.

**Incluye:** Diseño responsivo, formulario de contacto, integración con Google Maps, optimización SEO básica.

---

### 2. Sitio Web Corporativo
**¿Qué es?** Un sitio con múltiples páginas: inicio, servicios, nosotros, blog, contacto.

**Precio estimado:** $300.000 – $700.000 CLP

**Ideal para:** Empresas medianas, estudios profesionales, instituciones.

**Incluye:** Todo lo anterior más panel de administración para actualizar contenidos, blog integrado, múltiples secciones.

---

### 3. Tienda Online (E-commerce)
**¿Qué es?** Una tienda completa con catálogo de productos, carrito de compras y pagos en línea.

**Precio estimado:** $500.000 – $1.500.000 CLP

**Ideal para:** Negocios que quieren vender 24/7 sin depender de redes sociales.

**Incluye:** Catálogo de productos, carrito, integración con WebPay o MercadoPago, panel de gestión de pedidos e inventario.

---

### 4. Sistema a Medida
**¿Qué es?** Software desarrollado específicamente para tu proceso de negocio.

**Precio estimado:** $800.000 CLP en adelante

**Ideal para:** Empresas con procesos únicos que no se pueden resolver con soluciones genéricas.

**Incluye:** Análisis de requerimientos, desarrollo personalizado, capacitación, soporte post-lanzamiento.

---

## ¿Qué factores encarecen un proyecto?

- **Diseño completamente original** (vs usar una plantilla como base)
- **Integraciones con sistemas externos** (ERPs, CRMs, APIs de pago)
- **Funcionalidades de cuenta de usuario** (registro, login, perfiles)
- **Aplicación móvil complementaria**
- **Plazos muy cortos** (trabajo urgente tiene un costo adicional)

## ¿Qué factores abaratan el costo?

- Tener bien definido qué necesitas antes de comenzar
- Contar con textos e imágenes listas
- No requerir funcionalidades complejas
- Plazos flexibles

## Preguntas frecuentes sobre precios

### ¿Puedo pagar en cuotas?
Sí. Lo habitual es un 50% al inicio del proyecto y el 50% restante al entregar. Para proyectos grandes se puede acordar por etapas.

### ¿Está incluido el dominio y el hosting?
Generalmente no. El dominio (.cl) cuesta entre $10.000 y $20.000 CLP anuales. El hosting varía según el tipo de proyecto, pero para sitios básicos puede ser gratis (Vercel, Netlify) o desde $5.000 CLP mensuales.

### ¿Cuánto demora?
- Landing page: 1–2 semanas
- Sitio corporativo: 2–4 semanas
- E-commerce: 4–8 semanas
- Sistema a medida: 2–6 meses

### ¿Necesito pagar mantención mensual?
No es obligatorio, pero sí recomendable para mantener el sitio actualizado, seguro y con backups. Un plan básico de mantención cuesta entre $30.000 y $80.000 CLP mensuales.

## Conclusión

El precio de un sitio web en Chile depende directamente de lo que necesitas resolver. **No existe un precio único**, pero ahora tienes una referencia real para saber qué esperar.

Lo más importante antes de cotizar: define claramente qué problema quieres resolver con el sitio. ¿Quieres que te encuentren en Google? ¿Quieres vender en línea? ¿Quieres mostrar tu trabajo? Con eso claro, la cotización será mucho más precisa.

¿Tienes dudas sobre tu proyecto específico? [Escríbeme directamente](#contacto) y te respondo sin compromiso.`,
      published: true,
      publishedAt: new Date('2025-03-20'),
    },
  })

  console.log('Post creado:', post.title)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
