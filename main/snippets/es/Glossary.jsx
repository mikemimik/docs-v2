export const GlossaryPage = () => {
  const GLOSSARY = [
    {
      term: "Access Token",
      description:
        "Credencial que una aplicación puede usar para acceder a una API. Informa a la API que el portador del token ha sido autorizado para acceder a ella y realizar las acciones específicas definidas por el alcance concedido. Un token de acceso puede estar en cualquier formato, aunque dos opciones habituales son las cadenas opacas y los JSON Web Tokens (JWT). Deben transmitirse a la API como credencial Bearer en un encabezado HTTP Authorization."
    },
    {
      term: "Account Linking",
      description: "Vinculación de cuentas de usuario en múltiples plataformas para permitir a los usuarios acceder a más de un recurso o aplicación proporcionando sus credenciales una sola vez."
    },
    {
      term: "Actions",
      description:
        "Funciones seguras, versionadas y específicas de cada tenant, escritas en Node.js, que se ejecutan en determinados puntos durante el tiempo de ejecución de Auth0. Las Actions se utilizan para personalizar y ampliar las capacidades de Auth0 con lógica personalizada."
    },
    {
      term: "Adaptive Multi-factor Authentication",
      description:
        "Autenticación multifactor (MFA) que solo se activa cuando se determina que un intento de inicio de sesión es de baja confianza. Con la MFA adaptativa, Auth0 activa la MFA únicamente cuando es necesario para añadir fricción a los actores maliciosos, sin alterar la experiencia de inicio de sesión de los usuarios legítimos."
    },
    {
      term: "Application",
      description: "El software que depende de Auth0 para la autenticación y la gestión de identidades. Auth0 admite aplicaciones de página única, web tradicionales, nativas y de máquina a máquina."
    },
    {
      term: "Attack Protection",
      description:
        "Funcionalidades que Auth0 ofrece para detectar y mitigar ataques, entre las que se incluyen la protección contra fuerza bruta, la limitación de IPs sospechosas, la detección de contraseñas comprometidas, la detección de bots y la autenticación multifactor adaptativa."
    },
    {
      term: "Audience",
      description:
        "Identificador único de la audiencia para un token emitido, identificado dentro de un JSON Web Token como el claim aud. El valor de la audiencia es la aplicación (Client ID) para un token de identidad, o la API que se está invocando (identificador de API) para un token de acceso. En Auth0, el valor de audiencia enviado en una solicitud de token de acceso determina si dicho token se devuelve en formato opaco o JWT."
    },
    {
      term: "Auth0 Dashboard",
      description: "La interfaz de administración principal de Auth0, desde la que puedes registrar tu aplicación o API, conectarte a un almacén de usuarios u otro proveedor de identidad, y configurar los servicios de Auth0."
    },
    {
      term: "Authentication Device",
      description: "El dispositivo en el que el usuario se autenticará y otorgará su consentimiento en el flujo de autenticación por canal secundario iniciado por el cliente."
    },
    {
      term: "Authentication Server",
      description:
        "Servidor que confirma o deniega la identidad de un usuario. Un servidor de autenticación no limita las acciones ni los recursos disponibles para el usuario (aunque puede proporcionar contexto con ese fin)."
    },
    {
      term: "Authorization Code",
      description:
        "Cadena aleatoria generada por el servidor de autorización y devuelta a la aplicación como parte de la respuesta de autorización. El código de autorización tiene una vida útil relativamente corta y se intercambia por un token de acceso en el endpoint de token al utilizar el flujo de código de autorización (con o sin Proof Key for Code Exchange (PKCE))."
    },
    {
      term: "Authorization Flow",
      description:
        "Otro nombre para las concesiones de autorización definidas en OAuth 2.0. Los flujos de autorización son los flujos de trabajo que un recurso (una aplicación o una AIP) utiliza para otorgar acceso a los solicitantes. Según el tipo de tecnología y el tipo de solicitante, los propietarios de recursos pueden usar el flujo de código de autorización, PKCE, ROPG, Implicit o Client Credential."
    },
    {
      term: "Authorization Server",
      description:
        "Servidor centralizado que contribuye a definir los límites del acceso de un usuario. Por ejemplo, el servidor de autorización puede controlar los datos, las tareas y las funcionalidades disponibles para un usuario. Un servidor de autorización no autentica a los usuarios; verificar la identidad del usuario es responsabilidad del servidor de autenticación."
    },
    {
      term: "Bad Actors",
      description:
        "También conocidos como actores de amenaza. Entidad (una persona o grupo) que representa una amenaza para el negocio o el entorno con la intención de causar daño. El daño puede ser físico o cibernético, desde irrumpir en un centro de datos hasta hackear sistemas con credenciales robadas."
    },
    {
      term: "Beta",
      description:
        "Etapa de lanzamiento de producto durante la cual la funcionalidad o el comportamiento referenciado se pone a disposición de los suscriptores para que puedan explorar y adoptar las nuevas capacidades del producto, al tiempo que proporcionan sus comentarios finales antes de un lanzamiento GA. La funcionalidad está completa en código, es estable, útil en una variedad de escenarios y se considera que cumple o casi cumple las expectativas de calidad para un lanzamiento GA. Los lanzamientos Beta pueden ser privados o públicos."
    },
    {
      term: "Block/Unblock Users",
      description:
        "Eliminación o restauración del acceso de un solicitante a un recurso. Hace referencia a las funcionalidades del conjunto de protección contra ataques de Auth0. Cada servicio evalúa las tendencias de inicio de sesión y registro, y bloquea las direcciones IP asociadas con actividad sospechosa."
    },
    {
      term: "Bot Detection",
      description: "Modalidad de protección contra ataques en la que Auth0 bloquea el tráfico sospechoso de bots habilitando un CAPTCHA durante el proceso de inicio de sesión."
    },
    {
      term: "Breached Password Detection",
      description: "Modalidad de protección contra ataques en la que Auth0 notifica a los usuarios si utilizan una combinación de nombre de usuario y contraseña que ha sido comprometida en una filtración de datos en un sitio web o aplicación de terceros."
    },
    {
      term: "Breaking Change",
      description: "Cambio en la plataforma Auth0 que, según el conocimiento de Auth0, causará fallos en la interoperación entre la plataforma Auth0 y las aplicaciones de los clientes."
    },
    {
      term: "Brute-force Protection",
      description: "Modalidad de protección contra ataques que protege frente a ataques de fuerza bruta originados desde una única dirección IP y dirigidos a una sola cuenta de usuario."
    },
    {
      term: "Callback",
      description: "URL a la que Auth0 envía su respuesta tras la autenticación. Suele ser la misma URL a la que se redirige al usuario después de autenticarse."
    },
    {
      term: "Claim",
      description: "Atributo incluido en un token de seguridad que representa una afirmación que el emisor del token hace sobre una entidad."
    },
    {
      term: "Client ID",
      description:
        "Valor de identificación asignado a tu aplicación tras el registro. Este valor se utiliza junto con otros servicios de terceros y puede encontrarse en Auth0 Dashboard > Application Settings."
    },
    {
      term: "Client Secret",
      description:
        "Secreto utilizado por un cliente (aplicación) para autenticarse ante el servidor de autorización; solo debe ser conocido por el cliente y el servidor de autorización, y debe ser suficientemente aleatorio para no poder adivinarse."
    },
    {
      term: "Confidential Client",
      description:
        "Según el protocolo OAuth 2.0, los clientes (aplicaciones) pueden clasificarse como confidenciales o públicos. Los clientes confidenciales pueden almacenar credenciales de forma segura y requieren un servidor backend de confianza para ello. Pueden utilizar tipos de concesión que requieren autenticación especificando su client ID y secreto al llamar al endpoint de token."
    },
    {
      term: "Confused Deputy",
      description: "Situación en la que un atacante engaña a un cliente o servicio para que realice una acción en su nombre."
    },
    {
      term: "Connection",
      description: "Relación entre Auth0 y las fuentes de usuarios para tus aplicaciones. Entre los ejemplos se incluyen proveedores de identidad, métodos de autenticación sin contraseña y bases de datos de usuarios."
    },
    {
      term: "Consumption Device",
      description: "El dispositivo que ayuda al usuario a consumir un servicio en el flujo de autenticación por canal secundario iniciado por el cliente."
    },
    {
      term: "Custom Domain",
      description: "Dominio de terceros con un nombre especializado o personalizado. También conocido como CNAME."
    },
    {
      term: "Deprecation",
      description:
        "Etapa de lanzamiento de producto que indica que la funcionalidad o el comportamiento referenciado no está disponible para nuevos suscriptores, no se está mejorando activamente y solo recibe un mantenimiento mínimo."
    },
    {
      term: "Digital Identity",
      description: "Conjunto de atributos que definen a un usuario concreto en el contexto de una función proporcionada por una aplicación específica."
    },
    {
      term: "Digital Signature",
      description:
        "Cadena cifrada que protege los bits de un token frente a manipulaciones. Si los bits son modificados o alterados, la firma dejará de poder verificarse y será rechazada."
    },
    {
      term: "Directory",
      description:
        "Repositorio centralizado de usuarios (el más conocido es Active Directory) que centraliza las credenciales y los atributos, eliminando la necesidad de que cada aplicación tenga su propia configuración de identidad local."
    },
    {
      term: "Early Access",
      description:
        "Etapa de lanzamiento de producto durante la cual la funcionalidad o el comportamiento referenciado se pone a disposición de un número limitado de suscriptores o socios de desarrollo de clientes (CDPs) para que lo prueben y aporten sus comentarios."
    },
    {
      term: "End of Life",
      description: "Etapa de lanzamiento del producto que indica que la funcionalidad o el comportamiento referenciado ha sido eliminado de la plataforma. El uso continuado probablemente generará errores."
    },
    {
      term: "End of Life Date",
      description: "Fecha en la que el acceso a una funcionalidad o comportamiento es eliminado de la plataforma. Las fechas de fin de vida pueden variar según el tipo de plan."
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description: "Producto SaaS de Auth0 que otorga a usuarios individuales acceso a objetos o recursos específicos dentro de tu aplicación."
    },
    {
      term: "Flow",
      description:
        "Procesos que pueden extenderse mediante Actions. Cada Flow está compuesto por uno o más triggers y representa el flujo lógico a través del cual se mueve la información en un punto determinado del recorrido en Auth0."
    },
    {
      term: "General Availability",
      description: "Etapa de lanzamiento del producto en la que la funcionalidad o el comportamiento referenciado es completamente funcional y está disponible para todos los suscriptores en entornos de producción."
    },
    {
      term: "Group",
      description: "Conjunto de uno o más usuarios. En la extensión de autorización de Auth0, se utilizan grupos para otorgar acceso a muchos usuarios a la vez."
    },
    {
      term: "ID Token",
      description: "Credencial destinada al propio cliente, no al acceso a un recurso. Tiene un formato fijo que los clientes pueden analizar y validar."
    },
    {
      term: "Identity Provider (IdP)",
      description: "Servicio que almacena y gestiona identidades digitales. Auth0 admite proveedores de identidad de confianza de tipo social, empresarial y legal."
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "Método abierto y estándar de la industria (RFC 7519) para representar claims de forma segura entre dos partes. En Auth0, los tokens de ID siempre se devuelven en formato JWT, y los tokens de acceso frecuentemente también."
    },
    {
      term: "Localization",
      description: "Capacidad de mostrar la experiencia de Universal Login en un idioma compatible."
    },
    {
      term: "Lock",
      description: "Widget de interfaz de usuario de Auth0 para autenticar usuarios. Está listo para usar tal como es y es la interfaz predeterminada de la experiencia de Universal Login clásico."
    },
    {
      term: "Management API",
      description: "API de Auth0 para gestionar los servicios de Auth0 y realizar tareas administrativas de forma programática."
    },
    {
      term: "Metadata",
      description: "Información que los usuarios pueden actualizar, como preferencias o configuraciones de perfil. Los metadatos se añaden a los tokens de ID y pueden almacenarse en los perfiles de usuario."
    },
    {
      term: "Migration",
      description: "Proceso mediante el cual un cliente deja de utilizar una funcionalidad o comportamiento determinado. Las migraciones deben realizarse durante la etapa de obsolescencia."
    },
    {
      term: "Multi-factor authentication (MFA)",
      description: "Proceso de autenticación que considera múltiples factores. Por lo general, el primer factor es el nombre de usuario y contraseña, y el segundo es un código o enlace por correo electrónico o SMS, o una OTP a través de una aplicación."
    },
    {
      term: "Nonce",
      description: "Número arbitrario (a menudo aleatorio o pseudoaleatorio) emitido en un protocolo de autenticación que puede utilizarse para detectar y mitigar ataques de repetición."
    },
    {
      term: "OAuth 2.0",
      description:
        "Marco de autorización que define protocolos y flujos de trabajo de autorización. OAuth 2.0 define roles, concesiones de autorización, solicitudes y respuestas de autorización, y el manejo de tokens."
    },
    {
      term: "OpenID",
      description: "Estándar abierto de autenticación que permite a las aplicaciones verificar que los usuarios son quienes dicen ser, sin necesidad de recopilar ni almacenar información de inicio de sesión."
    },
    {
      term: "Organizations",
      description: "Producto de Auth0 que permite a los clientes B2B categorizar a los usuarios finales y definir roles específicos, la experiencia de inicio de sesión y el acceso a los recursos."
    },
    {
      term: "Passwordless",
      description: "Forma de autenticación en la que el primer factor no es una contraseña. En su lugar, puede ser una contraseña de un solo uso recibida por correo electrónico o SMS, una notificación push o un sensor biométrico."
    },
    {
      term: "Perimeter",
      description: "Conjunto de límites que abarca un directorio, todos sus usuarios y todas las aplicaciones que lo utilizan."
    },
    {
      term: "Product Release Stages",
      description: "Fases que describen cómo Auth0 prepara, lanza y retira las funcionalidades del producto."
    },
    {
      term: "Public Client",
      description:
        "Según el protocolo OAuth 2.0, los clientes pueden ser confidenciales o públicos. Los clientes públicos no pueden almacenar credenciales de forma segura, por lo que solo deben utilizar tipos de concesión que no requieran el uso de su secreto de cliente."
    },
    {
      term: "Raw Credential",
      description: "Secreto compartido o conjunto de información acordado entre el usuario y el recurso que permite al recurso verificar la identidad de un usuario."
    },
    {
      term: "Refresh Token",
      description: "Tipo especial de token que puede utilizarse para obtener un token de acceso renovado. Es útil para renovar tokens de acceso próximos a expirar sin obligar al usuario a iniciar sesión de nuevo."
    },
    {
      term: "Refresh Token Rotation",
      description: "Estrategia que consiste en reemplazar frecuentemente los tokens de actualización para minimizar la vulnerabilidad. Cada intercambio también devuelve un nuevo token de actualización."
    },
    {
      term: "Relying Party",
      description: "Entidad (como un servicio o aplicación) que depende de un proveedor de identidad externo para autenticar a un usuario."
    },
    {
      term: "Resource Owner",
      description: "Entidad (como un usuario o una aplicación) capaz de otorgar acceso a un recurso protegido."
    },
    {
      term: "Resource Server",
      description: "Servidor que aloja recursos protegidos. Los servidores de recursos aceptan y responden a las solicitudes de recursos protegidos."
    },
    {
      term: "Role",
      description: "Aspecto de la identidad de un usuario que se le asigna para indicar el nivel de acceso que debe tener al sistema."
    },
    {
      term: "Scope",
      description: "Mecanismo que define las acciones específicas que las aplicaciones pueden realizar o la información que pueden solicitar en nombre de un usuario."
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description: "Protocolo estandarizado basado en XML mediante el cual dos partes pueden intercambiar información de autenticación sin necesidad de contraseña."
    },
    {
      term: "Security Token",
      description: "Artefacto firmado digitalmente que se utiliza para demostrar que el usuario fue autenticado correctamente."
    },
    {
      term: "Session Cookie",
      description: "Entidad emitida por el middleware después de verificar que el token recibido está firmado, es válido y proviene de una fuente de confianza."
    },
    {
      term: "Shadow Account",
      description: "Práctica difícil de mantener que consiste en aprovisionar manualmente a un usuario de un directorio local de forma independiente en un directorio remoto cuando necesita acceso a aplicaciones remotas."
    },
    {
      term: "Signing Algorithm",
      description: "Algoritmo de hash utilizado para firmar digitalmente los tokens y garantizar que no han sido manipulados."
    },
    {
      term: "Single Sign-On (SSO)",
      description: "Servicio que, tras iniciar sesión en una aplicación, autentica automáticamente al usuario en otras aplicaciones. El cierre de sesión único funciona de manera similar, pero a la inversa."
    },
    {
      term: "Subscription",
      description: "Acuerdo que define las funcionalidades y cuotas disponibles para cada uno de tus tenants."
    },
    {
      term: "Suspicious IP Throttling",
      description: "Forma de protección contra ataques que protege tu tenant frente a inicios de sesión sospechosos dirigidos a demasiadas cuentas desde una única dirección IP."
    },
    {
      term: "Tenant",
      description: "Grupo lógicamente aislado de usuarios que comparten acceso común con privilegios específicos a una única instancia de software."
    },
    {
      term: "Token Endpoint",
      description: "Endpoint del servidor de autorización que se utiliza para solicitar tokens de forma programática."
    },
    {
      term: "Trigger",
      description: "Evento que invoca automáticamente un Action cuando se produce una operación específica en tiempo de ejecución, como el inicio de sesión de un usuario."
    },
    {
      term: "Trust",
      description: "Un recurso confía en un proveedor de identidad o autoridad cuando está dispuesto a aceptar lo que dicha autoridad afirma sobre sus usuarios."
    },
    {
      term: "Universal Login",
      description: "Implementación de Auth0 del flujo de autenticación, que es la funcionalidad clave de un servidor de autorización."
    },
    {
      term: "Web Service Federation (WS-Fed)",
      description: "Protocolo para gestionar identidades de usuario entre sistemas, dominios y proveedores de identidad con confianza establecida mediante WS-Trust. Se utiliza principalmente en productos de Microsoft."
    }
  ]

  const A_TO_Z = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term))) : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            id="search-input-control"
            type="text"
            placeholder="Buscar por nombre"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* A–Z index */}
      <nav className="mb-8 flex flex-wrap gap-3">
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${enabled ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white" : "text-gray-400 dark:text-gray-600 cursor-not-allowed"}`}
              aria-label={`Ir a ${letter}`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groups */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className="mb-10">
              <div className="flex items-end gap-1">
                <h2 id={letter} ref={(el) => (letterRefs.current[letter] = el)} className="text-3xl font-semibold glossary_h2">
                  {letter}
                </h2>
                <div className="flex-1 border-b-2 border-[#3F59E4]" />
              </div>

              <ul className="mt-6 space-y-6 glossary_list">
                {items.map((it) => (
                  <li key={it.term} className="scroll-mt-24">
                    <h3 id={norm(it.term)} className="text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3">
                      {it.term}
                    </h3>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">{highlight(it.description, term)}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && <p className="text-gray-500 dark:text-gray-400">No hay resultados para "{term}". Prueba con un término diferente.</p>}
      </section>
    </div>
  )
}

export const GlossaryFR = () => {
  const GLOSSARY = [
    {
      term: "Suscripción",
      description:
        "Acuerdo que define las funcionalidades y las cuotas asignadas a cada uno de sus tenants. Auth0 ofrece varios niveles de suscripción para satisfacer las necesidades de distintos desarrolladores y organizaciones."
    },
    {
      term: "Acceso anticipado",
      description:
        "Fase de lanzamiento del producto durante la cual una funcionalidad o un comportamiento específico se pone a disposición de un número limitado de suscriptores o socios de desarrollo de clientes (CDP) para que puedan probarlo y compartir sus comentarios. En esta etapa, la funcionalidad aún no está terminada, pero se encuentra lo suficientemente avanzada como para ser evaluada."
    },
    {
      term: "Actores de amenaza",
      description:
        "También conocidos como autores de ciberamenazas, son individuos o grupos que representan una amenaza para una empresa o entorno con la intención de causar daño. Dicho daño puede ser físico o informático, e incluye desde intrusiones en centros de datos hasta el acceso no autorizado a sistemas mediante credenciales robadas."
    },
    {
      term: "Actions",
      description:
        "Funciones seguras, específicas del tenant, con control de versiones y escritas en Node.js que se ejecutan en momentos determinados durante el tiempo de ejecución de Auth0. Las Actions se utilizan para personalizar y ampliar las capacidades de Auth0 con lógica personalizada."
    },
    {
      term: "Algoritmo de firma",
      description: "Algoritmo de hash utilizado para firmar digitalmente los tokens y garantizar que no hayan sido alterados por actores de amenaza."
    },
    {
      term: "Dispositivo de autenticación",
      description: "En el flujo de autenticación por canal de respaldo iniciado por el cliente."
    },
    {
      term: "Dispositivo de consumo",
      description: "El dispositivo que ayuda al usuario a consumir un servicio en el flujo de autenticación por canal de respaldo iniciado por el cliente."
    },
    {
      term: "Aplicación",
      description:
        "Su software que utiliza Auth0 para la autenticación y la gestión de identidades. Auth0 admite aplicaciones web tradicionales, aplicaciones nativas y aplicaciones de comunicación entre máquinas."
    },
    {
      term: "Vinculación de cuentas",
      description:
        "Asociación de cuentas de usuario en múltiples plataformas para permitir que los usuarios accedan a varios recursos o aplicaciones proporcionando sus credenciales una sola vez."
    },
    {
      term: "Audience",
      description:
        "Identificador único de la audiencia de un token emitido, determinado dentro de un JSON Web Token como el claim **aud**. El valor de audience es la aplicación (ID de cliente) para un token de ID, o la API invocada (`identificador de la API`) para un token de acceso. En Auth0, el valor de audience enviado en una solicitud de token de acceso determina si dicho token se devuelve en formato opaco o JWT."
    },
    {
      term: "Auth0 Dashboard",
      description:
        "La interfaz principal de administración de Auth0 en la que puede registrar su aplicación o API, conectarse a un almacén de usuarios u otro proveedor de identidad, y configurar sus servicios de Auth0."
    },
    {
      term: "Autenticación multifactor (MFA)",
      description:
        "Proceso de autenticación que considera múltiples factores. En Auth0, el primer factor suele ser el intercambio habitual de nombre de usuario y contraseña, mientras que el segundo puede ser un código o enlace por correo electrónico o SMS, una contraseña de un solo uso mediante una aplicación como Authy o Google Authenticator, o una notificación push a través de una aplicación móvil como Guardian o Duo. El uso de múltiples factores mantiene su cuenta segura incluso si un actor malintencionado obtiene uno de ellos (por ejemplo, robando su contraseña o su teléfono)."
    },
    {
      term: "Autenticación multifactor (MFA) adaptativa",
      description:
        "Autenticación multifactor (MFA) que solo se activa para los usuarios cuando un intento de inicio de sesión se determina como de baja confianza. Con la MFA adaptativa, Auth0 solo activa la autenticación multifactor cuando es necesario, añadiendo fricción para los actores de amenaza sin alterar la experiencia de inicio de sesión de los usuarios legítimos."
    },
    {
      term: "Inicio de sesión único (SSO)",
      description:
        "Servicio que, tras el inicio de sesión de un usuario en una aplicación, lo autentica automáticamente en otras aplicaciones, independientemente de la plataforma, la tecnología o el dominio que utilice. El usuario solo inicia sesión una vez (de ahí el nombre de la funcionalidad). También se habla de cierre de sesión único (SLO) cuando un usuario, tras cerrar sesión en una aplicación, queda desconectado de todas las aplicaciones o servicios en los que estaba autenticado. El SSO y el SLO son posibles gracias al uso de sesiones."
    },
    {
      term: "Autorización de grano fino (FGA)",
      description: "Producto SaaS de Auth0 que permite a usuarios individuales acceder a objetos o recursos específicos dentro de su aplicación."
    },
    {
      term: "Beta",
      description:
        "Fase de lanzamiento del producto durante la cual la funcionalidad o el comportamiento referenciado se pone a disposición de los suscriptores. Esto les permite explorar y adoptar las nuevas capacidades del producto, al tiempo que nos proporcionan retroalimentación final antes de la disponibilidad general (DG). La funcionalidad es completamente operativa, estable, adaptable a diversos contextos y se considera que cumple o se aproxima a los estándares de calidad de una versión de disponibilidad general. Las versiones beta pueden estar restringidas a un número definido de suscriptores (privadas) o estar abiertas a todos los suscriptores (públicas)."
    },
    {
      term: "Bloquear/desbloquear usuarios",
      description:
        "Eliminación o restauración del acceso de un solicitante a un recurso. Hace referencia a las funcionalidades del conjunto de protección contra ataques de Auth0: detección de contraseñas comprometidas, protección contra ataques de fuerza bruta y limitación de direcciones IP sospechosas. Cada servicio evalúa las tendencias de inicio de sesión y bloquea las direcciones IP asociadas a actividad sospechosa."
    },
    {
      term: "Cambio disruptivo",
      description: "Modificación de la plataforma Auth0 que, según el conocimiento de Auth0, provocará fallos en la interoperabilidad entre la plataforma Auth0 y las aplicaciones cliente."
    },
    {
      term: "Cliente confidencial",
      description:
        "Según el protocolo OAuth 2.0, los clientes (aplicaciones) pueden clasificarse como confidenciales o públicos según su capacidad de almacenar credenciales (como un ID de cliente y un secreto) de forma segura. Los clientes confidenciales pueden conservar credenciales de manera segura sin exponerlas a partes no autorizadas, y para ello requieren un servidor backend de confianza. Pueden utilizar tipos de permiso que exigen autenticarse especificando su ID de cliente y su secreto al invocar el punto de conexión del token, y pueden recibir tokens firmados de forma simétrica o asimétrica."
    },
    {
      term: "Cliente público",
      description:
        "Según el protocolo OAuth 2.0, los clientes (aplicaciones) pueden clasificarse como confidenciales o públicos según su capacidad de almacenar credenciales (como un ID de cliente y un secreto) de forma segura. Los clientes públicos no pueden almacenar credenciales de manera segura y, por tanto, solo deben utilizar tipos de permiso que no requieran el uso de su secreto de cliente. Los tokens de ID que se les emiten deben estar firmados de forma asimétrica mediante una clave privada (RS256) y verificados con la clave pública correspondiente a la clave privada utilizada para firmar el token."
    },
    {
      term: "Código de autorización",
      description:
        "Cadena aleatoria generada por el servidor de autorización y devuelta a la aplicación como parte de la respuesta de autorización. Un código de autorización tiene una vida útil relativamente corta y se reemplaza por un token de acceso en el punto de conexión del token al usar el flujo de código de autorización, con o sin Proof Key for Code Exchange (PKCE)."
    },
    {
      term: "Cuenta fantasma",
      description:
        "Esta práctica, difícil de mantener, consiste en aprovisionar manualmente a un usuario desde un directorio local de forma independiente en un directorio remoto (creando esencialmente una copia, o cuenta fantasma, de la cuenta original) cuando necesita acceder a aplicaciones remotas."
    },
    {
      term: "Confianza",
      description: "Un recurso confía en un proveedor de identidad o en una autoridad cuando está dispuesto a aceptar lo que dicha autoridad afirma sobre sus usuarios."
    },
    {
      term: "Inicio de sesión",
      description:
        "Relación entre Auth0 y las fuentes de usuarios para sus aplicaciones. Puede tratarse, por ejemplo, de proveedores de identidad (como Google o Active Directory), métodos de autenticación sin contraseña o bases de datos de usuarios."
    },
    {
      term: "Inicio de sesión universal",
      description:
        "Auth0 implementa el flujo de autenticación, que constituye la funcionalidad principal de un servidor de autorización. Cada vez que un usuario necesita demostrar su identidad, sus aplicaciones lo redirigen al Inicio de sesión universal. Auth0 toma entonces las medidas necesarias para confirmar la identidad del usuario."
    },
    {
      term: "Fecha de fin de vida",
      description: "Fecha en la que el acceso a una funcionalidad o comportamiento se elimina de la plataforma. Las fechas de fin de vida pueden variar según el tipo de plan."
    },
    {
      term: "Disparador",
      description:
        "Evento que invoca automáticamente una Action cuando se produce una operación determinada, como el inicio de sesión de un usuario, en tiempo de ejecución. Algunos disparadores se ejecutan de forma sincrónica, bloqueando el flujo en el que participan, mientras que otros se ejecutan de forma asincrónica."
    },
    {
      term: "Claim",
      description: "Atributo incluido en un token de seguridad que representa una afirmación que el emisor del token hace sobre una entidad."
    },
    {
      term: "Detección de contraseñas comprometidas",
      description:
        "Forma de protección contra ataques mediante la cual Auth0 notifica a sus usuarios si están utilizando una combinación de nombre de usuario y contraseña que se ha visto comprometida en una filtración de datos en un sitio web o aplicación de terceros."
    },
    {
      term: "Detección de bots",
      description: "Forma de protección contra ataques mediante la cual Auth0 bloquea el tráfico sospechoso de ser generado por bots activando un CAPTCHA durante el proceso de inicio de sesión."
    },
    {
      term: "Disponibilidad general",
      description:
        "Fase de lanzamiento del producto en la que la funcionalidad o el comportamiento en cuestión es completamente funcional y está disponible para todos los suscriptores (según el nivel de precios) para su uso en producción. Cuando una funcionalidad existente es reemplazada por una nueva versión, Auth0 garantiza un período de compatibilidad retroactiva conforme a nuestra política de obsolescencia, e informamos a los clientes para que puedan adaptarse a la nueva versión dentro de los plazos establecidos."
    },
    {
      term: "Dominio personalizado",
      description: "Dominio de terceros con un nombre especializado o que refleja su marca. También denominado CNAME."
    },
    {
      term: "Credenciales sin procesar",
      description: "Intercambio de información secreta o conjunto de información acordada entre el usuario y el recurso que sirve para verificar la identidad del usuario."
    },
    {
      term: "Fin de vida",
      description:
        "Etapa de la fase de lanzamiento del producto que indica que la funcionalidad o el comportamiento en cuestión ha sido retirado de la plataforma. Continuar usando dicha funcionalidad o comportamiento probablemente generará errores. El nuevo comportamiento se activará automáticamente para los tenants que no hayan optado por esta opción durante la ventana de migración."
    },
    {
      term: "Flujo",
      description:
        "Procesos que pueden extenderse mediante Actions. Cada flujo está compuesto por uno o más disparadores y representa el pipeline lógico a través del cual fluye la información en un momento determinado del recorrido de Auth0."
    },
    {
      term: "Flujo de autorización",
      description:
        "Otro nombre para los tipos de concesión descritos en OAuth 2.0. Los flujos de autorización son los flujos de producción que un recurso (aplicación o API) utiliza para conceder acceso a los solicitantes. Según el tipo de tecnología (por ejemplo, si una aplicación puede almacenar un secreto de cliente) y el tipo de solicitante, los propietarios de recursos pueden usar un flujo de código de autorización, Proof Key for Code Exchange (PKCE), Resource Owner Password Grant (ROPG), flujo implícito o credenciales de cliente."
    },
    {
      term: "Proveedor de identidad (IdP)",
      description:
        "Servicio de almacenamiento y gestión de identidades digitales. Auth0 admite proveedores de identidad de redes sociales, empresas y organismos legales de confianza. Auth0 también puede funcionar como proveedor de identidad para sus aplicaciones."
    },
    {
      term: "Grupo",
      description: "Conjunto de uno o más usuarios. En Auth0 Authorization Extension, use los grupos para conceder acceso a varios usuarios a la vez."
    },
    {
      term: "ID de cliente",
      description:
        "Valor de identificación asignado a su aplicación tras el registro. Este valor se utiliza junto con otros servicios de terceros y aparece en **Auth0 Dashboard** > **Configuración de la aplicación**."
    },
    {
      term: "Identidad digital",
      description: "Conjunto de atributos que definen a un usuario concreto en el contexto de una función desempeñada por una aplicación determinada."
    },
    {
      term: "Token de acceso",
      description:
        "Identificador que puede usar una aplicación para acceder a una API. Informa a la API de que el portador del token ha sido autorizado a acceder a ella y a realizar las acciones específicas definidas por el permiso que se le ha concedido. Un token de acceso puede presentarse en cualquier formato, aunque las cadenas opacas y los JSON Web Tokens (JWT) son dos opciones habituales. Deben transmitirse a la API como identificador de portador en un encabezado de autorización HTTP."
    },
    {
      term: "Token de actualización",
      description:
        "Tipo especial de token que puede usarse para obtener un token de acceso renovado. Es útil para renovar tokens de acceso próximos a expirar sin obligar al usuario a volver a iniciar sesión. El token de actualización permite solicitar un nuevo token de acceso en cualquier momento hasta que dicho token de actualización sea bloqueado."
    },
    {
      term: "Token de ID",
      description: "Identificador diseñado para el propio cliente, no para el acceso a un recurso. Tiene un formato fijo que los clientes pueden analizar y validar."
    },
    {
      term: "Token de seguridad",
      description: "Artefacto firmado digitalmente que se usa para demostrar que el usuario se ha autenticado correctamente."
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "Método abierto conforme al estándar industrial RFC 7519 que permite representar de forma segura los claims entre dos partes. En Auth0, los tokens de ID siempre se devuelven en formato JWT, mientras que los tokens de acceso generalmente también lo están. Es posible decodificar y visualizar los claims contenidos en un JWT bien formado en el sitio JWT.io."
    },
    {
      term: "Limitación de direcciones IP sospechosas",
      description: "Esta medida de seguridad protege su tenant frente a inicios de sesión sospechosos provenientes de una única dirección IP que apuntan a un gran número de cuentas."
    },
    {
      term: "Localización",
      description: "Posibilidad de presentar la interfaz del nuevo Inicio de sesión universal en uno de los idiomas admitidos."
    },
    {
      term: "Tenant",
      description:
        "En Auth0, un grupo de usuarios lógicamente aislados que comparten acceso común a una única instancia de software y que poseen privilegios particulares. Cada tenant está aislado, lo que impide que cualquier otro tenant acceda a sus datos, aunque varios tenants pueden funcionar en la misma máquina. El término «tenant», en general, proviene de la arquitectura de software multitenant."
    },
    {
      term: "Lock",
      description:
        "Widget de interfaz de usuario de Auth0 para la autenticación de usuarios. Está listo para usar y representa la experiencia estándar de Inicio de sesión universal. Lock permite personalizar ligeramente el comportamiento y la apariencia, pero su objetivo principal es la facilidad de uso."
    },
    {
      term: "Management API",
      description: "API de Auth0 que permite gestionar los servicios de Auth0 y realizar tareas administrativas de forma programática."
    },
    {
      term: "Metadatos",
      description:
        "Información que los usuarios pueden actualizar, como preferencias o configuraciones de perfil. Los metadatos se añaden a los tokens de ID y pueden almacenarse en los perfiles de usuario."
    },
    {
      term: "Migración",
      description:
        "Proceso mediante el cual un cliente abandona una funcionalidad o un comportamiento determinado. Las migraciones deberían producirse durante la fase de lanzamiento del producto en la que este se declara obsoleto."
    },
    {
      term: "Nonce",
      description:
        "Número arbitrario (a menudo aleatorio o pseudoaleatorio) emitido en un protocolo de autenticación que puede utilizarse para ayudar a detectar y mitigar ataques de repetición que aprovechan comunicaciones antiguas. En otras palabras, el nonce solo se emite una vez, de modo que si un atacante intenta reproducir una transacción con un nonce diferente, su transacción falsa puede detectarse con mayor facilidad."
    },
    {
      term: "OAuth 2.0",
      description:
        "Marco de autorización de aplicaciones que define los protocolos de autorización y los flujos. OAuth 2.0 define los roles, los permisos de autorización (o flujos), las solicitudes y respuestas de autorización, así como la gestión de tokens. Los protocolos OpenID Connect (OIDC) para verificar la identidad del usuario amplían OAuth 2.0."
    },
    {
      term: "Obsolescencia",
      description:
        "Fase de lanzamiento de un producto que indica que la funcionalidad o el comportamiento en cuestión ya no es compatible para nuevos suscriptores, no recibe mejoras activas y solo recibe mantenimiento mínimo. Los tenants que utilicen la funcionalidad o el comportamiento en el momento de la obsolescencia seguirán teniendo acceso a ellos."
    },
    {
      term: "OpenID",
      description:
        "Estándar abierto de autenticación que permite a las aplicaciones verificar que los usuarios son quienes dicen ser, sin necesidad de recopilar, almacenar ni hacerse responsables de las credenciales de inicio de sesión del usuario."
    },
    {
      term: "Organizations",
      description:
        "Producto de Auth0 que permite a los clientes de comercio electrónico entre empresas (B2B) categorizar a los usuarios finales y definir roles específicos, la experiencia de inicio de sesión y el acceso a los recursos."
    },
    {
      term: "Parte de confianza",
      description: "Entidad (como un servicio o una aplicación) que depende de un proveedor de identidad externo para autenticar a un usuario."
    },
    {
      term: "Perímetro",
      description:
        "Conjunto de límites que engloba un directorio, todos sus usuarios y todas las aplicaciones que lo utilizan. En algunas implementaciones, este perímetro es una ubicación física; en otras, es un conjunto de redes o dispositivos conectados por VPN."
    },
    {
      term: "Permiso",
      description:
        "Mecanismo que define las acciones que las aplicaciones pueden estar autorizadas a realizar o la información que pueden solicitar en nombre de un usuario. Con frecuencia, las aplicaciones necesitarán acceder a información que ya existe en un recurso en línea. En ese caso, la aplicación deberá solicitar permiso para acceder a dicha información en nombre del usuario. Cuando una aplicación solicita permiso para acceder a un recurso a través de un servidor de autorizaciones, utiliza el parámetro de permisos para especificar el acceso que necesita, y el servidor de autorizaciones usa ese mismo parámetro para responder con el acceso que efectivamente se ha concedido."
    },
    {
      term: "Fases de lanzamiento del producto",
      description:
        "Fases que describen cómo Auth0 implementa, distribuye y retira funcionalidades del producto. Las funcionalidades del producto pueden no pasar por todas las fases de lanzamiento, y la duración de cada fase varía según el permiso y el alcance de la funcionalidad."
    },
    {
      term: "Punto de conexión de token",
      description: "Punto de conexión en el servidor de autorizaciones utilizado para solicitar tokens de forma programática."
    },
    {
      term: "Propietario de recursos",
      description: "Entidad (como un usuario o una aplicación) capaz de conceder acceso a un recurso protegido."
    },
    {
      term: "Protección contra ataques",
      description:
        "Funcionalidades que ofrece Auth0 para detectar y mitigar ataques, entre ellas la protección contra ataques de fuerza bruta, el bloqueo de IPs sospechosas, la detección de contraseñas comprometidas, la detección de bots y la autenticación multifactor (MFA) adaptativa."
    },
    {
      term: "Protección contra ataques de fuerza bruta",
      description: "Forma de protección contra ataques de fuerza bruta provenientes de una única dirección IP y dirigidos a una única cuenta de usuario."
    },
    {
      term: "Callback",
      description: "URL a la que Auth0 envía su respuesta tras la autenticación. Suele coincidir con la URL a la que se redirige al usuario después de autenticarse."
    },
    {
      term: "Directorio",
      description:
        "Repositorio centralizado de usuarios (el más conocido es Active Directory) que centraliza las credenciales y los atributos, eliminando la necesidad de que cada aplicación mantenga su propia configuración de identidad local y su propio grupo de usuarios. Permite el inicio de sesión único para todas las aplicaciones que utilizan el mismo directorio de usuarios."
    },
    {
      term: "Rol",
      description:
        "Aspecto de la identidad de un usuario que se le asigna para indicar el nivel de acceso que debe tener en el sistema. Los roles son esencialmente colecciones de permisos."
    },
    {
      term: "Rotación de tokens de actualización",
      description:
        "Estrategia que consiste en reemplazar los tokens de actualización con frecuencia para minimizar la exposición ante posibles vulnerabilidades. Con la rotación de tokens de actualización, cada vez que su aplicación intercambia un token de actualización para obtener un nuevo token de acceso, Auth0 también devuelve un nuevo token de actualización."
    },
    {
      term: "Sin contraseña",
      description:
        "Forma de autenticación en la que el primer factor no es una contraseña. Puede tratarse de una contraseña de un solo uso recibida por correo electrónico o SMS, una notificación push o un sensor biométrico. La autenticación sin contraseña utiliza contraseñas de un solo uso, por lo que los usuarios están menos expuestos a los ataques típicos basados en contraseñas (por ejemplo, ataques de diccionario o de relleno de credenciales) que con los inicios de sesión tradicionales de nombre de usuario y contraseña."
    },
    {
      term: "Secreto de cliente",
      description:
        "Secreto utilizado por un cliente (aplicación) para autenticarse ante el servidor de autorización; solo debe ser conocido por el cliente y el servidor de autorización, y debe ser suficientemente aleatorio como para no poder ser adivinado."
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description: "Protocolo estandarizado basado en XML que permite a dos partes intercambiar información de autenticación sin necesidad de contraseña."
    },
    {
      term: "Serveur d’authentification",
      description:
        "Servidor que confirma o rechaza la identidad de un usuario. Un servidor de autenticación no limita las acciones ni los recursos disponibles para el usuario (aunque puede proporcionar contexto al respecto)."
    },
    {
      term: "Servidor de autorizaciones:",
      description:
        "Servidor centralizado que ayuda a definir los límites del acceso de un usuario. Por ejemplo, su servidor de autorizaciones puede controlar los datos, las tareas y las funcionalidades accesibles para un usuario. Un servidor de autorizaciones no está diseñado para autenticar usuarios. Esa tarea corresponde al servidor de autenticación, que es el encargado de verificar la identidad de un usuario."
    },
    {
      term: "Servidor de recursos",
      description: "Servidor que aloja recursos protegidos. Los servidores de recursos procesan y responden a las solicitudes de recursos seguros."
    },
    {
      term: "Firma digital",
      description: "Cadena cifrada que protege los bits de un token contra la manipulación. Si los bits son modificados o alterados, la firma no podrá verificarse y será rechazada."
    },
    {
      term: "Testigo de sesión",
      description:
        "Entidad emitida por el software intermediario tras verificar que el token recibido está firmado, es válido y proviene de una fuente de confianza (el proveedor de identidad). Esta entidad representa que se ha completado una autenticación exitosa con el proveedor de identidad. Este testigo evita tener que repetir continuamente dicho proceso con los tokens, lo que permite que el usuario sea considerado autenticado mientras el testigo esté presente."
    },
    {
      term: "Tokenset",
      description:
        "Para cada conexión autorizada de un usuario, como Google o Microsoft, Token Vault crea un contenedor seguro denominado tokenset. Un tokenset contiene los tokens de acceso y de actualización necesarios para llamar a las APIs de ese proveedor externo en nombre del usuario. Un tokenset almacena de forma segura los tokens de acceso y de actualización en el servidor de autorización de Auth0."
    },
    {
      term: "Suplantación",
      description: "Escenario en el que un atacante convence a un cliente o servicio para que realice una tarea en su nombre."
    },
    {
      term: "Web Service Federation (WS-Fed)",
      description:
        "Protocolo de gestión de identidades de usuarios entre sistemas, dominios y proveedores de identidad. Este protocolo se basa en WS-Trust para establecer la confianza y se utiliza principalmente en productos de Microsoft. Define políticas sobre cómo compartir los metadatos de federación. Developers * [Developer Hub](https://developer.auth0.com/resources) * [Code Samples and Guides](https://developer.auth0.com/resources/code-samples) * [Blog posts](https://auth0.com/blog/developers/) * [Videos](https://auth0.com/docs/videos) * [Identity Unlocked - Podcasts](https://identityunlocked.auth0.com/public/49/Identity,-Unlocked.--bed7fada) * [Zero Index Newsletter](https://developer.auth0.com/newsletter) Documentation * [Articles](https://auth0.com/docs/articles) * [Quickstarts](https://auth0.com/docs/quickstarts) * [APIs](https://auth0.com/docs/api) * [SDK Libraries](https://auth0.com/docs/libraries) * [Blog](https://auth0.com/blog/) * [Reports](https://auth0.com/resources/ebooks) * [Webinars](https://auth0.com/resources/webinars) Get Involved * [Forum](https://community.auth0.com/) * [Events](https://developer.auth0.com/events) * [Ambassador Program](https://auth0.com/ambassador-program) * [Auth0 Research Program](https://auth0.com/research-program) Company * [Our Customers](https://auth0.com/customers) * [Compliance - Ensuring privacy and security](https://auth0.com/security) * [Partners](https://auth0.com/partners) * [Careers We're hiring!](https://www.okta.com/company/careers/) * [Okta + Auth0](https://www.okta.com/okta-and-auth0/) Support Center * [Community](https://community.auth0.com/) * [Support](https://support.auth0.com/) * [Help](https://community.auth0.com/c/help/6) * [FAQs](https://community.auth0.com/c/faq/42) * [Auth0 Marketplace](https://marketplace.auth0.com) Learning * [Learn](https://auth0.com/learn) * [Intro to IAM (CIAM)](https://auth0.com/intro-to-iam) * [Blog](https://auth0.com/blog/) Platform * [Access Management](https://auth0.com/platform/access-management) * [Extensibility](https://auth0.com/platform/extensibility) * [Security](https://auth0.com/platform/login-security) * [User Management](https://auth0.com/platform/user-management) * [Authentication](https://auth0.com/platform/authentication) Features * [Universal Login](https://auth0.com/features/universal-login) * [Single Sign On](https://auth0.com/features/single-sign-on) * [Multifactor Authentication](https://auth0.com/features/multifactor-authentication) * [Actions](https://auth0.com/features/actions) * [Machine to Machine](https://auth0.com/features/machine-to-machine) * [Passwordless](https://auth0.com/features/passwordless) * [Breached Passwords](https://auth0.com/features/breached-passwords) © 2025 Okta, Inc. All Rights Reserved. [Status](https://status.auth0.com) • [Legal](https://www.okta.com/agreements/) • [Privacy](https://auth0.com/privacy) • [Terms](https://auth0.com/web-terms) • [Your Privacy Choices](https://auth0.com/your-privacy-choices)<Frame>![](https://cdn.auth0.com/website/footer/ccpa.svg)</Frame> [Status](https://status.auth0.com) • [Legal](https://www.okta.com/agreements/) • [Privacy](https://auth0.com/privacy) • [Terms](https://auth0.com/web-terms) • [Your Privacy Choices](https://auth0.com/your-privacy-choices)<Frame>![](https://cdn.auth0.com/website/footer/ccpa.svg)</Frame>"
    }
  ]

  const A_TO_Z = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term))) : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            id="search-input-control"
            type="text"
            placeholder="Buscar por nombre"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* A–Z index */}
      <nav className="mb-8 flex flex-wrap gap-3">
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${enabled ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white" : "text-gray-400 dark:text-gray-600 cursor-not-allowed"}`}
              aria-label={`Ir a ${letter}`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groups */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className="mb-10">
              <div className="flex items-end gap-1">
                <h2 id={letter} ref={(el) => (letterRefs.current[letter] = el)} className="text-3xl font-semibold glossary_h2">
                  {letter}
                </h2>
                <div className="flex-1 border-b-2 border-[#3F59E4]" />
              </div>

              <ul className="mt-6 space-y-6 glossary_list">
                {items.map((it) => (
                  <li key={it.term} className="scroll-mt-24">
                    <h3 id={norm(it.term)} className="text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3">
                      {it.term}
                    </h3>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">{highlight(it.description, term)}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && <p className="text-gray-500 dark:text-gray-400">No hay resultados para "{term}". Prueba con un término diferente.</p>}
      </section>
    </div>
  )
}

export const GlossaryJA = () => {
  const GLOSSARY = [
    {
      term: "Adaptive Multifactor Authentication",
      description:
        "Autenticación multifactor (MFA) que se activa para el usuario únicamente cuando se determina que un intento de inicio de sesión es de baja confianza. Auth0 utiliza Adaptive MFA para activar el MFA solo cuando es necesario reforzar la seguridad ante actores maliciosos, sin alterar la experiencia de inicio de sesión de los usuarios legítimos."
    },
    {
      term: "Auth0 Dashboard",
      description: "La interfaz de administración principal de Auth0, donde puedes registrar aplicaciones o APIs, conectarte a un almacén de usuarios o a otro proveedor de identidad, y configurar los servicios de Auth0."
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description: "Producto SaaS de Auth0 que permite a usuarios individuales acceder a objetos o recursos específicos dentro de una aplicación."
    },
    {
      term: "IDトークン",
      description: "Credencial destinada al propio cliente, no para acceder a recursos. Tiene un formato fijo que el cliente puede analizar y validar."
    },
    {
      term: "IDプロバイダー (IdP)",
      description:
        "Servicio que almacena y gestiona identidades digitales. Auth0 es compatible con proveedores de identidad sociales, empresariales y legales de confianza, y también puede actuar como proveedor de identidad para tus aplicaciones."
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "Método abierto y estándar de la industria (RFC 7519) para representar claims de forma segura entre dos partes. En Auth0, los tokens de ID siempre se devuelven en formato JWT y los tokens de acceso también lo hacen en la mayoría de los casos. Puedes decodificar un JWT bien formado en JWT.io para ver sus claims."
    },
    {
      term: "Lock",
      description:
        "Widget de interfaz de usuario de Auth0 para autenticar usuarios. Está listo para usar y es la interfaz predeterminada de la experiencia de inicio de sesión universal clásica. Lock permite personalizar opciones detalladas de comportamiento y apariencia, aunque su objetivo principal es la facilidad de uso."
    },
    {
      term: "Management API",
      description: "API de Auth0 para gestionar los servicios de Auth0 y ejecutar tareas administrativas de forma programática."
    },
    {
      term: "Nonce",
      description:
        "Número arbitrario (generalmente aleatorio o pseudoaleatorio) emitido en un protocolo de autenticación que puede usarse para detectar y mitigar ataques de repetición mediante comunicaciones antiguas. Como el nonce solo se emite una vez, si un atacante intenta repetir una transacción con un nonce diferente, esa transacción fraudulenta resulta más fácil de detectar."
    },
    {
      term: "OAuth 2.0",
      description:
        "Marco de autorización que define protocolos y flujos de trabajo de autorización. OAuth 2.0 define roles, concesiones de autorización (o flujos de trabajo), solicitudes y respuestas de autorización, y el manejo de tokens. Puede extenderse mediante el protocolo OpenID Connect (OIDC), que verifica la identidad del usuario."
    },
    {
      term: "OpenID",
      description:
        "Estándar abierto de autenticación que permite verificar que los usuarios son quienes dicen ser, sin que la aplicación tenga que recopilar ni almacenar sus credenciales de inicio de sesión (y, por tanto, sin asumir responsabilidad sobre ellas)."
    },
    {
      term: "Organization",
      description: "Producto de Auth0 que permite a los clientes B2B clasificar a sus usuarios finales y definir roles específicos, experiencias de inicio de sesión y acceso a recursos."
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description: "Protocolo estandarizado basado en XML que permite el intercambio de información de autenticación entre dos partes sin necesidad de contraseña."
    },
    {
      term: "Tokenset",
      description:
        "Para cada conexión autorizada de un usuario, como Google o Microsoft, Token Vault crea un contenedor seguro llamado tokenset. Un tokenset contiene los tokens de acceso y de actualización necesarios para llamar a las APIs de ese proveedor externo en nombre del usuario. Un tokenset almacena de forma segura los tokens de acceso y de actualización en el servidor de autorización de Auth0."
    },
    {
      term: "Webサービスフェデレーション (WS-Fed)",
      description:
        "Protocolo para gestionar identidades de usuario entre sistemas, dominios y proveedores de identidad donde la confianza se establece mediante WS-Trust. Se utiliza principalmente con productos de Microsoft y define políticas sobre cómo se comparten los metadatos de federación."
    },
    {
      term: "アカウントリンク",
      description: "Vinculación de cuentas de usuario entre múltiples plataformas para que el usuario pueda acceder a varios recursos y aplicaciones con un único conjunto de credenciales."
    },
    {
      term: "アクション",
      description:
        "Función segura escrita en Node.js que se ejecuta en un momento específico durante la ejecución de Auth0. Es específica del tenant y está versionada. Las Actions se utilizan para personalizar y ampliar las funcionalidades de Auth0 con lógica personalizada."
    },
    {
      term: "アクセストークン",
      description:
        "Credencial que una aplicación puede usar para acceder a una API. Informa a la API que el portador del token tiene autorización para acceder a ella y realizar las acciones específicas definidas por los scopes concedidos. Los tokens de acceso pueden tener cualquier formato, aunque las dos opciones más comunes son la cadena opaca y el JSON Web Token (JWT). Deben enviarse a la API como credenciales Bearer en el encabezado HTTP Authorization."
    },
    {
      term: "アプリケーション",
      description: "Software que depende de Auth0 para la autenticación y la gestión de identidades. Auth0 es compatible con aplicaciones de página única, web tradicionales, nativas y de máquina a máquina."
    },
    {
      term: "オーディエンス",
      description:
        "Identificador único que representa al destinatario de un token emitido, identificado como el claim aud dentro de un JSON Web Token. El valor del audience puede ser la aplicación (Client ID) en el caso de un token de ID, o la API que se invoca (API Identifier) en el caso de un token de acceso. En Auth0, el valor del audience enviado en la solicitud de un token de acceso determina si el token se devuelve en formato opaco o en formato JWT."
    },
    {
      term: "カスタムドメイン",
      description: "Dominio de terceros con un nombre especial o de vanidad. También se conoce como CNAME."
    },
    {
      term: "クライアントID",
      description: "Valor identificador asignado a una aplicación tras su registro. Este valor se utiliza en combinación con otros servicios de terceros y puede consultarse en Auth0 Dashboard > Application Settings."
    },
    {
      term: "クライアントシークレット",
      description:
        "Secreto que utiliza el cliente (aplicación) para autenticarse ante el servidor de autorización. Solo el cliente y el servidor de autorización lo conocen, y debe ser suficientemente aleatorio para que no pueda adivinarse."
    },
    {
      term: "クレーム",
      description: "Atributos incluidos en un token de seguridad que representan los claims que el proveedor del token hace sobre una entidad."
    },
    {
      term: "グループ",
      description: "Conjunto de uno o más usuarios. En la extensión de autorización de Auth0, los grupos se utilizan para conceder acceso a muchos usuarios a la vez."
    },
    {
      term: "コールバック",
      description: "URL a la que Auth0 envía la respuesta tras la autenticación. Por lo general, coincide con la URL a la que se redirige al usuario después de autenticarse."
    },
    {
      term: "サブスクリプション",
      description: "Contrato que define las funcionalidades y cuotas disponibles para cada tenant. Auth0 ofrece varios niveles de suscripción para satisfacer las necesidades de distintos desarrolladores y organizaciones."
    },
    {
      term: "サポート終了",
      description:
        "Fase del ciclo de vida de un producto que indica que la funcionalidad o el comportamiento en cuestión será eliminado de la plataforma. Continuar utilizándolos probablemente generará errores. El nuevo comportamiento se habilitará automáticamente para los tenants que no hayan optado por él durante el período de migración."
    },
    {
      term: "サポート終了日",
      description: "Fecha en la que el acceso a una funcionalidad o comportamiento será eliminado de la plataforma. La fecha de fin de soporte puede variar según el tipo de plan."
    },
    {
      term: "シャドーアカウント",
      description:
        "Método difícil de mantener que consiste en aprovisionar manualmente, uno a uno, a los usuarios que necesitan acceder a una aplicación remota desde un directorio local a uno remoto, creando en la práctica una copia —o sombra— de la cuenta original."
    },
    {
      term: "シングルサインオン（SSO）",
      description:
        "Servicio que, tras el inicio de sesión del usuario en una aplicación, lo autentica automáticamente en otras aplicaciones, independientemente de la plataforma, tecnología o dominio que utilice. El usuario solo inicia sesión una vez (de ahí el nombre de esta funcionalidad). De forma análoga, el cierre de sesión único (SLO) ocurre cuando, tras cerrar sesión en una aplicación, el usuario queda desconectado de cada aplicación o servicio en el que había iniciado sesión. SSO y SLO son posibles gracias al uso de sesiones."
    },
    {
      term: "スコープ",
      description:
        "Mecanismo que define las acciones específicas que puede realizar una aplicación o la información que puede solicitar en nombre del usuario. Con frecuencia, las aplicaciones buscan aprovechar información ya disponible en recursos en línea; para ello, deben solicitar autorización para acceder a dicha información en nombre del usuario. Cuando una aplicación solicita acceso a un recurso a través del servidor de autorización, utiliza el parámetro de scope para especificar el acceso requerido, y el servidor de autorización responde indicando el acceso efectivamente concedido mediante ese mismo parámetro."
    },
    {
      term: "セキュリティトークン",
      description: "Artefacto firmado digitalmente que se utiliza para demostrar que un usuario se ha autenticado correctamente."
    },
    {
      term: "セッションクッキー",
      description:
        "Entidad emitida por el middleware tras verificar que el token recibido está firmado, es válido y proviene de una fuente de confianza (el proveedor de identidad). Esta entidad representa el hecho de que la autenticación con el proveedor de identidad fue exitosa. Mientras la cookie exista, el usuario se considera autenticado, por lo que no es necesario repetir continuamente este proceso con el token."
    },
    {
      term: "ディレクトリ",
      description:
        "Repositorio central de usuarios (el más conocido es Active Directory). Permite gestionar credenciales y atributos de forma centralizada, eliminando la necesidad de que cada aplicación mantenga su propia configuración de identidad local o su propio grupo de usuarios. Es posible utilizar el inicio de sesión único en todas las aplicaciones que compartan el mismo directorio de usuarios."
    },
    {
      term: "デジタルID",
      description: "Conjunto de atributos que definen a un usuario concreto en el contexto de las funcionalidades ofrecidas por una aplicación específica."
    },
    {
      term: "デジタル署名",
      description: "Cadena cifrada que protege la información contenida en un token frente a manipulaciones. Si dicha información es modificada o alterada, la firma deja de ser válida y es rechazada."
    },
    {
      term: "テナント",
      description:
        "En Auth0, grupo de usuarios lógicamente aislado que comparte un acceso con privilegios específicos sobre una única instancia de software. Aunque varios tenants se ejecuten en la misma máquina, ninguno puede acceder a los datos de otro. En términos generales, tenant es un concepto tomado de las arquitecturas de software multitenant."
    },
    {
      term: "トークンエンドポイント",
      description: "Endpoint del servidor de autorización utilizado para solicitar tokens de forma programática."
    },
    {
      term: "トリガー",
      description:
        "Evento que invoca automáticamente un Action cuando se produce una operación específica en tiempo de ejecución, como el inicio de sesión de un usuario. Varios disparadores pueden ejecutarse al mismo tiempo; algunos bloquean el flujo en el que participan, mientras que otros no."
    },
    {
      term: "パスワードレス",
      description:
        "Forma de autenticación en la que el primer factor no es una contraseña. En su lugar, se puede utilizar una contraseña de un solo uso recibida por correo electrónico, SMS, notificación push o sensor biométrico. Dado que la autenticación sin contraseña emplea contraseñas de un solo uso, los usuarios son menos vulnerables a los ataques habituales basados en contraseñas (como los de diccionario o el relleno de credenciales) en comparación con el inicio de sesión tradicional mediante nombre de usuario y contraseña."
    },
    {
      term: "パスワード漏洩検知",
      description: "Forma de protección contra ataques mediante la cual Auth0 notifica al usuario cuando utiliza una combinación de nombre de usuario y contraseña que fue comprometida en una filtración de datos de un sitio web o aplicación de terceros."
    },
    {
      term: "パブリッククライアント",
      description:
        "Según el protocolo OAuth 2.0, los clientes (aplicaciones) pueden clasificarse como confidenciales o públicos en función de su capacidad para almacenar credenciales de forma segura (como un ID de cliente y un secreto). Los clientes públicos no pueden almacenar credenciales de forma segura, por lo que solo deben utilizar tipos de concesión que no requieran un secreto de cliente. Los tokens de ID emitidos a clientes públicos deben estar firmados asimétricamente mediante una clave privada (RS256) y verificados con la clave pública correspondiente a la clave privada utilizada para firmar el token."
    },
    {
      term: "フロー",
      description: "Proceso que puede ampliarse mediante Actions. Cada flujo está compuesto por uno o más disparadores y representa una canalización lógica por la que fluye la información en un punto específico del procedimiento de Auth0."
    },
    {
      term: "ベータ版",
      description:
        "Fase de lanzamiento de producto previa a la disponibilidad general (GA) en la que la funcionalidad o el comportamiento en cuestión se pone a disposición de los suscriptores para que puedan evaluarlo e incorporarlo mientras proporcionan retroalimentación final. Desde el punto de vista funcional, el código está completo, es estable y resulta útil en una variedad de escenarios, y se considera que cumple o casi cumple las expectativas de calidad de la versión GA. La versión beta puede estar restringida a un grupo selecto de suscriptores (privada) o estar disponible para todos los suscriptores (pública)."
    },
    {
      term: "ボット検知",
      description: "Forma de protección contra ataques en la que Auth0 habilita CAPTCHA durante el proceso de inicio de sesión para bloquear el tráfico sospechoso de bots."
    },
    {
      term: "メタデータ",
      description: "Información que el usuario puede actualizar, como preferencias y configuración de perfil. Los metadatos pueden añadirse al token de ID y almacenarse en el perfil del usuario."
    },
    {
      term: "ユーザーのブロック/ブロック解除",
      description:
        "Eliminación o restauración del acceso a un recurso solicitado. Hace referencia a las funcionalidades del conjunto de protección contra ataques de Auth0 (detección de contraseñas comprometidas, protección contra fuerza bruta y limitación de IP sospechosas). Cada servicio evalúa los patrones de inicio de sesión y registro, y bloquea las direcciones IP asociadas a actividad sospechosa."
    },
    {
      term: "ユニバーサルログイン",
      description:
        "Implementación del flujo de autenticación de Auth0, que constituye la funcionalidad principal del servidor de autorización. Cada vez que se necesita verificar la identidad de un usuario, la aplicación es redirigida al inicio de sesión universal y Auth0 realiza el procesamiento necesario para garantizar dicha identidad."
    },
    {
      term: "リソースサーバー",
      description: "Servidor que aloja recursos protegidos. El servidor de recursos acepta y responde a las solicitudes de recursos protegidos."
    },
    {
      term: "リソース所有者",
      description: "Entidad (como un usuario o una aplicación) que puede conceder acceso a un recurso protegido."
    },
    {
      term: "リフレッシュトークン",
      description:
        "Token especial que puede utilizarse para obtener un token de acceso actualizado. Resulta útil para renovar tokens de acceso próximos a vencer sin obligar al usuario a iniciar sesión nuevamente. Con un token de actualización, es posible solicitar un nuevo token de acceso en cualquier momento hasta que el token de actualización sea incluido en la lista de bloqueo."
    },
    {
      term: "リフレッシュトークンのローテーション",
      description:
        "Estrategia que consiste en reemplazar los tokens de actualización con frecuencia para minimizar las vulnerabilidades. Con la rotación del token de actualización, cada vez que una aplicación intercambia un token de actualización para obtener un nuevo token de acceso, Auth0 también devuelve un nuevo token de actualización."
    },
    {
      term: "ローカリゼーション",
      description: "Funcionalidad que permite renderizar la nueva experiencia de inicio de sesión universal en los idiomas compatibles."
    },
    {
      term: "ロール",
      description: "Aspecto de la identidad del usuario que se le asigna para indicar el nivel de acceso que necesita en el sistema. Un rol es esencialmente un conjunto de permisos."
    },
    {
      term: "一般提供",
      description:
        "Fase de lanzamiento de producto en la que la funcionalidad o el comportamiento en cuestión está completamente operativo y disponible para su uso en producción por parte de todos los suscriptores (sujeto a restricciones según el nivel de precios). Cuando un nuevo lanzamiento reemplaza una funcionalidad existente, Auth0 notifica a los clientes y ofrece un período de compatibilidad con versiones anteriores conforme a nuestra política de obsolescencia, a fin de garantizar tiempo suficiente para adoptar el nuevo lanzamiento."
    },
    {
      term: "不審なIPのスロットリング",
      description: "Forma de protección contra ataques que protege al tenant de inicios de sesión sospechosos provenientes de una única dirección IP dirigidos a un gran número de cuentas."
    },
    {
      term: "不正者",
      description:
        "También denominado actor de amenazas. Entidad (individuo o grupo) que representa una amenaza para un negocio o entorno con intención de causar daño. Los perjuicios pueden incluir daños físicos y cibernéticos, que van desde la intrusión en centros de datos hasta el acceso no autorizado a sistemas mediante credenciales robadas."
    },
    {
      term: "信頼",
      description: "Cuando un recurso acepta como válido lo que un proveedor de identidad o una autoridad de certificación afirma sobre un usuario, se dice que ese recurso confía en dicho proveedor de identidad o autoridad de certificación."
    },
    {
      term: "境界",
      description:
        "Conjunto de límites que rodea un directorio, todos sus usuarios y todas las aplicaciones que lo utilizan. En algunas implementaciones, este perímetro hace referencia a una ubicación física; en otras, puede referirse a un conjunto de redes o dispositivos conectados a través de una VPN."
    },
    {
      term: "多要素認証（MFA）",
      description:
        "Proceso de autenticación que considera múltiples factores. En Auth0, el primer factor suele ser el intercambio estándar de nombre de usuario y contraseña, mientras que el segundo puede ser un código o enlace enviado por correo electrónico o SMS, una contraseña de un solo uso generada por una aplicación como Authy o Google Authenticator, o una notificación push a través de una aplicación móvil como Guardian o Duo. El uso de múltiples factores permite mantener la seguridad de la cuenta incluso si alguno de ellos cae en manos de otra persona, ya sea porque la contraseña fue comprometida o el teléfono fue robado."
    },
    {
      term: "廃止",
      description:
        "Fase de lanzamiento de producto que indica que la funcionalidad o el comportamiento en cuestión no admite su uso por parte de nuevos suscriptores, no recibe mejoras activas y solo cuenta con mantenimiento mínimo. Los tenants que utilizaban dicha funcionalidad o comportamiento en el momento de la obsolescencia seguirán teniendo acceso."
    },
    {
      term: "Conexión",
      description: "La relación entre Auth0 y la fuente de usuarios de una aplicación. Algunos ejemplos son los proveedores de identidad (como Google o Active Directory), los métodos de autenticación sin contraseña y las bases de datos de usuarios."
    },
    {
      term: "Protección contra ataques",
      description: "Funcionalidades que ofrece Auth0 para detectar y mitigar ataques, como la protección contra fuerza bruta, la limitación de IP sospechosas, la detección de contraseñas comprometidas, la detección de bots y Adaptive Multi-factor Authentication."
    },
    {
      term: "Acceso anticipado",
      description:
        "Fase de lanzamiento de producto en la que la funcionalidad o el comportamiento en cuestión se pone a disposición de un número limitado de suscriptores o socios de desarrollo de clientes (CDP) para que puedan realizar pruebas y proporcionar retroalimentación sobre las funcionalidades futuras. En esta fase, es posible que la funcionalidad no esté completamente terminada, pero sí puede validarse."
    },
    {
      term: "Credenciales sin procesar",
      description: "Secreto compartido o conjunto de información acordado entre el usuario y el recurso que permite a este último verificar la identidad del usuario."
    },
    {
      term: "Cliente confidencial",
      description:
        "Según el protocolo OAuth 2.0, los clientes (aplicaciones) pueden clasificarse como confidenciales o públicos en función de su capacidad para mantener las credenciales (como el ID de cliente y el secreto de cliente) de forma segura. Los clientes confidenciales pueden conservar las credenciales de manera segura sin exponerlas a partes no autorizadas, lo que requiere un servidor backend de confianza. Estos clientes pueden utilizar tipos de concesión que exigen autenticarse con el ID de cliente y el secreto al llamar al endpoint de token, y pueden solicitar que se emitan tokens firmados de forma simétrica o asimétrica."
    },
    {
      term: "Dispositivo de consumo",
      description: "Dispositivo que ayuda al usuario a utilizar un servicio en el flujo de autenticación por canal secundario iniciada por el cliente."
    },
    {
      term: "Confused deputy",
      description: "Situación en la que un atacante engaña a un cliente o servicio para que ejecute una acción."
    },
    {
      term: "Cambio disruptivo",
      description: "Un cambio en la plataforma Auth0 que, según el conocimiento de Auth0, interrumpe la interoperabilidad entre la plataforma Auth0 y las aplicaciones de los clientes."
    },
    {
      term: "Migración",
      description: "El proceso mediante el cual un cliente deja de utilizar una funcionalidad o comportamiento determinado. La migración debe realizarse durante la fase de obsolescencia del lanzamiento del producto."
    },
    {
      term: "Protección contra fuerza bruta",
      description: "Modalidad de protección contra ataques que defiende frente a ataques de fuerza bruta originados desde una única dirección IP y dirigidos a una única cuenta de usuario."
    },
    {
      term: "Algoritmo de firma",
      description: "Algoritmo de hash utilizado para firmar digitalmente un token y evitar que sea manipulado por partes no autorizadas."
    },
    {
      term: "Fase de lanzamiento de producto",
      description:
        "Fases que describen cómo Auth0 planifica, lanza y retira las funcionalidades del producto. No todas las funcionalidades del producto pasan por todas las fases de lanzamiento, y la duración de cada fase varía según el alcance e impacto de la funcionalidad."
    },
    {
      term: "Parte que confía",
      description: "Entidad (como un servicio o una aplicación) que depende de un proveedor de identidad externo para autenticar a los usuarios."
    },
    {
      term: "Código de autorización",
      description:
        "Cadena aleatoria generada por el servidor de autorización y devuelta a la aplicación como parte de la respuesta de autorización. El código de autorización tiene una vida útil relativamente corta y se intercambia por un token de acceso en el endpoint de token al utilizar el flujo de código de autorización (con o sin Proof Key for Code Exchange [PKCE])."
    },
    {
      term: "Servidor de autorización",
      description:
        "Servidor centralizado utilizado para definir los límites de acceso de los usuarios. Por ejemplo, un servidor de autorización puede controlar los datos, las tareas y las funcionalidades a las que tiene acceso un usuario. El servidor de autorización no autentica a los usuarios; verificar la identidad del usuario es responsabilidad del servidor de autenticación."
    },
    {
      term: "Flujo de autorización",
      description:
        "Otro nombre para las concesiones de autorización descritas en OAuth 2.0. Un flujo de autorización es el flujo de trabajo que utiliza un recurso (aplicación o API) para otorgar acceso a quien lo solicita. Según el tipo de tecnología (por ejemplo, si la aplicación puede almacenar un secreto de cliente) y el tipo de solicitante, el propietario del recurso puede utilizar el flujo de código de autorización, Proof of Key Code Exchange (PKCE), Resource Owner Password Credential (ROPG), el flujo implícito o las credenciales de cliente."
    },
    {
      term: "Servidor de autenticación",
      description:
        "Servidor que confirma o rechaza la identidad de un usuario. El servidor de autenticación no restringe las acciones ni los recursos disponibles para el usuario (aunque puede proporcionar contexto con ese fin)."
    },
    {
      term: "Dispositivo de autenticación",
      description: "Dentro del flujo de autenticación por canal secundario iniciada por el cliente."
    }
  ]

  // All A-Z letters + dynamically extracted unique Japanese characters
  const ENGLISH_LETTERS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  const uniqueJapaneseChars = [
    ...new Set(
      GLOSSARY.map((item) => item.term[0] || "")
        .filter((char) => !/[A-Z]/i.test(char))
        .map((char) => char.toUpperCase())
    )
  ].sort((a, b) => a.localeCompare(b, "ja"))
  const A_TO_Z = [...ENGLISH_LETTERS, ...uniqueJapaneseChars]

  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term))) : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            id="search-input-control"
            type="text"
            placeholder="Buscar por nombre"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* A–Z index */}
      <nav className="mb-8 flex flex-wrap gap-3">
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${enabled ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white" : "text-gray-400 dark:text-gray-600 cursor-not-allowed"}`}
              aria-label={`Ir a ${letter}`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groups */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className="mb-10">
              <div className="flex items-end gap-1">
                <h2 id={letter} ref={(el) => (letterRefs.current[letter] = el)} className="text-3xl font-semibold glossary_h2">
                  {letter}
                </h2>
                <div className="flex-1 border-b-2 border-[#3F59E4]" />
              </div>

              <ul className="mt-6 space-y-6 glossary_list">
                {items.map((it) => (
                  <li key={it.term} className="scroll-mt-24">
                    <h3 id={norm(it.term)} className="text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3">
                      {it.term}
                    </h3>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">{highlight(it.description, term)}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && <p className="text-gray-500 dark:text-gray-400">No hay resultados para "{term}". Intenta con un término diferente.</p>}
      </section>
    </div>
  )
}