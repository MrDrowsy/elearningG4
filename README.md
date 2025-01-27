# elearningG4

Bonjour,

Bienvenue sur l'api d'e-learning G4. Une fois votre serveur lancer vous pourrez récupérer les données dont vous avez besoin via les routes suivantes :

-   /courses Permet de récupérer une liste de tout les cours ainsi que leurs données associées.
-   /courses?id=:id Permet de récupérer les informations d'un cours en particulier via son id.
-   /lessons?courseId=:id Permet de récupérer une liste des leçons ainsi que leurs données via l'id du cours associé à celles-ci.
-   /lessons-completed?courseId=:id&userId=:id&status=status Permet de récupérer une liste associée à un utilisateur et un cours celons les id et le statut entrer en paramètres.
-   /login?email=email&password=password Permet de vérifier l'existence d'un utilisateur en bdd en renvoyant true ou false.
