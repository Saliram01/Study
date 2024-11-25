package getter_setter;

public class GetterSetter {
	 private String name;
	 private int age;
	    
	    String getName() {
	        return name;
	    }
	    
	    void setName(String name) {
	        this.name = name;
	    }
	    
	    int getAge() {
	        return age;
	    }
	    
	    void setAge(int age) {
	        this.age = age;
	    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		GetterSetter G = new GetterSetter();
        G.setName("Saliram");
        G.setAge(22);
        System.out.println("Name : " + G.getName());
        System.out.println("Age : " + G.getAge());
	}

}
