package Java.CopyObj;

public class CopyObj {
    String name;
    int age;

    CopyObj(CopyObj s2) {
        this.name = s2.name;
        this.age = s2.age;
    }

    CopyObj() {
    }

    void Print() {
        System.out.println(name);
        System.out.println(age);
    }

    public static void main(String[] args) {
        CopyObj s1 = new CopyObj();
        s1.name = "Saliram";
        s1.age = 22;

        CopyObj s2 = new CopyObj(s1);
        s2.Print();
    }
}
