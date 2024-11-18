package loop;

import java.util.Scanner;

public class For {
	
	/**
	 * Code that runs multiple times based on a conditions is called loop.
	 * 
	 * */

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		for(int i = 0; i <= 5; i++){
            for(int j = 1; j <= i; j++){
                System.out.print(" * ");
            }
            System.out.println("");
        }
		
		Scanner input = new Scanner(System.in);
		System.out.print("\n Enter a number : ");
		int num = input.nextInt();
		
		while(num >= 1) {
			System.out.println(" " + num);
			num--;
		}
		
		input.close();
	}

}
