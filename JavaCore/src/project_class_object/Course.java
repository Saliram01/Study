package project_class_object;

public class Course {
	static int maxCapicity = 100;
	String courseName;
	int enrollments;
	
	String[] enrolledStudents;
	
	Course(String courseName) {
		this.courseName = courseName;
		this.enrollments = 0;
		this.enrolledStudents = new String[maxCapicity];
	}
	
	static void setMaxCapicity(int maxCapicity) {
		Course.maxCapicity = maxCapicity;
	}
	
	void enrollStudents(String studentName) {
		enrolledStudents[enrollments] = studentName;
		enrollments++;
	}
	
	void unenrolledStudent(String studentName) {
		System.out.println("Student removed");
		enrollments--;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Course myCourse = new Course("BIM");
	}

}
