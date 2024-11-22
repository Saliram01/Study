package project;

import java.util.Scanner;

public class DoWhileProgram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		int age;
		do {
			System.out.print("Enter your age : ");
			age = input.nextInt();
		} while(age < 0 || age > 100);
		
		System.out.println("Your age is : " + age);
		input.close();
	}

}
