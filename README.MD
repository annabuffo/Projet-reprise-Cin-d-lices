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

BASE DE DONNEES DE DEPART

- Users
- Catégories 
- Recettes
- Média

RELATIONS SIMPLES : 

Un utilisateur peut créer plusieurs recettes.
Une recette appartient à un  utilisateur.

Une catégorie peut contenir plusieurs recettes.
Une recette appartient à une catégorie.

Un film / série peut être associé à plusieurs catégories.
Une catégorie appartient à un film / série.

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

USER STORIE (users non authentifiées)

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pourvoir consulter des recettes associées à des films     |
| et séries                                                         |
| afin de découvrir des recettes inspirées du cinéma.               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir accéder à la page de politiques et                |  confidentialitées                                                   |
| afin de la consulter.                                             |
|-------------------------------------------------------------------|


USER STORIE (users authentifiées)

|-------------------------------------------------------------------|
| En tant qu'utilisateur,                                           |
| je veux pouvoir m'authentifier                                    |
| afin d'avoi accès à mon espace personnel.                         |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu'utilisateur,                                           |
| je veux consulter des recettes associées à des films et séries    |
| afin de découvrir des recettes inspirées du cinéma.               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu’utilisateur,                                           |
| je veux pouvoir m'authentifié,                                    |
| afin de laisser des commentaires.                                 |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant qu’,                                           |
| je veux consulter des recettes associées à des films et séries    |
| afin de découvrir des recettes inspirées du cinéma.               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

|-------------------------------------------------------------------|
| En tant que visiteur,                                             |
| je veux pouvoir m'inscrire                                        |
| afin de créer mon espace personnel.                               |
|-------------------------------------------------------------------|

