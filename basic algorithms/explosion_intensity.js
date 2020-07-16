/*
Given a number, return a string of the word "Boom", which varies in the following ways:

    The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").

    If n is evenly divisible by 2, add an exclamation mark to the end.
    
    If n is evenly divisible by 5, return the string in ALL CAPS.
    
    If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

Examples:

    boomIntensity(4) ➞ "Boooom!"
    There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

    boomIntensity(1) ➞ "boom"
    1 is lower than 2, so we return "boom"

    boomIntensity(5) ➞ "BOOOOOM"
    There are 5 "o"s and 5 is divisible by 5 (all caps)

    boomIntensity(10) ➞ "BOOOOOOOOOOM!"

*/

const boomIntensity = (n) => {

    let res = "B";

    switch (true) {

        case (n < 2):

            return "boom";

        case (n % 2 === 0 && n % 5 === 0):

            for (let a = 0; a < n; a++) {

                res += 'O';

            };

            res += 'M!'

            return res;

        case (n % 2 === 0):

            for (let a = 0; a < n; a++) {

                res += 'o';

            };

            res += 'm!';

            return res;

        case (n % 5 === 0):

            for (let a = 0; a < n; a++) {

                res += 'O';

            };

            res += 'M';

            return res;

        case (n > 2):

            for (let a = 0; a < n; a++) {

                res += 'o';

            }

            res += 'm';

            return res;

    }

};

console.log(boomIntensity(3));