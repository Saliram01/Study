/*  if single class have same name and multiple constructor with different parameter
     is called Constructor overloading.
 */
package Java.Constructor;
class Apple{
    String Apple;
    String Sweet;
    Apple(){
        System.out.println("Default Parameter");
    }
    Apple(String Apple){
        this.Apple = Apple;
    }
    void print1(){
        System.out.println("With one parameter");
    }
    Apple(String Apple, String Sweet){
        this.Apple = Apple;
        this.Sweet = Sweet;
    }
    void print2(){
        System.out.println("Two parameter");
    }
}
public class Constructor_Overloading {
    public static void main(String[] args) {
        // Apple a = new Apple(); // default parameter

        Apple a1 = new Apple("One"); // single parameter
        a1.print1();

        Apple a2 = new Apple("two","two"); // multiple parameter
        a2.print2();
        
    }
}
