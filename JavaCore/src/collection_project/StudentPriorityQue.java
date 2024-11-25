package collection_project;

import java.util.PriorityQueue;

class StudentPriorityQue {
	
	private static class Student {
		
		private final String name;
		private final char grade;
		
		@SuppressWarnings("unused")
		public Student(String name, char grade) {
			this.name = name;
			this.grade = grade;
		}

		@SuppressWarnings("unused")
		public String getName() {
			return name;
		}

		@SuppressWarnings("unused")
		public char getGrade() {
			return grade;
		}
		
	}
	public static void main(String[] args) {
		
		PriorityQueue<Student> que = new PriorityQueue<>();
		
	}

}
