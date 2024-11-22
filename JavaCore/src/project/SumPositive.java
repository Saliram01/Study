package project;

import array.ArrayUtility;

public class SumPositive {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] numArr = ArrayUtility.inputArray();
		int sum = 0;
		for(int num : numArr) {
			if(num < 0) {
				continue;
			}
			sum += num;
		}
		System.out.println(" Sum of positive number is : " + sum);
	}

}
