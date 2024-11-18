package array;

public class ReverseArray {

	public static void reverse(int[] arr) {
		int i = 0;
		while(i < arr.length / 2) {
			int swap = arr[i];
			arr[i] = arr[(arr.length - 1) -i];
			arr[(arr.length - 1) - i] = swap;
			i++;
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(" Welcome to array reverse\n");
		int[] arr = ArrayUtility.inputArray();
		reverse(arr);
		System.out.println(" Your reverse number is "); 
		ArrayUtility.displayArray(arr);
	}

}
