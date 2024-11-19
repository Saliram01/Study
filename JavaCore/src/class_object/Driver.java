package class_object;

public class Driver {
	
	static int minAgeOfDriving = 18; 
	
	String name;
	String dateOfLicence;
	int age;
	
	/* Car -> class name
	 * myCar -> class variable -> called reference variable
	 * new -> keyword -> used to make object;
	 * Car() -> Constructor -> it is used to call 
	 * new Car() -> Object 
	 * */
	
	public boolean isAllowedToDrive() {
		return this.age >= minAgeOfDriving;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car royal = new Car("Red");
		
//		royal.addFuel(6);
		royal.start().drive();	
		System.out.println(royal.color);
//		Driver myDriver = new Driver();
//		myDriver.dateOfLicence = "1/Jan/2024";
//		
//		System.out.println(minAgeOfDriving);
	}

}
