/**
 * 정확성만 통과하였고, 효율성은 일부만 통과한 코드입니다.
*/

function solution(words, queries) {
    var answer = [];
    
    for(const query of queries) {
        let count = 0;
        
        for(const word of words) {
            if(query.length != word.length) {
                continue;
            }
            
            let isCorrect = true;
            for(let i = 0 ; i < query.length ; i++) {
                if(query[i] == word[i]) {
                    continue;
                } else {
                    if(query[i] != '?') {
                        isCorrect = false;
                        break;
                    }
                }
            }
            
            if(isCorrect) {
                count += 1;
            }
        }
        
        answer.push(count);
    }
    
    return answer;
}