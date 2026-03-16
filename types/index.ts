export type Category = 'WEB' | 'ECOMMERCE' | 'APP_MOVIL' | 'SISTEMA' | 'AUTOMATIZACION'

export type ServiceType =
  | 'SITIO_WEB'
  | 'ECOMMERCE'
  | 'APP_MOVIL'
  | 'SISTEMA_MEDIDA'
  | 'AUTOMATIZACION'
  | 'OTRO'

export type ContactStatus = 'NUEVO' | 'LEIDO' | 'RESPONDIDO' | 'ARCHIVADO'

export interface Project {
  id: string
  title: string
  description: string
  longDesc?: string | null
  techStack: string[]
  imageUrl?: string | null
  projectUrl?: string | null
  githubUrl?: string | null
  category: Category
  featured: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: string
  name: string
  email: string
  phone?: string | null
  serviceType: ServiceType
  message: string
  status: ContactStatus
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl?: string | null
  published: boolean
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  serviceType: ServiceType
  message: string
}
