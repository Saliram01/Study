package recursion;

import java.util.Scanner;

public class Recursion {
//	public static long factorial(int num) {
//		long result = 1;
//		for(int i = 1; i <= num;i++) {
//			result *= i;
//		}
//		return result;
//	}
	
	public static long facto(int num) {
		System.out.println("Function called for : " + num);
		if(num == 1) {
			return 1;
		}
		return num * facto(num - 1);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.print("Please enter your number : ");
		int num = sc.nextInt();
		long fact = facto(num);
		System.out.println("Factorial of your number is : " + fact);
		sc.close();
	}

}
