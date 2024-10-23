package Java.GetterSetter;
public class GetAndSet {
    String name;
    int age;
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
    public static void main(String[] args) {
        GetAndSet G = new GetAndSet();
        G.setName("Saliram");
        G.setAge(22);
        System.out.println("Name : " + G.getName());
        System.out.println("Age : " + G.getAge());
    }
}
