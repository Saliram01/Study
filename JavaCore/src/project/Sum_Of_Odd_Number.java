package project;

import java.util.Scanner;

public class Sum_Of_Odd_Number {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		
		System.out.println("Welcome to Odd Number Sum");
		System.out.print("Enter the number : ");
		int num = input.nextInt();
		int sum = OddSum(num);
		System.out.println("Odd Sum till " + num + " is : " + sum);
		
		input.close();
	}
	
	public static int OddSum(int num) {
		int i = 1;
		int sum = 0;
		
		while(i <= num) {
			sum += i;
			i++;
		}
		return sum;
	}

}
