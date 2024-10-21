/**
 * https://gaegosoo.tistory.com/62
 * 풀이 방법을 참고함
 * 
 * 나머지를 index로 하고, 해당 나머지의 개수를 value로 하는 배열을 구해서
 * 1. 나머지가 0인 경우
 * 2. k가 짝수인 경우 k/2를 나머지로 가지는 경우
 * 3. 나머지가 1~(k-1)인 경우, (나머지1, 나머지k-1)의 개수 중 최대값을, (나머지2, 나머지k-2)의 개수중 최대값, ...을 각각 구해서 그 값을 더해준다.
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    const remainders = new Array(k).fill(0);
    for (const val of s) {
        remainders[val % k] += 1;
    }

    let answer = 0;
    
    // 1번에 해당
    if (remainders[0] > 0) {
        answer += 1;
    }

    // 2번에 해당
    if (k % 2 === 0 && remainders[k / 2] > 0) {
        answer += 1;
    }

    // 3번에 해당
    for (let i = 1; i < k / 2; i++) {
        const count = Math.max(remainders[i], remainders[k - i]);
        answer += count;
    }
    return answer;
}
