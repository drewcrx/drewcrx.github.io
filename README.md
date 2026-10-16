# Andrew Benjamin — Portfolio premium

Landing page personal tipo Beacons + portafolio, diseñada con una estética oscura, tecnológica y profesional.

## Versión principal (React + TypeScript + Vite)

Requisitos recomendados: **Node.js 20.19+ o 22.12+**.

Antes de ejecutar npm, comprueba que estás en la raíz correcta del proyecto:

```powershell
dir package.json
```

Si aparece `package.json`, ejecuta:

```powershell
npm install
npm run dev
```

En Windows también puedes abrir `start-dev.bat`; instalará las dependencias si faltan y arrancará Vite.

Para producción:

```bash
npm run build
npm run preview
```

> Nota del entorno de entrega: la instalación de paquetes no pudo completarse aquí porque el acceso al registro de npm agotó el tiempo de espera. El código fuente queda listo para instalar en un entorno con acceso normal a npm.

## Configuración rápida

Edita `src/data/siteConfig.ts` para modificar:

- nombre, rol, titular y disponibilidad;
- WhatsApp, correo, GitHub, LinkedIn e Instagram;
- servicios;
- proyectos, tecnologías y enlaces;
- bandera de analítica opcional.

Los enlaces vacíos se muestran como **Pendiente** o **Enlace por configurar** y no se presentan como enlaces reales.

### WhatsApp

Usa el formato:

```text
https://wa.me/593XXXXXXXXX
```

### Correo

Usa el formato:

```text
mailto:tu-correo@dominio.com
```

## Mockups de proyectos

Los visuales de BACKFIRE, Rev Up y YaviBot son composiciones ilustrativas creadas con CSS y están etiquetadas como `MOCKUP ILUSTRATIVO`. Sustitúyelos por capturas verificadas cuando las tengas.

## Versión standalone

`standalone/index.html` es una versión funcional sin React ni dependencias de npm. Sirve para revisar el diseño inmediatamente o publicarlo como sitio estático simple.

Para verla localmente desde la carpeta raíz:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080/standalone/`.

## Estructura

```text
src/
  components/
    ProjectVisual.tsx
    Reveal.tsx
    SectionHeading.tsx
  data/
    siteConfig.ts
  styles/
    global.css
  App.tsx
  main.tsx
standalone/
  index.html
  style.css
public/
  favicon.svg
```

## Detalles incluidos

- responsive mobile-first;
- navegación sticky + menú móvil;
- hero premium con elemento tecnológico propio;
- animaciones suaves y soporte `prefers-reduced-motion`;
- servicios y proyectos reutilizables;
- CTA y contacto centralizados;
- accesibilidad básica;
- metadatos SEO y Open Graph;
- estados seguros para enlaces no configurados;
- botón flotante de WhatsApp solo cuando exista un enlace real;
- configuración preparada para analítica opcional respetuosa con privacidad.

## Publicar gratis en GitHub Pages

Este proyecto ya está preparado para publicarse como sitio personal en:

`https://drewcrx.github.io/`

### Repositorio recomendado

Crea un repositorio público llamado exactamente:

`drewcrx.github.io`

Luego sube el contenido de esta carpeta a la rama `main`.

### Publicación

1. En GitHub abre `Settings > Pages`.
2. En `Build and deployment > Source`, selecciona `GitHub Actions`.
3. Haz push a `main`.
4. El workflow `.github/workflows/deploy.yml` ejecutará la compilación y publicará `dist`.

### Comandos para subirlo desde Windows PowerShell

```powershell
git init
git add .
git commit -m "Publicar portafolio personal"
git branch -M main
git remote add origin https://github.com/drewcrx/drewcrx.github.io.git
git push -u origin main
```

No subas contraseñas, tokens, archivos `.env` con secretos ni información privada al repositorio.
