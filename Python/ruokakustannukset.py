# Tehtävässä lasketaan henkoilön viikon ruokakustannukset.

# kysyy käyttäjältä monesti käy syömässä ruokalassa
kerrat = int(input("Montako kertaa viikossa käyt syöt ruokalassa? "))

# yhden ruokailukerran hinta
hinta = float(input("Ruokalan lounaan hinta? "))

# Muiden ruokaostosten hinta
ruokaostokset = float(input("Paljonko käytit viikossa ruokaostoksiin? "))

viikossa = kerrat * hinta + ruokaostokset
paivassa = viikossa / 7

print("kustannukset keskimäärin: ")
print(f"päivässä {paivassa} euroa")
print(f"viikossa {viikossa} euroa")