package oops_obstract;

class Car extends Vehicle {

	private int noOfDoors;
	
	public Car() {
		super(4);
	}

	@Override
	void makeStartSound() {
		// TODO Auto-generated method stub
		System.out.println("Vroomm....");
	}
	
}
