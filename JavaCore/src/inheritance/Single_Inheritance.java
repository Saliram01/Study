package inheritance;

class Bird{
    void eat(){
        System.out.println("This animal eats food.");
    }
}
class Sparrow extends Bird{
    void bark(){
        System.out.println("The dog barks.");
    }
}

public class Single_Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Sparrow d = new Sparrow();
        // Calling methods
       d.eat();
       d.bark();
	}

}
