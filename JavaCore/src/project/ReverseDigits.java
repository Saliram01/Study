package project;

import java.util.Scanner;

public class ReverseDigits {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Scanner for input
		Scanner input = new Scanner(System.in);
		
		System.out.println(" Welcome to reverse the digits");
		
		// Taking input from the user
		System.out.print(" Enter your number : ");
		int num = input.nextInt();
		
		int reverseDigit = reverseDigit(num);
		System.out.println(" Reverse number is : " + reverseDigit);
		
		input.close();
	}
	
	public static int reverseDigit(int num) {
		int newNum = 0;
		while(num > 0) {
			int digit = num % 10;
			newNum = newNum * 10 + digit;
			num /= 10; 
			
		}
		return newNum;
	}

}
