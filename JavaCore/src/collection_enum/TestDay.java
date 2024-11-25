package collection_enum;

public class TestDay {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(" Printing all the days in the week");
		
		for(Day day : Day.values()) {
			System.out.printf("%s : %s \n", day, day.getType());
		}
	}

}
