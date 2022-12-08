// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

// Input Output
// [2, 12, 15, 48, 64] -1
// [-9, -4, -4, 3, 12, 4, 5] 5

function wrongSortIndexFinder(array) {
    let indexOfElement = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            indexOfElement = i;
        }
    }
    return indexOfElement;
}

console.log(wrongSortIndexFinder([-9, -4, -4, 3, 12, 4, 5]));


// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

// Input Output
// [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] [12, 1, 13, 15]
// [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]] [45, 8, 0, -6]
// [[1], [2], [3], [4]] [1, 2, 3, 4]

let arr = [[1], [2], [3], [4]];

let newAddArray = arr.map( element => {
    let count = 0;
    for (let i = 0; i < element.length; i++) {
        count += element[i];
    }
    return count;
})

console.log(newAddArray);

// 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

// Input Output
// [5, 4, 78, 0, -3, 7] [15, -9, 21]
// [2, 4, 6, 88] []
// [[] []

let arrayOfIntegers = [5, 4, 78, 0, -3, 7];
let oddMultipliedArray = [];

function multipliedArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            oddMultipliedArray.push(array[i]);
        }
    }
    return oddMultipliedArray = oddMultipliedArray.map( element => {
         return element * oddMultipliedArray.length;
    });
}

console.log(multipliedArray(arrayOfIntegers));

// 4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.

// Input  Output

// 1 5 1 [1, 2, 3, 4, 5]
// 10 100 20 [10, 30, 50, 70, 90]
// 1 5 0.5 [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

let newStepedArray = [];

function newArrayByStep(startDigit, lastDigit, step) {
    for (let i = startDigit; i <= lastDigit; i = i + step) {
        newStepedArray.push(i);
    }
    return newStepedArray;
}

console.log(newArrayByStep(1, 5, 0.5));



// 5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)

// Input  Output

// [1, 1, 2, 2, 3]

// 1: 0.4
// 2: 0.4
// 3: 0.2

// [4, 4] 
// 4: 1

// [1, 2, 3]
// 1: 0.3333333333333333
// 2: 0.3333333333333333
// 3: 0.3333333333333333

let frequencyObject = {};

function frequency(array) {
    array.forEach(element => {
        frequencyObject[element] = (frequencyObject[element] || 0) + 1;
    });
    for (let key in frequencyObject){
        frequencyObject[key] = frequencyObject[key] / array.length;
    }
    return frequencyObject;
}

console.log(frequency([1, 1, 2, 2, 3]));