function solution(N, number) {
    if (N === number) {
        return 1;
    }
    
    let answer = -1;
    const allCases = [];
    for (let i = 1; i < 9; i++) {
        const cases = [];
        
        if (i === 1) {
            cases.push(N);
        } else if (i === 2) {
            cases.push(N * 11);
            cases.push(N + N);
            cases.push(N - N);
            cases.push(N * N);
            cases.push(N / N);
        } else {
            cases.push(+N.toString().repeat(i));
            for (let j = 0; j < i - 1; j++) {
                const first = allCases[j], second = allCases[i - 2 - j];
                for (let k = 0; k < first.length; k++) {
                    for (let l = 0; l < second.length; l++) {
                        cases.push(first[k] + second[l]);
                        cases.push(first[k] * second[l]);
                        if (first[k] - second[l] > 0) {
                            cases.push(first[k] - second[l]);
                        }
                        if (Math.floor(first[k] / second[l]) > 0) {
                            cases.push(Math.floor(first[k] / second[l]));
                        }
                    }
                }
            }
        }
        
        if (cases.includes(number)) {
            answer = i;
            break;
        } else {
            allCases.push(cases);
        }
    }
    
    return answer;
}
