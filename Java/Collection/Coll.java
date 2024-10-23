package Java.Collection;
// import java.util.Iterator;
import java.util.ListIterator;
import java.util.ArrayList;

/* Loop
 * for each loop
 * iterate
 */ 
public class Coll {

    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");
        list.add("Mango");
        list.add("Grapes");

        // For Each Loop
        // for(Integer i : A){
        //     System.out.println(i);
        // }

        // Traverse the list forward
        // Iterate loop
        // Iterator<String> i = list.iterator();// Forward travel
        // while (i.hasNext()) {
        //     String fruits = i.next();
        //     System.out.println(fruits);
        // }

// ============================================================================
        // ListIterator loop

        // for(Integer in : il){
        //     System.out.println(in);
        // }

        
        ListIterator<String> lis = list.listIterator();

        // Traverse the list forward
        while (lis.hasNext()) {
            String listInt = lis.next();
            System.out.println(listInt);
        }

         // Traverse the list backward
        System.out.println("===============");
        while (lis.hasPrevious()) {
            String listStr = lis.previous();
            System.out.println(listStr);
        }

    }
}