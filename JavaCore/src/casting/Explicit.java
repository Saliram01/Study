package casting;

public class Explicit {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		short s = 123;
		byte b = (byte) s;
		System.out.println("Short val in byte is " + b);
		
		int iVal = 1234;
		short sVal = (short) iVal;
		System.out.println("Integer val in short " + sVal);
		
		long l = 123456;
		int iValue = (int) l;
		System.out.println("Long val in integer " + iValue);
		
		double dVal = 123.25;
		long lV = (long) dVal;
		System.out.println("Double val in long " + lV);
	}

}
