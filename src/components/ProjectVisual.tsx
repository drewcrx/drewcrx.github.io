import { Bot, CarFront, Gauge, QrCode, Server, Workflow } from 'lucide-react'
import type { Project } from '../data/siteConfig'

type Props = { project: Project }

export function ProjectVisual({ project }: Props) {
  if (project.accent === 'backfire') {
    return (
      <div className="project-visual backfire-visual" aria-label="Mockup ilustrativo del proyecto BACKFIRE">
        <div className="visual-label">MOCKUP ILUSTRATIVO</div>
        <div className="phone-shell">
          <div className="phone-top" />
          <div className="mini-appbar"><CarFront size={16} /> BACKFIRE</div>
          <div className="car-card"><span>Vehículo</span><strong>Historial activo</strong></div>
          <div className="qr-card"><QrCode size={56} strokeWidth={1.6} /><span>Acceso QR</span></div>
          <div className="mini-row"><Gauge size={15} /> Último mantenimiento</div>
        </div>
      </div>
    )
  }

  if (project.accent === 'revup') {
    return (
      <div className="project-visual revup-visual" aria-label="Mockup ilustrativo del proyecto Rev Up">
        <div className="visual-label">MOCKUP ILUSTRATIVO</div>
        <div className="server-grid">
          <div className="server-node primary"><span>Frontend</span></div>
          <div className="connector-line" />
          <div className="server-node"><Server size={23} /><span>API</span></div>
          <div className="connector-line short" />
          <div className="server-node"><Workflow size={23} /><span>Servicios</span></div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual yavibot-visual" aria-label="Mockup ilustrativo del proyecto YaviBot">
      <div className="visual-label">MOCKUP ILUSTRATIVO</div>
      <div className="chat-window">
        <div className="chat-head"><Bot size={20} /> YaviBot</div>
        <div className="bubble bot">¿Qué proceso deseas realizar?</div>
        <div className="bubble user">Necesito gestionar una solicitud académica.</div>
        <div className="chat-options"><span>Validar datos</span><span>Continuar proceso</span></div>
      </div>
    </div>
  )
}
