package project;

import java.util.Scanner;

public class StudentScoreTernary {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter your marks : ");
		int marks = input.nextInt();
		String category = marks > 80 ? "High" : (marks > 50 ? "Moderate" : "Low");
		System.out.println("Your category is : " + category);
		input.close();
	}

}
