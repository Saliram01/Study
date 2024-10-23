package Java.Constructor;

public class Perimaterized_Constructor {
    String Name;
    String Gender;
    Perimaterized_Constructor(String Name, String Gender){
        this.Name = Name;
        this.Gender = Gender;
    }
    void Print(){
        System.out.println("Name : " + Name);
        System.out.println("Gender : " + Gender);
    }
    public static void main(String[] args) {
        Perimaterized_Constructor pc ; // declearation class reference
        pc = new Perimaterized_Constructor("Saliram Chaudhary","Male"); // obj asignment refrence variable
        pc.Print();

        Perimaterized_Constructor pc1 ;
        pc1 = new Perimaterized_Constructor("Sushil Chaudhary" ,"Male");
        pc1.Print();

        Perimaterized_Constructor pc2 ;
        pc2 = new Perimaterized_Constructor("Dinesh Chaudhary" ,"Male");
        pc2.Print();

        Perimaterized_Constructor pc3 ;
        pc3 = new Perimaterized_Constructor("Avishek Rana" ,"Male");
        pc3.Print();
    }
}
