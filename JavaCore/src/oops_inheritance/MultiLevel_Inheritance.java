package oops_inheritance;

class Insect{
    void eat(){
        System.out.println("This animal eats food.");
    }
}
class Cockroach extends Insect{
    void bark(){
        System.out.println("The dog barks.");
    }
}
class Valu extends Cockroach{
    void mew(){
        System.out.println("The cat mew.");
    }
}
class Parrot extends Valu{
    void mama(){
        System.out.println("The parrot mama.");
    }
}

public class MultiLevel_Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Parrot myCat = new Parrot();
        myCat.eat();
        myCat.bark();
        myCat.mew();
        myCat.mama();
	}

}
