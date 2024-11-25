package collections_generics;

import java.util.LinkedList;
import java.util.Queue;

public class LinkListGeneric {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Queue<Integer> que = new LinkedList<>();
		que.add(1); // if empty it return exception
		que.offer(2); // if empty it return false
		Utility.print(que); // output : 1 , 2
		  
		System.out.println(que.peek()); // output : 1 -> if empty it return null
		System.out.println(que.element()); // output : 1 -> 
		System.out.println("Remove element is : " + que.remove()); // if empty it return exception
		Utility.print(que);
		System.out.println(que.poll());
		Utility.print(que);
		
	}

}
