package Java.Interface;
interface Area
{
    double pi = 3.14, r = 12.5;
    void area();
}
class Circle implements Area
{
    public void area()
    {
        double A = pi * r * r;
        System.out.println("Area of circle is : " + A);
    }
}
class Rectangle implements Area , Bank
{
    public void area()
    {
        System.out.println("Area of rectangle is :");
    }
}
interface Bank
{
    String name = "Saliram";
}

public class Interface {
    public static void main(String[] args)
    {
        Area a = new Circle();
        a.area();

        Area b = new Rectangle();
        b.area();
    }
}
