function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let temp = [];
    for (let i = 0; i < arr.length; i++)
    if (i % 2 !== 0) {
        temp.push(arr[i]);
    }
    return temp;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let temp = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 !== 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let pow = 1;
        while(pow < i) {
            pow *= 2;
        }
        if (pow === i) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let pow = 1;
        while (pow < i) {
            pow *= n;
        }
        if (pow === i) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let temp = [];
    for (let i = 0; i < arr.length / 2; i++) {
        temp.push(arr[i]);
    }
    return temp;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let temp = [];
    let max = arr.length / 2;
    if (Number.isInteger(max) === false) {
        max = Math.round(max);
    }
    for (let i = max; i < arr.length; i++) {
        temp.push(arr[i]);
    }
    return temp;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
