function solution(n) {
    var answer = [0];
    
    for(let i = 2 ; i <= n ; i++) {
        let center = Math.floor(answer.length/2);
        answer = fold(answer);
        // answer = fold(answer, center-Math.pow(2, i-1)-1, center+Math.pow(2, i-1)-11);
    }
    
    return answer;
}

function fold(array, start=0, end=0) {
    if(array.length == 1) {
        array.splice(0, 0, 0);
        array.push(1);
    } else {
        array.push(0);
        for(let i = array.length-2 ; i >= 0 ; i--) {
            if(array[i] == 0) {
                array.push(1);
            } else {
                array.push(0);
            }
        }
    }
    return array;
}