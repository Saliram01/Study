package class_object;

class Book {
	
	static int totalBooks;
	
	String title;
	String author;
	String isbn;
	
	boolean isBorrow;
	
	static {
		totalBooks = 0;
	}
	
	{
		totalBooks++;
	}
	
	Book(String isbn, String title, String author) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
	}
	
	Book(String isbn) {
		this(isbn, "Unknown", "Unknown");
	}
	
	static int getTotalNumOfBooks() {
		return totalBooks;
	}
	
	void borrowBook() {
		if(isBorrow) {
			System.out.println("Book is already borrowed");
		} else {
			this.isBorrow = true;
			System.out.println("Enjoy " + this.title);
		}
	}
	
	void returnBook() {
		if(isBorrow) {
			this.isBorrow = false;
			System.out.println("Hope you enjoy, Please leave a review");
		} else {
			System.out.println("This book is already in the library");
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Book book = new Book("1","Design","Author");
		Book myBook = new Book("2");
		System.out.println(Book.getTotalNumOfBooks());
		book.borrowBook();
		myBook.borrowBook();
		
		book.borrowBook();
		book.returnBook();
		book.returnBook();
	}

}
