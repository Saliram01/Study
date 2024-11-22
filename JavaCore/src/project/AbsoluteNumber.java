package project;

import java.util.Scanner;

public class AbsoluteNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter your number : ");
		int num = input.nextInt();
		int result = num >= 0 ? num : -num;
		System.out.println("Absolute value is " + result);
		input.close();
	}

}
