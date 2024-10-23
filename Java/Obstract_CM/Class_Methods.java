// Abstract class and methods => Loosely coupled relation
// abstract method overriding
package Java.Obstract_CM;
abstract class Area
{
    abstract void area();
}
class Circle extends Area
{
    void area(){
        System.out.println("Circle Area");
    }
}
class Rectangle extends Area
{
    void area(){
        System.out.println("Rectangle Area");
    }
}
public class Class_Methods {
    public static void main(String[] args) {
        Area a = new Circle();
        a.area();
        Area b = new Rectangle();
        b.area();
    }
}
