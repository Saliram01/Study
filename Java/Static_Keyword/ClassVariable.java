package Java.Static_Keyword;
class Keyword{
    // it memory create only one time for all obj.
    // it is a class variable
    static int count = 0; 
    Keyword(){
        count++;
    }
     void Display(){
        System.out.println(count);
    }
}
public class ClassVariable {
    public static void main(String[] args) {
        Keyword k1 = new Keyword();
        k1.Display();
        Keyword k2 = new Keyword();
        k2.Display();
       
    }
}
