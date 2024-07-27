// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    if (!A.length) return 1;

    const n = A.length + 1;
    const sumInOrder = n * (n + 1) / 2;
    const sum = A.reduce((acc, cur) => acc + cur, 0);
    return Math.abs(sumInOrder - sum);
}
