<!-->
programme cercle
but : calcul de l'aire et savoir si un point appartient au cercle
auteur : Feiry
date : 13/04/2021
<!-->

programme cercle
class cercle (
point : point
radius : entier
)
aire : float
aire : 0.0

debut
    class cercle(point(getX(), getY()), radius)

        fonction area (radius)
            debut
                affecter aire : 3.14 * radius^2
                afficher "l'aire du cercle est str(aire)"
            fin

        fonction containsPoint(Point, radius)
            debut
                si point.getX()^2 + point.getY()^2 < radius^2
                    afficher "le point appartient au cercle"
                sinon
                    afficher "le point n'appartient pas au cercle"
                finsi
            fin

        fonction toString(cercle)
            debut
                afficher "le cercle a pour rayon str(radius) "
            fin

        class test
            affecter c1 : cercle((2,4), 5)
             début
                
                Affecter à p1: Point(6, 7)
                si c1.containsPoint(p1) alors
                    Afficher "p1 est dans c1"
                sinon
                    Afficher "p1 n'est pas dans c1"
                finsi
                Afficher "l'aire de c1 est + str(c1.area()) "
                Afficher c1.str()
            fin
	fin

fin
