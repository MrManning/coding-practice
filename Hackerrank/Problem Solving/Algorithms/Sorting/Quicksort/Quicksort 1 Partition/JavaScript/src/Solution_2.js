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
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quickSort(arr) {
    // Write your code here
    let sortedArr = [];
    let leftCounter = 0;
    let rightCounter = arr.length - 1;
    let equal = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > equal) {
            sortedArr[rightCounter] = arr[i];
            rightCounter--;
        } else {
            sortedArr[leftCounter] = arr[i];
            leftCounter++;
        }
    }
    sortedArr[rightCounter] = equal;
    return sortedArr
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = quickSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
