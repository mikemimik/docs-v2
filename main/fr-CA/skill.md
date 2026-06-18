---
name: Auth0
description: À utiliser pour ajouter l’authentification à n’importe quelle application — détecte votre framework, configure Auth0 et fournit des guides d’intégration prêts à être utilisés en production pour 25 frameworks et plateformes.
license: Apache-2.0
metadata:
  author: Auth0 <support@auth0.com>
  version: "1.1.0"
  repository: https://github.com/auth0/agent-skills
---

<div id="auth0-agent-skills">
  # Compétences d’agent Auth0
</div>

Auth0 offre des compétences d’agent pour agents d’IA afin d’implémenter l’authentification dans n’importe quel framework. Chaque compétence contient des pratiques exemplaires, des modèles de code et des directives étape par étape testés avec les plus récents SDK Auth0.

<div id="getting-started">
  ## Pour commencer
</div>

Commencez ici — cette compétence détecte votre framework et vous dirige vers le guide d’intégration approprié :

* **auth0-quickstart** — Détection du framework et configuration d’Auth0

<div id="frontend-frameworks">
  ## Frameworks front-end
</div>

* **auth0-react** — SPAs React (Vite, CRA) avec `@auth0/auth0-react`
* **auth0-vue** — applications Vue.js 3 avec `@auth0/auth0-vue`
* **auth0-angular** — Angular 13+ avec `@auth0/auth0-angular`
* **auth0-spa-js** — Vanilla JS, Svelte, SolidJS ou toute autre SPA avec `@auth0/auth0-spa-js`

<div id="full-stack-frameworks">
  ## Frameworks full stack
</div>

* **auth0-nextjs** — Next.js App Router et Pages Router avec `@auth0/nextjs-auth0`
* **auth0-nuxt** — applications Nuxt 3/4 avec `@auth0/auth0-nuxt`

<div id="backend-frameworks">
  ## Frameworks de backend
</div>

* **auth0-express** — applications web Express.js avec `express-openid-connect`
* **auth0-flask** — applications web Flask avec `auth0-server-python`
* **auth0-fastify** — applications web Fastify avec `@auth0/auth0-fastify`
* **auth0-java-mvc-common** — applications Java Servlet avec `mvc-auth-commons`

<div id="api-protection">
  ## Protection d’API
</div>

* **express-oauth2-jwt-bearer** — Validation des JWT pour l’API Node.js/Express avec `express-oauth2-jwt-bearer`
* **auth0-fastify-api** — Validation des JWT pour l’API Fastify avec `@auth0/auth0-fastify`
* **auth0-fastapi-api** — Validation des JWT pour l’API Python FastAPI avec `auth0-fastapi-api`
* **auth0-springboot-api** — Validation des JWT pour l’API Spring Boot avec `auth0-springboot-api`
* **auth0-aspnetcore-api** — Validation des JWT pour l’API ASP.NET Core avec `Auth0.AspNetCore.Authentication`
* **go-jwt-middleware** — Validation des JWT pour l’API Go avec `go-jwt-middleware`

<div id="mobile">
  ## Mobile
</div>

* **auth0-react-native** — React Native CLI (workflow bare) avec `react-native-auth0`
* **auth0-expo** — workflow géré d’Expo avec `react-native-auth0`
* **auth0-android** — Android (Kotlin/Java) avec `Auth0.Android`
* **auth0-swift** — iOS, macOS, tvOS, watchOS, visionOS avec `Auth0.swift`

<div id="developer-tools">
  ## Outils de développement
</div>

* **auth0-cli** — Auth0 CLI pour la gestion des tenants, la configuration d’applications et l’automatisation CI/CD

<div id="advanced-features">
  ## Fonctionnalités avancées
</div>

* **auth0-mfa** — Authentification multifacteur (TOTP, SMS, Email, Push, WebAuthn)
* **auth0-migration** — Migrer depuis Firebase, Cognito, Supabase, Clerk ou une authentification personnalisée
* **acul-screen-generator** — Écrans Universal Login personnalisés avec `@auth0/auth0-acul-react` ou `@auth0/auth0-acul-js`

<div id="installation">
  ## Installation
</div>

```bash
npx skills add auth0/agent-skills
```

<div id="resources">
  ## Ressources
</div>

* **Documentation complète** : https://auth0.com/docs
* **Documentation optimisée pour les LLM** : https://auth0.com/docs/llms.txt
* **Dépôt source** : https://github.com/auth0/agent-skills