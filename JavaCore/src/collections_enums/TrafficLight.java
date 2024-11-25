package collections_enums;

public enum TrafficLight {
	Red("Stop"), Green("Go"), Yellow("Caution");
	
	private final String action;

	 TrafficLight(String action) {
		this.action = action;
	}
	
	
}
