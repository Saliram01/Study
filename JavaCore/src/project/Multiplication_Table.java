package project;

import java.util.Scanner;

public class Multiplication_Table {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Welcome to Multiplication World");
		System.out.print("Enter your number : ");
		int num = input.nextInt();
		PrintMultiplicationTable(num);
		
		input.close();
	}
	
	public static void PrintMultiplicationTable(int num) {
		
		System.out.println("Number is : " + num);
		
		int i = 1;
		while(i <= 10) {
			System.out.println(num + " * " + i + " = " + num * i);
			i++;
		}
			
	}

}
