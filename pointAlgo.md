<!-->
programme point
but : getter, setter et affichage du point
auteur : Feiry
date : 13/04/2021
<!-->

programme point
class point(
    x : entier 
    y : entier
)

class point(x,y)
debut

    fonction setX()
        debut
            affecter x : x
        fin

    fonction setY()
        debut
            affecter y : y
        fin

    foncton getX()
        debut
            retourner x
        fin

    fonction getY()
        debut
            retourner y
        fin

    fonction toString()
        debut
            afficher "le point a pour coordonnées x et y, getX() et getY() respectivement"
        fin

    class test
    debut
       affecter à point1 : point(3,4)
       afficher point1.toString()
       point1.setX(8)
       point1.setY(14)
       point1.toString()
    fin

fin