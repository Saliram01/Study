package project;

import java.util.Scanner;

public class Palindrone_Number {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Scanner for input
		Scanner input = new Scanner(System.in);
		
		System.out.println(" Welcome to check palindrone number");
		
		// Taking input from the user
		System.out.print(" Enter your number : ");
		int num = input.nextInt();
		boolean isPali = isPalindrone(num);
		
		if(isPali) {
			System.out.println(" Number is palindrone");
		}
		else {
			System.out.println(" Not a palindrone number");
		}
		
		input.close();
	}
	
	public static boolean isPalindrone(int num) {
		return num == reverse(num);
	}
	
	public static int reverse(int num) {
		int newNum = 0;
		while(num > 0) {
			int digit = num % 10;
			newNum = 	newNum * 10 + digit;
			num /= 10;
		}
		return newNum;
	}

}
