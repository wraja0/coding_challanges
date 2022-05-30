/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    count = 0
    if (num == 0) return 0
    while (num > 1) {
        if (num%2==0) {
            num = num /2
            count ++
        }
        if (num%2 !== 0){
            num = num -1
            count ++
        }
    }
    if (num == 1) {
        count ++
    }
    return count
};