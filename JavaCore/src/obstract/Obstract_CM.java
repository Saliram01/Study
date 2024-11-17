package obstract;

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

public class Obstract_CM {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Area a = new Circle();
        a.area();
        Area b = new Rectangle();
        b.area();
	}

}
