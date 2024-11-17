package copy_obj;

public class Object_Copy {
	
	String name;
    int age;

    Object_Copy(Object_Copy s2) {
        this.name = s2.name;
        this.age = s2.age;
    }

    Object_Copy() {
    }

    void Print() {
        System.out.println(name);
        System.out.println(age);
    }
    
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Object_Copy s1 = new Object_Copy();
        s1.name = "Saliram";
        s1.age = 22;

        Object_Copy s2 = new Object_Copy(s1);
        s2.Print();
	}

}
