REPRISE PROJET CinéDélices

1. Conception 
    - Idées du projet
    - cahier des charges 
    - Besoins utilisateurs
    - Users Stories
    - MCD
    - MPD
    - MLD
    - Cardinalités
    - Relations SQL

2. Préparation Technique
    - Structure du projet
    - Installations Node.js / Express
    - PostgresSQL
    - Sequelize
    - Variables .env
    - GitHub

3. Frontend 
    - HTML/CSS responsive 
    - Pages principales 
    - Formulaire
    - Navigation
    - Dynamisme JavaScript
    - Connexion avec une API REST

4. Backend 
    - API REST
    - Routes
    - Controllers
    - Middlewares
    - Models
    - Migrations
    - Seeders
    - CRUD Recettes
    - Authentification JWT / Argon2
    - Sécurité

5. Verbalisation du projet
    - Apprendre à expliquer chaques fichiers
    - Vocabulaires techniques 
    - Question Jury 
    - Entraînement oral

FONCTIONNALITEES DE BASES A PREVOIR 

- Page d'Accueil
- Liste des recettes
- Détails d'une recette
- Film / Séries associés aux recettes
- Catégories de recettes
- Inscription
- Connexion 

- Création de recette  -------------\
- Modification d'une recette         ------- Seulement lorsqu'un utilisateur est authentifié.
- Suppression d'une recette---------/

BASE DE DONNEES DE DEPART (Entités - tables)

- User
- Recipe
- Category
- Media
- Comment

RELATIONS SIMPLES : 

Un utilisateur peut créer plusieurs recettes.
Une recette appartient à un  utilisateur.

Une catégorie peut contenir plusieurs recettes.
Une recette appartient à une catégorie.

Un film / série peut être associé à plusieurs catégories.
Une catégorie appartient à un film / série.

Un utilisateur peut écrire plusieurs commentaires.
Un commentaire appartient à un utilisateur.

Une recette peut recevoir plusieurs commentaires.
Une commentaires appartient à une recette.

CAHIER DES CHARGES

1. Quel est le but du site CinéDélices ? 

Le but du prjet CinéDélices est de créer une appli web possédant une véritable interface utilisateur permettant de rechercher des recettes inspirées de films / séries.
Le site permettra également d'associer l'univers culinaire au monde cinématographique grâce à différentes recettes liées à des oeuvres de cinéma et de télévison.

2. Qui va utiliser le site ?

Le site pourra être consulté par des utilisateurs de toutes âges mais avec un accés limité.
En revanche l'accés à l'authentification, l'inscription, la publication de recettes, laisser des commentaires, seront réservées aux utilisateurs authentifié âgé d'au minimum 18 ans révolu et plus. 

3. Quelle sont les fonctionnalitées principales ?

Les principales fonctionnalités du site seront :

• la consultation de recettes associées à des films ou des séries ;

• l’inscription et l’authentification des utilisateurs ;

• l’affichage des fiches recettes avec les films ou séries associés ;

• la possibilité pour les utilisateurs authentifiés de publier une recette ;

• la création, modification et suppression des recettes par leurs auteurs ;

• la possibilité de laisser des commentaires sous les recettes ;

• l’interaction entre utilisateurs grâce aux commentaires et aux publications culinaires.

4. Quelle données le site doit stocker ?

users --> utilisateurs
recipes --> recettes
media --> média
categories --> catégories
comments --> commentaires

Pourquoi ces 5 tables ?

- users
Pour stocker les utilisateurs inscrits.

- recipes
Pour stocker les recettes publiées.

- media
Pour stocker les films ou séries associés aux recettes.

- categories
Pour classer les recettes : dessert, plat, boisson, etc.

- comments
Pour permettre aux utilisateurs connectés de commenter les recettes.


OBJECTIF "moins de 3 clics"

L’interface devra être simple et facile à utiliser afin que l’utilisateur puisse accéder rapidement aux recettes et aux films en quelques clics.

USER STORIES (users non authentifiées)

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir consulter des recettes associées à des films      |
| et séries                                                         |
| afin de découvrir des recettes inspirées du cinéma.               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer un espace personnnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir accéder à la page de politiques et                |  confidentialité                                                     |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir consulter la page de contact                      |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir accéder à la page de conditions d'utilisation     |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir consulter la page A propos                        |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

USER STORIES (users authentifiées)

|-------------------------------------------------------------------|
| En tant qu'utilisateur,                                           |
| je veux pouvoir m'authentifier                                    |
| afin d'avoir accès à mon espace personnel.                        |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu'utilisateur authenfié,                                 |
| je veux pouvoir commenter une recette                             |
| afin de partager mon avis avec les autres utilisateurs.           |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu'utilisateur,                                           |
| je veux consulter des recettes associées à des films et séries    |
| afin de découvrir des recettes inspirées du cinéma.               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu’utilisateur,                                           |
| je veux pouvoir m'authentifier,                                   |
| afin d’accéder aux fonctionnalités réservées aux utilisateurs     |
| authentifiés.                                                     |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu’utilisateur,                                           |
| je veux pouvoir créer des recettes                                |
| afin de publier des recettes.                                     |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir accéder à la page de politiques et                |  confidentialité                                                     |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir consulter la page de contact                      |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir accéder à la page de conditions d'utilisation     |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir consulter la page A propos                        |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|

MCD entités (Modèles Conceptuel de Données)

- USER
- RECIPE
- CATEGORY
- MEDIA
- COMMENT

Première relation : USER -- RECIPE

- USER (0,N) —— crée —— (1,1) RECIPE

Un user peut créer 0 ou plusieurs recipes.
Une recipe est créée par 1 seul user.

Deuxième relation : CATEGORY -- RECIPE

- CATEGORY (0,N) —— contenir —— (1,1) RECIPE

Une category peut contenir 0 ou plusieurs recipe.
Une recipe appartient à 1 category.

Troisième relation : MEDIA -- RECIPE

- MEDIA (0,N) —— inspire —— (1,1) RECIPE

Un media est associé à 0 ou plusieurs recipes.
Une recipe appartient à 1 media.

Quatrième relation USER -- COMMENT

- USER (0,N) —— écrit —— (1,1) COMMENT

Un user peut écrire 0 ou plusieurs comments.
Un comment appartient à 1 user.

Cinquième relation RECIPE -- COMMENT

- RECIPE (0,N) —— recevoir —— (1,1) COMMENT

Une recipe peut recevoir 0 ou plusieurs comments.
Un comment appartient à 1 recipe.

MLD (Modèle Logique de Données) 

"permet de transformer le MCD en tables, clé primaires et clé étrangères" 

USER
-
id_user (PK)
username
email
password
age
date_creation

RECIPE
-
id_recipe (PK)
titre
description
ingredients
instructions
image_url
temps_preparation
temps_cuisson
date_creation

id_user (FK)
id_category (FK)
id_media (FK)

CATEGORY
-
id_category (PK)
nom
description
id_media (FK)

MEDIA
-
id_media (PK)
title
type
description
release_date  (date de sortie)

COMMENT
-
id_comment (PK)
contenu
date_creation

id_user (FK)
id_recipe (FK)

 - id_user dans RECIPE car une recette appartient à un utilisateur.
 - id_category dans RECIPE car une recette appartient à une catégorie.
 - id_media dans RECIPE car une recette appartient à un film/série.
 - id_user dans COMMENT car un commentaire est écrit par un utilisateur.
 - id_recipe dans COMMENT car un commentaire appartient à une recette.

id_user dans RECIPE (1,1),
id_category dans RECIPE (1,1),
id_media dans RECIPE (1,1),
id_user dans COMMENT (1,1),
id_recipe dans COMMENT (1,1)

MLD (Modèle Logique de Données) 

