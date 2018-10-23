# Lectures 

Ce post contient un résumé de mes lectures portant sur :
- L'*UUID* pour "Universal Unique Identifier"
- Les propriétés *ACID* pour "atomicité, cohérence, isolation et durabilité"

## Universal Unique Identifier (UUID)
Voir la doc [ici](https://fr.wikipedia.org/wiki/Universal_Unique_Identifier)

Il s'agit comme son nom l'indique d'un identifiant unique permettant à des systèmes de reconnaître un élément parmis des millions d'autres. (Théoriquement dans le monde entier)
Cependant, on preferera en pratique employer le terme unicité *très probable* plutôt que garantie. Les UUID étant générés par des algorithmes **pseudo-aléatoire**, il n'est pas impossible qu'à grande échelle deux UUID identiques co-existent.
C'est pourquoi on a décidé d'utiliser des "données personnelles" de l'ordinateur comme l'adresse MAC afin de garantir son unicité. Mais, dans un soucis de sécurité, on préfère les hasher pour ne pas divulguer d'informations sensibles, à l'aide du MD5 ou du SHA-1 par exemple.

## Propriétés ACID 
Voir la doc [ici](https://fr.wikipedia.org/wiki/Propri%C3%A9t%C3%A9s_ACID)

> En informatique, les propriétés ACID (atomicité, cohérence, isolation et durabilité) sont un ensemble de propriétés qui garantissent qu'une transaction informatique est exécutée de façon fiable.
*Source : Wikipédia*

Les propriétés ACID doivent absolument être respectées dans le domaine des bases de données.
Même si l'on touche à plusieurs données différentes, on appelera chaque "action" une *transaction*.
Par exemple, un transfert de fonds d'un compte de banque à un autre, même s'il implique plusieurs actions comme le débit d'un compte et le crédit d'un autre, est une seule transaction.
 
On peut résumer ces 4 propriétés à l'aide d'un tableau :

Propriétés | Définition
-|-
Atomicité | C'est le fait de s'assurer qu'une transaction est efféctuée dans son intégralité. Dans le cas contraire, il faut restaurer les données au stade antérieur à la transaction.
Cohérence | Il s'agit de **s'assurer** que chaque transaction passe d'un état valide à un autre état valide. Par exemple, respecter les *contraintes d'intégrité*, les *rollbacks en cascade* ou les *déclencheurs* de base de données.
Isolation | Cette propriété vérifie le fait que chaque transaction est indépendante l'une de l'autre. Elles doivent donc s'executer en isolation totale, si deux transaction s'executent en même temps, elles ne doivent pas avoir de dépendances entre elles.
Durabilité | La dernière propriété, il s'agit d'enregistrer les informations de la transaction une fois celle-ci terminée. Ainsi, si la prochaine transaction ne respecte pas la propriété d'atomicité par exemple, l'état antérieur sera restauré grace à cette sauvegarde.

