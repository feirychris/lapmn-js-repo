<!-->
programme indice et moyenne

but : stocker 5 entiers dans un tableau et déterminer l'indice du plus grand puis la moyenne
auteur : Feiry
date : 13/04/2021
<!-->

programme indice et moyenne
notes[0..4] : entier <!-- déclaration du tableau de taille 5>
total : entier
max : entier
indice : entier
moyenne : réel

debut
    tantque taille(notes) <= 5
        afficher "Entrez une note"
        saisir notes[]
    fintantque

affecter indice : 0
affecter max : notes[0]

pour i de 1 à taille(notes)
    si max < notes[i]
        max = notes[i]
        indice = i
    finsi
finpour
afficher "l'indice du plus grand est str(indice)"

affecter total : 0
pour i de 0 à 4
    affecter total: total + notes[i]
finpour

moyenne = total/5

afficher "la moyenne est str(moyenne)"

fin
