# ohjelma kysyy käyttäjältä lukuja niin pitkään kunnes syötetään luku 0
# syötteiden lukemisen jälkeen ohjelma tulostaa:
# - syötettyjen lukujen määrän
# - syötettyjen numeroiden keskiarvon
# - ohjelma tulostaa negatiivisisten ja positiivisisten lukujen määrän

print("Syötä kokonaislukuja, 0 lopettaa")
numerot = []
luku = 1
summa = 0
keskiarvo = 0
negatiiviset_luvut = []
positiiviset_luvut = []


while True:
    luku = int(input("Luku: "))
    
    if luku == 0:
        break
    elif luku > 0:
        positiiviset_luvut.append(luku)
    elif luku < 0:
        negatiiviset_luvut.append(luku)

    numerot.append(luku)
    summa += luku
keskiarvo = summa / len(numerot)
# print(numerot)
# print(keskiarvo)

# pakolliset tulosteet
print(f"Lukuja yhteensä {len(numerot)}")
print(f"Lukujen summa {summa}")
print(f"Lukujen keskiarvo on {keskiarvo}")
print(f"Positiivisia {len(positiiviset_luvut)}")
print(f"Negatiivisia {len(negatiiviset_luvut)}")