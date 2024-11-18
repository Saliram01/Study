package project;

import java.util.Scanner;

public class GCD {

	public static void main(String[] args) {
		
		// Scanner for input
		Scanner input = new Scanner(System.in);
		
		System.out.println(" Welcome to GCD");
		
		// Taking input from the user
		System.out.print(" Enter your first number : ");
		int first = input.nextInt();
		
		System.out.print(" Enter your second number : ");
		int second = input.nextInt();
		
		// Calculate GCD
		int gcd = gcd(first, second);
		System.out.println(" GCD of two number is " + gcd);
		
		input.close();
	}
	
	public static int gcd(int num1, int num2) {
		while (num2 != 0) {
            int temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }
        return num1;
    }

}
