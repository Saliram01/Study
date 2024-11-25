package collection_enum;

public enum Day {
	Monday(true),
	Tuesday(true),
	Wednesday(true),
	Thursday(true),
	Friday(true),
	Saturday(false),
	Sunday(true);
	
	private final boolean isWeekday;

	private Day(boolean isWeekday) {
		this.isWeekday = isWeekday;
	}
	
	public String getType() {
		return isWeekday ? "Weekday" : "Weekend";
	}
	
}
