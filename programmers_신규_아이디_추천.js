function solution(new_id) {
    const answer = new_id
        .toLowerCase() // rule1
        .replace(/[^A-Za-z0-9-_.]/g, '') // rule2
        .replace(/\.{2,}/g, '.') // rule3
        .replace(/^\.|\.$/g, '') // rule4
        .replace(/^$/, 'a') // rule5
        .slice(0, 15)
        .replace(/\.$/, '') // rule6
    return answer.length > 2
        ? answer
        : answer + answer[answer.length - 1].repeat(3 - answer.length);
}
