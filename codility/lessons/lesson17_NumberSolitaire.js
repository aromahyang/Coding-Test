// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const dp = new Array(A.length).fill(0);
    dp[0] = A[0];

    for (let i = 1; i < A.length; i++) {
        let pre = dp[i - 1] + A[i];
        for (let dice = 1; dice <= 6; dice++) {
            if (i - dice < 0) {
                continue;
            }
            pre = Math.max(pre, dp[i - dice] + A[i]);
        }
        dp[i] = pre;
    }

    return dp[A.length - 1];
}
