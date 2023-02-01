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

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    // let count = 0;
    // let isGP = true
    // for(let i = 0; i < 2; i++) {
    //     if(arr[i] * r == arr[i + 1]) {
    //         isGP = false
    //         break
    //     }
    // }
    // let count = isGP ? 1 : 0;
    
    // let i = 0;
    // let up = 0;
    // // let count = 0;
    // while(i + 1 < arr.length) {
    //     if(arr[i] * r == arr[i + 1]) {
    //         up++;
    //         if(up % 3 == 0) count++
    //     }
    //     i++;
    // }
    let i = 0;
    let up = 0;
    let count = 0;
    while(i < arr.length) {
        if(arr[i] * r === arr[i + 1]) {
            up++;
            console.log()
            if(up % 3 == 0) count++
        }
        i++;
    }
    // console.log(count)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
