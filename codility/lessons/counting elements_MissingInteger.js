// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const newSet = new Set(A);
    const array = [...newSet];
    array.sort((a, b) => a - b);

    let answer = 1;
    for (let i = 0; i < array.length; i++) { 
        const cur = array[i];
        if (cur < 1) continue;

        if (cur === answer) {
            answer += 1;
        } else {
            break;
        }
    }
    return answer;
}
