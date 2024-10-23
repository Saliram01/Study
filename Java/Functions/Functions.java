package Java.Functions;

import java.util.Scanner;

public class Functions  {
   public static int Addition(int a , int b){
      int sum = a + b;
      return sum;
  }
  public static int Sub(int a, int b){
      int sub = a - b;
      return sub;
  }
  public static int Multi(int a , int b){
      int mul = a * b;
      return mul;
  }
  public static int Div(int a , int b){
      int div = a / b;
      return div;
}
     public static void main(String[] args) { 

        Scanner sn = new Scanner(System.in);

        // User input
        System.out.print("Enter 1st number : ");
        int a = sn.nextInt();
        System.out.print("Enter 2nd number : ");
        int b = sn.nextInt();

        // Addition
        int sum = Addition(a,b);
        System.out.println("Sum of two number is : " + sum);

        // Subtraction
        int sub = Sub(a,b);
        System.out.println("Subtraction of two number is : " + sub);

        // Multiplication
        int mul = Multi(a,b);
        System.out.println("Mul of two number is : " + mul);

        // Division
        int div = Div(a,b);
        System.out.println("Division of two number is : " + div);
        
        sn.close();
     }
}