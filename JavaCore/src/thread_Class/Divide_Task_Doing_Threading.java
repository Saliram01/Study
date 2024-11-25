package thread_Class;

public class Divide_Task_Doing_Threading {
	/*
	 * What is thread ?
	 *  -> A thread in java is a small part of a program that can run at the same time as another part.
	 *  -> It helps a program do many things at once. like handling many users or doing different tsak 
	 *     simultaneously.
	 *  -> Thread talk : Thread can talk each other using wait(), notify() and notifyAll() to cordinate
	 *     their works.
	 *  
	 * */
	public static void main(String[] args) {
		
		long startTime = System.currentTimeMillis();
		
		// First Task
		for (int i = 0; i < 50; i++) {
			System.out.printf("%d* ", i);
		}
		System.out.println("\n * first task is complete");
		
		
		// Second Task
		for (int i = 0; i < 50; i++) {
			System.out.printf("%d$ ", i);
		}
		System.out.println("\n * Second task is complete");
		
		
		// Third Task
		for (int i = 0; i < 50; i++) {
			System.out.printf("%d# ", i);
		}
		System.out.println("\n * Third task is complete");
		
		
		// Timing calculation of program program taken
		long endTime = System.currentTimeMillis();
		System.out.printf("Total time taken : %d ",(endTime - startTime));
		
	}

}
