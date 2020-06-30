function solution(numbers) {
    var answer = 0;
    
    let splitNumbers = numbers.split('');
    let nums = new Set();
    permutation(splitNumbers, '');

    function permutation(array, s) {
    	if(s.length) {
    		// console.log(s);
    		if(!nums.has(Number(s))) {
    			nums.add(Number(s));
    			if(isPrime(Number(s))) {
    				answer += 1;
    			}
    		}
    	}
    	if(array.length) {
	    	for(let i = 0 ; i < array.length ; i++) {
	    		let t = array.slice(0);
	    		t.splice(i, 1);
	    		// console.log(t);
	    		permutation(t, s+array[i]);
	    	}
    	}
    }

    function isPrime(n) {
    	if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    }

    return answer;
}

solution('17');







// 다른 사람 풀이
function primeNums(value) {
    var primes = [];
    var primeData = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            // console.log(i + " " + primes[i]);
            primeData.push(i);
        }
    }
    return primeData;
}

const permutation = ( item, results ) => {
    if ( item.length === 1 ) {
        results.push( item );
        return;
    }

    for ( var i = 0; i < item.length; i++ ) {
        let firstChar = item[i];
        let charsLeft = item.substring(0, i) + item.substring(i+1);
        let innerPermitations = [];
        permutation( charsLeft, innerPermitations );
        for ( var j = 0; j < innerPermitations.length; j++ ) {
            results.push(firstChar + innerPermitations[j]);
        }
    }
};

let combination = ( comNums, numbers, n, r, index, target, resultData ) => {
    if (r === 0) {
        // console.log( comNums );
        permutation(comNums.filter((a) => typeof(a) !== 'undefined').join(""), resultData);
    } else if(target === n) {
        return;
    } else {
        comNums[index] = numbers[target];
        combination(comNums, numbers, n, r-1, index+1, target+1, resultData);
        combination(comNums, numbers, n, r, index, target+1, resultData );
    }
};

function solution(numbers) {
    var answer = 0;
    let resultData = [];

    let array = [];
    for ( var i = 0 ; i < numbers.length; i++ ) {
        combination( array, numbers, numbers.length, i+1, 0, 0, resultData );
    }
    resultData = resultData.sort( (a, b) => a - b ).map( (i) => parseInt(i) );
    let primeNumbers = primeNums(resultData[ resultData.length - 1 ] + 1);
    // console.log( "primeNumbers", primeNumbers );
    // console.log( resultData );

    resultData = resultData.filter( (n, idx) => resultData.indexOf(n) === idx).filter( (n) => primeNumbers.indexOf(n) > -1 );
    // console.log( resultData );
    return resultData.length;
}