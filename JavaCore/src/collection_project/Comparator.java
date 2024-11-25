package collection_project;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Comparator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<String> list = Arrays.asList("Bear","Lion","Ant","Zebra");
		sortDescending(list);
		System.out.println(list);
	}
	
	public static void sortDescending(List<String> stringList) {
		Collections.sort(stringList);	
			
	}

}
