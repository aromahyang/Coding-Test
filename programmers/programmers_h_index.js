function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => { return a - b });
    // answer = citations[parseInt(citations.length/2)];
    let candidates = [];

    for(let i = 0 ; i < citations.length ; i++) {
        answer = citations[i];
        let result = citations.filter(c => c >= answer).length;
        candidates.push(Math.min(result, answer));
    }
    // console.log(candidates)
    candidates.sort((a, b) => { return b - a });
    answer = candidates[0];

    return answer;
}

solution([3, 0, 6, 1, 5]);
// solution([22, 42]);
// solution([0, 1, 9]);