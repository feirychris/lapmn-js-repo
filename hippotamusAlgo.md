<!-->
programme hippopotamus
but : cycle de vie d'un hippopotame
auteur : Feiry
date : 13/04/2021
<!-->

programme hippopotamus
class Hippopotamus(
name : entier,
weight : réel, 
tuskSize : réel
)

class Hippopotamus(name, weight, tuskSize)

debut
    fonction swim(weight)
    debut
        affecter weight : this.weight - 300
    fin

    fonction eat(weight)
    debut
        affecter weight : this.weight + 1000
    fin

    fonction fight(hippo)
        debut
            si this.tuskSize>hippo.tuskSize
                afficher "le hippo courant a gagné"
            sinon
                afficher "le hippo courant a perdu"
            finsi
        fin

    fonction toString(name, weight, tuskSize)
        debut
            afficher "l'hippotame s'appelle this.name, il pèse str(this.weight) grammes et a une taille de défense de str(this.tuskSize) cm"
        fin

<!-->

    hippo1 : james, 400000, 87
    hippo2 : paul, 350000, 84

    fight(400000,350000)

<!-->

    function lifeCycle
        debut
            pour jour=1 à jour=22
                pour heure=1 à heure=16
                    pour i=0 à heure=2
                        afficher eat()
                    finpour
                    pour j=0 à j=3
                        afficher swim()
                    finpour
                finpour
                afficher str(jour)
        fin

    programme test
    hippo1: Hippopotame
    hippo2: Hippopotame
        début
		    Affecter à hippo1: Hippopotame("H1", 500000, 32)
		    Affecter à hippo2: Hippopotame("H2", 420000, 24.5)
	
		    si hippo1.fight(hippo2) alors
			    Afficher "L'hippopotame " + hippo1.name + " a gagné."
		    sinon
			    Afficher "L'hippopotame " + hippo2.name + " a gagné."
		    finsi
		    
	    fin

fin
