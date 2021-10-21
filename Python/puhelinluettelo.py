puhelinluettelo = {}
komento = 0

while True:

    komento = int(input("komento (1 hae, 2 lisää, 3 lopeta):"))
    # haku
    if komento == 1:
        nimi = input("nimi: ")
        # tarkistaa onko puhelinluettelossa        
        if nimi in puhelinluettelo:
            # tulostaa nimen jos se löytyy
            print(puhelinluettelo[nimi])
        else:
            # jos nimeä ei ole
            print("ei numeroa")

    # lisäys                          
    elif komento == 2:
        nimi = input("nimi: ")
        numero = input("numero: ")
        # lisää puhelinluetteloon 
        puhelinluettelo[nimi] = numero
        print("ok!")
        # print(puhelinluettelo)
    elif komento == 3:
        print("lopetetaan...")
        break
    else:
        print("syötit väärän komennon")


