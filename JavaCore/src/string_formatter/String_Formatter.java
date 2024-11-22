package string_formatter;

public class String_Formatter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String name = "saliram";
		int marks = 80;
		
		System.out.println("Hello " + name + ", your marks are : " + marks);
		
		System.out.printf("Hello %s, your marks are : %d \n",name,marks); // for multiple string
		
		System.out.printf("Hello %S, your marks are : %d \n",name,marks); // for Capital letter
		System.out.printf("Hello %10S, your marks are : %d \n",name,marks); // space before value
		System.out.printf("Hello %-10s, your marks are : %d",name,marks); // space after value
	}

}
