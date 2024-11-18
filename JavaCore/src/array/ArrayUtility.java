package array;

import java.util.Scanner;

public class ArrayUtility {
	
	public static void displayArray(int[] numArr) {
		int i = 0;
		while(i < numArr.length) {
			System.out.println(numArr[i] + " ");
			i++;
		}
		System.out.println();
	}
	
	public static int[] inputArray() {
		Scanner input = new Scanner(System.in);
		System.out.print(" Enter the number of elements : ");
		int size = input.nextInt();
		int[] nums = new int[size];
		
		int i = 0;
		while(i < size) {
			System.out.print(" Enter a element no " + (i + 1) + ": ");
			nums[i] = input.nextInt();
			i++;
		}	
		input.close();
		
		return nums;
	}
}
