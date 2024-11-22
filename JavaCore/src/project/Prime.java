package project;

import java.util.Scanner;

public class Prime {

	public static void main(String[] args) {
	
			// Scanner for input
			Scanner input = new Scanner(System.in);
			
			System.out.println(" Welcome to Prime Number Checker");
			
			// Taking input from the user++
			System.out.print(" Enter your number : ");
			int num = input.nextInt();
			
			// Check prime number
			boolean isPrime = isPrime(num);
			
			if(isPrime) {
				System.out.println(" Your number is prime");
			}
			else {
				System.out.println(" Your number is note a prime");
			}
			
			input.close();
	}
	
	public static boolean isPrime(int num) {
		int i = 2;
		while(i < num) {
			if(num % i == 0) {
				return false;
			}
			i++;
		}
		return true;
	}

}
