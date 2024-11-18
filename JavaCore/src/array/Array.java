package array;

public class Array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Single Dimensional Array
		int[] myArr = {80,40,90,30,50};
		for(int my : myArr) { System.out.println(my);}
		
		// MultiDimensional Array
		int[][] array2d = {{1,2,3},{4,5,6},{7,8,9}};
		
		int i = 0;
		while(i < array2d.length) {
			int j = 0;
			while(j < array2d[i].length) {
				System.out.print(array2d[i][j] + " ");
				j++;
			}
			System.out.println();
			i++;
		}
	}

}
