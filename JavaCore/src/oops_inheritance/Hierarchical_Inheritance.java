package oops_inheritance;

class A{
    void print_A(){
        System.out.println("Print_A");
    }
}
class B extends A{
    void print_B(){
        System.out.println("Print_B");
    }
}
class C extends A{
    void print_C(){
        System.out.println("Print_C");
    }
}
class D extends A{
    void print_D(){
        System.out.println("Print_D");
    }
}

class E extends A {
	void print_D() {
		System.out.println("Pring_ E class d and e method are same");
	}
}

public class Hierarchical_Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		B b = new B();
        b.print_A();
        b.print_B();

        C c = new C();
        c.print_A();
        c.print_C();

        D d = new D();
        d.print_A();
        d.print_D();
        
        E e = new E();
        e.print_A();
        e.print_D();
	}

}