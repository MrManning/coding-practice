import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING. The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
        // Write your code here
        if (s.contains("AM")) {
            String twent = s.replace("AM", "");
            if (twent.startsWith("12")) {
                return twent.replaceFirst("12", "00");
            }
            return twent;
        }

        String twent = s.replace("PM", "");
        if (twent.startsWith("12")) {
            return twent;
        }

        String hour = twent.substring(0, 2);
        int begin = Integer.parseInt(hour);
        int twentyFour = 12 + begin;
        return twent.replace(hour, String.valueOf(twentyFour));
    }

}


public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter =
                new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
