nvm permet de gérer les différentes versions de node facilement
Lancer node : node hello.js

# Programmation modulaire
Module = fichier ou on va définir pleins de choses (constantes, classes, fonctions, etc) et on place le mot export devant pour pouvoir les utiliser en dehors (import en haut du fichier)

export default : On ne peut en faire qu'un seul, lorsqu'on va importer un module sans accolade on va import ce qu'on a export default (peut import comment on l'appelle)

Ne pas utiliser "require" et module.exports" mais privilégier ECMAScript

# Installer, créer et publier des packages 
Package = Composant qui propose une fonctionnalité et qui contient un ou plusieurs modules.

npm = Node Package Manager, permet d'aller chercher les packages publiques :
https://www.npmjs.com/
Les packages se retrouvent dans le dossier node_modules

Installation **locale** pour un usage à l'intérieur d'un autre package
```
npm install lorem-ipsum # installe le package lorem-ipsum
```

Installation **globale** pour un usage en ligne de commande (sur la machine et pas sur un projet en particulier)
```
npm install -g mocha # installe le package globalement
mocha test/abc.js # lance l'exécutable 'mocha'
```

Raccourcis : `npm i`

On peut intégrer des commandes Shell dans un package

Il existe des packages natifs qui sont installé directement avec node (ex : fs -> file system)
pour l'importer dans le code on mets "node:"  devant le nom du package (facultatif) :
```
import fs from 'node:fs'
```

Initialiser le package :
```
npm init
```
Une fois le formulaire interactif rempli, un fichier package.json est créé.

Installer les dépendances nécessaires :
```
npm i --save lorem-ipsum
```
A pour effet de créer un répertoire node_modules et d'y installer la dépendance. Flag --save sauvegarde la dépendance dans le fichier package.json.

Modifier le fichier package.json :
 `"type": "module"`
 Étape obligatoire pour spécifier que le package utilise le standard ES6 et non CommonJS.

## Reconnaître un bon package sur npmjs
Critères à prendre en compte :
- La description du package et sa documentation ;
- Le nombre de téléchargements
- La fréquence de mise à jour ;
- Les informations sur Github (issues, commits, etc.)
- Les packages qui dépendent de celui cherché
- **Les packages dont il dépend**.

## Structure
**index.js :** Point d'entrée du package.
**src/ :** Répertoire contenant l'ensemble des sources du package.
**test/ :** Répertoire contenant l'ensemble des tests à destination de la machine (e.g., Mocha).
**examples/ :** Répertoire contenant des exemples d'utilisation à destination des développeurs.

Possibilité d'ajouter des commande sur le package (package.json): 
```
"scripts": {
	    "start": "node index.js",
	    "test": "mocha"
	  },
```

**Bon à savoir :** L'installation d'un package **ne résulte pas** en l'installation de ses dépendances de développement (économie d'espace).

Dépendances nécessaires pour le fonctionnement du module. Loalisées dans le fichier package.json au niveau de la clé `"dependencies"`

**Dépendances de développement** :
Dépendances pour le bon développement du module. Localisées dans le fichier package.json au niveau de la clé `"devDependencies"`.
```
npm install --save-dev mocha
```

## Sémantique versions
Ce gère dans le package.json

|Statut du code|Étape|Règle|Exemple|Observation|
|---|---|---|---|---|
|Première release|Nouveau produit|On commence par 1.0.0|1.0.0||
|Correction de bugs|Patch|Incrément du troisième chiffre|1.0.1|Backward-compatible|
|Nouvelles fonctionnalités|Release mineure|Incrément du second chiffre et mise à zero du troisième|1.1.0|
|Nouvelles fonctionnalités|Release majeure|Incrément du premier chiffre et mise à zero des deux autres|2.0.0|Casse la compatibilité|
- N'accepter que les corrections de bugs :  
    `1.0` ou `1.0.x` ou `~1.0.4`
- N'accepter que les versions mineures :  
    `1` ou `1.x` ou `^1.0.4`
- Tout accepter **(déconseillé)** : `*` ou `x`

## Préparation de publication 
Mise en place d'un fichier .npmignore, exemple :
```
node_modules/
examples/
test/
```

**Bonnes pratiques :**
- On retire tout ce qui n'aide pas au fonctionnement du package (économie d'espace) ;
- On garde les exécutables, les sources ;
- Alternative : on concatène toutes les sources dans un fichier dist/mon-module.dist.js et on retire les sources.

## Publication 
### Sur npmjs
**Étapes à suivre :**

1. Créer un compte sur [npmjs.org](https://npmjs.com) ;
2. Utiliser la commande `$ npm login` pour se connecter depuis un terminal ;
3. Utiliser la commande `$ npm publish` pour publier.

### Sur GitLab
[L'instance GitLab de Gricad](https://gricad-gitlab.univ-grenoble-alpes.fr/) permet de gérer des dépôts de packages privés.
**Étapes à suivre :**

1. Se connecter à [gitlab-gricad](https://gricad-gitlab.univ-grenoble-alpes.fr/) ;
2. Créer un jeton d'authentification personnel (_preferences/Access Tokens/Add new Token_) en donnant les droits API (**Penser à copier le code**);
3. Créer dans le fichier .bashrc l'export suivant (**ne pas oublier de sourcer le fichier**) :
    
    `export NPM_TOKEN=<jeton authentification gitlab>`
                
    
4. Créer un fichier .npmrc dans le répertoire du package avec le contenu suivant :  @iut2-info-stud:registry=https://gricad-gitlab.univ-grenoble-alpes.fr/api/v4/projects/28957/packages/npm/  
    //gricad-gitlab.univ-grenoble-alpes.fr/api/v4/projects/28957/packages/npm/:_authToken="${NPM_TOKEN}"
5. npm publish
   
