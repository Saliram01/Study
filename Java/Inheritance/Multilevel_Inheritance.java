// Multilevel Inheritance with different methods
package Java.Inheritance;
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
public class Multilevel_Inheritance {
    public static void main(String[] args) {
        Parrot myCat = new Parrot();
        myCat.eat();
        myCat.bark();
        myCat.mew();
        myCat.mama();
    }
}
