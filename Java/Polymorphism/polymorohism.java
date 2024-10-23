/*  In polymorphism  object are created by parent name and all sub class 
method name overriding to the  parent method name.*/
package Java.Polymorphism;
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

public class polymorohism {
    public static void main(String[] args) {
        Animal A ;
        A = new Elephant();
        // A.Eat();

        A = new Wolf();
        A.Eat();

        A = new Tiger();  
        A.Eat();      
    }
}
