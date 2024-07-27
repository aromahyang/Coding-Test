// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // Implement your solution here
    const answer = new Array(N).fill(0);
    let max = 0;
    let lastMax = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === N + 1) {
            lastMax = max;
        } else {
            const pos = A[i] - 1;
            if (answer[pos] < lastMax) {
                answer[pos] = lastMax;
            }
            answer[pos] += 1;
            if (max < answer[pos]) {
                max = answer[pos];
            }
        }
    }

    for (let i = 0; i < N; i++) {
        if (answer[i] < lastMax) {
            answer[i] = lastMax;
        }
    }
    return answer;
}
