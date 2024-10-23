package Java.Loop;

import java.util.Scanner;

public class While {
    public static void main(String[] args) {

        // For Loop
        // for(int i = 0; i <= 10; i++){
        //     System.out.println(i);
        // }

        // While Loop
        // int i = 0;
        // while (i <= 10) {
        //     System.out.println(i);
        //     i++;
        // }

        // Do While Loop
        // int d = 1;
        // do{
        //     System.out.println(d);
        //     d++;
        // }while(d <= 12);

        // Print Table Using Loop

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter table num : ");
        int num = sc.nextInt();
        
        for(int f = 1; f <= 10; f++){
            System.out.println(num + " * " + f + " = " + num * f);
        }
        sc.close(); 
    }
}
