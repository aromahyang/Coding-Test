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
 * Complete the 'longestChain' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 */

function longestChain(words) {
    // Write your code here

    // sort words by ascending order of the length of each word and ascii of each word
    words.sort((a, b) => {
        if(a.length == b.length) {
            return a - b;
        } else {
            return a.length - b.length;
        }
    });
    
    let chains = {};

    for(const word of words) {
        chains[word] = 1; // start with a string chain length of 1

        for(let i = 0 ; i < word.length ; i++) {
            let temp = word.slice(0, i) + word.slice(i+1); // remove one character in a given word
            if(chains.hasOwnProperty(temp)) {
                chains[word] = Math.max(chains[word], chains[temp] + 1);
            }
        }
    }

    let values = Object.values(chains);
    return Math.max(...values); // get the maximum value of chain lengths
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wordsCount = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < wordsCount; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    const result = longestChain(words);

    ws.write(result + '\n');

    ws.end();
}
