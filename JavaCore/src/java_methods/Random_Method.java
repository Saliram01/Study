package java_methods;

public class Random_Method {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Random Method
		
		for(int i = 1; i < 10; i++) {
			double random = Math.random() * 100;
			System.out.println("Call " + i + " -> " + random);
		}
	}

}
