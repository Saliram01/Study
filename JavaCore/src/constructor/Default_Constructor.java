package constructor;

class Orange {
	Orange() {
		System.out.println("Apple is a fruit");
	}
}
public class Default_Constructor {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Orange a = new Orange();
		Orange b = a; // B this is a refrence obj of A.
	}

}
