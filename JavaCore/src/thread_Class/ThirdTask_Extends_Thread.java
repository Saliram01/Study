package thread_Class;

public class ThirdTask_Extends_Thread extends Thread{

	public void run() {
		// Third Task
		for (int i = 0; i < 1000; i++) {
			System.out.printf("%d# ", i);
		}
		System.out.printf("\n %s * Third task is complete", Thread.currentThread().getName());
	}

}
