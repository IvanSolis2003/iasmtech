# iasmtech

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript) ![MUI](https://img.shields.io/badge/UI-Material%20UI%20v6-007FFF?logo=mui) ![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma) ![Postgres](https://img.shields.io/badge/DB-Neon%20Postgres-336791?logo=postgresql) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

Página de ventas de servicios informáticos para **Iván Solís Manqueo**, Full Stack Developer radicado en Talca, Chile. Orientada a PYMEs y emprendedores de la Región del Maule: sitios web, e‑commerce, apps móviles, sistemas a medida y automatización.

**En vivo:** [iasmtech.com](https://iasmtech.com)

## Qué resuelve

La mayoría de las PYMEs de la región no tienen presencia digital o dependen de soluciones genéricas. iasmtech es la landing comercial + blog + panel de administración con la que Iván capta clientes, muestra su portafolio y gestiona los mensajes de contacto que recibe, todo autoadministrable sin volver a tocar código para publicar un post o un proyecto nuevo.

## Features

- **Landing de ventas** — hero, servicios con precio referencial, portafolio filtrable por categoría, sección "sobre mí" y formulario de contacto.
- **Blog** con contenido enriquecido: el contenido se escribe en Markdown (encabezados, listas, negritas, tablas, código, citas) y se renderiza a HTML en el servidor con un parser propio, sin dependencias externas.
- **Formulario de contacto** que guarda el mensaje en la base de datos y envía notificación por email (Resend).
- **Panel de administración** (`/admin`, protegido con NextAuth) para gestionar:
  - Proyectos del portafolio (CRUD + imagen vía Cloudinary).
  - Mensajes de contacto recibidos (cambio de estado: nuevo → leído → respondido → archivado).
  - Posts del blog (crear, editar, publicar/despublicar).
- **SEO**: metadata, Open Graph, JSON‑LD, sitemap y robots.txt.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript (strict) |
| UI | Material UI v6 (sin Tailwind ni CSS modules) |
| Base de datos | PostgreSQL (Neon, serverless) |
| ORM | Prisma |
| Imágenes | Cloudinary |
| Autenticación | NextAuth.js v5 (Auth.js) |
| Email | Resend |
| Deploy | Vercel |

## Arquitectura

```
app/
├── (public)/            # Landing, blog público
├── admin/               # Panel protegido (proyectos, mensajes, blog)
└── api/                 # Route handlers: contact, projects, blog, admin, auth
components/
├── layout/              # Navbar, Footer
├── sections/            # Secciones del Home (Hero, Servicios, Portafolio, etc.)
├── ui/                  # Componentes reutilizables (incluye MarkdownContent)
└── admin/               # Componentes del panel
lib/                     # Prisma client, auth, cloudinary, resend, theme MUI
prisma/                  # schema.prisma + seed
```

- **Renderizado de contenido**: `components/ui/MarkdownContent.tsx` convierte el Markdown guardado en `BlogPost.content` a HTML (encabezados, listas, tablas, código, citas, enlaces) sin librerías externas.
- **Autenticación admin**: NextAuth v5 con proveedor de credenciales; el middleware protege todas las rutas bajo `/admin` y `/api/admin`.
- **Datos**: el portafolio y el blog se sirven desde Postgres vía Prisma (a diferencia del [portafolio personal](https://github.com/IvanSolis2003), que los tiene hardcodeados).

## Modelo de datos

`User`, `Project` (categoría, stack, destacado), `Contact` (estado del mensaje), `BlogPost` (slug, contenido Markdown, publicado). Ver [prisma/schema.prisma](prisma/schema.prisma).

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # completar variables (ver abajo)
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Ver [.env.example](.env.example). Se necesitan cuentas gratuitas en:

- **Neon** (Postgres) → `DATABASE_URL`, `DIRECT_URL`
- **Cloudinary** → `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- **Resend** → `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`
- `NEXTAUTH_SECRET` → generar con `openssl rand -base64 32`
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` → usuario admin inicial del seed

## Autor

**Iván Solís Manqueo** — Full Stack Developer, Talca, Chile
[iasmtech.com](https://iasmtech.com) · [ivan.solis20.m@gmail.com](mailto:ivan.solis20.m@gmail.com)

Proyecto personal / portafolio. Todos los derechos reservados.
