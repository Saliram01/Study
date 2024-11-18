package array;

import java.util.Scanner;

public class MultiDimensionalUtility {
	public static void displayArray(int[] numArr) {
		int i = 0;
		while(i < numArr.length) {
			System.out.println(numArr[i] + " ");
			i++;
		}
		System.out.println();
	}
	public static int[][] input2DArray() {
		Scanner input = new Scanner(System.in);
		System.out.print(" Enter the number of rows : ");
		int rows = input.nextInt();
		System.out.print(" Enter the number of columns : ");
		int columns = input.nextInt();
		int[][] numArray = new int[rows][columns];
		
		int i = 0;
		while(i < rows) {
			int j = 0;
			while(j < columns) {
				System.out.print(" Enter a element rows : " + (i + 1) + " columns : " + (j + 1) + " : ");
				numArray[i][j] = input.nextInt();
				j++;
			}
			i++;
		}	
		input.close();
		return numArray;
	}

}
