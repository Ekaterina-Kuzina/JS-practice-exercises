// №1) Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.Indices in sequence start from 0. If the sequence is empty, you should return 0.

function changeNumber(arr) {
    if(arr.length == 0) {
        return 0;
    }else{        
        let sum = 0;

        arr.filter((num, i) => {
            if (i % 2 == 0) {
                sum += num;
            }
        });
    
        const lastNum = +arr.splice(-1).join();
        return sum * lastNum;
    }
}
console.log(changeNumber([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(changeNumber([]));
console.log(changeNumber([1]));
