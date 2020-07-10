function solution(lines) {
    let startTimes = [], endTimes = [];
    
    if(lines.length == 1) {
        return 1;
    }
    
    for(const line of lines) {
        const words = line.split(' ');
        
        let end = words[1].split(':').map(e => Number(e));
        let t = (end[0] * 60 * 60 + end[1] * 60 + end[2]) * 1000;
        endTimes.push(t);
        
        let d = Number(words[2].slice(0, -1)) * 1000;
        let start = t - d + 1;
        startTimes.push(start);
    }
    
    let answer = 1;
    for(let i = 0 ; i < lines.length ; i++) {
        let temp = 1;
        
        for(let j = i+1 ; j < lines.length ; j++) {
            if(endTimes[i] + 1000 <= startTimes[j]) {
                continue;
            } else {
                temp += 1;
            }
        }
        
        answer = Math.max(answer, temp);
    }
    
    return answer;
}