package project;

import java.util.Scanner;

public class LCM {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		
		System.out.println("Welcome to LCM");
		
		System.out.print("Enter your first number : ");
		int first = input.nextInt();
		
		System.out.print("Enter your second number : ");
		int second = input.nextInt();
		
		int lcm = lcm(first, second);
		System.out.println("LCM of two number is " + lcm);
		
		input.close();
	}
	
	public static int lcm(int first, int second) {
		int i = 1;
		while(true) {
			int factor = first * i;
			
			if(factor % second == 0) {
				return factor;
			}
			i++;
		} 
	}

}
