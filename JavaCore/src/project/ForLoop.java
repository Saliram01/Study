package project;

import java.util.Scanner;

public class ForLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Enter your age : ");
		int age = input.nextInt();
		
		for(;age < 0 || age > 100;) {
			System.out.print("Enter your age : ");
			age = input.nextInt();
		}
		System.out.println("Your age is : " + age);
		
		input.close();
		
	}

}
