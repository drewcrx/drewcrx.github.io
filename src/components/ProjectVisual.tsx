import { useState } from 'react'
import type { Project } from '../data/siteConfig'

type Props = {
  project: Project
}

export function ProjectVisual({ project }: Props) {
  const [activeImage, setActiveImage] = useState(0)

  const currentImage = project.images[activeImage]

  return (
    <div
      className={`project-visual real-project-visual ${project.accent}-visual`}
      aria-label={`Capturas reales del proyecto ${project.name}`}
    >
      <div className="visual-label">CAPTURA DEL PROYECTO</div>

      <div className="project-image-stage">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="project-main-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {project.images.length > 1 && (
        <div className="project-gallery">
          {project.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`project-thumbnail ${
                activeImage === index ? 'is-active' : ''
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`Ver captura ${index + 1} de ${project.name}`}
              aria-pressed={activeImage === index}
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}