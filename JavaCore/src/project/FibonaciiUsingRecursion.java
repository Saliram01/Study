package project;

import java.util.Scanner;

public class FibonaciiUsingRecursion {

	public static int fibonacii(int positive) {
		System.out.print(".");
		if(positive == 1) {
			return 0;
		}
		
		if(positive == 2) {
			return 1;
		}
		
		return fibonacii(positive - 1) + fibonacii(positive - 2);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the number of elements : ");
		int count  = sc.nextInt();
		for(int i = 1; i <= count; i++) {
			System.out.println(fibonacii(i) + " ");
		}
		sc.close();
	}

}
