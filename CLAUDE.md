# CLAUDE.md — iasmtech
## Página de Ventas de Servicios Informáticos — Iván Solís Manqueo

> Este archivo es la fuente de verdad para todos los agentes que trabajen en este proyecto.
> Leerlo completo antes de escribir cualquier línea de código.

---

## 1. IDENTIDAD DEL PROYECTO

- **Nombre del proyecto:** iasmtech
- **Repo/carpeta:** `iasmtech`
- **Descripción:** Página de ventas de servicios informáticos para Iván Solís Manqueo, Full Stack Developer radicado en Talca, Chile. Orientada a PYMES y emprendedores de la Región del Maule.
- **URL producción (objetivo):** `iasmtech.cl` (o `iasmtech.vercel.app` en dev)
- **Propietario:** Iván Solís Manqueo — ivan.solis20.m@gmail.com

---

## 2. STACK TECNOLÓGICO — OBLIGATORIO

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js App Router | 14.x |
| Lenguaje | TypeScript | strict mode |
| UI | Material UI (MUI) | v6 |
| Base de datos | PostgreSQL (Neon serverless) | latest |
| ORM | Prisma | latest |
| Imágenes | Cloudinary + next-cloudinary | latest |
| Autenticación | NextAuth.js | v5 (Auth.js) |
| Email | Resend | latest |
| Deploy | Vercel | — |
| Package manager | npm | — |

### ❌ PROHIBIDO usar:
- Tailwind CSS (usar MUI sx prop o styled components)
- CSS modules (excepto para overrides globales mínimos)
- cualquier componente UI que no sea MUI
- `any` en TypeScript
- `console.log` en producción (usar solo en desarrollo)

---

## 3. ARQUITECTURA DE CARPETAS

```
iasmtech/
├── app/
│   ├── (public)/               # Rutas públicas del sitio
│   │   ├── page.tsx            # Home (todas las secciones)
│   │   └── blog/
│   │       ├── page.tsx        # Listado de posts
│   │       └── [slug]/
│   │           └── page.tsx    # Post individual
│   ├── admin/                  # Panel de administración (protegido)
│   │   ├── layout.tsx          # Layout admin con sidebar MUI
│   │   ├── page.tsx            # Dashboard resumen
│   │   ├── projects/
│   │   │   ├── page.tsx        # Listado proyectos
│   │   │   ├── new/page.tsx    # Crear proyecto
│   │   │   └── [id]/page.tsx   # Editar proyecto
│   │   ├── messages/
│   │   │   ├── page.tsx        # Listado mensajes de contacto
│   │   │   └── [id]/page.tsx   # Ver mensaje individual
│   │   └── blog/
│   │       ├── page.tsx        # Listado posts
│   │       ├── new/page.tsx    # Crear post
│   │       └── [id]/page.tsx   # Editar post
│   ├── api/
│   │   ├── auth/[...nextauth]/ # NextAuth.js handlers
│   │   ├── contact/
│   │   │   └── route.ts        # POST /api/contact
│   │   ├── projects/
│   │   │   └── route.ts        # GET /api/projects
│   │   └── blog/
│   │       └── route.ts        # GET /api/blog
│   ├── layout.tsx              # Root layout + MUI ThemeProvider
│   └── globals.css             # Sólo reset mínimo
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/               # Secciones del Home
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                     # Componentes MUI reutilizables
│   │   ├── ProjectCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── BlogCard.tsx
│   └── admin/
│       ├── AdminSidebar.tsx
│       └── AdminHeader.tsx
├── lib/
│   ├── prisma.ts               # Singleton Prisma client
│   ├── auth.ts                 # NextAuth config
│   ├── cloudinary.ts           # Config Cloudinary
│   ├── resend.ts               # Config Resend
│   └── theme.ts                # MUI custom theme
├── hooks/                      # Custom hooks
│   └── useScrollspy.ts
├── types/
│   └── index.ts                # Tipos globales del proyecto
├── prisma/
│   ├── schema.prisma
│   └── seed.ts                 # Seed inicial con proyectos demo
├── public/
│   └── assets/
├── .env.local                  # Variables de entorno (no commitear)
├── .env.example                # Template de variables
├── next.config.ts
├── tsconfig.json
└── CLAUDE.md                   # Este archivo
```

---

## 4. DISEÑO — TEMA MUI

### Paleta de colores (definir en `lib/theme.ts`)

```typescript
// lib/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2979FF',       // Azul eléctrico
      light: '#75A7FF',
      dark: '#0046CB',
    },
    secondary: {
      main: '#00E5FF',       // Cyan acento
    },
    background: {
      default: '#0A0A0F',    // Negro profundo
      paper: '#12121A',      // Cards
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem' },
    h2: { fontWeight: 700, fontSize: '2.5rem' },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(41, 121, 255, 0.15)',
        },
      },
    },
  },
})

export default theme
```

### Reglas de diseño
- Siempre usar `sx` prop de MUI para estilos inline
- Para componentes complejos usar `styled()` de MUI
- Gradientes de fondo en secciones: `linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)`
- Cards con `border: 1px solid rgba(41, 121, 255, 0.15)` y `backdrop-filter: blur(10px)`
- Botones CTA primarios: `variant="contained"` color primary con glow effect
- Separación entre secciones: `py: { xs: 8, md: 12 }`

---

## 5. BASE DE DATOS — SCHEMA PRISMA

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  password      String    // bcrypt hash
  name          String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Project {
  id            String    @id @default(cuid())
  title         String
  description   String
  longDesc      String?   @db.Text
  techStack     String[]
  imageUrl      String?   // Cloudinary URL
  projectUrl    String?
  githubUrl     String?
  category      Category
  featured      Boolean   @default(false)
  order         Int       @default(0)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Contact {
  id            String        @id @default(cuid())
  name          String
  email         String
  phone         String?
  serviceType   ServiceType
  message       String        @db.Text
  status        ContactStatus @default(NUEVO)
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

model BlogPost {
  id            String    @id @default(cuid())
  title         String
  slug          String    @unique
  excerpt       String
  content       String    @db.Text
  imageUrl      String?   // Cloudinary URL
  published     Boolean   @default(false)
  publishedAt   DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Category {
  WEB
  ECOMMERCE
  APP_MOVIL
  SISTEMA
  AUTOMATIZACION
}

enum ServiceType {
  SITIO_WEB
  ECOMMERCE
  APP_MOVIL
  SISTEMA_MEDIDA
  AUTOMATIZACION
  OTRO
}

enum ContactStatus {
  NUEVO
  LEIDO
  RESPONDIDO
  ARCHIVADO
}
```

---

## 6. VARIABLES DE ENTORNO

Crear `.env.example` con este contenido (sin valores reales):

```env
# Base de datos (Neon PostgreSQL)
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DB?sslmode=require"
DIRECT_URL="postgresql://USER:PASSWORD@HOST/DB?sslmode=require"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="genera-con-openssl-rand-base64-32"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Resend (email)
RESEND_API_KEY=""
RESEND_FROM_EMAIL="contacto@iasmtech.cl"
RESEND_TO_EMAIL="ivan.solis20.m@gmail.com"

# Admin (para seed inicial)
ADMIN_EMAIL="ivan.solis20.m@gmail.com"
ADMIN_PASSWORD=""
```

---

## 7. SECCIONES DEL HOME — ESPECIFICACIÓN

### 7.1 HeroSection
- Ocupa 100vh mínimo
- Titular: `"Soluciones Digitales para el Maule"` (h1, grande, bold)
- Subtítulo: `"Desarrollo web, apps móviles y automatización para PYMES y emprendedores"` 
- Dos CTAs: `"Ver mis proyectos"` (primary contained) y `"Contáctame"` (outlined)
- Fondo: partículas sutiles o gradiente animado — usar CSS animations puras, no librerías pesadas
- Badge animado: `"Disponible para proyectos"` con dot verde parpadeante

### 7.2 ServicesSection
- Título de sección: `"¿Qué puedo hacer por tu negocio?"`
- Grid de 6 cards MUI con íconos MUI Icons:
  1. 🌐 Sitios Web Modernos
  2. 🛒 Tiendas Online (E-commerce)
  3. 📱 Apps Móviles Android
  4. ⚙️ Sistemas a Medida
  5. 🤖 Automatización con n8n
  6. 🔧 Mantención y Soporte
- Cada card: ícono grande, título, descripción corta, precio referencial (`"desde $X CLP"`)
- Cards con hover effect (elevación + border glow azul)

### 7.3 PortfolioSection
- Título: `"Proyectos Realizados"`
- Filtro por categoría usando MUI Tabs o Chip group
- Grid responsive de ProjectCards (imagen Cloudinary, título, stack, links)
- Botón `"Ver todos los proyectos"` (si hay más de 6)
- Datos vienen de `/api/projects` (Server Component con fetch)

### 7.4 AboutSection
- Layout de dos columnas: texto + foto/ilustración
- Nombre completo, título, años de experiencia
- Stack de tecnologías como MUI Chip grid
- Párrafo narrativo: ex-líder de equipos en Apple Premium Reseller → reconversión tech → desarrollador full stack en Talca
- Botones: `"Descargar CV"` y `"Ver LinkedIn"`

### 7.5 BlogSection
- Últimos 3 posts del blog
- Cards con imagen Cloudinary, título, excerpt, fecha, link
- Botón `"Ver todos los artículos"`
- Si no hay posts publicados, mostrar placeholder elegante (no error)

### 7.6 ContactSection
- Formulario MUI: Nombre, Email, Teléfono (opcional), Tipo de servicio (Select), Mensaje
- Validación client-side con controlled components
- Submit → POST `/api/contact` → guarda en DB + envía email con Resend
- Estados: idle / loading / success / error con MUI Alert
- Info lateral: WhatsApp directo, email, ubicación (Talca, Chile)

---

## 8. PANEL ADMIN — ESPECIFICACIÓN

### Acceso
- Ruta: `/admin`
- Protegida con NextAuth.js middleware
- Solo usuarios con rol en DB pueden acceder
- Redirect a `/admin/login` si no autenticado

### Layout admin
- MUI Drawer lateral fijo (desktop) / temporal (móvil)
- Ítems: Dashboard, Proyectos, Mensajes, Blog, Cerrar sesión
- Header con nombre del usuario y avatar

### Admin — Proyectos (`/admin/projects`)
- Tabla MUI DataGrid o Table con: imagen thumb, título, categoría, featured, orden, acciones
- CRUD completo: crear, editar, eliminar
- Upload de imagen directo a Cloudinary (desde el formulario)
- Drag para reordenar (opcional, fase 2)

### Admin — Mensajes (`/admin/messages`)
- Tabla con: nombre, email, tipo servicio, fecha, status (chip de color)
- Ver detalle del mensaje
- Cambiar status (NUEVO → LEIDO → RESPONDIDO → ARCHIVADO)
- Filtro por status

### Admin — Blog (`/admin/blog`)
- Listado de posts con status published/draft
- Editor de contenido: usar MUI TextField multiline o integrar react-quill
- Campos: título, slug (auto-generado), excerpt, contenido, imagen, publicado

---

## 9. API ROUTES — CONTRATOS

### POST /api/contact
```typescript
// Request body
{
  name: string        // requerido, min 2 chars
  email: string       // requerido, email válido
  phone?: string      // opcional
  serviceType: ServiceType
  message: string     // requerido, min 10 chars
}

// Response 200
{ success: true, id: string }

// Response 400
{ success: false, error: string }
```

### GET /api/projects
```typescript
// Query params opcionales
?category=WEB&featured=true&limit=6

// Response 200
{
  projects: Project[]
  total: number
}
```

### GET /api/blog
```typescript
// Query params opcionales
?limit=3&published=true

// Response 200
{
  posts: BlogPost[]
  total: number
}
```

---

## 10. AUTENTICACIÓN — NEXTAUTH v5

```typescript
// lib/auth.ts — estructura base
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Buscar usuario en DB, comparar hash bcrypt
        // Retornar user o null
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isAdminRoute = nextUrl.pathname.startsWith('/admin')
      const isLoginPage = nextUrl.pathname === '/admin/login'
      if (isAdminRoute && !isLoginPage && !isLoggedIn) return false
      return true
    },
  },
})
```

---

## 11. CLOUDINARY — PATRÓN DE USO

```typescript
// Para mostrar imágenes (componentes públicos)
import { CldImage } from 'next-cloudinary'

<CldImage
  src={project.imageUrl}
  width={600}
  height={400}
  alt={project.title}
  crop="fill"
/>

// Para upload desde admin
import { CldUploadWidget } from 'next-cloudinary'

<CldUploadWidget
  uploadPreset="iasmtech_projects"
  onSuccess={(result) => {
    // guardar result.info.secure_url en el estado
  }}
>
  {({ open }) => <Button onClick={() => open()}>Subir imagen</Button>}
</CldUploadWidget>
```

---

## 12. SEED INICIAL

El archivo `prisma/seed.ts` debe poblar:

**Proyectos iniciales (4 proyectos reales de Iván):**
1. E-Shop Multivendedor (Next.js + Strapi + PostgreSQL) — categoría ECOMMERCE
2. Sistema de Gestión de Activos y Préstamos Tecnológicos (Laravel + MySQL) — categoría SISTEMA
3. Mermax — Control de vencimientos para PYMES (React Native + Node.js) — categoría APP_MOVIL
4. FamilyTasks — Gestión familiar de tareas (Next.js + PostgreSQL) — categoría WEB

**Usuario admin inicial:**
- Email: desde `process.env.ADMIN_EMAIL`
- Password: hash bcrypt desde `process.env.ADMIN_PASSWORD`

---

## 13. COMANDOS DE INSTALACIÓN

```bash
# 1. Crear proyecto
npx create-next-app@14 iasmtech --typescript --app --no-tailwind --no-src-dir

# 2. Instalar dependencias principales
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @prisma/client prisma
npm install next-auth@beta bcryptjs
npm install next-cloudinary cloudinary
npm install resend

# 3. Instalar tipos
npm install -D @types/bcryptjs

# 4. Inicializar Prisma
npx prisma init

# 5. Después de configurar .env.local, migrar DB
npx prisma migrate dev --name init

# 6. Ejecutar seed
npx prisma db seed

# 7. Dev server
npm run dev
```

---

## 14. REGLAS GENERALES PARA LOS AGENTES

1. **TypeScript estricto** — no usar `any`, tipar todo explícitamente
2. **Server Components por defecto** — solo marcar `"use client"` cuando sea estrictamente necesario (formularios, estado, efectos)
3. **MUI siempre** — ningún estilo fuera del sistema MUI (sx prop, styled, theme)
4. **Archivos completos** — nunca entregar snippets parciales, siempre el archivo completo
5. **Explicaciones debajo del código** — nunca comentarios inline en el código entregado
6. **Sin console.log** en archivos que no sean de debug/seed
7. **Validación en API routes** — siempre validar body antes de tocar la DB
8. **Error handling** — try/catch en todas las operaciones async de DB y API externas
9. **Responsive** — todas las secciones deben funcionar en móvil (breakpoints MUI: xs, sm, md, lg)
10. **Imágenes siempre por Cloudinary** — nunca en `/public` para imágenes de contenido

---

## 15. ORDEN DE DESARROLLO SUGERIDO

1. Setup inicial (create-next-app + instalar deps + configurar theme MUI)
2. Schema Prisma + migración + seed
3. Layout raíz con ThemeProvider + Navbar + Footer
4. Sección HeroSection
5. Sección ServicesSection (datos estáticos primero)
6. API GET /api/projects + PortfolioSection
7. Sección AboutSection
8. API GET /api/blog + BlogSection
9. API POST /api/contact + ContactSection con Resend
10. Autenticación NextAuth (login page + middleware)
11. Layout admin + AdminSidebar
12. Admin Proyectos (CRUD + Cloudinary upload)
13. Admin Mensajes (listado + cambio de status)
14. Admin Blog (CRUD + editor)
15. Blog público (listado + post individual)
16. SEO (metadata, OG tags, sitemap)
17. Deploy en Vercel

---

*Generado por Cerebrito — Agente estratégico de Iván Solís Manqueo*
*Fecha: Marzo 2026*
