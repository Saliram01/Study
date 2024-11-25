package thread_executor;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Testing_Futures {

	public static void main(String[] args) throws InterruptedException, ExecutionException {
		
		ExecutorService service = Executors.newFixedThreadPool(4);
		
		FetchName fn1 = new FetchName("Saliram");
		FetchName fn2 = new FetchName("Dinesh");
		FetchName fn3 = new FetchName("Sushil");
		FetchName fn4 = new FetchName("Puskar");
		
		Future<String> name1 = service.submit(fn1);
		Future<String> name2 = service.submit(fn2);
		Future<String> name3 = service.submit(fn3);
		Future<String> name4 = service.submit(fn4);
		
		System.out.printf(" Full Name is %s \n", name1.get());
		System.out.printf(" Full Name is %s \n", name2.get());
		System.out.printf(" Full Name is %s \n", name3.get());
		System.out.printf(" Full Name is %s \n", name4.get());
		
		service.shutdown();
	}

}
