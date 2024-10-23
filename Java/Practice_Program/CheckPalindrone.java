package Java.Practice_Program;
import java.util.Scanner;
// Convert String Number to Original number and check isPalindrone or not;
public class CheckPalindrone {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        String str = sc.nextLine();

        int num = Integer.parseInt(str); // convert string to number

        int rev = 0, rem;
        int temp = num ;

        while (num != 0) {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = num / 10;
        }
        if (temp == rev) {
            System.out.println("Number is palindrone");
        }
        else{
            System.out.println("Number is not palindrone");
        }
        sc.close();
    }
}