# 🚀 NestJS + Prisma + Supabase (Boilerplate Pro)

Ce projet est un Starter Kit (Boilerplate) moderne et robuste pour le développement d'APIs REST performantes. Il combine la puissance de **NestJS**, la flexibilité de **Prisma ORM** et la scalabilité de **Supabase**.

---

## 🌐 Déploiement & Documentation

Le projet est déployé en ligne et prêt à être testé.

*   **API URL :** [https://crud-nestjs-supabase.onrender.com/](https://crud-nestjs-supabase.onrender.com/)
*   **Documentation Swagger :** [https://crud-nestjs-supabase.onrender.com/api](https://crud-nestjs-supabase.onrender.com/api) 👈 *Testez toutes les routes directement ici !*

---

## 📖 Documentation API (Swagger)

L'API utilise **Swagger** (OpenAPI) pour fournir une interface interactive permettant de tester toutes les routes sans outils tiers comme Postman.

### Accès
- **En ligne :** `/api` après l'URL de déploiement.
- **En local :** `http://localhost:3001/api`

### Fonctionnalités Swagger
- **Visualisation :** Liste complète de toutes les routes (Auth, Joueurs, Equipes, Positions).
- **Test direct :** Bouton "Try it out" pour envoyer des requêtes réelles.
- **Validation :** Affiche les modèles de données (Schemas) attendus pour les requêtes POST/PUT.

---

## 🛠️ Stack Technique

*   **Framework :** [NestJS](https://nestjs.com/) (Architecture modulaire, TypeScript)
*   **ORM :** [Prisma](https://www.prisma.io/) (Gestion de schéma, migrations, typage automatique)
*   **Base de Données :** [Supabase](https://supabase.com/) (PostgreSQL managé)
*   **Authentification :** 
    *   [Passport.js](https://www.passportjs.org/) & [JWT](https://jwt.io/)
    *   Hashage des mots de passe avec **Bcrypt**
*   **Validation :** `class-validator` & `class-transformer`

---

## ✨ Fonctionnalités Clés

*   **Système d'Authentification Complet :** Inscription, Connexion et récupération du profil sécurisée.
*   **CRUD complets :** Modules pour la gestion des **Équipes**, des **Joueurs** et des **Positions**.
*   **Connexion Optimisée :** Configuration spéciale pour Supabase utilisant le **Connection Pooler** (port 6543) avec `pgbouncer`.
*   **Validation Globale :** Protection automatique des entrées API grâce aux Pipes de validation.

---

## ⚙️ Installation et Configuration Locale

### 1. Cloner le projet et installer les dépendances
```bash
npm install
```

### 2. Configurer les variables d'environnement
Créez un fichier `.env` à la racine :
```env
DATABASE_URL="postgresql://postgres.[ID_PROJET]:[PASSWORD]@aws-1-eu-west-3.pooler.supabase.com:6543/postgres?pgbouncer=true"
JWT_SECRET="votre_cle_secrete_ultra_securisee"
```

### 3. Initialiser Prisma
```bash
npx prisma generate
```

### 4. Lancer l'application
```bash
npm run start:dev
```

---

## 📂 Organisation du Projet
*   `src/auth` : Authentification (JWT, Strategies, DTOs).
*   `src/equipes`, `src/joueurs`, `src/positions` : Modules métier.
*   `src/prisma.service.ts` : Service de connexion centralisé.
*   `prisma/schema.prisma` : Modèles de données.

---

## 📜 Licence
Projet libre d'utilisation. Développé pour être une base solide pour tout nouveau projet NestJS.
