
 const maxSubArray = function(nums) {
   let currentVal = nums[0]
   let maxVal = currentVal
   console.log(maxVal)
    for (let i=1; i<nums.length; i++) {
        currentVal = Math.max(nums[i], nums[i]+ currentVal)
        maxVal = Math.max(maxVal, currentVal)
        console.log(maxVal)
    }
    return maxVal
};
console.log(maxSubArray([-1]))