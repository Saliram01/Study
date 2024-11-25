package oops_project;

public class Customer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BankAccount account = new BankAccount("001","Saliram");
		
		account.depositMoney(100);
		
		System.out.println(account.withdrawMoney(200));
		
		account.depositMoney(-40);
		
		account.withdrawMoney(0);
	}

}
