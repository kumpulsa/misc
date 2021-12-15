# Tämä on yksinkertainen sanakirja-tehtävä.
# - käyttäjä voi lisätä sanoja siihen:
#     - jos sana on olemassa ei sitä lisätä
#     - jos sanaa ei ole niin se lisätän 
# - käyttäjä voi hakea sanoja sanakirjasta
#     - jos löytyy niin palauttaa käännöksen
#     - jos ei ole niin ilmoittaa sen puuttumisesta 
#     ja antaa mahdollisuuden lisätä puuttuvan sanan
def lisaa_sana(lisattava_sana):
    lisattava_sana = input("Anna lisättävä sana")
    kaannos_sanalle = input("Anna sanalle käännös")

def tarkista_sana(sana, sanakirja):
    if sana in sanakirja:
        return True
    else:
        return False

def 

# # vanha versio haku-funktiosta
# def hae_sanaa(sanakirja:list):
#     haettava_sana = input("Anna haettava sana: ")
#     if haettava_sana in sanakirja:
#         print("Käännös:", sanakirja[haettava_sana])
#     else:
#         print("sanaa ei löydy")
#         lisataanko_sana = input("haluatko lisätä sanan? (kyllä/ei)")
#         lisataanko_sana = lisataanko_sana.lower()
#         if lisataanko_sana == "kyllä":
#             lisaa_sana(sanakirja)
# # funktio sanan muuttamiseksi pieniksi kirjaimiksi
# # def muutetaan_pieneksi(sana_pienella):

         


while True:
    sanakirja = {'apina': 'monkey', 'banaani': 'banana', 'koira': 'dog', 'kissa':'cat'}
    komento = input("Anna komento: 'lisää', 'hae' tai 'lopeta' ")
    # muutetaan käyttäjän syöte niin ettei kirjoitusasulla ole väliä
    komento = komento.lower()
    if komento == "hae":        
        hae_sanaa(sanakirja)
    elif komento == "lisää":
        lisattava_sana = input("Anna lisäätävä sana: ")
        lisaa_sana(lisattava_sana)
    elif komento == "lopeta":
        print("suljetaan sanakirja")
        print("Kuulemisiin")
        break
    else: 
        print("väärä komento")
    