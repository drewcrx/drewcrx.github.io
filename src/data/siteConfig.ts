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
  accent: 'petcare' | 'revup' | 'yavibot'
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
    whatsapp: 'https://wa.me/593987141307',
    email: 'mailto:benjicool2002@hotmail.com',
    github: 'https://github.com/drewcrx',
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
      name: 'YaviBot',
      eyebrow: 'Automatización académica',
      description:
        'Aplicación móvil híbrida para gestionar trámites académicos del Instituto Yavirac con validación de identidad, automatización y verificación mediante QR.',
      problem:
        'Trámites como certificados, anulaciones y reportes pueden implicar validaciones repetitivas, tiempos de espera y procesos manuales.',
      solution:
        'Una app Ionic/Angular con flujo de identidad por cédula y OTP, menús por rol y un backend construido directamente con workflows de n8n sobre PostgreSQL.',
      technologies: ['Ionic 8', 'Angular 20', 'Capacitor 8', 'n8n', 'PostgreSQL 16'],
      href: 'https://github.com/drewcrx/certificado-de-matricula-app',
      accent: 'yavibot',
    },
    {
      name: 'RevUp',
      eyebrow: 'Gestión de taller automotriz',
      description:
        'Aplicación web full stack para administrar vehículos, órdenes de trabajo, servicios, repuestos, pagos e historial de reparaciones de un taller.',
      problem:
        'La operación de un taller puede quedar dispersa entre registros de vehículos, reparaciones, órdenes, repuestos y pagos.',
      solution:
        'Frontend en Flutter Web conectado a una API REST con Node.js/Express y PostgreSQL, desplegado con Docker, Traefik, SSL y CI/CD mediante GitHub Actions.',
      technologies: ['Flutter Web', 'Node.js / Express', 'PostgreSQL 16', 'Docker', 'GitHub Actions'],
      href: 'https://github.com/drewcrx/RevUp',
      accent: 'revup',
    },
    {
      name: 'Peluquería Canina SaaS',
      eyebrow: 'SaaS multi-tenant',
      description:
        'Plataforma para que múltiples peluquerías caninas gestionen clientes, mascotas, citas, historial de servicios, empleados, inventario y caja.',
      problem:
        'Una plataforma para varios negocios necesita separar de forma segura los datos de cada peluquería y mantener una experiencia de gestión consistente.',
      solution:
        'Arquitectura multi-tenant con ASP.NET Core 8 y React, aislamiento por TenantId y PostgreSQL RLS, autenticación JWT y módulos habilitados según el plan.',
      technologies: ['ASP.NET Core 8', 'React 18', 'TypeScript', 'PostgreSQL', 'Docker'],
      href: 'https://github.com/drewcrx/peluqueria-canina',
      accent: 'petcare',
    },
  ] satisfies Project[],
}
