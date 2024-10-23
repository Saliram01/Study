package Java.Static_Keyword;
class Dog{
    static int num = 1;
    Dog(){
        num++;
    }
    // When we make static method and static method only acceptes static variable.
    static void Mul(){
        System.out.println(num);
    }
}
public class SataticMethod {
    public static void main(String[] args) {
        Dog.Mul();
    }
}
