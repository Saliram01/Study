package collection_project;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Frequency {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<Integer> list = Arrays.asList(1,2,3,4,1,5,6,7,1,7,8);
		System.out.println(Collections.frequency(list,1));
		System.out.println(Collections.frequency(list,7));
	}

}
