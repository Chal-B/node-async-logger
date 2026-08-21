<div align="center">

# Serveur de Journalisation Asynchrone

**Système de journalisation (logging) personnalisé avec le module fs de Node.js**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Akieni Academy](https://img.shields.io/badge/Akieni-Academy-2563eb?style=flat-square)](https://akieni.com)

</div>

---

## À propos

Ce projet met en place un serveur équipé d'un **middleware de journalisation asynchrone**. Au lieu d'utiliser simplement `console.log`, chaque requête entrante (méthode, URL, date) est écrite de manière non-bloquante dans un fichier `log.txt` en utilisant l'API de promesses du module natif `node:fs/promises`.

> Node.js · Middleware · Promesses / Asynchrone · Système de fichiers (fs)

## Lancer

Installez d'abord les dépendances :

```bash
npm install
```

Ensuite, démarrez le serveur :

```bash
npm start
```
*(ou `node server.js`)*

Le serveur sera accessible sur `http://127.0.0.1:3000`.

## Structure

```text
Semaine11_Akieni/
├── middleware/
│   └── logger.js         ← Middleware de journalisation asynchrone
├── server.js             ← Point d'entrée du serveur (routes principales)
├── log.txt               ← Fichier généré contenant l'historique des requêtes
├── package.json          ← Configuration et dépendances du projet
└── README.md             ← Ce fichier
```

## Compétences Démontrées

| Compétence | Où la voir |
|---|---|
| Création de serveur | `server.js` |
| Création et utilisation de Middleware | `middleware/logger.js` et `app.use()` dans `server.js` |
| Manipulation du système de fichiers | Import de `node:fs/promises` et utilisation de `appendFile` |
| Programmation asynchrone (non-bloquante) | Utilisation de promesses pour ne pas bloquer les requêtes entrantes |
| Formatage de données | Génération de la date ISO et formatage de la chaîne de log |
| Gestion des chemins de fichiers | `path.join(process.cwd(), "log.txt")` |

## Les Routes Disponibles

### 1. `/` (Accueil)

| | |
|---|---|
| Méthode | `GET` |
| Description | Route principale du serveur. |
| Réponse | JSON avec un message de bienvenue. |

### 2. `/sante`

| | |
|---|---|
| Méthode | `GET` |
| Description | Route pour vérifier le bon fonctionnement du serveur (Healthcheck). |
| Réponse | `{"ok": true}` |

### 3. `/info`

| | |
|---|---|
| Méthode | `GET` |
| Description | Donne des informations sur le projet et ses consignes. |
| Réponse | JSON contenant le nom du projet et les consignes. |

## Exemple de sortie (`log.txt`)

Chaque fois que vous visitez une route du serveur, une ligne est ajoutée au fichier `log.txt` sous ce format :
```text
2023-10-25T14:30:00.000Z GET /
2023-10-25T14:30:15.000Z GET /sante
2023-10-25T14:31:00.000Z GET /info
```

## Contact

**MALONGA Saint Chalbhery** — [GitHub @Chal-B](https://github.com/Chal-B) — [LinkedIn](https://www.linkedin.com/in/saint-chalbhery-malonga-2784253b2) — saintmlg@icloud.com
