package com.example.arvaanumero;
import java.util.Scanner;
import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ArvaanumeroApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArvaanumeroApplication.class, args);
		// write your code here

        Scanner lukija = new Scanner(System.in);
        //arpoo random kokonaisluvun. kysyy käyttäjältä numeroa ja kertoo oliko numero sama
      Random randomNumero = new Random();
      int arvattavaNumero = randomNumero.nextInt(10-0);
      ArvausGeneraattori generaattori = new ArvausGeneraattori(arvattavaNumero);
    //   System.out.println(arvattavaNumero); 

        System.out.println("Arvaa numero mikä numero on kyseessä, numero on välillä 0-10");
       while(true){
            int arvattuNumero = Integer.valueOf(lukija.nextLine());
            generaattori.ProsessoiArvaus(arvattuNumero);
        }    
    }    
	

}
