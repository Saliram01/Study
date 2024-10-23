// package Java.08_Oops.Encapsulation;
/*
 * Default -> It can be access in same package only.
 * Public  -> It can be access in every where one package or another package.
 * Private -> It can be access only in same class and when we access another then we use getter setter.
 * Prorect -> It can be access every where in same package  and when we access another package then we 
 * should be extends class to the another package .
 */
package Java.Encapsulation;
class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

public class Encapl {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Saliram Chaudhary");
        p.setAge(22);

        System.out.println(p.getName());
        System.out.println(p.getAge());

    }
}
