package array;

import java.util.Scanner;

public class Occurrence {
	
	public static int Occur(int[] numArr, int num) {
		int occ = 0;
		int i = 0;
		while(i < numArr.length) {
			if(numArr[i] == num) {
				occ++;
			}
			i++;
		}
		return occ;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.println(" Welcome to Array Occurrence\n");
		
		int[] numArr = ArrayUtility.inputArray();
		
		System.out.print(" Now enter the number you want to find : ");
		int num = input.nextInt();
		
		int ocs = Occur(numArr,num);
		System.out.print(" Your element was found " + ocs + "times in the array");
		
		input.close();
	}

}
