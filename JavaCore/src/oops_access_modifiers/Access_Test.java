package oops_access_modifiers;

public class Access_Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Public p = new Public();
		p.color = "Red";
		p.modal = "Swift";
		System.out.println(p);
		
		Public np = new Public("Black","BMW",1,50000);
		System.out.println(np);
	}

}
