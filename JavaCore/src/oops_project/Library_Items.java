package oops_project;

public class Library_Items {
	
	private String itemId;
	private String title;
	private String author;
	
	public void checkout() {
		System.out.println("checkout");
	}
	
	public void returnItem() {
		System.out.println("Returning items");
	}
	
}
