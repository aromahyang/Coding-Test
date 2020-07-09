function solution(name) {
    var answer = 0;
    let isAllA = true;
    
    // check all characters are 'A'
    for(const c of name) {
        if(c != 'A') {
            isAllA = false;
            break;
        }
    }
    
    if(isAllA) {
        return 0;
    }
    
    let dist = name.length - 1;
    for(let i = 0 ; i < name.length ; i++) {
        if(name[i] != 'A') {
            answer += getUpDownCount(name, i);
        } else {
            let idx = i + 1;
            while(idx < name.length && name[idx] == 'A') {
                idx += 1;
            }
            
            let temp = (i-1) * 2 + name.length - idx;
            dist = Math.min(dist, temp);
        }
    }
    
    
    return answer + dist;
}

function getUpDownCount(name, idx) {
    let upCount = Math.abs(name.charCodeAt(idx) - 'A'.charCodeAt(0)); // count from changing character by up key
    let downCount = Math.abs(name.charCodeAt(idx) - 'Z'.charCodeAt(0)) + 1; // count from changing character by down key
    let diff = Math.min(upCount, downCount);
    return diff;
}