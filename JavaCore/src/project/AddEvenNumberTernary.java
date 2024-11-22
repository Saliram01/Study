package project;

import java.util.Scanner;

public class AddEvenNumberTernary {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter your number : ");
		int num = input.nextInt();
		String result = num % 2 == 0 ? "Even" : "Odd";
		System.out.println("Your number is : " + result);
		input.close();
	}

}
