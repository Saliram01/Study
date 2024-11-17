package constructor;

public class Parameterized_Constructor {
	String name;
	String gender;
	
	Parameterized_Constructor(String name, String gender) {
		this.name = name;
		this.gender = gender;
	}
	
	void Print() {
		System.out.println("Name : " + name);
		System.out.println("Gender : " + gender);
	}
	
	public static void main(String[] args) {
		
		Parameterized_Constructor pc;
		pc = new Parameterized_Constructor("Saliram Chaudhary","Male");
		pc.Print();
	}

}
