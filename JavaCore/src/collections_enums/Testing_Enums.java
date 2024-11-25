package collections_enums;

import java.util.Iterator;

public class Testing_Enums {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		TrafficLight color = TrafficLight.Red;
		color = TrafficLight.Green;
		
		Grade grade = Grade.A;
//		Grade grade = Grade.valueOf("D"); // convert string to enemas
		for (Grade value : Grade.values()) {
			System.out.println(value);
		}
		
		
	}

}
