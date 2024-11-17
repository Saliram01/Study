package static_keyword;

// it memory create only one time for all obj.
// it is a class variable

 class Keyword {
	 static int count = 0;

	 Keyword() {
		count ++;
	 }
	 
	 void display() {
		 System.out.println(count);
	 }
 }
 
 
public class ClassVariable {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Keyword k1 = new Keyword();
		k1.display();
		
		Keyword k2 = new Keyword();
		k2.display();
	}

}
