function solution(arr) {
    let factorials = [];
    arr.forEach(e => {
        let factorial = getFactorials(e);
        factorials.push(factorial);
    });
    
    let multiples = {};
    for(const fact of factorials) {
        if(Object.keys(fact).length === 0) { continue; }
        
        for(const [num, count] of Object.entries(fact)) {
            if(multiples.hasOwnProperty(num)) {
                if(multiples[num] < count) {
                    multiples[num] = count;
                }
            } else {
                multiples[num] = count;
            }
        }
    }
    
    let answer = 1;
    for(const [num, count] of Object.entries(multiples)) {
        answer *= Math.pow(Number(num), count);
    }
    
    return answer;
}

function getFactorials(n) {
    let factorial = {};
    
    for(let i = 2 ; i <= n ; i++) {
        if(isPrime(i) && n % i === 0) {
            let temp = n, count = 0;
            while(temp % i === 0) {
                count += 1;
                temp /= i;
            }
            
            factorial[i] = count;
        }
    }
    
    return factorial;
}

function isPrime(n) {
    if(n < 2) { return false; }
    
    for(let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    
    return true;
}