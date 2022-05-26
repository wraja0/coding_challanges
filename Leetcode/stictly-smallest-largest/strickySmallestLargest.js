const sort = function(nums) {
    nums.sort((a, b) => a - b)
    return nums
}
const countElements = function(nums) {
    let sortedNums = sort(nums)
    let result = 0 
    for(i=1; i<sortedNums.length-1; i++) {
        if ((sortedNums[i] !== sortedNums[0]) && (sortedNums[i] !== sortedNums[sortedNums.length-1])) {
            result ++;
        }
    }
    return result
}