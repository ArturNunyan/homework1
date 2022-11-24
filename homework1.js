       // 1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
        //    number. If the last digit of the inserted number is 0, number remains the same.


        function lastToFirst(positiveNumber) {
            let lastNumberToFirst = positiveNumber;
            if ( positiveNumber % 10 !== 0 && Math.floor(positiveNumber/10) !== 0 ) {
                lastNumberToFirst = Math.floor((Math.pow(10, positiveNumber.toString().length) * (positiveNumber % 10) + positiveNumber) / 10);
            }
            return lastNumberToFirst;
        }

       

        console.log(lastToFirst(5002));


        // 2. Given three numbers. Sort them by the ascending order.

        function sortNumbers(a, b, c) {
            if (a > b && a > c){
                if (b > c){
                    console.log(c, b, a);
                }else{
                    console.log(b, c, a);
                }
            }
            else if (b > a && b > c){
                if (a > c){
                    console.log(c, a, b);
                }else{
                    console.log(a, c, b);
                }
            }
            else if (c > a && c > b){
                if (a > b){
                    console.log(b, a, c);
                }else{
                    console.log(a, b, c);
                }
            }    
        }

        sortNumbers(15, 10, 20);



        // 3. Given the following code rewrite it using only two if operators. (Hint: use logical operators).

        let n = +prompt();

        let i = 0;
        let j = 0;

        if (n % 2 === 0 && !Math.floor(n / 10)) {
            i++;
        }

        if (n % 3 === 0 && n % 10 === 1) {
            j++
        }


        // 4. Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered
        //    numbers are positive. For the triangle entered numbers are height and and base.

        function findFigureSquere(figure, height, base) {
            if (height <= 0 || base <= 0) {
                console.log('Please enter only positives');
            }if (figure === 'rectangule') {
                console.log(`Square of the rectangle is ${height * base}`);
            }if (figure === 'triangle') {
                console.log(`Square of the triangle is ${0.5 * height * base}`);
            }
        }


        findFigureSquere('triangle', 10, 20)



        // 5. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

        obj = {a: 1, b: 2, c: 2, d: 2}


        function reverse(obj){
            let reverseObj = {};
            for(let key in obj){
                reverseObj[obj[key]] = key;
            }
            return reverseObj;
            }

        console.log(reverse(obj));