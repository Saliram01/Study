package oops_project;

public class ArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayOperations opr = new ArrayOperations(new int[] {1,3,5,9});
		ArrayOperations.Statistics sts = opr.new Statistics();
		System.out.println(sts.mean());
	}

}
