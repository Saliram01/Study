package string_buffer_and_builder;

public class String_Builder {
	String color;
	String company;
	int noOfWheel;
	int noOfDoors;
	double maxSpeed;
	
	
	public String_Builder(String color, String company, int noOfWheel, int noOfDoors, double maxSpeed) {
		super();
		this.color = color;
		this.company = company;
		this.noOfWheel = noOfWheel;
		this.noOfDoors = noOfDoors;
		this.maxSpeed = maxSpeed;
	}


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("String_Builder [color=");
		builder.append(color);
		builder.append(", company=");
		builder.append(company);
		builder.append(", noOfWheel=");
		builder.append(noOfWheel);
		builder.append(", noOfDoors=");
		builder.append(noOfDoors);
		builder.append(", maxSpeed=");
		builder.append(maxSpeed);
		builder.append("]");
		return builder.toString();
	}


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StringBuilder sb = new StringBuilder("First");
		sb.append(45);
		sb.append(", now this is the");
		sb.append(76.45);
		sb.toString();
		System.out.println(sb);
	}

}
