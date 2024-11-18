package operator;

import java.util.Scanner;

public class Bitwise {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner input = new Scanner(System.in);	
		System.out.println(" Showing Bitwise Operator & | ^ ~ << >>");
		
		System.out.print(" Enter the first number : ");
		int first = input.nextInt();
		
		System.out.print(" Enter the other number : ");
		int second = input.nextInt();
		
		int and = first & second;
		int or = first | second;
		int xor = first ^ second;
		int complement = ~xor;
		int leftShift = first << second; 
		int rightShift = first >> second;
		
		System.out.println(" Result of & is : " + and); // 1100 1010 -> 1000
		System.out.println(" Result of | is : " + or); // 1100 1010 -> 1110
		System.out.println(" Result of ^ is : " + xor); // 1100 1010 -> 0110
		System.out.println(" Result of ~ is : " + complement); // opposite 1100 -> 0011
		System.out.println(" Result of leftShift << is : " + leftShift); // factorial 4 4 -> 64
		System.out.println(" Result of rightShift >> is : " + rightShift); // divisible by 2 -> 7/2 -> 3
		
		input.close();
		
	}

}
