const search = function(nums,original) {
    for (i=0;i<nums.length;i++) {
        if (nums[i] === original) {
            return true;
        }
    }
}
const findFinalValue = function(nums, original) {
    while (search(nums,original) === true) {
        original = original * 2 ;
    }
    return original
}
console.log(findFinalValue([5,3,6,1,12], 3))