package project;

public class Pattern {
	
	public static void Square(int num) {
		System.out.println("Square \n");
		
		int i = 0;
		while(i < num) {
			int j = 0;
			while(j < 5) {
				System.out.print(" * ");
				j++;
			}
			i++;
			System.out.println();
		}
		System.out.println();
	}
	
	public static void RightHalfPiramid(int num) {
		System.out.println("Right Half Piramid \n");
		
		int i = 0;
		while(i < num) {
			int j = 0;
			while(j < i) {
				System.out.print(" * ");
				j++;
			}
			i++;
			System.out.println();
		}
		System.out.println();
	}
	
	public static void ReverseRightHalfPiramid(int num) {
		System.out.println("Reverse Right Half Piramid \n");
		
		while(num > 0) {
			int j = 0;
			while(j < num) {
				System.out.print(" * ");
				j++;
			}
			num--;
			System.out.println();
		}
		System.out.println();
	}
	
	public static void LeftHalfPiramid(int num) {
		System.out.println("Left Half Piramid \n");
			
			int rows = num;
			while(rows > 0) {
				int i = 0;
				while(i <= (num - rows)) {
					System.out.print(" * ");
					i++;
				}
				System.out.println();
				rows--;
			}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Square(5);
		RightHalfPiramid(6);
		ReverseRightHalfPiramid(7);
		LeftHalfPiramid(8);
	}
	
}
