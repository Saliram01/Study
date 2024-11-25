package oops_polymorphism;

class Animal
{
    void Eat(){
        System.out.println("Parent animal eat all.");
    }
}
class Tiger extends Animal
{
    void Eat(){
        System.out.println("Tiger animal eat meat.");
    }
}
class Elephant extends Animal
{
    void Eat(){
        System.out.println("Elephant animal eat food.");
    }
}
class Wolf extends Animal
{
    void Eat(){
        System.out.println("Wolf animal eat flesh.");
    }
}

public class PolyMorphism {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Animal A ;
        A = new Elephant();
         A.Eat();

        A = new Wolf();
        A.Eat();

        A = new Tiger();  
        A.Eat();      
	}

}
