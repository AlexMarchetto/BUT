****
**Dans quel fichier la configuration est-elle enregistrée ? Quel est le format utilisé pour le
stockage ?**
Elle est enregistré dans le fichier /hoem/username/.gitconfig Le format de stockage est INI (sections délimitées par des crochets)

****

Git show permet d'afficher des détails sur les commits ou un commit en particulier avec son id.
L'option --stat permet de résumer les modifications effectuées sur chaque fichier. 

Git log permet de voir l'arbre des commits : 
- Avec --stat ou --shortstat on voit en plus le detail de la modification des fichier. 
- Avec --patch fait un révision détaillé
- --graph : graphe des branchse et commits
****
Ajouter un alias : 
git config --global alias.st status : remplacer la commande git status par git st.git 
****
**Quels sont et combien de commits modifient le fichier CHANGELOG.rst**
git log --oneline -- CHANGELOG.rst | wc -l : 561 commits modifient ce fichier

**Quelles modifications ont été apportées au fichier src/_pytest/fixtures.py**
git log -p -- src/_pytest/fixtures.py (permet d'afficher le code)

**Les commits modifiant le dossier doc/ modifient-ils beaucoup de fichiers** 
git log --oneline --shortstat -- doc/ OUI

**Quels commits ont été faits par « holger krekel » ? De quand date son dernier commit**
git log --author="holger krekel" --oneline  | wc -l
git log --author="holger krekel" -n 1

**Quelles modifications ont été faites dans le dossier src/ entre les versions 6.0.0 et
6.0.2 ? La commande git diff peut vous aider.**
git diff 6.0.0 6.0.2 -- src/

**Quelle option de git log permet d’afficher les commits
ultérieurs ?**
git log --reverse