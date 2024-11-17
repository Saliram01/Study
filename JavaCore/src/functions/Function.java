package functions;

import java.util.Scanner;

public class Function {
	
	public static int Sum(int a, int b) {
		int sum = a + b;
		return sum;
	}
	
	public static int Sub(int a, int b) {
		int sub = a - b;
		return sub;
	}
	
	public static int Mul(int a, int b) {
		int mul = a * b;
		return mul;
	}
	
	public static int Div(int a, int b) {
		int div = a / b;
		return div;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter first number : ");
		int a = sc.nextInt();
		System.out.print("Enter second number : ");
		int b = sc.nextInt();
		
		System.out.println("=========================");
		
		int sum = Sum(a,b);
		System.out.println("Sum of two number is : " + sum);
		
		int sub = Sub(a,b);
		System.out.println("Sub of two number is : " + sub);
		
		int mul = Mul(a,b);
		System.out.println("Mul of two number is : " + mul);
		
		int div = Div(a,b);
		System.out.println("Div of two number is : " + div);
		
		sc.close();
	}

}
