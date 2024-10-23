package Java.Loop;

import java.util.Scanner;

public class Do_While {
    public static void main(String[] args) {
        Scanner sn = new Scanner(System.in);
        System.out.print("Guess num between 1 to 7 : ");
        int num = sn.nextInt();
        int random =(int)Math.floor(Math.random()*7+1);
        int guess = random;
      
        if (num == guess) {
                System.out.println("Congratulation You Win");
        }
        else{
            System.out.println("You Choose Wrong Number");
        }
        sn.close();
    }
}
