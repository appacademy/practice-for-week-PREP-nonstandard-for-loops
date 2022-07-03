function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let array = []
    for (i = 1; i < arr.length; i+= 2) {
        array.push(arr[i])
}   return array
};

console.log(oddIndices([1,2,3,4,5,6,7,8,9]))
