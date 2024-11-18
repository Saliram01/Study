package array;

public class Sum_And_Average_Of_Array {

	public static long sum(int[] numArray) {
		long sum = 0;
		int i = 0;
		while(i < numArray.length) {
			sum += numArray[i];
			i++;
		}
		return sum;
	}
	
	public static int average(int[] numArray) {
		long sum = sum(numArray);
		return (int) sum / numArray.length;		
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(" Welcome to Array Sum and Average");
		int[] numsArray = ArrayUtility.inputArray();
		
		long sum = sum(numsArray);
		double average = average(numsArray);
		
		System.out.println(" Sum of the array numbers is : " + sum);
		System.out.println(" Average of the array numbers is : " + average);
	}

}
