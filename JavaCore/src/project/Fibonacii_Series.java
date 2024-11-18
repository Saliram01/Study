package project;

import java.util.Scanner;

public class Fibonacii_Series {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Scanner for input
		Scanner input = new Scanner(System.in);
		
		System.out.println(" Welcome Fibonacii Series");
		
		// Taking input from the user
		System.out.print(" Enter your number : ");
		int num = input.nextInt();
		fiboNum(num);	
		
		input.close();
	}
	
	public static void fiboNum(int num) {
		if(num < 1) return;
		System.out.print(" 0 ");
		if(num == 0) return;
		System.out.print(" 1 ");
		
		int a = 0, b = 1;
		while(a + b <= num) {
			int c = a + b;
			System.out.print( " " + c + " ");
			a = b;
			b = c;
		}
	}

}
