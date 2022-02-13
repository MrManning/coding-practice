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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    // glass: (x, y), (x + 1, y), (x + 2, y), (x + 1, y + 1), (x, y + 2), (x + 1, y + 2), (x + 2, y + 2)
    let max = Number.MIN_SAFE_INTEGER;
    for(let row = 0; row < arr.length - 2; row++) {
        for(let col = 0; col < arr[row].length - 2; col++) {

            let top = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
            let mid = arr[row + 1][col + 1];
            let bottom = arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            
            let sum = top + mid + bottom;
            
            if( sum > max ) {
                max = sum
            } 
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
