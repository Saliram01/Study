package conditional_statement;

import java.util.Scanner;

public class Ternary_Operator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Enter first number : ");
		int first = input.nextInt();
		System.out.print("Enter second number : ");
		int second = input.nextInt();
		
		int result = first > second ? first : second;
		System.out.println("Greatest number is : " + result);
		input.close();
	}

}
