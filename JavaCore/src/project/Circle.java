package project;

import java.util.Scanner;

public class Circle {
	double radiusInMm;
	
	Circle(double radiusInMm) {
		this.radiusInMm = radiusInMm;
	}
	
	double getCircumfrence() {
		return 2 * radiusInMm * Math.PI;
	}
	
	double getArea() {
		return Math.PI * Math.pow(radiusInMm,2);
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Circle Props : Radius in mm: " + radiusInMm +
				 ",Circumference in mm: "+ getCircumfrence() + 
				 ",Area in mm: " + getArea();
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Please enter radius : ");
		double radius = input.nextDouble();
		Circle c = new Circle(radius);
		System.out.println(c);
		
		input.close();
	}

}
