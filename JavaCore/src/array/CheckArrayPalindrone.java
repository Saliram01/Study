package array;

public class CheckArrayPalindrone {

	public static boolean isPalindrone(int[] arr) {
		int i = 0;
		while(i < arr.length) {
			if(arr[i] != arr[arr.length - 1 - i]) {
				
			}
			i++;
		}
		return true;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(" Welcome to Check Array Palindrone");
		int[] arr = ArrayUtility.inputArray();
		boolean isPali = isPalindrone(arr);
		
		if(isPali) {
			System.out.println(" Array number is palindrone");
		}
		else {
			System.out.println(" Array number is not palindrone");
		}
		
	}

}
