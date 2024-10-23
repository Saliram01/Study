package Java.Datatype;

public class datatypes {
    public static void main(String[] args) {
        byte b = 127;
        System.out.println(b); // 1 byte

        short s = 32669;
        System.out.println(s); // 2 byte
                                            // => b,s,i,l 4datatypes default value is integer.
        int i = 23445875;
        System.out.println(i); // 4 byte

        long l = 999999999;
        System.out.println(l); // 8 byte

        //////////////////////////////////

        float f = 2.5f;
        System.out.println(f); // 4 bytes
                                             // => both f and d default value double.
        double d = 4565654;
        System.out.println(d); // 8 bytes

        //////////////////////////////////

        char c = 'S'; // Store any unicode character
        System.out.println(c); // 2 bytes 

        // Mutiple Character
        char[] character = {'S','A','L','I','R','A','M'};
        for(char ch : character){
            System.out.print(ch);
        }

        boolean boo = true;
        System.out.println(boo); // 1 bytes

    }
}
