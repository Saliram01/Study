package collection_project;

import java.util.Arrays;
import java.util.List;

public class List_Swapping {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8);
		System.out.println(list);
		swap(list,2,7);
		System.out.println(list);
	}
	
	public static void swap(List<Integer> list,int x, int y) {
		int swap = list.get(x);
		list.set(x, list.get(y));
		list.set(y, swap);
	}

}
