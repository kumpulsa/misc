import random



def kps():
    valinnat = {1:"paperi", 2:"sakset", 3:"kivi"}
    pelataanko = "kyllä"


    while True:
        pelataanko = input("Halautko pelata kivi-paperi-sakset -peliä? (kyllä/ei) ")
        pelataanko = pelataanko.lower()

        if pelataanko == "ei":
            print("Heippa")
            return False
        
        elif pelataanko == "kyllä":

            tietokoneen_valinta = random.randint(1,3)
            print("valitse mieleinen: 1 = paperi 2 = sakset 3 = kivi")            
            pelaajan_valinta = input("Valinta: ")
            
            onko_numero = pelaajan_valinta.isnumeric()
            

            if onko_numero:
                pelaajan_valinta = int(pelaajan_valinta)                

                if pelaajan_valinta < 4:
                    
                    print(f"\nsinä valitsit: {valinnat[pelaajan_valinta]}")
                    print(f"tietokone valitsi: {valinnat[tietokoneen_valinta]} \n")
                    

                    # pelaaja valitsi paperin
                    if pelaajan_valinta == 1:
                        # tietokone valitis paperin
                        if tietokoneen_valinta == 2:
                            tietokone_voitti()
                        # tietokone valitsi kiven
                        elif tietokoneen_valinta == 3:
                            pelaaja_voitti()
                        else:
                            tasapeli()



                    # pelaaja valitsi sakset
                    elif pelaajan_valinta == 2:
                        # tietokone valitsi paperi
                        if tietokoneen_valinta == 1:
                            pelaaja_voitti()
                        # tietkone valitsi kiven
                        elif tietokoneen_valinta == 3:
                            tietokone_voitti()
                        else:
                            tasapeli()



                    # pelaaja valitsi kiven
                    elif pelaajan_valinta == 3:
                        # tietokone valitsi paperin
                        if tietokoneen_valinta == 1:
                            tietokone_voitti()
                        # tietokone valitsi sakset
                        elif tietokoneen_valinta == 2:
                            pelaaja_voitti()
                        else:
                            tasapeli()

                else:
                    print("syötit epäsopivan nuneron \n")
            else:
                print("et syöttänyt numero \n")

        else:
            print("syötit väärän komennon \n")
                
        
            

        
def tietokone_voitti():
    tulos = print("Tietokone voitti \n")
    return tulos
    

def pelaaja_voitti():
    tulos = print("Pelaaja voitti \n")
    return tulos
    
def tasapeli():
    tulos = print("tasapeli \n")
    return tulos

        

kps()
