package project;

class String_Manupulation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String firstName = "Saliram";
		String lastName = "Chaudhary";
		
		String fullName = firstName + " " + lastName;
		System.out.println(fullName);
		
		String full = firstName.concat(" " + lastName);
		System.out.println(full);
		
		System.out.println(fullName.toUpperCase());
	}

}
