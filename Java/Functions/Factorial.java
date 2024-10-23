package Java.Functions;

import java.util.Scanner;

public class Factorial {
    public static void Facto(int num)
    {
        if(num < 0){
            System.out.println("Invalid Number");
            return;
        }
        int fact = 1;
        for(int i = num ; i >= 1; i--){
            fact = fact * i;
        }
        System.out.println("Factorial num is : " + fact);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int num = sc.nextInt();
        Facto(num);
        sc.close();
    }
}
