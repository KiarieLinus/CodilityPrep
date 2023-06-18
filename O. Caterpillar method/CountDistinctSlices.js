/*
An integer M and a non-empty array A consisting of N non-negative integers are given. All integers in array A are less than or equal to M.

A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The slice consists of the elements A[P], A[P + 1], ..., A[Q]. A distinct slice is a slice consisting of only unique numbers. That is, no individual number occurs more than once in the slice.

For example, consider integer M = 6 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 5
    A[3] = 5
    A[4] = 2
There are exactly nine distinct slices: (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2), (3, 3), (3, 4) and (4, 4).

The goal is to calculate the number of distinct slices.

Write a function:

function solution(M, A);

that, given an integer M and a non-empty array A consisting of N integers, returns the number of distinct slices.

If the number of distinct slices is greater than 1,000,000,000, the function should return 1,000,000,000.

For example, given integer M = 6 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 5
    A[3] = 5
    A[4] = 2
the function should return 9, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..M].
*/


function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const LIMIT = 1000000000;

    var lastPos = [];
    var i = 0;
    var count = 0;
    var start = 0;

    if (A.length === 1) {
        return 1;
    }

    for (i = 0; i <= M; i++) {
        lastPos[i] = -1;
    }

    for (i = 0; i < A.length; i++) {
        var item = A[i];

        if (lastPos[item] + 1 > start) {
            start = lastPos[item] + 1;
        }

        lastPos[item] = i;
        count += i - start + 1;

        if (count > LIMIT) break;
    }

    return count > LIMIT ? LIMIT : count;
}