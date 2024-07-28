// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // Implement your solution here

    const length = A.length;
    if (length < 2) {
        return length;
    }

    let answer = 1;
    let start = 0;
    for (let i = 0; i < length; i++) {
        if (B[start] < A[i]) {
            answer += 1;
            start = i;
        }
    }
    return answer;
}
