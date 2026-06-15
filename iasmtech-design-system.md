# iasmtech — Design System
> Basado en la estética de Vercel: pill buttons, tipografía bold, jerarquía clara.
> **Regla principal: mantener siempre la paleta de colores existente del proyecto. Este sistema solo define FORMA, no color.**

---

## 1. Botones

### Principio
Todos los botones usan `border-radius` tipo **cápsula/pill** (`rounded-full`), nunca `rounded-md` ni `rounded-lg`. La forma es lo que diferencia este diseño del genérico de Claude.

### Variantes Tailwind

```tsx
// Primario — fondo sólido, texto contrastante
<button className="px-6 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 active:scale-95">
  Acción principal
</button>

// Secundario — outline con borde visible, fondo transparente
<button className="px-6 py-3 rounded-full font-semibold text-sm border border-current bg-transparent transition-colors hover:bg-white/10">
  Acción secundaria
</button>

// Ghost / pill de feature (como los de "Enterprise", "Security" en Vercel)
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 bg-white/5">
  <IconComponent size={14} />
  Label
</span>
```

### Tamaños
| Tamaño | Clases |
|--------|--------|
| sm | `px-4 py-1.5 text-xs rounded-full` |
| md | `px-6 py-3 text-sm rounded-full` |
| lg | `px-8 py-4 text-base rounded-full` |

### ❌ Nunca usar
```tsx
// MAL — borde redondeado genérico
<button className="rounded-md ...">
<button className="rounded-lg ...">
<button className="rounded-xl ...">
```

---

## 2. Inputs y Campos de Texto

### Principio
Inputs con `rounded-full` para una línea de texto, `rounded-2xl` para textarea. Borde sutil, sin sombra pesada. Focus con borde más visible, sin `ring` azul por defecto.

### Variantes Tailwind

```tsx
// Input de una línea
<input
  className="w-full px-5 py-3 rounded-full border border-white/20 bg-white/5 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
/>

// Textarea
<textarea
  className="w-full px-5 py-4 rounded-2xl border border-white/20 bg-white/5 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors resize-none"
/>

// Select
<select
  className="w-full px-5 py-3 rounded-full border border-white/20 bg-white/5 text-sm focus:outline-none focus:border-white/60 transition-colors appearance-none"
/>
```

> **Nota:** Si el proyecto tiene fondo claro, reemplaza `border-white/20` por `border-black/15` y `bg-white/5` por `bg-black/5`.

---

## 3. Cards y Contenedores

### Principio
Cards con `rounded-2xl` (no `rounded-xl` ni `rounded-lg`). Borde sutil, sin box-shadow pronunciada. Fondo ligeramente diferenciado del body.

```tsx
// Card estándar
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
  ...
</div>

// Card con hover
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25 hover:bg-white/10">
  ...
</div>
```

---

## 4. Tipografía

### Jerarquía
| Rol | Clases |
|-----|--------|
| Hero H1 | `text-4xl md:text-6xl font-bold tracking-tight leading-tight` |
| H2 sección | `text-2xl md:text-3xl font-bold tracking-tight` |
| H3 card | `text-lg font-semibold` |
| Body | `text-sm md:text-base font-normal leading-relaxed` |
| Label / eyebrow | `text-xs font-semibold uppercase tracking-widest opacity-60` |
| Caption | `text-xs opacity-50` |

### Patrón de color en títulos (estilo Vercel)
Combina texto sólido con texto en color de acento para destacar palabras clave:
```tsx
<h1 className="font-bold">
  Tu negocio merece{" "}
  <span className="text-[color-acento]">tecnología de verdad</span>
</h1>
```

---

## 5. Badges / Pills de Feature

Usados para mostrar tecnologías, estados, o categorías dentro de cards y heroes:

```tsx
// Badge estándar
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/20 bg-white/5">
  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> {/* dot de estado */}
  Disponible
</span>

// Badge con ícono
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-white/5">
  <IconComponent size={12} />
  Next.js
</span>
```

---

## 6. Divisores y Estructura

```tsx
// Línea divisora sutil
<hr className="border-white/10" />

// Divisor con label centrado
<div className="flex items-center gap-4">
  <hr className="flex-1 border-white/10" />
  <span className="text-xs opacity-40">o</span>
  <hr className="flex-1 border-white/10" />
</div>
```

---

## 7. Reglas de aplicación para Claude Code

Al implementar cualquier componente UI en proyectos iasmtech:

1. **SIEMPRE** usar `rounded-full` en botones e inputs de una línea
2. **SIEMPRE** usar `rounded-2xl` en cards, modales y textareas
3. **NUNCA** usar `rounded-md` o `rounded-lg` en elementos interactivos
4. **NUNCA** agregar `shadow-lg` o `box-shadow` pesada — si se necesita profundidad, usar `border` sutil
5. **NUNCA** usar el color azul por defecto de Tailwind (`blue-600`) — respetar la paleta del proyecto
6. El `focus` de inputs usa `focus:border-[color]` + `focus:outline-none`, nunca el ring azul por defecto
7. Hover en botones: preferir `hover:opacity-90` (primario) y `hover:bg-white/10` (secundario)
8. Transiciones siempre con `transition-colors` o `transition-opacity`, duración por defecto (150ms)

---

## 8. Ejemplo completo — Sección CTA

```tsx
<section className="text-center py-20 px-6">
  <p className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">
    ¿Listo para empezar?
  </p>
  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
    Tienes una idea.{" "}
    <span className="text-[color-acento]">Yo la hago realidad.</span>
  </h2>
  <p className="text-sm opacity-60 mb-8 max-w-md mx-auto">
    La primera conversación es sin costo y sin compromiso.
  </p>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <button className="px-8 py-3 rounded-full font-semibold text-sm bg-white text-black hover:opacity-90 transition-opacity">
      Cotizar proyecto
    </button>
    <button className="px-8 py-3 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors">
      Escribir por WhatsApp
    </button>
  </div>
</section>
```

---

*Versión 1.0 — iasmtech Design System*
*Inspirado en vercel.com — adaptado para proyectos Next.js + Tailwind CSS*
