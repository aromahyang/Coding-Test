// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Array.prototype.slice()는 O(N) 복잡도를 가진다.

function solution(A) {
    // Implement your solution here
    let answer = 10000;
    let first = 0;
    let second = A.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < A.length - 1; i++) {
        const cur = A[i];
        first += cur;
        second -= cur;
        const diff = Math.abs(first - second);
        if (diff < answer) {
            answer = diff;
        }
    }
    return answer;
}
