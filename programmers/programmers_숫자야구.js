function solution(baseball) {
    var answer = 0;
    
    let newBaseball = [];
    for(let element of baseball) {
        newBaseball.push({
            'number': element[0].toString().split(''),
            'strike': element[1],
            'ball': element[2]
        });
    }

    let candidates = [];
    for(let i = 123 ; i <= 987 ; i++) {
        let numbers = i.toString().split('');
        if(!numbers.includes('0')) {
            if(numbers[0] == numbers[1] || numbers[1] == numbers[2] || numbers[0] == numbers[2]) {
                candidates.push('X');
            } else {
                candidates.push(i.toString().split(''));
            }
        } else {
            candidates.push('X');
        }
    }
    
    for(let hint of newBaseball) {
        for(let i = 0 ; i < candidates.length ; i++) {
            if(candidates[i] != 'X') {
                let diffCount = {'strike': 0, 'ball': 0};

                for(let j = 0 ; j < 3 ; j++) {
                    if(hint.number[j] == candidates[i][j]) {
                        diffCount.strike += 1;
                    }
                    else if(hint.number[j] != candidates[i][j] && hint.number.includes(candidates[i][j])) {
                        diffCount.ball += 1;
                    }
                }

                if(hint.strike != diffCount.strike || hint.ball != diffCount.ball) {
                    candidates.splice(i, 1, 'X');
                }
            }
        }
    }

    for(let c of candidates) {
        if(c != 'X') {
            answer += 1;
        }
    }
    
    
    return answer;
}
