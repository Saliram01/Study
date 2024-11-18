package project;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		
		System.out.println("Welcome to factorial number");
		System.out.print("Enter the number : ");
		int num = input.nextInt();
		long factNum = FactorialNumber(num);
		System.out.println("Factorial of " + num + " is : " + factNum);
		input.close();
	}
	
	public static long FactorialNumber(int num) {
		long fact = 1;
		int i = 1;
		while(i <= num) {
			fact = fact * i;
			i++;
		}
		return fact;
	}

}
