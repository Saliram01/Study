package static_keyword;

class Instance {
	
	// its memory creation is each object .
	
	int count = 0;
	
	Instance() {
		count++;
	}
	
	void display() {
		System.out.println(count);
	}
}
public class Instance_Variable {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Instance i1 = new Instance();
		i1.display();
		
		Instance i2 = new Instance();
		i2.display();
	}

}
