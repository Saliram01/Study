package project;

public class DiceRoll {
	
	int roll() {
		double random = Math.random() * 6;
		return (int) Math.ceil(random);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DiceRoll d = new DiceRoll();
		for(int i = 0; i < 10; i++) {
			System.out.println(d.roll());
		}
	}
}
