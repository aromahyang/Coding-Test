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
 * Complete the 'droppedRequests' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY requestTime as parameter.
 */

function droppedRequests(requestTime) {
    // Write your code here
    
    let timeCount = {};

    let min10s = requestTime[0], max10s = requestTime[0] + 9; // 10 second period window
    let min60s = requestTime[0], max60s = requestTime[0] + 59; // 60 second period window
    let dropCount = 0;
    for(const [idx, time] of requestTime.entries()) {
        // check whether request time is included in the range 10 and 60 seconds,
        // and update minimum and maximum values if the time is not included in the range
        if(!(time >= min10s && time <= max10s)) {
            min10s = time - 9;
            max10s = time;
        }
        if(!(time >= min60s && time <= max60s)) {
            min60s = time - 59;
            max60s = time;
        }

        if(!timeCount.hasOwnProperty(time)) {
            timeCount[time] = 0;
        }
        timeCount[time]++;

        // check the first limits(the number of transactions in any given second cannot exceed 3)
        if(timeCount[time] > 3) {
            dropCount++;
            continue;
        }

        // check the second limits(the number of transactions in any given 10 second period cannot exceed 20)
        let count10s = 0;
        for(let t = min10s ; t <= max10s ; t++) {
            if(timeCount.hasOwnProperty(t)) {
                count10s += timeCount[t];
            }
        }

        if(count10s > 20) {
            dropCount++;
            continue;
        }

        // check the third limits(the number of transactions in any given minute cannot exceed 60)
        let count60s = 0;
        for(let t = min60s ; t <= max60s ; t++) {
            if(timeCount.hasOwnProperty(t)) {
                count60s += timeCount[t];
            }
        }
        
        if(count60s > 60) {
            dropCount++;
            continue;
        }
    }
    
    return dropCount;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const requestTimeCount = parseInt(readLine().trim(), 10);

    let requestTime = [];

    for (let i = 0; i < requestTimeCount; i++) {
        const requestTimeItem = parseInt(readLine().trim(), 10);
        requestTime.push(requestTimeItem);
    }

    const result = droppedRequests(requestTime);

    ws.write(result + '\n');

    ws.end();
}
