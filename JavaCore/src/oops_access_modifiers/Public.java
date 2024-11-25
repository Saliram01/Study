package oops_access_modifiers;

public class Public {
	
	public String color;
	public String modal;
	private double fuelLevel;
	private long costOfPurchase;
	
	public Public() {
		
	}
	
	public Public(String color, String modal, double fuelLevel, long costOfPurchase) {
		super();
		this.color = color;
		this.modal = modal;
		this.fuelLevel = fuelLevel;
		this.costOfPurchase = costOfPurchase;
	}


	@Override
	public String toString() {
		
		StringBuilder builder = new StringBuilder();
		
		builder.append("Public [color=")
		.append(color).append(", modal=")
		.append(modal).append(", fuelLevel=")
		.append(fuelLevel).append(", costOfPurchase=")
		.append(costOfPurchase)
		.append("]");
		
		return builder.toString();
	}
	
	
}
