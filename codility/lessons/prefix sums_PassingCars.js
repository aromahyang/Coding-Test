// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let eastCount = 0;
    let answer = 0;

    for (let i = 0; i < A.length; i++) { 
        const cur = A[i];
        if (cur === 0) {
            eastCount += 1;
        } else {
            answer += eastCount;
        }
    }

    return answer > 1000000000 ? -1 : answer;
}
