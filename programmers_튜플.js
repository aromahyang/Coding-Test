function solution(s) {
    var answer = [];
    
    let arrays = [], start = 0;
    for(let i = 1 ; i < s.length-1 ; i++) {
        const c = s[i];
        
        if(c == '{') {
            start = i;
        }
        else if(c == '}') {
            let array = s.slice(start+1, i).split(',').map(e => Number(e));
            arrays.push(array);
        }
    }
    
    arrays = arrays.sort((a,b)=> a.length - b.length)
        .map(e => e.reduce((accum, cur) => accum + cur, 0));
    
    answer.push(arrays[0]);
    for(let i = 1 ; i < arrays.length ; i++) {
        answer.push(arrays[i] - arrays[i-1]);
    }
    
    return answer;
}