package file_handling;

import java.io.FileWriter;
import java.io.IOException;

public class FileWriterProgram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try (FileWriter fw = new FileWriter("d://file.txt")){
			
			fw.write("Hello Good Morning!! \n");
			fw.write("My name is saliram chaudhary. \n");
			fw.write("From india , currently i am pursuing full stack developer. \n");
			System.out.println("File Written Successfully.");
			fw.close();
			
		} catch(IOException e) {
			
			System.out.println(e);
			
		}
	}

}
