La commande git l à été configuré

**Créer un commit vide 
```
git commit --allow-empty
```

**Créer une branche
```
git branch example
```

**Aller sur cette branche
```
git checkout example
```

**Créer une branche et aller directement dessus
```
git checkout -B example2
```

**Créer une branche à partir du commit vers lequel master pointe
```
git branch example3 master
git checkout -B example3 master
```

**Fusion de branches et création d'un commit à partir de la branche sur laquelle on est
```
git merge --no-ff blabla
```

S'il le commit qu'on veut merge est avant la dernière version sur laquelle on est, c'est un no fast forward.
- fast forward : en avance sur la branche sur laquelle on veut merge
- no fast forward : en retard sur la branche sur laquelle on veut merge
Est ce que un commit de merge en crée en fonction des paramètres de git merge :

|                 | -no-ff | -ff-only | -ff |
| --------------- | ------ | -------- | --- |
| fast forward    | OUI    | NON      | NON |
| no fast forward | OUI    | NON      | OUI |
De base git merge appliqueras l'option -ff 

**Que s’est-il passé pour la branche usable-as-lib ? Le
commit précédent (a784b13) est-il toujours accessible dans l’historique ?**
Oui mais il s'est dupliqué dans l'historique tout en haut pour avoir un historique linéaire


# Points clés à retenir de ce TP
## Autour des concepts de Git.
• Comment créer une branche, comment en changer.
• Comment fusionner une branche.
• Comment réécrire un historique.
• Comment résoudre un conflit de fusion.
## Autour des commandes de Git.
• git branch et git checkout -B pour créer des branches.
• git checkout pour changer de branche.
• git merge et ses options de contrôle de création de merge commit.
• git rebase pour réécrire une branche.
• git merge|rebase --abort pour annuler une fusion/réécriture en cours.


```
git commit --allow-empty
```

```
git commit --allow-empty
```

```
git commit --allow-empty
```