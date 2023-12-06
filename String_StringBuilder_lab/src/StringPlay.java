import java.util.Scanner;

public class StringPlay {

    public static void main(String args[]) {

        System.out.println("enter a string:");
        Scanner scanner = new Scanner(System.in);

        String s = scanner.nextLine();
        StringBuilder sb = new StringBuilder(s);
        // replace all occurrences of 'x' with 'y'
//        replace0(sb);
//        replace1(sb);
        replace2(sb);

    }

    private static void replace2(StringBuilder sb) {
        for (int i = 0; i < sb.length(); i++) {
            char ch = sb.charAt(i);
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                if (ch > ('z' - 5)) {
                    ch = (char) ('a' + (ch + 5 - 'z' - 1));
                } else if (ch > ('Z' - 5) && ch <= 'Z') {
                    ch = (char) ('A' + (ch + 5 - 'Z' - 1));
                } else {
                    ch += 5;
                }

                sb.setCharAt(i, ch);
            }
        }
        System.out.println(sb);
    }

    /**
     * Shift all the letters in the string to the next letter.
     *
     * @param sb
     */
    private static void replace1(StringBuilder sb) {
        for (int i = 0; i < sb.length(); i++) {
            char ch = sb.charAt(i);
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                if (ch == 'z') {
                    ch = 'a';
                } else if (ch == 'Z') {
                    ch = 'A';
                } else {
                    ch += 1;
                }
                sb.setCharAt(i, ch);
            }
        }
        System.out.println(sb);
    }

    private static void replace0(StringBuilder sb) {
        for (int i = 0; i < sb.length(); i++) {
            char ch = sb.charAt(i);
            if (ch == 'x') {
                sb.setCharAt(i, 'y');
            }
        }
        System.out.println(sb);
    }
}