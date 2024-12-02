function solution(number, k) {
    var answer = '';
    let count = k;
    let stack = [];
    
    for(const n of number) {
        let current = n;
        
        while(count > 0 && stack[stack.length-1] < current) {
            stack.pop();
            count -= 1;
        }
        
        stack.push(current);
    }
    
    stack.splice(number.length-count)
    answer = stack.join('');
    return answer;
}