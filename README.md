# CotiManager - Backend

CotiManager est une application de gestion de cotisations (tontines, épargnes mutuelles) développée avec **NestJS**. Elle permet de créer des groupes de cotisation, de gérer les membres, de suivre les paiements et inclut un système de synchronisation robuste pour un usage hors ligne.

## 🚀 Technologies utilisées

- **Framework** : [NestJS](https://nestjs.com/)
- **ORM** : [Prisma](https://www.prisma.io/)
- **Base de données** : PostgreSQL
- **Authentification** : JWT (JSON Web Tokens) & Passport
- **Documentation** : Swagger API

## ✨ Fonctionnalités clés

- **Gestion des Cotisations** : CRUD complet avec Soft Delete.
- **Invitation via Lien** : Génération de codes d'invitation uniques pour rejoindre une cotisation.
- **Suivi des Paiements** : Enregistrement et suivi par période pour chaque membre.
- **Synchronisation Offline** : Endpoint `/sync` incrémental basé sur `updatedAt` et `deletedAt`.
- **Accès Multi-Origines** : CORS configuré pour accepter toutes les origines.

## 🛠️ Installation et Démarrage

### 1. Cloner le projet
```bash
git clone <url-du-repo>
cd CotiManager-back
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement
Créez un fichier `.env` à la racine et configurez les variables suivantes :
```env
DATABASE_URL="postgresql://user:password@localhost:5432/cotimanager"
JWT_SECRET="votre_secret_tres_long_et_complexe"
```

### 4. Initialiser la base de données
S'assurer que PostgreSQL est lancé, puis synchroniser le schéma :
```bash
npx prisma db push
npx prisma generate
```

### 5. Lancer l'application
```bash
# Mode développement
npm run start:dev
```
L'API sera accessible sur `http://localhost:3001` (ou le port configuré).

## 📖 API Documentation

La documentation Swagger est disponible automatiquement à l'adresse suivante une fois le serveur lancé :
`http://localhost:3001/api`

### Aperçu des endpoints principaux :

#### Authentification (`/auth`)
- `POST /auth/register` : Créer un compte.
- `POST /auth/login` : Se connecter et recevoir un token JWT.

#### Cotisations (`/cotisation`)
- `GET /cotisation` : Liste les cotisations de l'utilisateur (propriétaire ou membre).
- `POST /cotisation` : Créer une nouvelle cotisation.
- `POST /cotisation/:id/invite` : Générer un code d'invitation.
- `POST /cotisation/join/:inviteCode` : Rejoindre une cotisation via un code.

#### Membres & Paiements
- `GET /cotisation/membres/:id` : Voir les membres d'une cotisation.
- `POST /cotisation/paiements/:id` : Enregistrer un paiement.
- `DELETE /cotisation/paiements/:paiementId` : Supprimer un paiement (Soft Delete).

#### Synchronisation (`/sync`)
- `GET /sync?since=2026-01-01T10:00:00Z` : Récupère uniquement les données modifiées ou supprimées depuis une date précise.

## 🔄 Système de Synchronisation

L'architecture est optimisée pour les applications mobiles/web offline :
- **Soft Delete** : Les données ne sont jamais supprimées physiquement mais marquées via `deletedAt`.
- **Incrémental** : Le client stocke la date de sa dernière synchro et ne demande que le delta.
- **Audit** : `updatedAt` automatique sur chaque table.
