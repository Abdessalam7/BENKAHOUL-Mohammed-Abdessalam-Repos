## 1 Thème :
Ce projet porte sur dévloppement d'une application mobile basé sur IONIC  permettant de consulter les statistiques de la saison 2018-2019 du championnat de football anglais "premiere league".

## 2 Technologies utilisées :

### Visual Studio Code :
Editeur de code, open source et gratuit, basé sur plusieurs de langages dont NodeJs et Python. 
* téléchargeable via le lien suivant :  https://code.visualstudio.com/download

### NodeJS :
Plateforme logicielle libre et événementielle en JavaScript, téléchargeable via le lien suivant : https://nodejs.org/en/download/.
* installer NODEJS en téléchargeant la derniere version sur le lien affiché ci-dessus et le mettre node en tant que variable d'environnement
* à la fin de l'installation, node va installer automatiquement npm (node package manager) ou gestionnaire de paquets de NodeJs
* afin de verifier que l'installation a bien été effectué il suffit d'aller sur l'invité de commande et de taper `node -v` et `npm -v` pour avoir les versions de ces derniers

### IONIC : 
Framework s'inscrivant par-dessus Cordova, et permettant l'utilisation d'Angular avec tous ses avantages et intégrant beaucoup de components très utiles. 
* installer IONIC en exécutant la commande `npm install ionic@3.19.0`

### Cordova : 
Framework permettant de créer des applications  web multiplateformes avec  une seule base de code en HTML, CSS et JavaScript.
* installer Cordova en éxecutant la commande `npm install -g cordova`

### Angular :
Plateforme de développement qui permet de créer des applications web dynamiques et immersives. 
* installer Angular en éxecutant la commande  `npm install -g @angular/cli`

### FireBase : 
Ensemble de services d'hébergement pour n'importe quel type d'application (Android, iOS, Javascript, Nodejs..) proposant d'héberger en NoSQL et en temps réel des bases de données, du contenu, de l'authentification sociale, des notifications, ou encore des services.

### Andoid SDK :
Ensemble complet d'outils de développement d'Android,  incluant un débogueur, des bibliothèques logicielles,un émulateur basé sur QEMU, de la documentation, des exemples de code et des tutoriaux. 


## 3 Source de données : 
https://github.com/NearHuscarl/FootballDataAPI

## 4 Les fonctionnalités de l'application : 

#### Affichage des matchs / saison 2018-2019 :
* Affichage de la liste globale des matchs par journée.
* Affichage des 10 matchs jouées pour chaque journée, en cliquant sur la journée voullue.
* affiche des details de chaque match, en cliquant dessus (date, stade, nombre des supporteurs, adversaires, score final, buts marqués).


####  Affichage de tout les clubs du champoinnat / saison 2018-2019 : 
* affichage de la liste globale des clubs.
* affichage les détails de chaque club en cliquant dessus (nom, manager, stade, capacité du stade, nombre de matchs joués, points, classement, nombre de victoires, nombre de défaites, nombre de matchs nuls, nombre de buts marqués, nombre de buts encaissés, difference de buts, prochain match).

####  Affichage des joueurs / saison 2018-2019 : 
* Affichage de la liste globale des joueurs.
* Filtrage des joueurs par équipe, en séléctionnant le nom de l'équipe voullue dans le menue déroulant.
* Affichage des détails de chaque joueur en cliquant dessus (nom, numéro du joueur sur le maillot, club actuel, ancien club. nationalité, position, nombre d'apparitions, nombre de remplacements, nombre de buts marqués, nombre de passes décisives, nombre de buts marqués contre le camps).

####  Statistiques globales / saison 2018-2019  : 
* Affichage en detail de tout buts marqués de la saison (numero du but, l'équipe qui l'a marqué, buteur, équipes , minute du but).
* Affichage des passes décisives (pour quelle équipe, par quel joueur, pour quel joueur'buteur', les 2 équipes, minute de la passe).
* Affichage des clean sheets (club, nom du gardien, nombre des clean sheets, équipes adverses concernées).

## 4 Captures d'écran : 
![acceuil](https://github.com/Abdessalam7/BENKAHOUL-Mohammed-Abdessalam-Repos/blob/master/AppScreenshots/1.png)

