'use strict';

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
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    for(var i = 1; i <= n - 1; i++) {
        let idx = i;
        let currentPosition = arr[i];
        while(currentPosition < arr[idx - 1]) {
            arr[idx] = arr[idx - 1];
            idx--;
        }
        arr[idx] = currentPosition;
        console.log(arr.join(" "))
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
