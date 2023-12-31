/*
For a given array A of N integers and a sequence S of N integers from the set {−1, 1}, we define val(A, S) as follows:

val(A, S) = |sum{ A[i]*S[i] for i = 0..N−1 }|

(Assume that the sum of zero elements equals zero.)

For a given array A, we are looking for such a sequence S that minimizes val(A,S).

Write a function:

function solution(A);

that, given an array A of N integers, computes the minimum value of val(A,S) from all possible values of val(A,S) for all possible sequences S of N integers from the set {−1, 1}.

For example, given array:

  A[0] =  1
  A[1] =  5
  A[2] =  2
  A[3] = -2
your function should return 0, since for S = [−1, 1, −1, 1], val(A, S) = 0, which is the minimum possible value.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..20,000];
each element of array A is an integer within the range [−100..100].
*/

function solution(A) {
    var i = 0;
    var j = 0;
    var max = 0;
    var total = 0;
    var target = 0;
    var dp = [];
    var count = [];
    var start = 0;
    var minDiff = Infinity;

    if (A.length === 0) {
        return 0;
    }

    A.sort(function (a, b) {
        return Math.abs(a) - Math.abs(b);
    });

    max = Math.abs(A[A.length - 1]);

    for (i = 0; i <= max; i++) {
        count[i] = 0;
    }

    for (i = 0; i < A.length; i++) {
        A[i] = Math.abs(A[i]);
        count[A[i]]++;
        total += A[i];
    }

    dp[0] = 0;
    for (i = 1; i <= total; i++) {
        dp[i] = -1;
    }

    target = total / 2;

    for (i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            var step = i;
            for (j = 0; j < dp.length; j++) {
                if (dp[j] >= 0) {
                    dp[j] = count[i];
                } else if (j >= step && dp[j - step] > 0) {
                    dp[j] = dp[j - step] - 1;
                }

                if (dp[j] >= 0) {
                    if (j === target) {
                        return 0;
                    } else {
                        minDiff = Math.min(minDiff, Math.abs(total - 2 * j));
                    }
                }
            }
        }
    }

    return minDiff;
}