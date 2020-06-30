'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'ArithmeticEquation' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER N as parameter.
 */

function ArithmeticEquation(N) {
    // Write your code here
    const modulo = 1000007;

    if(N == 1) {
        return 1;
    }

    /**
     * N! = (p1 ^ k1) * (p2 ^ k2) * .. * (pi ^ ki) where pi is prime and ki is a factor of pi
     * Then, the number of factors of N! is (k1 + 1) * (k2 + 1) * .. * (ki + 1).
     * Therefore, the number of factors of (N!)^2 is (2*k1 + 1) * (2*k2 + 1) * .. (3*ki + 1).
     * The number of factors of (N!)^2 is the same as the number of cases of (1/x) + (1/y) = 1/(N!).
     */
    
    let primes = getPrimes(N); // get primes of N
    let factors = getFactors(N, primes); // get factors of N! as dictionary form({prime: factor of the prime})
    
    let ans = 1;
    for(const p in factors) {
        ans = (ans * (2*factors[p] + 1)) % modulo; // get multiplication of (2*ki + 1) with modulo 1000007
    }

    return ans;
}

function getPrimes(N) {
    let primes = [];

    for(let i = 1 ; i <= N ; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

function isPrime(n) {
    if(n < 2) {
        return false;
    }

    for(let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if(n % i == 0) {
            return false;
        }
    }

    return true;
}

function getFactors(N, primes) {
    let factors = {};
    for(const p of primes) {
        factors[p] = 0;
    }

    for(const p of primes) {
        let temp = 1;

        do {
            temp *= p;
            factors[p] += parseInt(N/temp); 
        } while(temp <= N/p)
    }

    return factors;
} 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const N = parseInt(readLine().trim(), 10);

    const result = ArithmeticEquation(N);

    ws.write(result + '\n');

    ws.end();
}
