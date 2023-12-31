/*
An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if it is possible to build a triangle with sides of lengths A[P], A[Q] and A[R]. In other words, triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 12
There are four triangular triplets that can be constructed from elements of this array, namely (0, 2, 4), (0, 2, 5), (0, 4, 5), and (2, 4, 5).

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the number of triangular triplets in this array.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 12
the function should return 4, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var start = 0;
    var mid = 1;
    var end = 2;
    var count = 0;

    if (A.length < 3) {
        return 0;
    }

    A.sort(function (a, b) {
        return a - b;
    });

    for (start = 0; start < A.length - 2; start++) {
        for (mid = start + 1; mid < A.length - 1; mid++) {
            end = mid + 1;

            while (end < A.length && check(A, start, mid, end)) {
                end++;
            }

            count += end - mid - 1;
        }
    }

    return count;
}

function check(arr, base, mid, end) {
    if (arr[base] + arr[mid] > arr[end]) return true;

    return false;
}