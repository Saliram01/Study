package thread_Class;

public class ThreadMainMethod {

	public static void main(String[] args) {
		
		long startTime = System.currentTimeMillis();
		
		FirstTask_Extends_Thread t1 = new FirstTask_Extends_Thread();
		SecondTask_Extends_Thread t2 = new SecondTask_Extends_Thread();
		ThirdTask_Extends_Thread t3 = new ThirdTask_Extends_Thread();
		
		System.out.println("Starting First Thread");
		t1.start();
		System.out.println("Starting Second Thread");
		t2.start();
		System.out.println("Starting Third Thread");
		t3.start();
		
		long endTime = System.currentTimeMillis();
		System.out.printf("%s Total time taken : %d ",
				Thread.currentThread().getName(),
				(endTime - startTime));
		
	}

}
