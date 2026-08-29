import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const posts = [
  {
    slug: 'cuanto-cuesta-sitio-web-chile',
    title: '¿Cuánto cuesta un sitio web en Chile? Guía completa 2026',
    excerpt: 'Descubre cuánto cuesta realmente un sitio web en Chile en 2026: desde una landing page hasta un e-commerce y sistemas a medida. Precios reales, factores y consejos para no pagar de más.',
    imageUrl: '/assets/blog-costo-sitio-web.jpg',
    published: true,
    publishedAt: new Date('2026-03-01'),
    content: `## ¿Por qué los precios varían tanto?

Una de las preguntas más frecuentes que recibo de emprendedores y dueños de negocio en Chile es: *"¿Cuánto cuesta hacer un sitio web?"*. La respuesta honesta siempre depende del alcance, pero para que tengas claridad presupuestaria, en este artículo te desgloso los valores reales de mercado actualizados a 2026.

---

## Tipos de proyectos web y rangos de precio en Chile (2026)

### 1. Landing Page o Sitio de Conversión
**¿Qué es?** Una página enfocada en captar clientes, presentar un servicio específico o promocionar un producto con llamados a la acción claros.
- **Precio estimado:** $150.000 – $350.000 CLP
- **Ideal para:** Profesionales independientes, talleres, servicios locales y campañas de venta directa.
- **Incluye:** Diseño mobile-first de alto impacto, optimización para Google (SEO local), botón de WhatsApp directo, formulario de contacto y hosting rápido.

---

### 2. Sitio Web Corporativo / Empresa
**¿Qué es?** Un sitio multi-página estructurado: Inicio, Servicios, Nosotros, Portafolio/Catálogo, Blog y Contacto.
- **Precio estimado:** $350.000 – $850.000 CLP
- **Ideal para:** Empresas medianas, consultoras, estudios profesionales y PYMES consolidadas.
- **Incluye:** Panel autogestionable para editar textos e imágenes sin programar, arquitectura SEO avanzada, formulario de cotización y analítica de visitas.

---

### 3. Tienda Online (E-commerce)
**¿Qué es?** Una plataforma de venta 24/7 con pasarela de pagos integrada, control de stock y pedidos.
- **Precio estimado:** $600.000 – $1.800.000 CLP
- **Ideal para:** Marcas de retail, tiendas de ropa, productos artesanales o importadores.
- **Incluye:** Carrito de compras, integración Webpay Plus / Mercado Pago, notificaciones automáticas por correo y panel de administración de productos.

---

### 4. Sistemas y Aplicaciones a Medida (Web & Móvil)
**¿Qué es?** Software diseñado exactamente para los flujos operativos únicos de tu empresa (inventarios, reservas, cotizadores multi-paso, portales privados).
- **Precio estimado:** $1.000.000 CLP en adelante (según complejidad)
- **Ideal para:** Negocios que necesitan automatizar tareas repetitivas o reemplazar planillas Excel desordenadas.

---

## Factores clave que influyen en el presupuesto

1. **Diseño a medida vs Plantillas prediseñadas:** Un sitio hecho a mano con Next.js carga en milisegundos y posiciona mejor en Google que una plantilla pesada de WordPress.
2. **Integraciones:** Conexiones con pasarelas de pago chilenas (Transbank, Flow, Mercado Pago), APIs de WhatsApp, CRMs o servicios en la nube como AWS.
3. **Contenido:** Si ya cuentas con fotos de calidad y textos preparados, el tiempo de desarrollo y el costo se reducen notablemente.

---

## ¿Cómo asegurar el retorno de tu inversión?

Un sitio web no es un gasto decorativo: es un canal de ventas digital que trabaja las 24 horas del día. Antes de contratar a cualquier desarrollador, exige ver trabajos previos reales y asegúrate de que el código te pertenezca al 100%.

¿Tienes en mente un proyecto o necesitas una cotización exacta? Hablemos directamente por WhatsApp o mediante el formulario de contacto para evaluar tu idea sin compromiso.`,
  },
  {
    slug: 'automatizacion-ia-para-pymes-chile',
    title: 'Cómo automatizar tu negocio con n8n e Inteligencia Artificial en Chile',
    excerpt: 'Aprende cómo las PYMES y emprendedores en Chile están ahorrando decenas de horas al mes automatizando WhatsApp, cotizaciones, recordatorios y atención al cliente con n8n y Gemini.',
    imageUrl: '/assets/blog-automatizacion-ia.jpg',
    published: true,
    publishedAt: new Date('2026-06-15'),
    content: `## El verdadero poder de la automatización para PYMES

Muchos dueños de negocio en Chile pasan entre 2 y 4 horas al día respondiendo las mismas preguntas en WhatsApp, enviando presupuestos manualmente o confirmando citas una por una.

Hoy en día, herramientas como **n8n** combinadas con modelos de **Inteligencia Artificial (como Gemini API)** permiten conectar todos tus sistemas para que las tareas repetitivas se ejecuten solas en segundo plano.

---

## 3 Casos reales de automatización aplicados a negocios

### 1. Recordatorios y confirmaciones automáticas por WhatsApp
- **El problema:** En salones de belleza, centros médicos o consultorías, entre un 20% y 30% de los clientes olvidan su cita si no se les avisa con anticipación.
- **La solución:** Un flujo automatizado que toma la reserva de la base de datos y envía un mensaje personalizado por WhatsApp 24 horas antes y 2 horas antes de la cita, permitiendo al cliente confirmar o reagendar con un solo clic.

---

### 2. Cotizadores automáticos inteligentes
- **El problema:** Responder cotizaciones personalizadas de clientes puede demorar horas o días, perdiendo el interés del comprador.
- **La solución:** Formularios dinámicos paso a paso que calculan el valor estimado al instante, guardan el lead en tu base de datos, notifican a tu correo y derivan la conversación a WhatsApp con todos los datos precargados.

---

### 3. Asistentes conversacionales con IA adaptados a tu catálogo
- **El problema:** Clientes consultando stock, horarios o recomendaciones fuera del horario comercial.
- **La solución:** Un asistente inteligente entrenado con tu catálogo real que responde dudas frecuentes con lenguaje natural y deriva a un humano solo los casos complejos o listos para pagar.

---

## ¿Por qué elegir n8n sobre otras herramientas?

A diferencia de plataformas como Zapier o Make que cobran tarifas mensuales elevadas por cada tarea ejecutada, **n8n** puede desplegarse en servidores propios (o instancias cloud ligeras) sin límites de ejecuciones, brindando control total sobre la privacidad de los datos de tus clientes.

---

## Conclusión

La automatización no es solo para grandes corporaciones: es la herramienta más efectiva para que una pequeña empresa multiplique su capacidad de atención sin aumentar sus costos fijos.

Si quieres evaluar qué procesos de tu negocio se pueden automatizar, conversemos y diseñemos un flujo a tu medida.`,
  },
  {
    slug: 'pwa-vs-apps-nativas-para-emprendedores',
    title: 'PWA vs App Nativa: La mejor opción para lanzar tu aplicación móvil en 2026',
    excerpt: '¿Vale la pena publicar en Google Play y App Store o te conviene una Progressive Web App (PWA)? Ventajas, costos, rendimiento y el caso real de RutinIA.',
    imageUrl: '/assets/blog-pwa-apps-moviles.jpg',
    published: true,
    publishedAt: new Date('2026-08-20'),
    content: `## El dilema móvil: ¿App de tienda o Progressive Web App?

Cuando un emprendedor o empresa decide lanzar una aplicación móvil, la primera idea suele ser: *"creemos una app para Google Play y App Store"*. 

Sin embargo, publicar y mantener dos aplicaciones nativas independientes suele costar entre **$3.000.000 y $8.000.000 CLP**, además de lidiar con revisiones de semanas y el pago de comisiones de hasta el 30% a Apple y Google.

Aquí es donde las **Progressive Web Apps (PWA)** se han convertido en la opción más inteligente y rentable en 2026.

---

## ¿Qué es exactamente una PWA?

Una PWA es una aplicación web construida con tecnologías modernas (como **Next.js, TypeScript y React**) que ofrece la experiencia de una app instalada en el celular:

- **Icono en la pantalla de inicio:** El usuario la instala directamente desde su navegador con un toque.
- **Funcionamiento sin conexión:** Guarda datos en caché para operar incluso sin internet o con señal débil.
- **Acceso a hardware del dispositivo:** Cámara, sensores de movimiento, geolocalización y notificaciones push.
- **Actualizaciones instantáneas:** Cada vez que publicas una mejora, todos tus usuarios la reciben al segundo sin tener que descargar una actualización pesada.

---

## Comparativa: PWA vs App Nativa

| Característica | Progressive Web App (PWA) | App Nativa (iOS + Android) |
|---|---|---|
| **Costo de desarrollo** | Menor (1 sola base de código) | Alto (2 plataformas separadas) |
| **Tiempo de lanzamiento** | Días o semanas | Meses (esperando aprobación) |
| **Comisiones de venta** | 0% (pagas tus propias pasarelas) | 15% – 30% a las tiendas |
| **Instalación** | 1 clic desde la web | Búsqueda y descarga pesada en tienda |
| **Mantenimiento** | Unificado e instantáneo | Actualizaciones separadas por tienda |

---

## El caso de éxito: RutinIA

En nuestro proyecto **RutinIA** (app inteligente de entrenamiento físico), implementamos una arquitectura PWA en Next.js 16:

1. **Visión por computadora en cliente:** Detección de postura con MediaPipe Pose directamente en el navegador del celular sin requerir servidores costosos.
2. **Asistente inteligente con Gemini API:** Respuestas y generación de rutinas adaptadas en tiempo real.
3. **Modo offline:** El usuario puede llevar el registro de sus series y pesos en el gimnasio sin depender de la señal móvil.

---

## ¿Cuándo elegir cada una?

- **Elige una PWA** si buscas validar tu idea rápido, ofrecer herramientas internas, sistemas de gestión móvil o plataformas de membresías con costos controlados.
- **Elige una App Nativa** solo si necesitas gráficos 3D pesados de videojuegos o acceso de ultra bajo nivel al kernel del sistema operativo.

¿Tienes una idea de app y no sabes qué camino tomar? Conversemos y definamos la mejor arquitectura para tu presupuesto y modelo de negocio.`,
  },
]

async function main() {
  for (const postData of posts) {
    const post = await prisma.blogPost.upsert({
      where: { slug: postData.slug },
      update: postData,
      create: postData,
    })
    console.log(`✓ Post sincronizado: "${post.title}" [${post.slug}]`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

