package oops_obstract;

abstract class Vehicle implements Transport {

	private int noOfTires;
	abstract void makeStartSound();

	@Override
	public void getSetGo() {
		System.out.println("Going to place....");
	}
	
	public Vehicle(int noOfTires) {
		this.noOfTires = noOfTires;
	}

	public int getNoOfTires() {
		return noOfTires;
	}

	public void setNoOfTires(int noOfTires) {
		this.noOfTires = noOfTires;
	}
	
	public void commute() {
		System.out.println("Going....");
	}

}
