package project;

import java.util.Scanner;

public class CommandExit {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc =  new Scanner(System.in);
		while(true) {
			System.out.print("Enter your command : ");
			String command = sc.nextLine();
			
			if(command.equalsIgnoreCase("exit")) {
				break;
			}
		}
		System.out.println("You have successfully exited");
		sc.close();
	}

}

// equals -> it checks only same as a user input
// equalsIgnoreCase -> it checks both small letter and capital letter
