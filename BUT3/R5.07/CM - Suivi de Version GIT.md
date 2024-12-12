# Version Control System (VCS)

logiciel qui permet de gérer un ensemble de version, fonctionne sur tout type de fichier (GIT ou intégré = GoogleDoc..)

Il existe des gestionnaire de version locaux (SCCS), centralisé (CVS) et distribués (GIT)

Différents types :
- **Gestion centralisée :** Un serveur qui contient toutes les infos, historique linéaire, les utilisateurs sont tous clients du serveur pour toutes les opérations. Limites : pas de travail en local, conflits fréquents, intégration délicate, travail en parallèle difficile 
- **Gestion distribuée :** Tout le monde contient une copie de l'historique avec un contient permet de mettre une cohérence entre tous les historiques. Historique local et dupliqué sur chacune des machines, pas forcement besoin de serveur central, historique arborescent (graphe orienté acyclique). Limite : modèle conceptuel complexe

**Gestion de version != Contrôle de version 

# Git

## Base de git
Outil de gestion de versions le plus utilisé
Outil de gestion distribuée
Des outils qui utilisé git comme github ou gitlab rajoute des fonctionnalité (graphiques ou autres) qui simplifie son utilisation

Permet de conserver la trace de l'évolution de projet/document
Permet aussi de comparer les différentes version (git diff)
Brique de base pour d'autres outils
Travail collaboratif : Intégration efficace, développement en parallèle

## Concept clefs
**Commit :** c'est une version (état de mon répertoire de travail), pourra forcément être récupéré plus tard si besoin (donc faire un maximum de commit), identifié par un *hash* unique. Contient les métadonnées (auteurs, date, etc) pour nous pour avoir une traçabilité, l'état des fichiers et référence vers les commits parents

Les commits sont ensuite regroupés dans des **branches** (pointeur mobile)
**Tag** comme une branche mais avec un pointeur constant, permet d'associer un message
**HEAD** pointeur vers une version liée à l'arbre de travail, pointe vers une branche

**Dépôt distant (remote) :** dépôt tiers avec lequel se synchroniser, contient une copie historique de l'historique 
## Premiers pas, commandes de base
3 états de fichier : modifié (contient modif pas enregistré), indexé (modif dans le prochains commit), validé (le fichier est entièrement connu par git)

3 sections : répertoire de travail (zone de travail), zone d'index (zone de tampon pour créer un commit, quand je fais un add), répertoire .git/ (stockage de l'historique, quand je fait un commit)

git init/git clone : répo vierge/ répo existant

Création commit : add, rm, mv, commit --message

git status : ou est ce que j'en suis

## Gestion de l'historique 
Création d'une branche avec déplacement (HEAD suit la nouvelle branche) ou sans déplacement (HEAD inchangé)

**Git rebase :** Ré-applique chaque commit au dessus de la nouvelle base, réécriture de l'historique, utilisé pour conserver un historique linéaire. On ne ré-écrit jamais un historique publique. Attention avec cette commande, possible perte de données.

## Synchronisation 
**fetch** : importer un historique, puis intégration avec **merge** ou **rebase**
Partager avec **push** (met un jour le dépôt distant)

# Bonne pratique
Message de commit : Destiné à nous, les humains. Une ligne avant les détails (condensé), puis ligne vide, puis les détails
