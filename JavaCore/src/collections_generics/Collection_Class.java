package collections_generics;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Collection_Class {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> list = new ArrayList<>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(-4);
		Utility.print(list);
		
		Collections.sort(list);
		Utility.print(list);
		
		Collections.reverse(list);
		Utility.print(list);
		
		List<Integer> unmodifibale = Collections.unmodifiableList(list);
		unmodifibale.add(87);
	}

}
