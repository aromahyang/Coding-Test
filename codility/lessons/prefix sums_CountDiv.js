// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // Implement your solution here

    let answer = Math.floor(B / K) - Math.floor(A / K);
    if (A % K === 0) {
        answer += 1;
    }
    return answer;
}
