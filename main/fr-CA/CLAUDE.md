<div id="claudemd">
  # CLAUDE.md
</div>

Ce fichier fournit des indications à Claude Code (claude.ai/code) pour travailler avec le code de ce dépôt.

<div id="overview">
  ## Vue d’ensemble
</div>

Il s’agit du dépôt de documentation d’Auth0, une plateforme de documentation basée sur Mintlify, déployée à l’adresse https://auth0.com/docs. Il contient 4 305 fichiers MDX répartis dans plusieurs sections de documentation et prend en charge 3 langues (anglais, français canadien et japonais).

<div id="development-commands">
  ## Commandes de développement
</div>

<div id="local-development">
  ### Développement local
</div>

```bash
# Installer le CLI Mintlify (nécessite Node.js v20)
npm install mint -g

# Démarrer le serveur de développement depuis le répertoire /main
mint dev
# Aperçu sur localhost:3000
```

<div id="repository-structure">
  ## Structure du dépôt
</div>

```
/main/
├── docs.json                # Configuration Mintlify (24 200 lignes)
│                           # Définit la navigation, le référencement, les redirections et le style
├── docs/                   # Contenu principal de la documentation (4 305 fichiers MDX)
│   ├── get-started/        # Guides de démarrage
│   ├── authenticate/       # Documentation sur l'authentification
│   ├── manage-users/       # Gestion des utilisateurs
│   ├── customize/          # Personnalisation (Actions, extensions, etc.)
│   ├── secure/             # Documentation sur la sécurité et les jetons
│   ├── deploy-monitor/     # Déploiement et surveillance
│   ├── libraries/          # Documentation des SDK
│   ├── quickstart/         # Quickstarts propres à chaque plateforme
│   ├── troubleshoot/       # Guides de dépannage
│   ├── fr-ca/              # Traductions en français (Canada) (miroir complet)
│   ├── ja-jp/              # Traductions en japonais (miroir complet)
│   └── [assets]/           # css/, polices/, images/, logo/, médias/
├── snippets/               # Composants React et contenu réutilisables
│   ├── *.jsx               # Composants React (AuthCodeBlock, etc.)
│   ├── *.mdx               # Extraits de contenu MDX réutilisables
│   └── quickstart/         # Exemples de code propres à chaque plateforme et langage
│       ├── native/         # iOS, Android, Flutter, React Native, etc.
│       ├── spa/            # React, Vue, Angular, Vanilla JS
│       ├── webapp/         # Node.js, ASP.NET, Python, Java, etc.
│       └── backend/        # Exemples d'authentification d'API
└── ui/                     # Fichiers de la bibliothèque d'interface (lots CSS et JS)
```

<div id="mdx-file-structure">
  ## Structure du fichier MDX
</div>

Tous les fichiers de documentation suivent cette structure :

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
  ### Conventions importantes
</div>

1. **Frontmatter** : Tous les fichiers MDX doivent avoir un frontmatter YAML complet
2. **Exemples de code** : Exportez le code sous forme de constantes en haut du fichier (après les imports, avant le contenu)
3. **Imports** : Composants personnalisés importés du répertoire `/snippets/`
4. **Permaliens** : Utilisés pour des URL stables et des redirections

<div id="custom-components">
  ## Composants personnalisés
</div>

Importez et utilisez ces composants React à partir de `/snippets/` :

* **`<AuthCodeBlock>`** : Blocs de code avec substitution de variables (remplace dynamiquement les marqueurs)
  ```mdx
  export const code = `const domain = "{yourDomain}";`;
  <AuthCodeBlock children={code} language="javascript" />
  ```

* **`<AuthCodeGroup>`** : Exemples de code regroupés avec des onglets de langage ou de plateforme

* **`<Card>`** : Cartes de navigation menant à d’autres sections
  ```mdx
  <Card title="Titre" href="/docs/path">Description</Card>
  ```

* **`<Tooltip>`** : Info-bulles de glossaire intégrées au texte
  ```mdx
  <Tooltip tip="Explication" cta="Voir le glossaire" href="/docs/glossary?term=Term">Texte</Tooltip>
  ```

* Composants Mintlify standard : `<Tabs>`, `<Tab>`, `<Frame>`, `<Callout>`, etc.

<div id="navigation-configuration">
  ## Configuration de la navigation
</div>

Le fichier `docs.json` à la racine définit toute la structure du site :

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
  ### Ajouter ou supprimer des pages
</div>

1. Modifiez `docs.json` pour mettre à jour la structure de navigation
2. Ajoutez ou supprimez le fichier MDX correspondant dans `docs/`
3. Testez localement avec `mint dev`

<div id="redirects">
  ### Redirections
</div>

`docs.json` comprend un tableau `redirects` pour gérer les changements d’URL :

```json
"redirects": [
  {"source": "/old-path", "destination": "/new-path"}
]
```

<div id="content-organization">
  ## Structure du contenu
</div>

<div id="main-documentation-sections">
  ### Principales sections de la documentation
</div>

1. **Pour commencer** - Principes fondamentaux de l’identité, aperçu d’Auth0, architecture
2. **Authentification** - Connexion, SSO, authentification sans mot de passe, fournisseurs d’identité, protocoles
3. **Gérer les utilisateurs** - Comptes d’utilisateurs, organisations, sessions, métadonnées
4. **Personnalisation** - Actions, domaines personnalisés, modèles de courriel, événements, extensions, Forms, Hooks
5. **Sécurité** - Jetons d’accès, jetons d’actualisation, jetons d’identité, limitation du nombre de requêtes
6. **Déployer et surveiller** - Deploy CLI, journaux, surveillance
7. **Bibliothèques** - Documentation des SDK (Auth0.js, SDK SPA, SDK mobiles)
8. **Quickstart** - Guides d’implémentation propres à la plateforme

<div id="quickstart-structure">
  ### Structure des Quickstarts
</div>

Les Quickstarts sont organisés par type d’application :

* **native/**: iOS, Android, React Native, Flutter, Ionic, MAUI
* **spa/**: React, Vue, Angular, Vanilla JS
* **webapp/**: Node.js, ASP.NET, PHP, Python, Java, Go, Ruby
* **backend/**: authentification des API

Les exemples de code des Quickstarts se trouvent dans `/snippets/quickstart/{type}/{platform}/`

<div id="localization">
  ### Localisation
</div>

La documentation complète est offerte en trois langues :

* **`docs/`** - anglais (principal)
* **`docs/fr-ca/`** - français (Canada)
* **`docs/ja-jp/`** - japonais

Lorsque vous modifiez le contenu en anglais, vérifiez si les traductions doivent aussi être mises à jour. La structure des répertoires est identique d’une langue à l’autre.

<div id="contribution-workflow">
  ## Processus de contribution
</div>

<div id="branch-naming-convention">
  ### Convention de nommage des branches
</div>

* **`fix/`** - Corrections de bogues, fautes de frappe, liens non fonctionnels
* **`feat/`** - Nouvelles fonctionnalités ou sections de documentation
* **`refactor/`** - Mises à jour sans ajout de fonctionnalité, réorganisation

Exemple : `fix/broken-link-in-quickstart` ou `feat/new-mfa-guide`

<div id="making-changes">
  ### Apporter des modifications
</div>

1. **Communiquez avec l’équipe de la documentation produit d’Auth0** avant d’ouvrir des PR
2. Créez un fork du dépôt et une branche de fonctionnalité avec le préfixe approprié
3. Modifiez les fichiers MDX en suivant les conventions ci-dessus
4. Testez les modifications localement : `mint dev` et prévisualisez le résultat à `localhost:3000`
5. Effectuez un commit avec des messages clairs expliquant ce qui a changé et pourquoi
6. Poussez les modifications vers le dépôt forké sur GitHub
7. Créez une pull request à l’aide du template rempli
8. Demandez une révision à l’équipe de la documentation d’Auth0

<div id="common-patterns-and-pitfalls">
  ## Modèles courants et pièges à éviter
</div>

<div id="code-example-pattern">
  ### Modèle d’exemple de code
</div>

**Correct :**

```mdx
---
title: "Example"
---
import {AuthCodeBlock} from "/snippets/AuthCodeBlock.jsx";

export const codeExample = `console.log("hello");`;

# Content

<AuthCodeBlock children={codeExample} language="javascript" />
```

**Incorrect :**

```mdx
# Content

export const codeExample = `console.log("hello");`; // ❌ Trop tard !

<AuthCodeBlock children={codeExample} language="javascript" />
```

Les exports de code doivent être placés en haut du fichier, après les imports, et non intégrés au contenu.

<div id="navigation-updates">
  ### Mises à jour de la navigation
</div>

Lorsque vous créez de nouvelles pages, n’oubliez pas de :

1. Créer le fichier MDX dans le sous-répertoire approprié de `docs/`
2. Ajouter le chemin d’accès de la page à la navigation dans `docs.json`
3. Les deux étapes sont nécessaires pour que la page apparaisse dans la navigation

<div id="variable-substitution">
  ### Remplacement de variables
</div>

`AuthCodeBlock` prend en charge le remplacement dynamique de variables. Des variables comme `{yourDomain}`, `{clientId}`, etc. sont automatiquement remplacées selon le contexte de l’utilisateur. Utilisez ce modèle pour les valeurs propres à l’utilisateur dans les exemples de code.

<div id="asset-references">
  ### Références aux ressources
</div>

* Images : `/docs/images/...` ou utilisez des URL de CDN
* Polices : configurées dans `docs.json` avec des liens de CDN
* CSS personnalisé : `/docs/css/` ou `/snippets/css/`

<div id="glossary-links">
  ### Liens vers les termes du glossaire
</div>

Utilisez les composants Tooltip pour renvoyer aux termes du glossaire plutôt que de simples liens, pour une meilleure expérience utilisateur :

```mdx
<Tooltip tip="Definition" href="/docs/glossary?term=TermName">Term</Tooltip>
```

<div id="additional-resources">
  ## Ressources supplémentaires
</div>

* **Documentation de Mintlify** : https://mintlify.com/docs
* **Site Auth0 Docs** : https://auth0.com/docs
* **Suivi des problèmes** : https://github.com/auth0/docs-v2/issues
* **Signalement de vulnérabilités** : https://auth0.com/whitehat (n’utilisez pas le système public de suivi des problèmes)
* **Licence** : licence MIT