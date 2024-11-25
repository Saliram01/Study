package oops_obstract;

public class CIrcle extends Shape {
	private double radiusCircle;

	public CIrcle(double radiusCircle) {
		this.radiusCircle = radiusCircle;
	}

	public double getRadiusCircle() {
		return radiusCircle;
	}

	@Override
	public double calculateArea() {
		return Math.PI * Math.pow(radiusCircle,2);
	}

}
