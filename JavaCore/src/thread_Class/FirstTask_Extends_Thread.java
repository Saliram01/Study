package thread_Class;

public class FirstTask_Extends_Thread extends Thread {
	
	public void run() {
		// First Task
		for (int i = 0; i < 1000; i++) {
			System.out.printf("%d* ", i);
		}
		System.out.printf("\n %s * first task is complete", Thread.currentThread().getName());
	}

}
