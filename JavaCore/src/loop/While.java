package loop;

import java.util.Scanner;

public class While {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
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
//        System.out.print("Enter table num : ");
//        int num = sc.nextInt();
//        
//        for(int f = 1; f <= 10; f++){
//            System.out.println(num + " * " + f + " = " + num * f);
//        }
        
        System.out.print("Enter your age : ");
        int age = sc.nextInt();
        while(age < 0 || age > 100) {
        	System.out.print("Enter your age : ");
        	age = sc.nextInt();
        }
        System.out.println("Your age is " + age);
        System.out.println("Program is end");
        sc.close(); 
	}

}
