package collections_generics;

import java.util.ArrayList;

public class ArrayListGeneric {
	/*
	 * We can set data randomly 
	 * We can declare list of type using generic
	 * */

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ArrayList <String> list = new ArrayList<>();
		list.add("Saliram");
		list.add("Chaudhary");
		list.add(1, "SRC");
		list.remove(1);
		
		if(list.contains("Saliram")) {
			System.out.println("IndexOf Chaudhary is : " + list.indexOf("Chaudhary"));
		}
		
		// using for loop
		for(int i = 0; i <list.size(); i++) {
			System.out.println(list.get(i));
		}
		
		// OR using forEach loop
		for(String str : list) {
			System.out.println(str);
		}
	}

}
