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
     * Complete the 'climbingLeaderboard' function below.
     *
     * The function is expected to return an INTEGER_ARRAY. The function accepts following
     * parameters: 1. INTEGER_ARRAY ranked 2. INTEGER_ARRAY player
     */

    public static List<Integer> climbingLeaderboard(List<Integer> ranked, List<Integer> player) {
        // Write your code here
        int[] ranks = new int[ranked.size()];
        ranks[0] = 1;

        int[] results = new int[player.size()];
        // List results = new ArrayList<>();

        // current leaderboard ranks
        for (int i = 1; i < ranked.size(); i++) {
            if (ranked.get(i).equals(ranked.get(i - 1))) {
                ranks[i] = ranks[i - 1];
            } else {
                ranks[i] = ranks[i - 1] + 1;
            }
        }

        for (int j = 0; j < player.size(); j++) {
            int currentRanking = (int) player.get(j);
            if (currentRanking >= (int) ranked.get(0)) {
                results[j] = 1;
            } else if (currentRanking < (int) ranked.get(ranked.size() - 1)) {
                results[j] = ranks[ranked.size() - 1] + 1;
            } else {
                int index = search(ranked, currentRanking);
                results[j] = ranks[index];
            }
        }

        return Arrays.stream(results).boxed().collect(Collectors.toList());

    }

    public static int search(List<Integer> ranked, int value) {
        int low = 0;
        int high = ranked.size() - 1;

        while (low <= high) {
            int middle = low + (high - low) / 2;

            if ((int) ranked.get(middle) == value) {
                return middle;
            } else if ((int) ranked.get(middle) < value && value < (int) ranked.get(middle - 1)) {
                return middle;
            } else if ((int) ranked.get(middle) > value && value >= (int) ranked.get(middle + 1)) {
                return middle + 1;
            } else if ((int) ranked.get(middle) < value) {
                high = middle - 1;
            } else if ((int) ranked.get(middle) > value) {
                low = middle + 1;
            }
        }

        return -1;
    }

}


public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter =
                new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int rankedCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> ranked =
                Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt).collect(toList());

        int playerCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> player =
                Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt).collect(toList());

        List<Integer> result = Result.climbingLeaderboard(ranked, player);

        bufferedWriter.write(result.stream().map(Object::toString).collect(joining("\n")) + "\n");

        bufferedReader.close();
        bufferedWriter.close();
    }
}
