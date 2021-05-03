// №2) Return an array consisting of the largest number from each provided sub-array and get their sum!

function sumOfLargestNum(arr) {
    const largestArr = [];

    arr.filter(item => {
        const newArr = item.sort((a, b) => {
            return a - b;
        });
        largestArr.push(newArr.pop());
    });

    const sumOfNum = largestArr.reduce((sum, current) => { return sum + current });
    return sumOfNum;
}
console.log(sumOfLargestNum([[1, 10, 16, 4], [23, 101, 2, 11], [4, 16, 2, 7], [8, 5, 2, 4]]));
console.log(sumOfLargestNum([[1, 10, 3, 15, 4, 100, 5], [23, 2, 11], [2, 7], [9, 5, 7, 33, 2, 4]]));
console.log(sumOfLargestNum([[14, 5], [40, 20, 11], [2, 78], [9, 5, 7, 33, 2, 4], [1, 11], [99, 3, 14]]));
