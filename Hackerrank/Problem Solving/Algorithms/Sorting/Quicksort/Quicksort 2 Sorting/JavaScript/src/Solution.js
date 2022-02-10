function processData(input) {
    //Enter your code here
    let arr = input.split(/[\r\n]+/);
    
    let unsortedArr = arr[1].split(" ").map(Number)
    sort(unsortedArr)
}

function sort(arr) {
    if (arr.length <= 1) return arr

    let left = [];
    let right = [];
    let pivot = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    let sortedLeft = sort(left);
    let sortedRight = sort(right);
    let sortedArr = [...sortedLeft, pivot, ...sortedRight];
    
    console.log(sortedArr.join(" "));
    return sortedArr;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
