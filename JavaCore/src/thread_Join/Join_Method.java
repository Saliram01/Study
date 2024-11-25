package thread_Join;

import thread_Runnable.PrintTask;

public class Join_Method {

	public static void main(String[] args) throws InterruptedException {
		
		long startTime = System.currentTimeMillis();
		
		PrintTask p1 = new PrintTask('*');
		PrintTask p2 = new PrintTask('$');
		PrintTask p3 = new PrintTask('#');
		
		Thread t1 = new Thread(p1);
		t1.start();
		System.out.println(" Thread 1 started");
		
		Thread t2 = new Thread(p2);
		t1.join();
		t2.start();
		System.out.println("\n Thread 2 started");
		
		Thread t3 = new Thread(p3);
		t2.join();
		t3.start();
		System.out.println("\n Thread 3 started");
		
		long endTime = System.currentTimeMillis();
		System.out.printf("\n %s Total time taken : %d ",
				Thread.currentThread().getName(),
				(endTime - startTime));
	}

}
