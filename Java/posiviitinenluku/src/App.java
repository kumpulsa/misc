import java.util.Scanner;


public class App {
    public static void main(String[] args) throws Exception {
        Scanner lukija = new Scanner(System.in);
 
        // Toteuta ohjelmasi tähän. 
        // kysyy käyttäjältä kokonaislukua ja kertoo onko se positiivinen vai ei
        System.out.println("Anna luku: ");
        int luku = Integer.valueOf(lukija.nextLine());
        
        if (luku > 0) {
            System.out.println("Luku on positiivinen.");
        } else {
            System.out.println("Luku ei ole positiivinen.");
        }
    }
}
