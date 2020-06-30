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
 * Complete the 'numPlayers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY scores
 */

function numPlayers(k, scores) {
    // Write your code here

    // sort scores by descending order
    scores.sort((a, b) => b - a);

    let ranks = Array(scores.length).fill(1);
    let prevRank = ranks[0], prevScore = scores[0];
    let count = 0;

    // save ranks according to scores
    for(let i = 1 ; i < scores.length ; i++) {
        if(scores[i] == prevScore) {
            ranks[i] = prevRank;
            count++;
        } else {
            ranks[i] = (prevRank + 1) + count;
            prevRank += (count + 1);
            prevScore = scores[i];
            count = 0;
        }
    }

    // check how many players get to level up
    let levelUpCount = 0;
    for(let i = 0 ; i < scores.length ; i++) {
        if(ranks[i] <= k && scores[i] != 0) {
            levelUpCount++;
        }
    }

    return levelUpCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const k = parseInt(readLine().trim(), 10);

    const scoresCount = parseInt(readLine().trim(), 10);

    let scores = [];

    for (let i = 0; i < scoresCount; i++) {
        const scoresItem = parseInt(readLine().trim(), 10);
        scores.push(scoresItem);
    }

    const result = numPlayers(k, scores);

    ws.write(result + '\n');

    ws.end();
}
