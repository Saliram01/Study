package class_object;

public class Car {

	int noWheels;
	String color;
	float maxSpeed;
	int noSeats;
	float currentFuelInLiters;
	
	Car(String color) {
		this.color = color;
		noWheels = 4;
		maxSpeed = 150;
		currentFuelInLiters = 2;
		noSeats = 5;
	}
	
	public Car start() {
		if(currentFuelInLiters == 0) {
			System.out.println("Car is out if fuel , Cannot start");
		} else if(currentFuelInLiters < 5) {
			System.out.println("Car is in reserve mood, please refuel");
			currentFuelInLiters--;
		} else {	
			System.out.println("Car is started.. bruhh....");
		}
		return this;
	}
	
	public void drive() {
		currentFuelInLiters--;
		System.out.println("Car is driving");
	}
	
	public void addFuel(float currentFuelInLiters) {
		this.currentFuelInLiters += currentFuelInLiters;
	}
	
	public float getCurrentFuel() {
		return currentFuelInLiters;
	}
}
