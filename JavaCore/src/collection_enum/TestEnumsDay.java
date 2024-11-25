package collection_enum;

public class TestEnumsDay {

	public static void main(String[] args) {
		
		System.out.println("Printing all the days in the week");
		
//		System.out.println(DayEnums.Monday);
//		System.out.println(DayEnums.Tuesday);
//		System.out.println(DayEnums.Wednesday);
//		System.out.println(DayEnums.Thursday);
//		System.out.println(DayEnums.Friday);
//		System.out.println(DayEnums.Saturday);
//		System.out.println(DayEnums.Sunday);
		
		for(DayEnums values : DayEnums.values()) {
			System.out.println(values);
		}
	}

}
