import random
import string


def random_salasana(koko):

    # ottaa randomin acii-kirjaimen tai numeron, 
    # toistaa sen määritellyn koon mukaan
    generoitu_salasana = ''.join([random.choice(string.ascii_letters + string.digits) for merkki in range(koko)])

    return generoitu_salasana 

if __name__ == "__main__":
    salasana = random_salasana(12)
    print(salasana)