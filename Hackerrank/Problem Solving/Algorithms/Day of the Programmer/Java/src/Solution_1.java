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
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

class Result {

    /*
     * Complete the 'dayOfProgrammer' function below.
     *
     * The function is expected to return a STRING. The function accepts INTEGER year as parameter.
     */

    public static String dayOfProgrammer(int year) {
        // Write your code here
        int[] months = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31};
        String[] monthByName = {"January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October"};
        String dateString = "";
        // julian calendar
        if (year <= 1917) {
            // leap year
            if (year % 4 == 0) {
                months[1] = 29;
            }

            int sum = 0;
            for (int i = 0; i < months.length; i++) {
                int next = sum + months[i];
                if (next > 256) {
                    int day = 256 - sum;

                    int month = i + 1;
                    dateString = String.format("%02d", day) + "." + String.format("%02d", month)
                            + "." + String.valueOf(year);

                    break;
                }
                sum = next;
            }
            // transition
        } else if (year == 1918) {
            int sum = -13;
            for (int i = 0; i < months.length; i++) {
                int next = sum + months[i];
                if (next > 256) {
                    int day = 256 - sum;

                    int month = i + 1;
                    dateString = String.format("%02d", day) + "." + String.format("%02d", month)
                            + "." + String.valueOf(year);

                    break;
                }
                sum = next;
            }
            // gregorian
        } else {
            // leap year
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                months[1] = 29;
            }
            int sum = 0;
            for (int i = 0; i < months.length; i++) {
                int next = sum + months[i];
                if (next > 256) {
                    int day = 256 - sum;

                    int month = i + 1;
                    dateString = String.format("%02d", day) + "." + String.format("%02d", month)
                            + "." + String.valueOf(year);

                    break;
                }
                sum = next;
            }
        }
        return dateString;
    }

}


public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter =
                new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int year = Integer.parseInt(bufferedReader.readLine().trim());

        String result = Result.dayOfProgrammer(year);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
