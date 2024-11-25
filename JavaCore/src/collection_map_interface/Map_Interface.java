package collection_map_interface;

import java.util.HashMap;
import java.util.Map;

public class Map_Interface {

	public static void main(String[] args) {
		
		Map<String , Integer> map = new HashMap<>();
		map.put("Saliram", 25);
		map.put("Sushil", 15);
		map.put("Dinesh", 5);
		map.put("Pradeep", 20);
		map.put("Prabhab", 10);
		
		System.out.println("Total count : " + map.size());
		System.out.println("Access value : " + map.get("Saliram"));
		System.out.println("Check key : " + map.containsKey("sita"));
		System.out.println("Remove list : " + map.remove("Dinesh"));
		System.out.println("Final count : " + map.size());
		
		System.out.println("===================");
		System.out.println("Key Value of Map List");
		
		for(String key : map.keySet()) {
			System.out.printf("%s %s \n", key, map.get(key));
		}
	}

}
