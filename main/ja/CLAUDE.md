<div id="claudemd">
  # CLAUDE.md
</div>

このファイルは、このリポジトリ内のコードを扱う際に、Claude Code (claude.ai/code) 向けのガイドラインを示します。

<div id="overview">
  ## 概要
</div>

これは、https://auth0.com/docs で公開されている Mintlify ベースのドキュメントプラットフォーム、Auth0 Documentation のリポジトリです。複数のドキュメントセクションに整理された 4,305 個の MDX ファイルが含まれており、3 言語 (英語、カナダフランス語、日本語) に対応しています。

<div id="development-commands">
  ## 開発コマンド
</div>

<div id="local-development">
  ### ローカル開発
</div>

```bash
# Mintlify CLIをインストール（Node.js v20が必要）
npm install mint -g

# /mainディレクトリから開発サーバーを起動
mint dev
# localhost:3000でプレビュー
```

<div id="repository-structure">
  ## リポジトリの構成
</div>

```
/main/
├── docs.json                # Mintlify設定ファイル（24,200行）
│                           # ナビゲーション、SEO、リダイレクト、スタイリングを定義
├── docs/                   # メインドキュメントコンテンツ（4,305個のMDXファイル）
│   ├── get-started/        # スタートアップガイド
│   ├── authenticate/       # 認証ドキュメント
│   ├── manage-users/       # ユーザー管理
│   ├── customize/          # カスタマイズ（Actions、Extensionsなど）
│   ├── secure/             # セキュリティおよびトークンドキュメント
│   ├── deploy-monitor/     # デプロイとモニタリング
│   ├── libraries/          # SDKドキュメント
│   ├── quickstart/         # プラットフォーム別クイックスタート
│   ├── troubleshoot/       # トラブルシューティングガイド
│   ├── fr-ca/              # フランス語（カナダ）翻訳（完全ミラー）
│   ├── ja-jp/              # 日本語翻訳（完全ミラー）
│   └── [assets]/           # css/、fonts/、images/、logo/、media/
├── snippets/               # 再利用可能なReactコンポーネントとコンテンツ
│   ├── *.jsx               # Reactコンポーネント（AuthCodeBlockなど）
│   ├── *.mdx               # 再利用可能なMDXコンテンツスニペット
│   └── quickstart/         # プラットフォーム／言語別コード例
│       ├── native/         # iOS、Android、Flutter、React Nativeなど
│       ├── spa/            # React、Vue、Angular、Vanilla JS
│       ├── webapp/         # Node.js、ASP.NET、Python、Javaなど
│       └── backend/        # API認証のサンプル
└── ui/                     # UIライブラリファイル（CSSおよびJSバンドル）
```

<div id="mdx-file-structure">
  ## MDXファイルの構成
</div>

すべてのドキュメントファイルは、次の構成に従います。

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
  ### 主要な規則
</div>

1. **フロントマター**: すべてのMDXファイルには、完全なYAMLフロントマターが必要です
2. **コード例**: コード例は、ファイルの先頭で定数としてエクスポートします (importの後、コンテンツの前) 
3. **インポート**: カスタムコンポーネントは `/snippets/` ディレクトリからインポートします
4. **パーマリンク**: 安定したURLとリダイレクトに使用します

<div id="custom-components">
  ## カスタムコンポーネント
</div>

`/snippets/` から次の React コンポーネントをインポートして使用します。

* **`<AuthCodeBlock>`**: 変数置換に対応したコードブロック (プレースホルダーを動的に置き換えます) 
  ```mdx
  export const code = `const domain = "{yourDomain}";`;
  <AuthCodeBlock children={code} language="javascript" />
  ```

* **`<AuthCodeGroup>`**: 言語／プラットフォームのタブ付きでグループ化されたコード例

* **`<Card>`**: 他のセクションへのリンクに使うナビゲーションカード
  ```mdx
  <Card title="Title" href="/docs/path">Description</Card>
  ```

* **`<Tooltip>`**: インラインの用語集ツールチップ
  ```mdx
  <Tooltip tip="Explanation" cta="View Glossary" href="/docs/glossary?term=Term">Text</Tooltip>
  ```

* 標準の Mintlify コンポーネント: `<Tabs>`, `<Tab>`, `<Frame>`, `<Callout>` など。

<div id="navigation-configuration">
  ## ナビゲーション設定
</div>

ルートにある `docs.json` ファイルで、サイト全体の構成を定義します。

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
  ### ページを追加・削除するには
</div>

1. `docs.json` を編集してナビゲーション構成を更新します
2. 対応する MDX ファイルを `docs/` に追加または削除します
3. `mint dev` でローカル環境でテストします

<div id="redirects">
  ### リダイレクト
</div>

`docs.json` には、URL の変更用の `redirects` 配列が含まれています。

```json
"redirects": [
  {"source": "/old-path", "destination": "/new-path"}
]
```

<div id="content-organization">
  ## コンテンツの構成
</div>

<div id="main-documentation-sections">
  ### 主要なドキュメントセクション
</div>

1. **Getting Started** - アイデンティティの基礎、Auth0 の概要、アーキテクチャ
2. **Authenticate** - Login、SSO、パスワードレス、アイデンティティプロバイダー、プロトコル
3. **Manage Users** - ユーザーアカウント、組織、セッション、メタデータ
4. **Customize** - Actions、カスタムドメイン、メールテンプレート、イベント、拡張機能、フォーム、フック
5. **Secure** - アクセストークン、リフレッシュトークン、ID トークン、レート制限
6. **Deploy and Monitor** - Deploy CLI、ログ、モニタリング
7. **Libraries** - SDK ドキュメント (Auth0.js、SPA SDK、モバイル SDK) 
8. **Quickstart** - プラットフォーム別の実装ガイド

<div id="quickstart-structure">
  ### Quickstart の構成
</div>

Quickstart はアプリケーションの種類別に整理されています。

* **native/**: iOS, Android, React Native, Flutter, Ionic, MAUI
* **spa/**: React, Vue, Angular, Vanilla JS
* **webapp/**: Node.js, ASP.NET, PHP, Python, Java, Go, Ruby
* **backend/**: API 認証

Quickstart のコード例は `/snippets/quickstart/{type}/{platform}/` にあります

<div id="localization">
  ### ローカリゼーション
</div>

完全なドキュメントは、次の3言語でミラーされています。

* **`docs/`** - 英語 (主要) 
* **`docs/fr-ca/`** - フランス語 (カナダ) 
* **`docs/ja-jp/`** - 日本語

英語の内容を編集する際は、翻訳の更新が必要かどうかも確認してください。ディレクトリ構造は、どの言語でも同一です。

<div id="contribution-workflow">
  ## コントリビューションの流れ
</div>

<div id="branch-naming-convention">
  ### ブランチ命名規則
</div>

* **`fix/`** - バグ修正、誤字脱字、リンク切れ
* **`feat/`** - 新機能、または新しいドキュメントセクション
* **`refactor/`** - 機能追加以外の更新、再構成

例: `fix/broken-link-in-quickstart` または `feat/new-mfa-guide`

<div id="making-changes">
  ### 変更手順
</div>

1. PRを作成する前に、**Auth0 Product Documentationチームに連絡してください**
2. リポジトリをフォークし、適切なプレフィックスを付けた機能ブランチを作成します
3. 上記の規約に従ってMDXファイルを編集します
4. 変更をローカルでテストします: `mint dev` を実行し、`localhost:3000` でプレビューします
5. 何を変更したのか、またその理由が明確にわかるメッセージでコミットします
6. GitHub上のフォークしたリポジトリにプッシュします
7. 必要事項を記入したテンプレートを添えてpull requestを作成します
8. Auth0 Documentationチームにレビューを依頼します

<div id="common-patterns-and-pitfalls">
  ## よくあるパターンと落とし穴
</div>

<div id="code-example-pattern">
  ### コード例の書き方
</div>

**良い例:**

```mdx
---
title: "Example"
---
import {AuthCodeBlock} from "/snippets/AuthCodeBlock.jsx";

export const codeExample = `console.log("hello");`;

# Content

<AuthCodeBlock children={codeExample} language="javascript" />
```

**誤り:**

```mdx
# Content

export const codeExample = `console.log("hello");`; // ❌ 遅すぎます！

<AuthCodeBlock children={codeExample} language="javascript" />
```

コードのエクスポートは、コンテンツ内にインラインで記述するのではなく、importの後のファイル先頭に記述する必要があります。

<div id="navigation-updates">
  ### ナビゲーションの更新
</div>

新しいページを作成する際は、次の点を忘れないでください。

1. 適切な `docs/` サブディレクトリに MDX ファイルを作成する
2. `docs.json` のナビゲーションにページのパスを追加する
3. ページをナビゲーションに表示するには、両方の手順が必要です

<div id="variable-substitution">
  ### 変数の置換
</div>

`AuthCodeBlock` は動的な変数置換に対応しています。`{yourDomain}`、`{clientId}` などの変数は、ユーザーのコンテキストに応じて自動的に置き換えられます。コード例でユーザー固有の値を扱う場合は、このパターンを使用してください。

<div id="asset-references">
  ### アセットの参照先
</div>

* 画像: `/docs/images/...` または CDN の URL を使用
* フォント: `docs.json` で CDN リンクを設定
* カスタム CSS: `/docs/css/` または `/snippets/css/`

<div id="glossary-links">
  ### 用語集へのリンク
</div>

UX向上のため、用語集のタームへのリンクには、通常のリンクではなくTooltipコンポーネントを使用してください。

```mdx
<Tooltip tip="Definition" href="/docs/glossary?term=TermName">Term</Tooltip>
```

<div id="additional-resources">
  ## 参考情報
</div>

* **Mintlify Documentation**: https://mintlify.com/docs
* **Auth0 Docs Site**: https://auth0.com/docs
* **Issue Tracker**: https://github.com/auth0/docs-v2/issues
* **Security Disclosure**: https://auth0.com/whitehat  (公開のIssue Trackerは使用しないでください) 
* **License**: MIT License