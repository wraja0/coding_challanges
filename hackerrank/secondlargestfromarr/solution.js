function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=> a -b)
    let i = nums.length -2
    while (nums[i] == nums[nums.length -1]) {
        i --
    }
    return nums[i]
}
console.log(getSecondLargest([2, 3, 6, 6, 5]))