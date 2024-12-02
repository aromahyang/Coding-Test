function solution(s){
    let stack = [];
    
    for(const c of s) {
        if(c === '(') {
            stack.push(c);
        } else {
            if(stack.length) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0 ? true : false ;
}