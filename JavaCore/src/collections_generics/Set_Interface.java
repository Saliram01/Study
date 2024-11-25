package collections_generics;

import java.util.HashSet;

public class Set_Interface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashSet<String> names = new HashSet<>();
		
		System.out.println(names.add("Apple"));
		System.out.println(names.add("Mango"));
		System.out.println(names.add("Banana"));
		System.out.println(names.add("Orange"));
		System.out.println("================1");
		Utility.print(names);
		System.out.println("================2");
		System.out.println(names.add("Apple"));
		System.out.println(names.size());
		System.out.println("================3");
		Utility.print(names);
		System.out.println("================4");
		System.out.println(names.contains("Apple"));
		System.out.println(names.remove("Apple"));
		System.out.println("================");
		Utility.print(names);
	}

}
