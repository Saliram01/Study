package in.saliram.utils;

//import in.saliram.geometry.*;
import in.saliram.geometry.Circle;
import in.saliram.geometry.Rectangle;

public class Calculator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Circle  cir = new Circle(5.5);
		Rectangle rec = new Rectangle(10,5);
		
		double cirArea = Math.PI * Math.pow(cir.radius,2);
		double reactArea = rec.breadth * rec.length;
		
		System.out.println("Area of the circle is: " + cirArea);
		System.out.println("Area of the rectangle is: " + reactArea);
	}

}
