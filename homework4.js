// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.


function arrayLargestPair(array) {
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + array[i + 1];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

console.log(arrayLargestPair([1, 2, 3, 4, 5]));

// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.


function missingElementFromArray(array) {
    array.sort((a, b) => a - b);
    let missingElementArray = [];
    let start = 0;
    let last = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + array[i + 1] !== array[i] + 1) {
            start = array[i];
            last = array[i + 1];
        }
    }
    for (let j = start + 1; j < last; j++) {
        missingElementArray.push(j)
    }
    return missingElementArray;
}

console.log(missingElementFromArray([5, 1]));

// 3. Implement built in array sort method using bubble sort algorithm.

let arr = [2, 1, 5, 4, 3];

Array.prototype.mySort = function(fn) {
    for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (this[i] < this[j]) {
                backup = this[i];
                this[i] = this[j];
                this[j] = backup;
            }
        }
    }
    return this
}

console.log(arr.mySort());


// 4. Insert a n positive number. Print the n-st prime number.


function primeNumber(number) {
    let back = 1;
    nextPrime:
    for (let i = 2; i <= Infinity; i++) { 
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
            
        }
        back++
        if (back === number) {
            return i;
        }
    }
}

console.log(primeNumber(5));
