// 1. Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)

// Input Output
// [6, 78, ‘n’, 0, 1] [78, ‘n’, 0, 1]
// [5] []
// [] []

let arr = [1, 2, 3, 4, 5];

function arrayElementChanger(array, i = 0) {
    array[i] = array[i + 1];
    if (array.length - 1 === i) {
        return array.length = array.length - 1;
    }
    arrayElementChanger(array, i + 1)
}

arrayElementChanger(arr)

console.log(arr);

// 2. Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).

// Input Output
// [1, [3, 4, [1, 2]], 10] [1, 3, 4, 1, 2, 10]
// [14, [1, [[[3, []]], 1], 0] [14, 1, 3, 1, 0]

let array = [14, [1, [[[3, []]], 1], 0]];

let flatArray = [];

function recArray(array) {
    if (Array.isArray(array)) {
        for (const v of array) {
            recArray(v);
        }
    } else {
        flatArray.push(array);
    }
}

recArray(array);

console.log(flatArray);


// 3. Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

// Input Output
// 14 5
// 29 2
// 999999999999 9


let sum = 0;


function sumOfNumb(number) {
    sum = sum + number % 10;
    number = Math.floor(number / 10);
    if (number === 0) {
        sumToString = sum.toString();
        if (sumToString.length <= 1) {
            return +sumToString
        }else{
            let resalt = 0;
            for (let i = 0; i <= sumToString.length; i++) {
                resalt += sum % 10;
                sum = Math.floor(sum / 10);
            }
            return resalt;
        }
    }
    return sumOfNumb(number);
}

console.log(sumOfNumb(999999999999));



// 4. Given the list of the following readers:
// [
// { book: ;Catcher in the Rye&quot;, readStatus: true, percent: 40},
// { book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
// { book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
// { book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
// { book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
// { book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
// ];

// Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.

function booksSortByPercent(array) {
    let bookShelf = array
    .filter(el => el.readStatus === true)
    .sort((a, b) => b.percent - a.percent )
    .map(el => ({
        book: el.book,
        readStatus: el.readStatus,
        percent: el.percent + '%'
    }))
    return bookShelf
}

console.log(booksSortByPercent([
{ book: 'Catcher in the Rye', readStatus: true, percent: 40},
{ book: 'Animal Farm', readStatus: true, percent: 20},
{ book: 'SolarisreadStatus', readStatus: false, percent: 90 },
{ book: 'The FallreadStatus', readStatus: true, percent: 50 },
{ book: 'White Nights', readStatus: false, percent: 60 } ,
{ book: 'After DarkreadStatus', readStatus: true, percent: 70 }
]));
