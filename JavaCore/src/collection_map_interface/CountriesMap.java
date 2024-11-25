package collection_map_interface;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CountriesMap {

	public static void main(String[] args) {
	
		Map<String, String> countryMap = new HashMap<>();
		countryMap.put("Bharat", "New Delhi");
		countryMap.put("Chaina", "Beijing");
		countryMap.put("Pakistan", "Islamabad");
		countryMap.put("Srilanka", "Columbo");
		countryMap.put("Bangladesh", "Dhaka");
		countryMap.put("Nepal", "Kathmandu");
		
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter the country name: ");
		String country = input.next();
		
		if(countryMap.containsKey(country)) {
			System.out.printf("Capital of %s is %s", country, countryMap.get(country));
		} 
		else{
			System.out.println("Sorry we don't know the capital.");
		}
		
		input.close();
	}

}
