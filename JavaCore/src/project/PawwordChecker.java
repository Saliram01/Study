package project;

import java.util.Scanner;

public class PawwordChecker {
	public static boolean isValidPassword(String password) {
		
		return password.length() > 6;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		String password;
		
		do {
			System.out.print("Enter your password : ");
			password = input.nextLine();
		} while(!isValidPassword(password));
		
		System.out.println("Thanks for entering a valid password");
		input.close();
	}

}
