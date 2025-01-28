# API d'e-learning G4

Bienvenue sur l'API d'e-learning G4 ! Ce fichier README vous guidera à travers les différentes routes disponibles pour récupérer les données nécessaires.

---

## Routes disponibles

### 1. **Liste des cours**

**Endpoint** : `g4.codejuice.fr/courses`

-   **Méthode** : `GET`
-   **Description** : Permet de récupérer une liste de tous les cours ainsi que leurs données associées.
-   **Exemple de réponse** :

```json
[
    {
        "id": 1,
        "title": "Introduction à la programmation",
        "description": "Apprenez les bases de la programmation."
    },
    {
        "id": 2,
        "title": "Développement web avancé",
        "description": "Maîtrisez les techniques avancées du développement web."
    }
]
```

---

### 2. **Informations sur un cours spécifique**

**Endpoint** : `g4.codejuice.fr/courses?id=:id`

-   **Méthode** : `GET`
-   **Paramètres** :
    -   `id` : Identifiant du cours (obligatoire).
-   **Description** : Permet de récupérer les informations d'un cours en particulier via son ID.
-   **Exemple d'utilisation** : `g4.codejuice.fr/courses?id=1`
-   **Exemple de réponse** :

```json
{
    "id": 1,
    "title": "Introduction à la programmation",
    "description": "Apprenez les bases de la programmation."
}
```

---

### 3. **Liste des leçons par cours**

**Endpoint** : `g4.codejuice.fr/lessons?courseId=:id`

-   **Méthode** : `GET`
-   **Paramètres** :
    -   `courseId` : Identifiant du cours (obligatoire).
-   **Description** : Permet de récupérer une liste des leçons ainsi que leurs données associées au cours spécifié.
-   **Exemple d'utilisation** : `g4.codejuice.fr/lessons?courseId=1`
-   **Exemple de réponse** :

```json
[
    {
        "id": 101,
        "course_id": 2,
        "title": "Introduction aux variables",
        "content": "Les variable sont des éléments clés en programtion qui perme..."
    },
    {
        "id": 102,
        "course_id": 2,
        "title": "Les boucles en programmation",
        "content": "Les boucle en progamation ont beaucoup d'utilisation différentes et so..."
    }
]
```

---

### 4. **Progression des leçons par utilisateur**

**Endpoint** : `g4.codejuice.fr/lessons-completed?courseId=:id&userId=:id&status=status`

-   **Méthode** : `GET`
-   **Paramètres** :
    -   `courseId` : Identifiant du cours (obligatoire).
    -   `userId` : Identifiant de l'utilisateur (obligatoire).
    -   `status` : Statut de la leçon (exemple : `completed`, `in-progress`) (obligatoire).
-   **Description** : Permet de récupérer une liste des leçons associées à un utilisateur et à un cours selon les paramètres fournis.
-   **Exemple d'utilisation** : `g4.codejuice.fr/lessons-completed?courseId=1&userId=123&status=completed`
-   **Exemple de réponse** :

```json
[
    {
        "user_id": 20,
        "lesson_id": 101,
        "course_id": 4,
        "status": "Completed"
    }
]
```

---

### 5. **Connexion utilisateur**

**Endpoint** : `g4.codejuice.fr/login?email=email&password=password`

-   **Méthode** : `GET`
-   **Paramètres** :
    -   `email` : Adresse email de l'utilisateur (obligatoire).
    -   `password` : Mot de passe de l'utilisateur (obligatoire).
-   **Description** : Permet de vérifier l'existence d'un utilisateur dans la base de données en renvoyant `true` ou `false`.
-   **Exemple d'utilisation** : `g4.codejuice.fr/login?email=test@example.com&password=123456`
-   **Exemple de réponse** :

```json
{
    "success": true
}
```

---

## Notes importantes

-   Toutes les requêtes doivent inclure les paramètres nécessaires mentionnés.
