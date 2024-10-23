package Java.Static_Keyword;

class Constr{
    String name;
    // The priority of static block is 1st print 
    static{
        System.out.println("i am StaticBlock");
    }
    Constr(){
        this.name = "Saliram";
    }
    void print(){
        System.out.println(name);
    }
}
public class StaticBlock{
    public static void main(String[] args) {
        Constr c = new Constr();
        c.print();
    }
}