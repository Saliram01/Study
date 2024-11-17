package static_keyword;

class Dog{
	static int num = 1;
	
	Dog() {
		num++;
	}
	
	static void display() {
		System.out.println(num);
	}
}

public class Static_Method {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Dog.display();
		Dog.display();

	}

}
