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
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    let start = arr[n - 1];
    let startingPosition = n > 1 ? n - 2 : n - 1;
    for(var i = startingPosition; i >= 0; i--) {
        if(start < arr[i]) {
            arr[i + 1] = arr[i]
            console.log(arr.join(" "))
            
            if(i == 0) {
                arr[i] = start
                console.log(arr.join(" "))
                break
            }
            continue;
        } else {
            arr[i + 1] = start;
            console.log(arr.join(" "))
            break;
        }
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
