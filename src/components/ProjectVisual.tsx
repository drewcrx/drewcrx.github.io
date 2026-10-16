import { Bot, CalendarDays, PawPrint, Server, UsersRound, Workflow } from 'lucide-react'
import type { Project } from '../data/siteConfig'

type Props = { project: Project }

export function ProjectVisual({ project }: Props) {
  if (project.accent === 'petcare') {
    return (
      <div className="project-visual petcare-visual" aria-label="Mockup ilustrativo del proyecto Peluquería Canina SaaS">
        <div className="visual-label">MOCKUP ILUSTRATIVO</div>
        <div className="pet-dashboard">
          <div className="pet-head"><PawPrint size={19} /> Panel de peluquería</div>
          <div className="pet-stats">
            <div><UsersRound size={18} /><span>Clientes</span><strong>Gestión multi-tenant</strong></div>
            <div><CalendarDays size={18} /><span>Agenda</span><strong>Citas y servicios</strong></div>
          </div>
          <div className="pet-list">
            <span>Próximas citas</span>
            <div><i /> Mascota · servicio programado</div>
            <div><i /> Historial y seguimiento</div>
            <div><i /> Inventario y caja</div>
          </div>
        </div>
      </div>
    )
  }

  if (project.accent === 'revup') {
    return (
      <div className="project-visual revup-visual" aria-label="Mockup ilustrativo del proyecto RevUp">
        <div className="visual-label">MOCKUP ILUSTRATIVO</div>
        <div className="server-grid">
          <div className="server-node primary"><span>Flutter Web</span></div>
          <div className="connector-line" />
          <div className="server-node"><Server size={23} /><span>Express API</span></div>
          <div className="connector-line short" />
          <div className="server-node"><Workflow size={23} /><span>Docker + CI/CD</span></div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual yavibot-visual" aria-label="Mockup ilustrativo del proyecto YaviBot">
      <div className="visual-label">MOCKUP ILUSTRATIVO</div>
      <div className="chat-window">
        <div className="chat-head"><Bot size={20} /> YaviBot</div>
        <div className="bubble bot">Identidad verificada. ¿Qué trámite deseas realizar?</div>
        <div className="bubble user">Necesito gestionar mi certificado de matrícula.</div>
        <div className="chat-options"><span>Generar certificado</span><span>Verificar QR</span></div>
      </div>
    </div>
  )
}
