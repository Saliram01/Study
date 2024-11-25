package thread_Runnable;

public class PrintTask implements Runnable {
	
	public void run() {
		// Print Task
		for (int i = 1; i < 10; i++) {
			System.out.printf(" %d %c ", i, targetChar);
		}
		System.out.printf(" \n %s * task is complete \n", 
				Thread.currentThread().getName(), targetChar);
	}
	
	private final char targetChar;
	
	public PrintTask(char targetChar) {
		this.targetChar = targetChar;
	}
}
