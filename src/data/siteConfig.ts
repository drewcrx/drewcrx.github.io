export type Service = {
  title: string
  description: string
  benefits: string[]
  price?: string
  icon: 'web' | 'mobile' | 'software'
}

export type Project = {
  name: string
  eyebrow: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  href?: string
  accent: 'backfire' | 'revup' | 'yavibot'
}

export const siteConfig = {
  profile: {
    name: 'Andrew Benjamin',
    role: 'Desarrollador de Software',
    headline: 'Transformo ideas en soluciones digitales.',
    description:
      'Diseño y desarrollo experiencias web, aplicaciones móviles y software enfocado en resolver necesidades reales con claridad, funcionalidad y criterio visual.',
    availability: true,
  },
  links: {
    // Reemplaza estos valores. Si quedan vacíos, la interfaz los mostrará como pendientes.
    whatsapp: '', // Ejemplo: https://wa.me/593XXXXXXXXX
    email: '', // Ejemplo: mailto:tu-correo@dominio.com
    github: '',
    linkedin: '',
    instagram: '',
  },
  analytics: {
    enabled: false,
    provider: 'privacy-friendly-placeholder',
  },
  services: [
    {
      title: 'Desarrollo web',
      description: 'Sitios profesionales pensados para presentar, vender y convertir con una experiencia rápida y clara.',
      benefits: ['Landing pages', 'Portafolios', 'Sitios para negocios'],
      icon: 'web',
    },
    {
      title: 'Aplicaciones móviles',
      description: 'Aplicaciones enfocadas en necesidades concretas, interfaces intuitivas y flujos fáciles de usar.',
      benefits: ['Experiencia móvil', 'Flujos personalizados', 'Integración con servicios'],
      icon: 'mobile',
    },
    {
      title: 'Soluciones de software',
      description: 'Herramientas y sistemas digitales adaptados al contexto y requerimientos de cada proyecto.',
      benefits: ['Automatización', 'Sistemas a medida', 'Integraciones'],
      icon: 'software',
    },
  ] satisfies Service[],
  projects: [
    {
      name: 'BACKFIRE',
      eyebrow: 'Gestión vehicular',
      description: 'Historial de mantenimiento vehicular accesible mediante códigos QR y gestión centralizada de información.',
      problem: 'La información de mantenimientos suele quedar dispersa y es difícil consultarla rápidamente.',
      solution: 'Una experiencia móvil para registrar vehículos, consultar su historial y acceder a información mediante QR.',
      technologies: ['Flutter', 'Express', 'PostgreSQL', 'QR'],
      href: '',
      accent: 'backfire',
    },
    {
      name: 'Rev Up',
      eyebrow: 'Aplicación full stack',
      description: 'Proyecto de aplicación que integra frontend, backend y servicios desplegados en un servidor.',
      problem: 'Centralizar una experiencia completa requiere conectar interfaz, lógica y servicios de forma consistente.',
      solution: 'Arquitectura con frontend y backend conectados, preparada para operar desde servicios desplegados.',
      technologies: ['Frontend', 'Backend', 'API', 'Servidor'],
      href: '',
      accent: 'revup',
    },
    {
      name: 'YaviBot',
      eyebrow: 'Automatización académica',
      description: 'Solución digital orientada a procesos académicos, solicitudes y automatización de trámites institucionales.',
      problem: 'Los procesos académicos repetitivos pueden generar fricción, tiempos de espera y tareas manuales.',
      solution: 'Flujos digitales guiados que centralizan solicitudes, validaciones y automatizaciones para facilitar la gestión.',
      technologies: ['Flutter', 'n8n', 'PostgreSQL', 'Automatización'],
      href: '',
      accent: 'yavibot',
    },
  ] satisfies Project[],
}
