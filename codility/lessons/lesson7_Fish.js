// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // Implement your solution here
    let answer = 0;
    const N = A.length;
    const downstreams = [];

    for (let i = 0; i < N; i++) {
        const curSize = A[i];
        const curDirection = B[i];

        if (curDirection === 1) {
            downstreams.push(curSize);
        } else {
            while (downstreams.length) {
                const lastSize = downstreams[downstreams.length - 1];
                if (lastSize < curSize) {
                    downstreams.pop();
                } else {
                    break;
                }
            }
            if (!downstreams.length) {
                answer += 1;
            }
        }
    }

    return answer;
}
