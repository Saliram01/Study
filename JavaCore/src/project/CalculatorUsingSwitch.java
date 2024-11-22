package project;

import java.util.Scanner;

public class CalculatorUsingSwitch {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		
		System.out.print("Please enter your first number : ");
		int first = input.nextInt();
		
		System.out.print("Please enter operator : ");
		String ope = input.next();
		
		System.out.print("Please enter your second number : ");
		int second = input.nextInt();
		
		int result = switch(ope) {
		case "+" -> first + second;
		case "-" -> first - second;
		case "*" -> first * second;
		case "/" -> first / second;
		default -> -1;
		};
		
		System.out.println("Your answer is " + result);
		input.close();
	}

}
