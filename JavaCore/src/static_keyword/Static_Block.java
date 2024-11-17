package static_keyword;

class Constr{
	String name;
	
	// The priority of static block is 1st print 
	
	static {
		System.out.println("I am a static block");
	}
	
	Constr() {
		this.name = "saliram";
	}
	
	void print() {
		System.out.println("My name is " + name);
	}
}

public class Static_Block {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Constr c = new Constr();
		c.print();
	}

}
