# NestJS + Prisma + Supabase Boilerplate 🚀

Ce projet est une base solide (Boilerplate) pour construire des APIs robustes avec **NestJS**, **Prisma ORM** et **Supabase**. Il inclut une configuration optimisée pour la connexion aux bases de données managées (via Connection Pooling).

## 🛠 Technologies utilisées
- **Framework :** [NestJS](https://nestjs.com/)
- **ORM :** [Prisma](https://www.prisma.io/)
- **Base de données :** [Supabase (PostgreSQL)](https://supabase.com/)
- **Connecteur :** `@prisma/adapter-pg` (pour une compatibilité Wasm/Edge optimale)

---

## 🚀 Installation & Démarrage

1. **Clonage & Dépendances :**
   ```bash
   npm install
   ```

2. **Configuration de l'environnement :**
   Créez un fichier `.env` à la racine :
   ```env
   DATABASE_URL="postgresql://postgres.[ID_PROJET]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
   ```

3. **Génération du client Prisma :**
   ```bash
   npx prisma generate
   ```

4. **Lancement en développement :**
   ```bash
   npm run start:dev
   ```

---

## ⚙️ Comment adapter ce boilerplate à un nouveau projet ?

### 1. Variables d'Environnement (`.env`)
Remplacez `DATABASE_URL` par l'URL de votre nouveau projet Supabase. 
> **Note :** Utilisez toujours le port `6543` (Pooler) avec Supabase pour éviter les erreurs de connexion épuisée.

### 2. Schéma de Base de Données (`prisma/schema.prisma`)
- Modifiez les modèles (`model User`, `model Post`, etc.) selon vos besoins.
- **Important :** Ne changez pas la partie `generator client` sauf si vous voulez déplacer le dossier de sortie. Actuellement, il génère le client dans `src/generated/prisma`.

### 3. Synchronisation de la Base
Après avoir modifié votre `schema.prisma` :
```bash
# Pour créer une migration et mettre à jour la base
npx prisma migrate dev --name init

# Ou simplement générer le nouveau client si la base est déjà prête
npx prisma generate
```

### 4. Service Prisma (`src/prisma.service.ts`)
Ce fichier est le cœur de la connexion. Il utilise `pg.Pool` et `PrismaPg`. Si vous changez de fournisseur de base de données (autre que Supabase), vous devrez peut-être simplifier ce service pour utiliser le `PrismaClient` standard sans adaptateur.

---

## 📂 Structure du projet
- `src/generated/prisma` : Client Prisma généré (ignorer par Git).
- `src/prisma.service.ts` : Service global de connexion.
- `prisma/schema.prisma` : Définition de vos modèles de données.
- `prisma.config.ts` : Configuration avancée de Prisma.

## 💡 Astuces & Dépannage
- **Erreur EADDRINUSE :** Le port 3000 est déjà utilisé. Tuez le processus ou changez le port dans `src/main.ts`.
- **Erreur P1001 :** Le serveur de base de données est injoignable. Vérifiez l'adresse dans le `.env` et assurez-vous que le projet Supabase n'est pas en pause.
- **Erreur P1000 :** Mot de passe incorrect dans l'URL de connexion.
