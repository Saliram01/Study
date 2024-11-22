package string_class;

public class String_Class {
	String color;
	String company;
	int noOfWheel;
	int noOfDoors;
	double maxSpeed;
	
	public String_Class(String color, String company, int noOfWheel, int noOfDoors, double maxSpeed) {
		super();
		this.color = color;
		this.company = company;
		this.noOfWheel = noOfWheel;
		this.noOfDoors = noOfDoors;
		this.maxSpeed = maxSpeed;
	}
	
	

	@Override
	public String toString() {
		return "String_Class [color=" + color + ", "
				+ "company=" + company + ", noOfWheel=" 
				+ noOfWheel + ", noOfDoors="
				+ noOfDoors + ", maxSpeed=" 
				+ maxSpeed + "]";
	}



	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String_Class thar = new String_Class("Red","Tata",4,4,120);
//		System.out.println(thar.toString());
		System.out.println(thar);
	}

}
