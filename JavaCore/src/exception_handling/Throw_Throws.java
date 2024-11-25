package exception_handling;

import java.util.Scanner;

public class Throw_Throws {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter first number: ");
		int first = sc.nextInt();
		System.out.print("Now second number: ");
		int second = sc.nextInt();
		
		try {
			int result = first / second;
			System.out.println("Result is " + result);
			
		} catch(ArithmeticException e) {
			
			if(e.getMessage().equals("/ by zero")) {
				System.out.println("Divide by zero occured");
				
			} else {
				throw e;
			}
		}
		
		sc.close();
	}
	
}
