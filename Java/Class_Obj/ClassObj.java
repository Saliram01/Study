package Java.Class_Obj;

public class ClassObj {
    private  int a = 5, b = 10;
    void Add(){
        int c = a + b;
        System.out.println(c);
    }
    public static void main(String[] args) {
        ClassObj cb ; // declearation obj
        cb = new ClassObj(); // define obj
        cb.Add(); // cb -> Instance class obj And (.) -> Instance Operator
    }
}