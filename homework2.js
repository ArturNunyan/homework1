   // 1. Given two objects. Write a function that performs shallow compare.
        // Input Output

        // var a = { a: ‘1’ };
        // var b = { a: ‘1’};
        // shallowCompare(a, b)

        // true

        // var a = { a: ‘1’ };
        // var b = { a: ‘1’, b: ‘2’ };
        // shallowCompare(a, b)

        // false

        // var a = { };
        // var b = { };
        // shallowCompare(a, b)

        // true


        let a = { };
        let b = { };

        function compareObj(obj1, obj2) {
            let comObj1 = ''
            for (const [key, value] of Object.entries(obj1)) {
                c = `${key}, ${value}`;
            }

            let comObj2 = ''
            for (const [key, value] of Object.entries(obj2)) {
                d = `${key}, ${value}`;
            }
            return comObj1 === comObj2
        }

        console.log(compareObj(a, b));



        // 2. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
        // word&quot;) is a word or phrase without a repeating letter.

        function isIsogram(word) {
            let isIsogramWord = word.toLowerCase();
            for (let i = 0; i < word.length; i++) {
                for (let j = i+1; j < word.length; j++) {
                    if (isIsogramWord[i] === isIsogramWord[j]) {
                        return true;
                    }
                }
            }
            return false
        }

        let givenWord = 'aba'

        console.log(isIsogram(givenWord));


        // 3. Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
        // 5, 8 …, ak = ak-1 + ak-2)

        // Input Output

        // 0 0
        // 2 1
        // 10 55
        // 20 6765

      

        function fibonacci(n) {
            let firtsDigit = 0;
            let secondDigit = 1;
            let fibonacciLastDigit; 
            if (n <= 0) {
                return n;
            }else{
                for (let i = 1; i < n; i++) {
                    fibonacciLastDigit = firtsDigit + secondDigit;
                    firtsDigit = secondDigit;
                    secondDigit = fibonacciLastDigit;
                }
            }
            return fibonacciLastDigit;
        }
        
        console.log(fibonacci(10));

        
        // 4. Insert a number. Calculate product and sum of the digits of the number. If product is
        // divisible by the sum, print the quotient, otherwise print the remainder.
        // Input Output

        // 1233 ‘Quotient is 2.’
        // 5 ‘Quotient is 1.’
        // 0 ‘Cannot calculate.’
        // 455 ‘Remainder is 2.’


        function divAndSumCalculator(number) {
            if (number === 0) {
                return `Cannot calculate.`
            }else{
                let numberStr = number.toString();
                let div = 1;
                let sum = 0;
                for (let i = 0; i < numberStr.length; i++) {
                    div *= +numberStr[i];
                    sum += +numberStr[i];
                }
                if (div % sum !== 0) {
                    return `Reminder is ${div % sum}.`
                }else{
                    return `Quotient is ${div / sum}.`
                }
            }
        }

        console.log(divAndSumCalculator(1233));


        // 5. Write a program to print X star pattern series.

        function printX(n) {
            let row = ''
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                  if (i === j || i + j === n - 1) {
                    row += '*'; 
                  }else{
                    row += ' ';
                  } 
                }
                console.log(row);
                row = '';
            }
        }

        printX(9)