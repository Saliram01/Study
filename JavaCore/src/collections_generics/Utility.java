package collections_generics;

import java.util.Collection;

public class Utility {

	public static <E> void print(Collection<E> collection) {
		System.out.println("Collection is:");
		for(E coll : collection) {
			System.out.println(coll.toString());
		} 
	}

}
