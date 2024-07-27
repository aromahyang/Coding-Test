// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here

    const newSet = new Set(A);
    const sumOfSet = newSet.size * (newSet.size + 1) / 2;
    const sumOfArray = A.reduce((acc, cur) => acc + cur, 0);
    return sumOfArray === sumOfSet ? 1 : 0;
}
