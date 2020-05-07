/*

! Write a function that takes two or more arrays and returns a new array of unique values
! ... in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

function uniteUnique(...arr) {

    let answer = arr[0];

    for (let a = 1; a < arr.length; a++) {

        arr[a].forEach(num => {

            if (!answer.includes(num))
                answer.push(num);

        })

    }

    console.log(answer);
    return answer

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//^ should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]);
//^ should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
//^ should return [1, 2, 3, 5, 4, 6, 7, 8].