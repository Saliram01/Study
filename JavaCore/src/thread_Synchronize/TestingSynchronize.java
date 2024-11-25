package thread_Synchronize;

public class TestingSynchronize {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		long startTime = System.currentTimeMillis();
		
		Counter c = new Counter();
		
		UpdaterThread t1 = new UpdaterThread(c);
		UpdaterThread t2 = new UpdaterThread(c);
		
		try {
			t1.start();
			t2.start();
			
			t1.join();
			t2.join();
		}
		catch(InterruptedException e) {
			System.out.println("Thread interrupted " + e.getMessage());
		}
		
		long endTime = System.currentTimeMillis();
		System.out.printf("Final counter value: %d and " +
		"time taken: %d ", c.getCount(),(endTime - startTime));
	}

}
