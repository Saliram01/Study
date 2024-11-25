package collection_project;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class UniqueCharacter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Set<Character> unique = new HashSet<>();
		Scanner sc = new Scanner(System.in);
		System.out.print("Please enter your string: ");
		String userString = sc.next();
		
		for(char ch : userString.toCharArray()) {
			unique.add(ch);
		}
		
		System.out.println("Your string has " + unique.size() + " unique character");
		
		sc.close();
		
	}

}
