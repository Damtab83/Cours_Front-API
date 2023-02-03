# Projet front Appelant une API 01/2023 #


## Cahier des charges ##
Application de gestion de replays (CRUD de liens des replays STUDI)
-> Gérer des playlists
-> Gérer des liens

## Techno : ##
Vanilla JS -> Que du JS sans librairie ni framework
SASS

## SYSTEME DE ROUTING ##
Pour ajouter une page, il faut ajouter le fichier html dans le dossier pages.
Ensuite, il faut configurer la route dans le fichier router.js (la vairable route)
Il faut ajouter une ligne suivant ce fonctionnement: 
  principe:   "/route": "/pages/monfichier.html"
  exemple:   "/route": "/pathToFileHtml"

  Pour inclure un fichier js dans cette route, il faut modifier la variable routeJS du fichier router.js
  Il faut ajouter une ligne suivant ce fonctionnement: 
  principe:   "/route": "/pages/monfichier.js"
  exemple:   "/route": "/pathToFileJs"