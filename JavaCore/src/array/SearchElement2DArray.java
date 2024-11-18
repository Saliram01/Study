package array;

import java.util.Scanner;

public class SearchElement2DArray {

	public static boolean search(int[][] numArr, int num) {
		int i = 0;
		while(i < numArr.length) {
			int j = 0;
			while(j < numArr[i].length) {
				if(numArr[i][j] == num) {
					return true;
				}
				j++;
			}
			i++;
		}
		return false;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.println(" Welcome to 2D Search\n");
		int[][] numArr = MultiDimensionalUtility.input2DArray();
		System.out.print(" Now enter the number you want to search : ");
		int num = input.nextInt();
		boolean isFound = search(numArr, num);
		
		if(isFound) {
			System.out.println(" Your number was found");
		}
		else {
			System.out.println(" Your number was not found");
		}
		
		input.close();
	}

}
