package array;

import java.util.Scanner;

public class Array_Searching {
	
	public static boolean isFound(int[] myArr, int num) {
		int index = 0;
		while(index < myArr.length) {
			if(myArr[index] == num) {
				return true;
			}
			index++;
		}
		return false;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// User input
		Scanner input = new Scanner(System.in);
		
		// Array declaration
		int[] myArr = {3,6,8,10,12,80,97,1,2};
		
		System.out.println("Welcome to Array Searching");
		System.out.print("Enter a number : ");
		int num = input.nextInt();
		
		// Calling function
		boolean isFound = isFound(myArr, num);
		
		// Condition of Result
		if(isFound) {
			System.out.println("Find Successfully");
		}
		else {
			System.out.println("Sorry Couldn't Find");
		}
		
		input.close();
	}

}
