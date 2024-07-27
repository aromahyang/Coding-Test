// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here

    if (A.length < X) return -1;

    let answer = -1;
    const leaves = new Set();
    for (let i = 0; i < A.length; i++) { 
        leaves.add(A[i]);
        if (leaves.size === X) {
            answer = i;
            break;
        }
    }
    return answer;
}
