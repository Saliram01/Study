package exception_handling;

import java.util.Scanner;

public class Exception_Handling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter your first number: ");
		int first = input.nextInt();
		System.out.print("Please enter your second number: ");
		int second = input.nextInt();
		
		try {
			
			int result = first / second;
			System.out.println("Result is : " + result);
			
		} catch(ArithmeticException e) {
			
			System.out.println("" + e);
			
		} catch(ArrayIndexOutOfBoundsException e) {
			
			System.out.println("" + e);
			
		} catch(Exception e) {
			
			System.out.println(e);
			
		}
		
		input.close();
	}

}
