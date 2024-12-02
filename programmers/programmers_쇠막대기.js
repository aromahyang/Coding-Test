function solution(arrangement) {
    var answer = 0;
    let stacks = [];
    let count = 0;
    
    for(let i = 0 ; i < arrangement.length ; i++) {
        let c = arrangement[i];
        if(c == '(') {
            stacks.push(c);
            count++;
        } else {
            count--;
            if(arrangement[i-1] == '(') {
                stacks.splice(-1, 1);
                answer += count;
            }
        }
    }
    
    return answer + stacks.filter(e => e == '(').length;
}