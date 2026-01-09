# 🔄 Guide de l'API de Synchronisation

Ce guide explique comment utiliser l'endpoint `/sync` pour maintenir les données de l'application mobile à jour tout en optimisant la consommation de données et en supportant le mode hors ligne.

## 📌 Concept
L'API utilise une stratégie de **synchronisation incrémentale** basée sur les horodatages (`updatedAt`). 
Au lieu de télécharger toutes les données à chaque fois, l'application mobile demande uniquement ce qui a été créé ou modifié depuis sa dernière synchronisation réussie.

## 🚀 Utilisation

### Endpoint
`GET /sync`

### Paramètres (Query Params)
| Paramètre | Type | Requis | Description |
| :--- | :--- | :--- | :--- |
| `since` | `String` (ISO-8601) | Non | La date de la dernière synchronisation (ex: `2026-01-09T10:00:00Z`). Si omis, l'API renvoie **toutes** les données accessibles. |

### Header
| Header | Valeur | Description |
| :--- | :--- | :--- |
| `Authorization` | `Bearer <token>` | Token JWT obtenu lors de la connexion. |

---

## 📦 Structure de la Réponse

L'API renvoie un objet contenant les 3 collections principales : `cotisations`, `membres`, et `payments`.

```json
{
  "status": true,
  "data": {
    "cotisations": [...],
    "membres": [...],
    "payments": [...]
  }
}
```

---

## 🛠️ Algorithme recommandés pour le Frontend

### 1. Première Synchronisation (Initial Load)
1. L'application mobile démarre sans données locales.
2. Appel : `GET /sync` (sans paramètre `since`).
3. Stocker tous les objets reçus dans la base de données locale (SQLite/Watermelondb).
4. Calculer la date actuelle et la stocker comme `lastSyncDate`.

### 2. Synchronisation Incrémentale (Update Only)
1. L'utilisateur ouvre l'app ou tire pour rafraîchir.
2. Appel : `GET /sync?since=<lastSyncDate>`.
3. Pour chaque objet reçu :
   - Si l'ID existe déjà localement → **Mettre à jour** (Overwrite).
   - Si l'ID n'existe pas → **Insérer**.
4. Mettre à jour `lastSyncDate` avec l'horodatage actuel.

### ⚠️ Gestion des Suppressions (Hard Delete)
Comme nous n'utilisons plus le "Soft Delete" (`deletedAt`), les objets supprimés sur le serveur **ne sont pas renvoyés** par l'endpoint `/sync`. 

**Stratégies recommandées pour gérer les suppressions sur le mobile :**
- **Option A (Simple) :** Faire un rafraîchissement complet (`GET /sync` sans `since`) une fois par session pour nettoyer la base locale.
- **Option B (Optimisée) :** Si un appel API vers un autre endpoint (ex: `GET /cotisation/:id`) renvoie une erreur 404, supprimer l'objet localement.

---

## 💡 Exemple de code (Javascript/Axios)

```javascript
async function syncData() {
  const lastSync = localStorage.getItem('last_sync_date');
  
  try {
    const response = await axios.get('/sync', {
      params: lastSync ? { since: lastSync } : {}
    });

    const { cotisations, membres, payments } = response.data.data;

    // Mise à jour de la DB locale
    saveToLocalDB('cotisations', cotisations);
    saveToLocalDB('membres', membres);
    saveToLocalDB('payments', payments);

    // Sauvegarde de la date de synchro
    localStorage.setItem('last_sync_date', new Date().toISOString());

  } catch (error) {
    console.error("Erreur de synchro", error);
  }
}
```
