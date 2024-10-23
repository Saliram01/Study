package Java.Static_Keyword;

class Instance{
     // its memory creation is each object .
     int count = 0;
     Instance(){
        count++;
     }
     void display(){
        System.out.println(count);
     }
}
public class InstanceVariable {
    public static void main(String[] args) {
        Instance i = new Instance();
        i.display();
        Instance ii = new Instance();
        ii.display();
        Instance iii = new Instance();
        iii.display();
    }
}
