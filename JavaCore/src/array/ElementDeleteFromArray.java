package array;

import java.util.Scanner;

public class ElementDeleteFromArray {

	public static int[] deleteNumber(int[] numArr, int numToDelete) {
			
		int occ = Occurrence.Occur(numArr, numToDelete);
		if(occ == 0) {
			return numArr;
		}
		int newSize = numArr.length - occ;
		int[] newArr = new int[newSize];
		
		int i = 0, j = 0;
		while(i < numArr.length) {
			newArr[j] = numArr[i];
			j++;
		}
		
		return newArr;
		
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.println(" Welcome to Element Delete From Array\n");
		int[] numArr = ArrayUtility.inputArray();
		System.out.print(" Now enter the number you want to delete : ");
		int numToDelete = input.nextInt();
		int[] newArr = deleteNumber(numArr, numToDelete);
		System.out.println(" Here is your new array");
		ArrayUtility.displayArray(newArr);
		input.close();
	}

}
