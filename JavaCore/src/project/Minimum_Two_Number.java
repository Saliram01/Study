package project;

import java.util.Scanner;

public class Minimum_Two_Number {
	public int min(int num1, int num2) {
		return num1 < num2 ? num1 : num2;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter your first number : ");
		int first = input.nextInt();
		System.out.print("Please enter your second number : ");
		int second = input.nextInt();
		
		Minimum_Two_Number ternary = new Minimum_Two_Number();
		int min = ternary.min(first, second);
		System.out.println("Minimum number is : " + min);
		
		input.close();
	}

}
