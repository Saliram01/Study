package project;

import java.util.Scanner;

public class PalindroneRecursion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the string to be checked : ");
		String str = sc.next();
		System.out.println("String is " + (isPalindrone(str) ? "palindrone" : "Not Palindrone"));
		sc.close();
	}
	
	public static boolean isPalindrone(String str) {
		if(str.length() <= 1) {
			return true;
		}
		int lastPos = str.length() - 1;
		if(str.charAt(0) != str.charAt(lastPos)) {
			return false;
		}
		String newStr = str.substring(1,lastPos);
		return isPalindrone(newStr);
	}

}
