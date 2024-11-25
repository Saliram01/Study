package collection_project;

class VarArgs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println(concatinate("SRC"));
		
		System.out.println(concatinate("Saliram","Chaudhary"));
		
		System.out.println(concatinate("Suscribe","To","SrcYoutubeChannel"));
	}
	
	public static String concatinate(String... strs) {
		StringBuilder sb = new StringBuilder();
		
		 for(String str : strs) {
			 sb.append(str).append(" "); 
		 }
		 return sb.toString();
		
	}

}
