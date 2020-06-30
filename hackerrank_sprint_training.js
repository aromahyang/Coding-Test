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
 * Complete the 'getMostVisited' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY sprints
 */

function getMostVisited(n, sprints) {
    // Write your code here
    let visits = Array(n).fill(0);
    let paths = {} // save paths of sprints as the form of {sprint_length: [sprint_paths]}
    
    let source;
    for(const [idx, destination] of sprints.entries()) {
        if(idx == 0) {
            source = destination;
            continue;
        } else {
            let path;
            if(source < destination) {
                path = [source, destination];
            } else {
                path = [destination, source];
            }
            let length = Math.abs(source - destination);
            if(!paths.hasOwnProperty(length)) {
                paths[length] = [];
            }
            source = destination;

            // check whether the path is included in the path
            if(existSprint(path, paths[length])) {
                continue;
            }
            else {
                paths[length].push(path);
            }
        }
    }
    
    // update count of visit for each marker
    for(const length in paths) {
        for(const path of paths[length]) {
            let start = path[0], end = path[1];

            if(start < end) {
                for(let i = start-1 ; i < end ; i++) {
                    visits[i]++;
                }
            } else {
                for(let i = end-1 ; i < start ; i++) {
                    visits[i]++;
                }
            }
        }
    }
    
    return getMaxVisit(visits);
}

function existSprint(path, array) {
    let p = JSON.stringify(path);
    let arr = JSON.stringify(array);

    return arr.indexOf(p) > -1;
}

function getMaxVisit(visits) {
    // get a marker of the maximum visit
    let prev = visits[0], marker = 1;
    for(let i = 1 ; i < visits.length ; i++) {
        if(prev < visits[i]) {
            prev = visits[i];
            marker = i+1;
        }
    }

    return marker;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const sprintsCount = parseInt(readLine().trim(), 10);

    let sprints = [];

    for (let i = 0; i < sprintsCount; i++) {
        const sprintsItem = parseInt(readLine().trim(), 10);
        sprints.push(sprintsItem);
    }

    const result = getMostVisited(n, sprints);

    ws.write(result + '\n');

    ws.end();
}
