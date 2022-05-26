var maxProduct = function(nums) {
    if (nums.length == 0) return 0 
    let currentMaxVal = nums[0]
    let maxVal = currentMaxVal
    let currentMinVal = currentMaxVal
    for (let i=1; i <nums.length;i++) {
       temp = currentMaxVal
       currentMaxVal = Math.max(nums[i], Math.max(nums[i]*currentMaxVal, nums[i] * currentMinVal))
       currentMinVal = Math.min(nums[i], Math.min(nums[i] * temp, nums[i] * currentMinVal))
       maxVal = Math.max(currentMaxVal, maxVal)

    }
    return maxVal
    
};
console.log(maxProduct([-2,0,-1]))