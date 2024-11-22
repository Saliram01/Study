package project;

class ArrayToString {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] arr = new String[] {"This","is","the","best","and","most","detail","course","in","java"};
		
		StringBuilder sb = new StringBuilder();
		for(String str : arr) {
			sb.append(str).append(" ");
		}
		System.out.println(sb);
	}

}
