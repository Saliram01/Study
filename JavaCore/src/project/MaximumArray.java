package project;

import array.ArrayUtility;

public class MaximumArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = ArrayUtility.inputArray();
		int max = Integer.MIN_VALUE;
		for(int num : arr) {
			if(max < num) {
				max = num;
			}
		}
		System.out.println(" Maximum number is : " + max);
	}

}
