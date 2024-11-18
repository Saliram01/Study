package conditional_statement;

public class Nested_If_Else {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		boolean isSenierCitizenship = false;
		
		boolean isAdult = true;
		
		if(isSenierCitizenship) {
			
			System.out.println("Hello Senier Citizenship");
		} 
		
		else {
			
			if(isAdult) {
				
				System.out.println("Hello Adult");
				
			} 
			else {
				
				System.out.println("Hello Child");
				
			}
		}
	}

}
