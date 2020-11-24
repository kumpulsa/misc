package com.example.tunnussana;
import java.util.Scanner;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TunnussanaApplication {

	public static void main(String[] args) {
		SpringApplication.run(TunnussanaApplication.class, args);
		Scanner lukija = new Scanner(System.in);
 
        // Toteuta ohjelmasi tähän. 
        // ohjelma kysyy käyttäjältä tunnussanaa. Mikäli se on "Caput Draconis"
        //ohjelma tulostaa "tervetuloa!", muutoin "hus siitä!"
        
        //kysyy käyttäjältä syötettä
        System.out.println("Tunnussana?");
        String tunnussana = lukija.nextLine();
        
        //Vertaa käyttäjän syötettä ennalta määriteltyyn sanaan
        if (tunnussana.equals("Caput Draconis")) {
            System.out.println("Tervetuloa!");
        } else {
            System.out.println("Hus siitä!");
        }
	}

}
