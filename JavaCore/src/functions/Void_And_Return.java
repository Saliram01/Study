package functions;

import java.util.Scanner;

public class Void_And_Return {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Sum();
		Sub(6,5);
		
		int first = Mul();
		int second = Mul();
		
		int result = first * second;
		System.out.println("Multiple number is " + result);
	}
	
	public static void Sum() {
		int a = 5, b = 6;
		int c = a + b;
		
		System.out.println("Sum is " + c);
	}
	
	public static void Sub(int a ,int b) {
		int c = a - b;
		
		System.out.println("Sub is " + c);
	}
	
	public static int Mul() {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter number : ");
		int num = input.nextInt();
		return num;		
	}

}
