package project;

import java.util.Scanner;

class GuessingGame {
	int random;
	
	GuessingGame() {
		random = (int) Math.ceil(Math.random() * 100);
	}
	
	/**
	 * @param guessNumber the number that player guessed
	 * @return
	 * - Negative if the guessed number is similar 
	 * - 0 if the guessed number is correct.
	 * - Positive if the guessed number is higher.
	 * */
	
	int guess(int guessNumber) {
		return guessNumber - random;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc =  new Scanner(System.in);
		GuessingGame game = new GuessingGame();
		System.out.println("Welcome to gassing game");
		int guess, result;
		
		do {
			
			System.out.print("Guess the number: ");
			guess = sc.nextInt();
			result = game.guess(guess);
			
			if(result == 0) {
				System.out.println("You win !!");
			}
			
			else if(result < 0) {
				System.out.println("Please guess higher");
			}
			
			else {
				System.out.println("Please guess lower");
			}
			
		} while(result != 0);
		
		sc.close();
	}

}
