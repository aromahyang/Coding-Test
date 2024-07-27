// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here

    const numbers = new Set();
    for (let i = 0; i < A.length; i++) {
        const cur = A[i];
        if (numbers.has(cur)) {
            numbers.delete(cur);
        } else {
            numbers.add(cur);
        }
    }
    return [...numbers][0];
}
