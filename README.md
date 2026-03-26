# Backend Tifaouine 🌟

Ce projet est le backend de l'application **Tifaouine**, construit avec Node.js, Express et Sequelize (PostgreSQL).

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (v16 ou supérieur)
- [Docker & Docker Compose](https://www.docker.com/products/docker-desktop/)

## 🚀 Installation et Démarrage

### 1. Cloner le projet et installer les dépendances
```bash
npm install
```

### 2. Configuration de l'environnement (`.env`)
Créez un fichier `.env` à la racine (déjà inclus si vous travaillez sur le dossier partagé) avec le contenu suivant :
```env
PORT=5000
NODE_ENV=development

# Configuration de la base de données
DB_HOST=127.0.0.1
DB_PORT=5433
DB_USER=tifaouine_admin
DB_PASSWORD=tifaouine_pass
DB_NAME=tifaouine_db

# Sécurité & Services tiers
JWT_SECRET=votre_secret_ici
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

### 3. Lancer la base de données (PostgreSQL)
Nous utilisons Docker pour isoler la base de données.
> **Note** : Le port utilisé est le **5433** pour éviter les conflits si vous avez déjà PostgreSQL installé sur votre Windows.

```bash
docker compose up -d
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Le serveur sera disponible sur : [http://localhost:5000](http://localhost:5000)

## 📁 Structure du projet
- `src/config/` : Configuration (Base de données, Cloudinary, etc.)
- `src/models/` : Modèles Sequelize (Définition des tables)
- `src/controllers/` : Logique métier
- `src/routes/` : Points d'entrée de l'API
- `src/middlewares/` : Filtres (Auth, Upload, etc.)

## ⚠️ Notes importantes
- Si vous modifiez les identifiants dans le `.env`, pensez à les modifier également dans le fichier `docker-compose.yml`.
- Si la connexion échoue au premier lancement, essayez de réinitialiser le conteneur avec :
  `docker compose down -v; docker compose up -d`

# backend_tifaouine
ce projet consiste a la creation dun backend de website de l'association marocaine tifaouine 
