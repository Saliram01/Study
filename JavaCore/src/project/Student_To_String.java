package project;

class Student_To_String {
	String name;
	int age;
	String rollNumber;
	String house;
	
	
	
	public Student_To_String(String name, int age, String rollNumber, String house) {
		super();
		this.name = name;
		this.age = age;
		this.rollNumber = rollNumber;
		this.house = house;
	}

	public String toString() {
		return "Student Details: {"
				+ " name :" + name 
				+ " age: : " + age 
				+ " rollNumber: " + rollNumber 
				+ " house : " + house +"}";
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Student_To_String ss = new Student_To_String("Saliram",22,"001","Rampur");
		System.out.println(ss);
	}

}
