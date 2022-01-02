import java.io.*;
import java.util.*;

public class Solution {
    static int solveMeFirst(int a, int b) {
        return a + b;

    }

    public static void main(String[] args) {
        File file = new File("./input.txt");
        try {
            Scanner in = new Scanner(file);
            int a;
            a = in.nextInt();
            int b;
            b = in.nextInt();
            int sum;
            sum = solveMeFirst(a, b);
            System.out.println(sum);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
