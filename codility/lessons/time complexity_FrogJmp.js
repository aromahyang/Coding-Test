// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // Implement your solution here

    const diff = Y - X;
    if (!diff) return 0;

    return Math.ceil(diff / D);
}
