package array;

public class IsSortedArray {

	public static boolean isIncreasing(int[] numArr) {
		int i = 1;
		while(i < numArr.length) {
			if(numArr[i] < numArr[i-1]) {
				return false;
			}
			i++;
		}
		return true;
	}
	
	public static boolean isDecreasing(int[] numArr) {
		int i = 1;
		while(i < numArr.length) {
			if(numArr[i] > numArr[i-1]) {
				return false;
			}
			i++;
		}
		return true;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(" Welcome to Array Sorting Check Post\n");
		
		int[] numArr = ArrayUtility.inputArray();
		boolean isInc = isIncreasing(numArr);
		boolean isDec = isIncreasing(numArr);
		
		if(isInc || isDec) {
			System.out.println(" Your array is sorted");
		}
		else {
			System.out.println(" Your array is not sorted");
		}
	}

}
