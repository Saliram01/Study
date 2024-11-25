package thread_Class;

public class SecondTask_Extends_Thread extends Thread{

	public void run() {
		// Second Task
		for (int i = 0; i < 1000; i++) {
			System.out.printf("%d$ ", i);
		}
		System.out.printf("\n %s * Second task is complete", Thread.currentThread().getName());
	}
	
}
