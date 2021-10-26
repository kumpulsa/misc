# luo paivakirja-nimisen tiedoston, johon käyttäjä voi kirjoittaa sekä tulostaa tiedoston sisällön

def paivakirja():

    # luo tiedoston merkintöjän varten
    with open("paivakirja.txt", "a") as tiedosto:
        tiedosto.write("")
    
    # kysyy käyttäjältä komento niin pitkään kuin tulee 0
    while True:
        print("1 - lisää merkintä, 2 - lue merkinnät, 0 - lopeta ")
        valinta = int(input("Valinta: "))

        # ohjelman suoritus keskeyteytään 
        if valinta == 0:           
            print("Heippa!")
            return False
            
        # lisätään merkintä     
        elif valinta == 1:
            merkinta = input("Anna merkintä: ")
            # "a" lisää tiedostoon eikä ylikirjoita sitä. encoding mahdollistaa ääkkösten käytön
            with open("paivakirja.txt", "a",  encoding="utf-8") as tiedosto:
                tiedosto.write(merkinta + "\n")
            print("Päiväkirja tallennettu")

        # tulostaa kirjoitetut merkinnät
        elif valinta == 2:
            with open("paivakirja.txt") as tiedosto:
                sisalto = tiedosto.read()
                print("Merkinnät:")
                print(sisalto)

paivakirja()