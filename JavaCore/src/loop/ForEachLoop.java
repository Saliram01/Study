package loop;

public class ForEachLoop {
	
	public static void printArray(String[] array) {
		for(String name : array) {
			System.out.println(" " + name);
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] arr = {"Ram","Shyam","Mohan","Shita","Gita"};
		printArray(arr);
	}

}
