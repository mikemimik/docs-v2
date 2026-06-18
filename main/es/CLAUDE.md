<div id="claudemd">
  # CLAUDE.md
</div>

Este archivo ofrece indicaciones para Claude Code (claude.ai/code) al trabajar con código en este repositorio.

<div id="overview">
  ## Información general
</div>

Este es el repositorio de la documentación de Auth0, una plataforma de documentación basada en Mintlify publicada en https://auth0.com/docs. Contiene 4,305 archivos MDX organizados en varias secciones de documentación y admite 3 idiomas (inglés, francés canadiense y japonés).

<div id="development-commands">
  ## Comandos de desarrollo
</div>

<div id="local-development">
  ### Desarrollo local
</div>

```bash
# Instalar Mintlify CLI (requiere Node.js v20)
npm install mint -g

# Iniciar el servidor de desarrollo desde el directorio /main
mint dev
# Vista previa en localhost:3000
```

<div id="repository-structure">
  ## Estructura del repositorio
</div>

```
/main/
├── docs.json                # Configuración de Mintlify (24,200 líneas)
│                           # Define navegación, SEO, redirecciones, estilos
├── docs/                   # Contenido principal de la documentación (4,305 archivos MDX)
│   ├── get-started/        # Guías de primeros pasos
│   ├── authenticate/       # Documentación de autenticación
│   ├── manage-users/       # Gestión de usuarios
│   ├── customize/          # Personalización (Actions, Extensions, etc.)
│   ├── secure/             # Documentación de seguridad y tokens
│   ├── deploy-monitor/     # Despliegue y monitoreo
│   ├── libraries/          # Documentación de SDK
│   ├── quickstart/         # Quickstarts específicos por plataforma
│   ├── troubleshoot/       # Guías de resolución de problemas
│   ├── fr-ca/              # Traducciones al francés (Canadá) (espejo completo)
│   ├── ja-jp/              # Traducciones al japonés (espejo completo)
│   └── [assets]/           # css/, fonts/, images/, logo/, media/
├── snippets/               # Componentes React y contenido reutilizable
│   ├── *.jsx               # Componentes React (AuthCodeBlock, etc.)
│   ├── *.mdx               # Fragmentos de contenido MDX reutilizables
│   └── quickstart/         # Ejemplos de código específicos por plataforma/lenguaje
│       ├── native/         # iOS, Android, Flutter, React Native, etc.
│       ├── spa/            # React, Vue, Angular, Vanilla JS
│       ├── webapp/         # Node.js, ASP.NET, Python, Java, etc.
│       └── backend/        # Ejemplos de autenticación de API
└── ui/                     # Archivos de la biblioteca de UI (paquetes CSS y JS)
```

<div id="mdx-file-structure">
  ## Estructura de archivos MDX
</div>

Todos los archivos de documentación siguen esta estructura:

```mdx
---
title: "Page Title"
description: "SEO description for search engines"
sidebarTitle: "Optional sidebar label"
---

import { Component } from '/snippets/component.jsx';

export const codeExample1 = `code content here`;
export const codeExample2 = `more code here`;

# Page Content Starts Here

<AuthCodeBlock children={codeExample1} language="javascript" />
```

<div id="key-conventions">
  ### Convenciones clave
</div>

1. **Frontmatter**: Todos los archivos MDX requieren un frontmatter YAML completo
2. **Ejemplos de código**: Exporta el código como constantes en la parte superior del archivo (después de las importaciones y antes del contenido)
3. **Importaciones**: Componentes personalizados importados del directorio `/snippets/`
4. **Permalinks**: Se usan para URLs estables y redirecciones

<div id="custom-components">
  ## Componentes Custom
</div>

Importa y usa estos componentes de React desde `/snippets/`:

* **`<AuthCodeBlock>`**: Bloques de código con sustitución de variables (reemplaza los marcadores de posición de forma dinámica)
  ```mdx
  export const code = `const domain = "{yourDomain}";`;
  <AuthCodeBlock children={code} language="javascript" />
  ```

* **`<AuthCodeGroup>`**: Ejemplos de código agrupados con pestañas de idioma/plataforma

* **`<Card>`**: Tarjetas de navegación para enlazar a otras secciones
  ```mdx
  <Card title="Title" href="/docs/path">Description</Card>
  ```

* **`<Tooltip>`**: Tooltips del glosario integrados en línea
  ```mdx
  <Tooltip tip="Explanation" cta="View Glossary" href="/docs/glossary?term=Term">Text</Tooltip>
  ```

* Componentes estándar de Mintlify: `<Tabs>`, `<Tab>`, `<Frame>`, `<Callout>`, etc.

<div id="navigation-configuration">
  ## Configuración de la navegación
</div>

El archivo `docs.json` en la raíz define toda la estructura del sitio:

```json
{
  "navigation": {
    "languages": [
      {
        "language": "en",
        "tabs": [
          {
            "tab": "Documentation",
            "dropdowns": [
              {
                "dropdown": "Getting Started",
                "description": "Learn the basics",
                "icon": "play",
                "pages": ["docs/get-started", ...]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

<div id="to-addremove-pages">
  ### Para añadir/eliminar páginas
</div>

1. Edita `docs.json` para actualizar la estructura de navegación
2. Añade/elimina el archivo MDX correspondiente en `docs/`
3. Haz pruebas localmente con `mint dev`

<div id="redirects">
  ### Redirecciones
</div>

`docs.json` incluye un arreglo `redirects` para cambios en las URL:

```json
"redirects": [
  {"source": "/old-path", "destination": "/new-path"}
]
```

<div id="content-organization">
  ## Estructura del contenido
</div>

<div id="main-documentation-sections">
  ### Secciones principales de la documentación
</div>

1. **Primeros pasos** - Fundamentos de identidad, información general de Auth0, arquitectura
2. **Autenticación** - Login, SSO, passwordless, proveedores de identidad, protocolos
3. **Administrar Users** - Cuentas de usuario, organizaciones, sesiones, metadatos
4. **Personalización** - Actions, dominios personalizados, plantillas de correo electrónico, eventos, extensiones, formularios, Hooks
5. **Seguridad** - tokens de acceso, tokens de actualización, tokens de ID, limitación de frecuencia
6. **Implementación y monitoreo** - Deploy CLI, registros, monitoreo
7. **Librerías** - Documentación de SDK (Auth0.js, SPA SDK, SDK móviles)
8. **Quickstart** - Guías de implementación específicas de la plataforma

<div id="quickstart-structure">
  ### Estructura de Quickstart
</div>

Los Quickstarts se organizan por tipo de aplicación:

* **native/**: iOS, Android, React Native, Flutter, Ionic, MAUI
* **spa/**: React, Vue, Angular, Vanilla JS
* **webapp/**: Node.js, ASP.NET, PHP, Python, Java, Go, Ruby
* **backend/**: autenticación para API

Los ejemplos de código de los Quickstarts se encuentran en `/snippets/quickstart/{type}/{platform}/`

<div id="localization">
  ### Localización
</div>

La documentación completa está disponible en tres idiomas:

* **`docs/`** - Inglés (principal)
* **`docs/fr-ca/`** - Francés (Canadá)
* **`docs/ja-jp/`** - Japonés

Al editar contenido en inglés, considera si es necesario actualizar las traducciones. La estructura de directorios es idéntica en todos los idiomas.

<div id="contribution-workflow">
  ## Flujo de trabajo de contribución
</div>

<div id="branch-naming-convention">
  ### Convención de nomenclatura de ramas
</div>

* **`fix/`** - Corrección de errores, errores tipográficos, enlaces rotos
* **`feat/`** - Nuevas funciones o secciones de documentación
* **`refactor/`** - Actualizaciones que no añaden funciones, reorganización

Ejemplo: `fix/broken-link-in-quickstart` o `feat/new-mfa-guide`

<div id="making-changes">
  ### Cómo realizar cambios
</div>

1. **Ponte en contacto con el equipo de documentación de producto de Auth0** antes de abrir PR
2. Haz un fork del repositorio y crea una rama de funcionalidad con el prefijo adecuado
3. Edita los archivos MDX siguiendo las convenciones anteriores
4. Prueba los cambios localmente: `mint dev` y previsualízalos en `localhost:3000`
5. Haz commit con mensajes claros que expliquen qué cambió y por qué
6. Haz push al repositorio bifurcado en GitHub
7. Crea una pull request con la plantilla completada
8. Solicita una revisión al equipo de documentación de Auth0

<div id="common-patterns-and-pitfalls">
  ## Patrones comunes y errores frecuentes
</div>

<div id="code-example-pattern">
  ### Patrón para ejemplos de código
</div>

**Correcto:**

```mdx
---
title: "Example"
---
import {AuthCodeBlock} from "/snippets/AuthCodeBlock.jsx";

export const codeExample = `console.log("hello");`;

# Content

<AuthCodeBlock children={codeExample} language="javascript" />
```

**Incorrecto:**

```mdx
# Content

export const codeExample = `console.log("hello");`; // ❌ ¡Demasiado tarde!

<AuthCodeBlock children={codeExample} language="javascript" />
```

Las sentencias de exportación deben ir en la parte superior del archivo, después de las importaciones, no integradas en el contenido.

<div id="navigation-updates">
  ### Actualizaciones de la navegación
</div>

Al crear páginas nuevas, recuerda lo siguiente:

1. Crear el archivo MDX en el subdirectorio adecuado de `docs/`
2. Añadir la ruta de la página a la navegación de `docs.json`
3. Ambos pasos son necesarios para que la página aparezca en la navegación

<div id="variable-substitution">
  ### Sustitución de variables
</div>

`AuthCodeBlock` admite la sustitución dinámica de variables. Variables como `{yourDomain}`, `{clientId}`, etc. se sustituyen automáticamente según el contexto del usuario. Usa este patrón para valores específicos de cada usuario en ejemplos de código.

<div id="asset-references">
  ### Referencias de recursos
</div>

* Imágenes: `/docs/images/...` o usa URL de CDN
* Fuentes: configuradas en `docs.json` con enlaces de CDN
* CSS personalizado: `/docs/css/` o `/snippets/css/`

<div id="glossary-links">
  ### Enlaces del glosario
</div>

Enlaza los términos del glosario con componentes Tooltip en lugar de enlaces normales para una mejor experiencia de usuario:

```mdx
<Tooltip tip="Definition" href="/docs/glossary?term=TermName">Term</Tooltip>
```

<div id="additional-resources">
  ## Recursos adicionales
</div>

* **Documentación de Mintlify**: https://mintlify.com/docs
* **Sitio de Auth0 Docs**: https://auth0.com/docs
* **Seguimiento de incidencias**: https://github.com/auth0/docs-v2/issues
* **Notificación de problemas de seguridad**: https://auth0.com/whitehat (no uses el seguimiento público de incidencias)
* **Licencia**: Licencia MIT