package encapsulation;

class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

public class Encapsulation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Person p = new Person();
        p.setName("Saliram Chaudhary");
        p.setAge(22);

        System.out.println(p.getName());
        System.out.println(p.getAge());
	}

}
