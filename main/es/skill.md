---
name: Auth0
description: "Úsalo al agregar autenticación a cualquier aplicación: detecta tu framework, configura Auth0 y proporciona guías de integración listas para usar en producción para 25 frameworks y plataformas."
license: Apache-2.0
metadata:
  author: Auth0 <support@auth0.com>
  version: "1.1.0"
  repository: https://github.com/auth0/agent-skills
---

<div id="auth0-agent-skills">
  # Auth0 Agent Skills
</div>

Auth0 ofrece Agent Skills de IA para implementar la autenticación en cualquier framework. Cada Skill incluye prácticas recomendadas, patrones de código y orientación paso a paso probados con los SDKs de Auth0 más recientes.

<div id="getting-started">
  ## Primeros pasos
</div>

Empieza aquí: esta Skill detecta tu framework y te lleva a la guía de integración adecuada:

* **auth0-quickstart** — Detección del framework y configuración de Auth0

<div id="frontend-frameworks">
  ## Frameworks de frontend
</div>

* **auth0-react** — aplicaciones SPA de React (Vite, CRA) con `@auth0/auth0-react`
* **auth0-vue** — aplicaciones de Vue.js 3 con `@auth0/auth0-vue`
* **auth0-angular** — Angular 13+ con `@auth0/auth0-angular`
* **auth0-spa-js** — JavaScript puro, Svelte, SolidJS o cualquier SPA con `@auth0/auth0-spa-js`

<div id="full-stack-frameworks">
  ## Frameworks full-stack
</div>

* **auth0-nextjs** — Next.js App Router y Pages Router con `@auth0/nextjs-auth0`
* **auth0-nuxt** — aplicaciones Nuxt 3/4 con `@auth0/auth0-nuxt`

<div id="backend-frameworks">
  ## Frameworks de backend
</div>

* **auth0-express** — aplicaciones web de Express.js con `express-openid-connect`
* **auth0-flask** — aplicaciones web de Flask con `auth0-server-python`
* **auth0-fastify** — aplicaciones web de Fastify con `@auth0/auth0-fastify`
* **auth0-java-mvc-common** — aplicaciones Java Servlet con `mvc-auth-commons`

<div id="api-protection">
  ## Protección de API
</div>

* **express-oauth2-jwt-bearer** — Validación de JWT para API de Node.js/Express con `express-oauth2-jwt-bearer`
* **auth0-fastify-api** — Validación de JWT para API de Fastify con `@auth0/auth0-fastify`
* **auth0-fastapi-api** — Validación de JWT para API de FastAPI en Python con `auth0-fastapi-api`
* **auth0-springboot-api** — Validación de JWT para API de Spring Boot con `auth0-springboot-api`
* **auth0-aspnetcore-api** — Validación de JWT para API de ASP.NET Core con `Auth0.AspNetCore.Authentication`
* **go-jwt-middleware** — Validación de JWT para API de Go con `go-jwt-middleware`

<div id="mobile">
  ## Móvil
</div>

* **auth0-react-native** — CLI de React Native (workflow bare) con `react-native-auth0`
* **auth0-expo** — workflow administrado de Expo con `react-native-auth0`
* **auth0-android** — Android (Kotlin/Java) con `Auth0.Android`
* **auth0-swift** — iOS, macOS, tvOS, watchOS, visionOS con `Auth0.swift`

<div id="developer-tools">
  ## Herramientas para desarrolladores
</div>

* **auth0-cli** — Auth0 CLI para la gestión del tenant, la configuración de aplicaciones y la automatización de CI/CD

<div id="advanced-features">
  ## Funciones avanzadas
</div>

* **auth0-mfa** — autenticación multifactor (TOTP, SMS, Email, Push, WebAuthn)
* **auth0-migration** — migración desde Firebase, Cognito, Supabase, Clerk o autenticación personalizada
* **acul-screen-generator** — pantallas personalizadas de Universal Login con `@auth0/auth0-acul-react` o `@auth0/auth0-acul-js`

<div id="installation">
  ## Instalación
</div>

```bash
npx skills add auth0/agent-skills
```

<div id="resources">
  ## Recursos
</div>

* **Documentación completa**: https://auth0.com/docs
* **Documentación optimizada para LLM**: https://auth0.com/docs/llms.txt
* **Repositorio de código fuente**: https://github.com/auth0/agent-skills