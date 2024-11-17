package data_types;

public class All_Datatypes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte b = 127; // 1 bytes
		System.out.println("Byte : " + b);
		
		short s = 32688; // 2 bytes
		System.out.println("Short : " + s);
												// b, s, i, l => default value is integer
		int i = 23445845; // 4 bytes
		System.out.println("Inter : " + i);
		
		long l = 999999999; // 8 bytes
		System.out.println("Long : " + l);
		
		
		float f = (float)5.2; // 4 bytes
		System.out.println("Float : " + f);
												// f and double default value is double
		double d = 4565654; // 8 bytes
		System.out.println("Double : " + d);
		
		char c = 's'; // 2 bytes
		System.out.println("Character : " + c);
		
		char[] character = {'S','A','L','I','R','A','M'};
		for(char ch : character) {
			System.out.println(ch);
		}
		
		boolean bl = true; // 1 bytes
		System.out.println("Boolean : "+ bl);
	}

}
