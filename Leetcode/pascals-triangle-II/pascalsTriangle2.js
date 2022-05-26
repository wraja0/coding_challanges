var getRow = function(rowIndex) {
    let arr = [1]
    let count = rowIndex;
    while(count) {
        let newArr =[];
        for(let i = 0; i <= arr.length; i++) {
            if(i === 0 || i === arr.length) newArr.push(1);
            else(newArr.push(arr[i - 1] + arr[i]));
        }
        arr = newArr;
        count--;
    }
    return arr;
};
console.log(getRow(1));
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))
console.log(getRow(6))
console.log(getRow(7))
console.log(getRow(8))
console.log(getRow(9))
console.log(getRow(10))
console.log(getRow(11))
console.log(getRow(12))
console.log(getRow(13))
console.log(getRow(14))
console.log(getRow(15))
console.log(getRow(16))
console.log(getRow(17))
