package file_handling;

import java.io.FileReader;
import java.io.IOException;

public class FileRead {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try (FileReader fr = new FileReader("d://file.txt")){
			
			int read = 0;
			do {
				
				read = fr.read();
				System.out.print((char)read);
				
			} while(read != -1);
			
		} catch(IOException e) {
			System.out.println(e);
		}
	}

}
