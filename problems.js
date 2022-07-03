function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let array = []
    for (i = 1; i < arr.length; i+= 2) {
        array.push(arr[i])
}   return array
};

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let revArr = []
    for (i = arr.length - 1; i>=0; i-=2) {
            revArr.push(arr[i])
    } return revArr
};

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let newArr = []
    for (i = 1; i < arr.length; i *=2) {
        newArr.push(arr[i])
    } return newArr
};

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
