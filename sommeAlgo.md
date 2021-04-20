<!-->
programme somme des entiers

but : calculer la somme des entiers entre un et un entier donné
auteur : Feiry
date : 13/04/2021
<!-->

programme somme des entiers
sum : entier
nombre : entier <!-- déclaration du nomre renseigné par l'utilisateur>

debut
    afficher "saisir un nombre"
    saisir nombre
    jusqu'a nombre > 1

    <!--calcul de la somme -->
    sum = 0
    pour i de 1 à nombre
        Affecter à sum : sum + 1
    finpour

    Afficher "la somme est : str(sum)"

fin
