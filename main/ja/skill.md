---
name: Auth0
description: あらゆるアプリケーションに認証を追加するときに使用します。フレームワークを検出し、Auth0 を設定して、25 のフレームワークとプラットフォーム向けに本番環境対応の連携ガイドを提供します。
license: Apache-2.0
metadata:
  author: Auth0 <support@auth0.com>
  version: "1.1.0"
  repository: https://github.com/auth0/agent-skills
---

<div id="auth0-agent-skills">
  # Auth0 Agent Skills
</div>

Auth0 は、あらゆるフレームワークで認証を実装するための AIエージェント向けスキルを提供しています。各スキルには、最新の Auth0 SDK で検証済みのベストプラクティス、コードパターン、手順に沿ったガイダンスが含まれています。

<div id="getting-started">
  ## はじめに
</div>

ここから始めましょう。このスキルはフレームワークを検出し、適切な連携ガイドへ案内します。

* **auth0-quickstart** — フレームワークの検出と Auth0 の設定

<div id="frontend-frameworks">
  ## フロントエンドフレームワーク
</div>

* **auth0-react** — `@auth0/auth0-react` を使用する React SPA (Vite、CRA) 
* **auth0-vue** — `@auth0/auth0-vue` を使用する Vue.js 3 のアプリケーション
* **auth0-angular** — `@auth0/auth0-angular` を使用する Angular 13 以降
* **auth0-spa-js** — Vanilla JS、Svelte、SolidJS、または任意の SPA で `@auth0/auth0-spa-js` を使用

<div id="full-stack-frameworks">
  ## フルスタックフレームワーク
</div>

* **auth0-nextjs** — `@auth0/nextjs-auth0` を使用する Next.js App Router および Pages Router
* **auth0-nuxt** — `@auth0/auth0-nuxt` を使用する Nuxt 3/4 アプリケーション

<div id="backend-frameworks">
  ## バックエンドフレームワーク
</div>

* **auth0-express** — `express-openid-connect` を使用する Express.js の Web アプリケーション
* **auth0-flask** — `auth0-server-python` を使用する Flask の Web アプリケーション
* **auth0-fastify** — `@auth0/auth0-fastify` を使用する Fastify の Web アプリケーション
* **auth0-java-mvc-common** — `mvc-auth-commons` を使用する Java Servlet アプリケーション

<div id="api-protection">
  ## API の保護
</div>

* **express-oauth2-jwt-bearer** — `express-oauth2-jwt-bearer` を使用した Node.js/Express API の JWT バリデーション
* **auth0-fastify-api** — `@auth0/auth0-fastify` を使用した Fastify API の JWT バリデーション
* **auth0-fastapi-api** — `auth0-fastapi-api` を使用した Python FastAPI API の JWT バリデーション
* **auth0-springboot-api** — `auth0-springboot-api` を使用した Spring Boot API の JWT バリデーション
* **auth0-aspnetcore-api** — `Auth0.AspNetCore.Authentication` を使用した ASP.NET Core API の JWT バリデーション
* **go-jwt-middleware** — `go-jwt-middleware` を使用した Go API の JWT バリデーション

<div id="mobile">
  ## モバイル
</div>

* **auth0-react-native** — `react-native-auth0` を使用する React Native CLI (ベアワークフロー) 
* **auth0-expo** — `react-native-auth0` を使用する Expo マネージドワークフロー
* **auth0-android** — `Auth0.Android` を使用する Android (Kotlin/Java) 
* **auth0-swift** — `Auth0.swift` を使用する iOS、macOS、tvOS、watchOS、visionOS

<div id="developer-tools">
  ## 開発者ツール
</div>

* **auth0-cli** — テナント管理、アプリ設定、CI/CD の自動化に使用する Auth0 CLI

<div id="advanced-features">
  ## 高度な機能
</div>

* **auth0-mfa** — 多要素認証 (TOTP, SMS, Email, プッシュ, WebAuthn)
* **auth0-migration** — Firebase、Cognito、Supabase、Clerk、またはカスタム認証からの移行
* **acul-screen-generator** — `@auth0/auth0-acul-react` または `@auth0/auth0-acul-js` を使用したカスタム Universal Login 画面

<div id="installation">
  ## インストール
</div>

```bash
npx skills add auth0/agent-skills
```

<div id="resources">
  ## リソース
</div>

* **詳細なドキュメント**: https://auth0.com/docs
* **LLM向けに最適化されたドキュメント**: https://auth0.com/docs/llms.txt
* **ソースリポジトリ**: https://github.com/auth0/agent-skills