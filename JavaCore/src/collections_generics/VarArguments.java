package collections_generics;

public class VarArguments {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(sum(5,6,9,10));
		System.out.println(sum(5,6,9,10,20));
		System.out.println(sum(5,6,9,10,30));
	}
	
	public static int sum(int...a) {
		int sum = 0;
		for(int i : a) {
			sum += i;
		}
		return sum;
	}

}
