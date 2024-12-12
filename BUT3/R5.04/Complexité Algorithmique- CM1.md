# Introduction

- **Efficacité d’un algorithme** : Un algorithme est jugé efficace s'il consomme peu de ressources, principalement en termes de mémoire et de temps.​
    L'analyse se concentre souvent sur l'efficacité temporelle, plus difficile à déterminer et plus déterminante pour la performance.
Mesure de la complexité

- **Complexité dans le pire des cas (O)** : Identifie le temps maximal requis par l'algorithme pour les pires données possibles.    ​
- **Complexité dans le meilleur des cas (Ω)** : Identifie le temps minimal requis par l'algorithme pour les meilleures données possibles.
- **Complexité en moyenne (Θ)** : Utilise une approche probabiliste pour calculer le temps moyen requis par l'algorithme.​

### Notation asymptotique

- **O (grand oh)** : Borne supérieure, utilisée pour le pire des cas.​
- **Ω (grand oméga)** : Borne inférieure, utilisée pour le meilleur des cas.​
- **Θ (grand thêta)** : Relation d'équivalence, utilisée pour le cas moyen.​
### Exemples d'algorithmes
- **RechMax** : Recherche de la valeur maximale dans un vecteur non trié.​
    - Complexité linéaire dans le meilleur et le pire des cas : Θ(n​
- **estPrésenteTrié** : Vérification de la présence d'une valeur dans un vecteur trié.​
    - Complexité constante dans le meilleur des cas : Ω(1)​
    - Complexité linéaire dans le pire des cas : O(n)        ​
### Classes de complexité courantes

- **Constante (1)** : Algorithmes dont le temps d’exécution est constant, indépendamment de la taille des données.
- **Logarithmique (log n)** : Algorithmes qui réduisent la taille des données d’un facteur constant à chaque itération (ex.: recherche dichotomique).
- **Linéaire (n)** : Algorithmes qui examinent chaque élément des données un nombre constant de fois (ex. : recherche du max dans un vecteur non trié).
- **Linéaire-logarithmique (n log n)** : Algorithmes « diviser pour régner » (ex. : tri rapide).
- **Quadratique (n²)** : Algorithmes constitués de deux boucles imbriquées (ex.: tris élémentaires).
- **Polynomiale (nk)** : Algorithmes d’algèbre linéaire (ex.: algorithmes sur les matrices).
- **Exponentielle (2n)** : Algorithmes examinant tous les sous-ensembles des n éléments de l’instance (ex.​ : problèmes NP-complets).
- **Factorielle (n!)** : Algorithmes qui examinent toutes les permutations des n éléments de l’instance.

### Algorithmes de tri
- **Tri par permutation** : Recherche du minimum par balayage séquentiel, complexité Θ(n²).​ Quadratique
- **Tri par insertion** : Insertion d'éléments à leur place correcte, complexité O(n²) dans le pire des cas, Ω(n) dans le meilleur des cas.​ Quadratique
- **Tri à bulles** : Remontée des bulles, complexité O(n²).​ Quadratique
- **Tri fusion : son coût est n(log(n))

### Recurrence

Résolution d’équations de récurrence
- **Exemple avec la fonction factorielle** : Calcul du coût d’un algorithme récursif simple, en comptant le nombre de multiplications nécessaires.​

### Analyse asymptotique et calcul de coût

- **Approches** :
    - **Analyse détaillée** : Très précise mais longue à calculer.​
    - **Analyse asymptotique** : Moins précise mais plus facile à calculer, permet de s’affranchir des facteurs influençant l’exécution (langage de programmation, compilateur, matériel).​

### Règle du maximum
- Pour un algorithme en deux parties exécutées consécutivement, le temps total d’exécution est déterminé par la partie ayant l’ordre de croissance le plus élevé.
### Illustrations
- **Temps d’exécution en fonction de la taille des données** : Comparaison des temps d’exécution pour différentes complexités sur une machine exécutant 10^6 opérations par seconde.​
- **Taille des données manipulables en un temps donné** : Comparaison des tailles de données manipulables pour différentes complexités en un temps donné.​
### Conclusion
Le document fournit une base solide pour comprendre l’analyse de la complexité algorithmique, en utilisant des exemples concrets et des méthodes d’analyse asymptotique. Il met en évidence l’importance de choisir des instructions baromètres pour mesurer la complexité et compare différentes classes de complexité courantes en algorithmique.