package thread_executor;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import thread_Runnable.PrintTask;

public class TestingSingleThreadExecutor {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ExecutorService service = Executors.newSingleThreadExecutor();
		PrintTask task1 = new PrintTask('*');
		PrintTask task2 = new PrintTask('$');
		PrintTask task3 = new PrintTask('#');
		
		service.submit(task1);
		service.submit(task2);
		service.submit(task3);
		service.shutdown();
	}

}