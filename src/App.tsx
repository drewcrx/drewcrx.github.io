import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { ProjectVisual } from './components/ProjectVisual'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { siteConfig } from './data/siteConfig'

const navItems = [
  ['Sobre mí', '#sobre-mi'],
  ['Servicios', '#servicios'],
  ['Proyectos', '#proyectos'],
  ['Contacto', '#contacto'],
]

const iconMap = {
  web: Globe2,
  mobile: Smartphone,
  software: Code2,
}

function ExternalAction({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  if (!href) {
    return (
      <span className={`external-action is-disabled ${className}`} aria-disabled="true" title="Configura este enlace en siteConfig.ts">
        {children}
        <span className="pending-dot">Pendiente</span>
      </span>
    )
  }

  return (
    <a className={`external-action ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">AB</span>
          <span className="brand-copy"><strong>Andrew Benjamin</strong><small>Software Developer</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="nav-cta" href="#contacto">Hablemos <ArrowDownRight size={16} /></a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menú" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen ? (
        <div className="mobile-nav" role="dialog" aria-label="Menú móvil">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="button button-primary" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos de tu proyecto</a>
        </div>
      ) : null}

      <main id="contenido">
        <section id="inicio" className="hero section-wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              {siteConfig.profile.availability ? (
                <div className="availability"><span className="availability-dot" /> Disponible para nuevos proyectos</div>
              ) : null}
              <p className="hero-kicker">{siteConfig.profile.role}</p>
              <h1>Diseño software que <span>se entiende, se siente y funciona.</span></h1>
              <p className="hero-lead">{siteConfig.profile.headline} {siteConfig.profile.description}</p>
              <div className="hero-actions">
                <a href="#contacto" className="button button-primary">Hablemos de tu proyecto <ArrowRight size={18} /></a>
                <a href="#proyectos" className="button button-secondary">Explorar proyectos</a>
              </div>
              <div className="hero-trust">
                <span><BadgeCheck size={16} /> Comunicación clara</span>
                <span><BadgeCheck size={16} /> Enfoque funcional</span>
                <span><BadgeCheck size={16} /> Cuidado visual</span>
              </div>
            </div>

            <motion.div
              className="hero-orbit"
              initial={reduceMotion ? false : { opacity: 0, scale: .92 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <div className="orbit-glow" />
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />
              <div className="code-panel">
                <div className="code-dots"><i /><i /><i /></div>
                <div className="code-line"><span className="code-blue">const</span> idea = <span className="code-green">'tu proyecto'</span>;</div>
                <div className="code-line"><span className="code-blue">build</span>(idea, {'{'}</div>
                <div className="code-line indent">claridad: <span className="code-green">true</span>,</div>
                <div className="code-line indent">diseño: <span className="code-green">'premium'</span>,</div>
                <div className="code-line indent">impacto: <span className="code-green">'real'</span></div>
                <div className="code-line">{'}'});</div>
              </div>
              <span className="orbit-tag tag-one"><Code2 size={15} /> Web</span>
              <span className="orbit-tag tag-two"><Smartphone size={15} /> Mobile</span>
              <span className="orbit-tag tag-three"><Sparkles size={15} /> UX</span>
            </motion.div>
          </div>
          <div className="hero-footnote">ANDREW BENJAMIN <span /> QUITO · ECUADOR <span /> SOFTWARE & DIGITAL PRODUCTS</div>
        </section>

        <section id="sobre-mi" className="section-wrap section-block">
          <Reveal>
            <div className="about-grid">
              <SectionHeading
                eyebrow="01 · SOBRE MÍ"
                title="Tecnología con intención, no solo código."
                description="Acabo de finalizar mi formación en Desarrollo de Software y enfoco cada proyecto desde el problema real que necesita resolver, combinando funcionalidad, estructura y una experiencia visual cuidada."
              />
              <div className="about-card glass-card">
                <div className="about-number">01</div>
                <p>Mi objetivo es convertir ideas en productos digitales claros, modernos y útiles, manteniendo una comunicación honesta durante todo el proceso.</p>
                <div className="about-values"><span>Responsabilidad</span><span>Proactividad</span><span>Detalle</span><span>Resultados</span></div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="servicios" className="section-wrap section-block">
          <Reveal>
            <SectionHeading
              eyebrow="02 · SERVICIOS"
              title="Soluciones digitales con foco en lo que tu proyecto necesita."
              description="Sin paquetes inflados ni promesas genéricas: definimos el alcance, priorizamos lo importante y construimos una solución coherente con tu objetivo."
            />
          </Reveal>
          <div className="service-grid">
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <Reveal key={service.title}>
                  <article className="service-card glass-card">
                    <div className="card-index">0{index + 1}</div>
                    <div className="service-icon"><Icon size={22} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                    <a href="#contacto" className="text-link">Consultar proyecto <ArrowRight size={16} /></a>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section id="proyectos" className="section-wrap section-block">
          <Reveal>
            <SectionHeading
              eyebrow="03 · PROYECTOS"
              title="Productos pensados desde el problema hasta la experiencia."
              description="Tres proyectos reales que muestran desarrollo móvil, full stack, automatización e infraestructura. Explora capturas reales de cada producto y accede a su repositorio para conocer la implementación."
            />
          </Reveal>
          <div className="project-list">
            {siteConfig.projects.map((project, index) => (
              <Reveal key={project.name}>
                <article className="project-card glass-card">
                  <div className="project-content">
                    <div className="project-topline"><span>0{index + 1}</span><span>{project.eyebrow}</span></div>
                    <h3>{project.name}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="problem-solution">
                      <div><small>PROBLEMA</small><p>{project.problem}</p></div>
                      <div><small>SOLUCIÓN</small><p>{project.solution}</p></div>
                    </div>
                    <div className="tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    {project.href ? (
                      <a className="text-link" href={project.href} target="_blank" rel="noreferrer">Ver proyecto <ExternalLink size={15} /></a>
                    ) : (
                      <span className="text-link disabled-link">Enlace por configurar</span>
                    )}
                  </div>
                  <ProjectVisual project={project} />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block">
          <Reveal>
            <div className="why-shell">
              <SectionHeading eyebrow="04 · CÓMO TRABAJO" title="Menos fricción para ti. Más claridad en cada decisión." />
              <div className="why-grid">
                {[
                  ['A tu medida', 'La solución parte de tu necesidad y contexto, no de una plantilla cerrada.'],
                  ['Comunicación clara', 'Sabes qué se está construyendo, por qué y cuál es el siguiente paso.'],
                  ['Experiencia cuidada', 'La funcionalidad y la parte visual avanzan juntas desde el inicio.'],
                  ['Compromiso real', 'Trabajo con responsabilidad, atención al detalle y foco en entregar valor.'],
                ].map(([title, text], index) => (
                  <div className="why-item" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contacto" className="section-wrap section-block contact-section">
          <Reveal>
            <div className="contact-panel">
              <div className="contact-copy">
                <span className="section-eyebrow">05 · CONTACTO</span>
                <h2>¿Tienes una idea?<br /><span>Hagámosla realidad.</span></h2>
                <p>Cuéntame qué quieres construir, qué problema necesitas resolver o en qué etapa está tu proyecto. Empecemos por una conversación clara.</p>
              </div>
              <div className="contact-actions">
                <ExternalAction href={siteConfig.links.whatsapp} className="contact-main"><MessageCircle size={21} /> WhatsApp <ArrowRight size={18} /></ExternalAction>
                <ExternalAction href={siteConfig.links.email}><Mail size={19} /> Correo</ExternalAction>
                <ExternalAction href={siteConfig.links.github}><Github size={19} /> GitHub</ExternalAction>
                {siteConfig.links.linkedin ? (
                  <ExternalAction href={siteConfig.links.linkedin}>LinkedIn</ExternalAction>
                ) : null}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {siteConfig.links.whatsapp ? (
        <a className="whatsapp-float" href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle /></a>
      ) : null}

      <footer className="footer section-wrap">
        <div><strong>{siteConfig.profile.name}</strong><span>{siteConfig.profile.role}</span></div>
        <p>© {new Date().getFullYear()} Andrew Benjamin. Todos los derechos reservados.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </div>
  )
}

export default App
