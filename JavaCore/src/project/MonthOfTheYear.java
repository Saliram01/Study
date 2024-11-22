package project;

import java.util.Scanner;

public class MonthOfTheYear {
	public static String getMonth(int month) {
		String monthName = switch(month) {
		case 1 -> "January";
		case 2 -> "February";
		case 3 -> "March";
		case 4 -> "April";
		case 5 -> "May";
		case 6 -> "Jun";
		case 7 -> "July";
		case 8 -> "August";
		case 9 -> "September";
		case 10 -> "October";
		case 11 -> "November";
		case 12 -> "December";
		default -> "Invalid";
		};
		return monthName;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter your month number 1 to 12 : ");
		int month = input.nextInt();
		String monthName = getMonth(month); 
		System.out.println("Your month name is : " + monthName);
		input.close();
	}

}
