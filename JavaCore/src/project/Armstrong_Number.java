package project;

import java.util.Scanner;

public class Armstrong_Number {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Scanner for input
		Scanner input = new Scanner(System.in);
		
		System.out.println(" Welcome to reverse the digits");
		
		// Taking input from the user
		System.out.print(" Enter your number : ");
		int num = input.nextInt();
		boolean isArmstrong = isArmstrong(num);
		
		if(isArmstrong) {
			System.out.println(" Number is Armstrong");
		}
		else {
			System.out.println(" Not a Armstrong Number");
		}
		
		input.close();
	}

	public static boolean isArmstrong(int num) {
		int noOfDigit = armDigit(num);
		int numCopy = num;
		int finalDigit = 0;
		while(num > 0) {
			int lastDigit = num % 10;
			num /= 10;
			finalDigit += pow(lastDigit, noOfDigit);
		}
		return finalDigit == numCopy;
	}
	
	public static int pow(int num1 ,int num2) {
		int result = num1;
		int i = 1;
		while(i < num2) {
			result *= num1;
			i++;
		}
		return result;
	}
	
	public static int armDigit(int num) {
		int digits = 0;
		while(num > 0) {
			digits++;
			num /= 10;
		}
		return digits;
	}
}
