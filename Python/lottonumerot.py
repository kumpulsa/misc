# ohjelma generoi n määrän lottonumeroita a-b väliltä.
# se tallentaa numerot erilliseen listaan ja tulostaa ne.
# ohjelma ei tallenna numeroita kahteen kertaan

# tee ratkaisu tänne

import random

def lottonumerot(maara: int, alaraja: int, ylaraja: int):
    arvotut_numerot = []
    i = 0
    
    while i < maara:        
        luku = (random.randint(alaraja,ylaraja))
        if luku not in arvotut_numerot:
            arvotut_numerot.append(luku)
            i += 1
        else:
            continue
    arvotut_numerot = sorted(arvotut_numerot)
    return arvotut_numerot



if __name__ == "__main__":
    testi =  lottonumerot(7, 1, 40)
    print(testi)