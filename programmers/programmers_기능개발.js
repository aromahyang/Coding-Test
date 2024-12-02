function solution(progresses, speeds) {
    var answer = [];
    let durations = [];
    
    for(let i = 0 ; i < progresses.length ; i++) {
        let div = (100 - progresses[i]) / speeds[i];
        let duration = (100 - progresses[i]) % speeds[i] ? parseInt(div) + 1 : div;
        durations.push(duration);
    }
    
    let totalCount = 0;
    for(let i = 0 ; i < progresses.length && totalCount < progresses.length ; i++) {
        let count = 1;
        for(let j = i+1 ; j < progresses.length ; j++) {
            if(durations[j] <= durations[i]) {
                count++;
            } else {
                i = j-1;
                break;
            }
        }
        
        answer.push(count);
        totalCount += count;
    }
    
    return answer;
}