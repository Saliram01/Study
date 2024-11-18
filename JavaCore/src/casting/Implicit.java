package casting;

public class Implicit {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte bVal = 100;
		int intV = bVal;
		System.out.println("Byte val in integer is " + intV);
		
		int intValue = 12345;
		long longValue = intValue;
		System.out.println("Long Value is " + longValue);
		
		double dblValue = longValue;
		System.out.println("Double Value is " + dblValue);
		
		char charValue = 'A';
		int intVal = charValue;
		System.out.println("Character in int value " + intVal);
	}

}
