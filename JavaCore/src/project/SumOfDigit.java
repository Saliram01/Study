package project;

import java.util.Scanner;

public class SumOfDigit {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		
		System.out.println("Welcome Sum Of Digit");
		System.out.print("Enter your number : ");
		int num = input.nextInt();
		int sum = sumOfDigit(num);
		System.out.println("Sum of " + num + " is : " + sum);
		
		input.close();
	}
	
	public static int sumOfDigit(int num) {
		int i = 0;
		int sum = 0;
		
		while(i < num) {
			sum += num % 10;
			num /= 10; 
			i++;
		}
		return sum;
	}

}
