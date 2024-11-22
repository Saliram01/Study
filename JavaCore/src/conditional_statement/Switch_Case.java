package conditional_statement;

import java.util.Scanner;

public class Switch_Case {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a dat 1 to 7 : ");
		int day = input.nextInt();
		
//		switch(day) {
//		case 1: System.out.println("Sunday");
//			     break;
//		case 2: System.out.println("Monday");
//			     break;
//		case 3: System.out.println("Tuesday");
//			     break;
//		case 4: System.out.println("Wednesday");
//			     break;
//		case 5: System.out.println("Thursday");
//		 	     break;
//		case 6: System.out.println("Friday"); 
//			     break;
//		case 7: System.out.println("Saturday");
//			     break;
//		default: System.out.println("Your input is invalid!!");
//		}
		
		String output = switch(day) {
		
		case 1 -> "Sunday";
			     
		case 2 -> "Monday";
			    
		case 3 -> "Tuesday";
			     
		case 4 -> "Wednesday";
			     
		case 5 -> "Thursday";
		 	    
		case 6 -> "Friday"; 
			     
		case 7 -> "Saturday";
			     
		default -> "You input Invalid Number";
		
		};
		System.out.println(output);
		input.close();
	}

}
