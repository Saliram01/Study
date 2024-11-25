package oops_obstract;

public class ShapesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		CIrcle c = new CIrcle(5);
		Square s = new Square(10.3);
		
		System.out.println("Area of circle" + c.calculateArea());
		System.out.println("Area of square" + s.calculateArea());
		
		};
}
