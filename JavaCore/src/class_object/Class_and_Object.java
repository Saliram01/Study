package class_object;

public class Class_and_Object {
	private int a = 5, b = 10;
	void Add() {
		int c = a + b ;
		System.out.println(c);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Class_and_Object cb;  // declearation obj
		cb = new Class_and_Object();  // define obj
		cb.Add(); // cb -> Instance class obj And (.) -> Instance Operator
	}

}
