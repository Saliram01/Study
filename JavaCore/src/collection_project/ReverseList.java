package collection_project;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ReverseList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> list = Arrays.asList(1,2,3,4,5,6);
		System.out.println(list);
		reverse(list);
		System.out.println(list);
	}
	
	public static void reverse(List<Integer> list) {
		Collections.reverse(list); // first method
		
		for(int i = 0; i < list.size() / 2; i++) {
			List_Swapping.swap(list, i, list.size() - 1 - 1);
		}
	}

}
