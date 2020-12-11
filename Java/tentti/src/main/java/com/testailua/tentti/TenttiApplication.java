package com.testailua.tentti;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TenttiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TenttiApplication.class, args);
		Scanner lukija = new Scanner(System.in);
		int oikeita = 0;
		int vaaria = 0;
		int kokonaispisteet = 0;
		String mallivastaukset[] = {"A", "D", "B", "B", "C", "B", "A", "B", "C", "D"};
		System.out.println("anna oikeat vastaukse, vastaus voi olla joko A,B,C, tai D");
		System.out.println("Kysymyksiä on 10");
		System.out.println("Tentin läpäistäksesi pitää saada oikein 80%.");
		System.out.println("Syötä vastaus ja paina enteriä");

		//luodaan array objecti, joka on tyhjä
		String [] syotteet = new String[10];

		for(int i = 0; i < syotteet.length; i++){
			//lukee käyttäjän syötteet
			syotteet[i] = lukija.nextLine();
		}
		

		System.out.println("antamasi vastaukset ovat");
		for(int i = 0; i < syotteet.length; i++){
			System.out.print(syotteet[i] + ", ");
		}

		for(int i=0; i < mallivastaukset.length; i++){
			if(mallivastaukset[i].equals( syotteet[i])){
				oikeita++;				
			} else{
				vaaria++;
			}
		}


		System.out.println(" ");
		System.out.println("mallivastaukset: ");		
		for(String oikeavastaus : mallivastaukset){
			System.out.print(oikeavastaus + ", ");
		}
		System.out.println(" ");
		System.out.println("oikeita vastauksia: " + oikeita);
		System.out.println("Vääriä vastauksia: " + vaaria);
		if(oikeita >= 8){
			System.out.print("tentti meni läpi");
		} else {
			System.out.print("tentti ei mennyt läpi");
		}
	
	}
	//mallivastaus
	// 1A, 2. D, 3. B, 4. B, 5. C, 6. B, 7. A, 8. B, 9. C, 10. D



}
