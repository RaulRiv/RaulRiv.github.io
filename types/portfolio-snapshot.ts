/** Shape of GET /portfolio/export from backoffice. */
export interface SnapshotProject {
  id: string
  titulo: string
  descripcion: string | null
  descripcion_en?: string | null
  tecnologias: string[]
  repo: string | null
  deploy: string | null
  estado: string | null
  publicado: boolean
  orden: number
}

export interface SnapshotContent {
  bio: string | null
  skills: string | null
  experiencia: string | null
}

export interface SnapshotBlogPost {
  id: string
  titulo: string
  fecha: string | null
  publicado: boolean
  tags: string[]
  resumen: string | null
}

export interface PortfolioSnapshot {
  projects: SnapshotProject[]
  content: SnapshotContent
  blog: SnapshotBlogPost[]
  generated_at: string
}
