const missingNumber = function(nums) {
    let count = 0
    let numcount = 0
    for (let i =0; i<nums.length; i++) {
        count += i +1
        numcount += nums[i]
    }
    return (count - numcount)
};
console.log(missingNumber([3,0,1]))