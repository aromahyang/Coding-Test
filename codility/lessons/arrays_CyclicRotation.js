// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here

    if (!A.length) return A;

    const num = K % A.length;
    if (!num) return A;

    const rest = A.length - num;
    const prev = A.slice(0, rest);
    const next = A.slice(rest);
    return [...next, ...prev];
}
