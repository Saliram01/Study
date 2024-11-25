package file_handling;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class RobostFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a file name which you want to read: ");
		String fileName = input.next();
		
		try (FileReader fw = new FileReader(fileName)) {
			int read = 0;
			while((read = fw.read()) != -1) {
				System.out.print((char)read);
			}
		} catch(FileNotFoundException e) {
			
			System.out.printf("%s file not found ", fileName);
			
		} catch(IOException e) {
			
			System.out.println(e.getMessage());
		}
		
		input.close();
	}

}
