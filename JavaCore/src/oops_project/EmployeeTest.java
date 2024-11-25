package oops_project;

public class EmployeeTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("=======================");
		Employee e = new Employee("Saliram",22,25000);
		System.out.println(e.getEmployeeDetails());
		
		System.out.println("=======================");
		e.setName("Sushil");
		e.setAge(25);
		e.setSalary(20000);
		System.out.println(e.getEmployeeDetails());
		System.out.println("=======================");
	}

}
