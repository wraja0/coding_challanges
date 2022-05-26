const removeDuplicates = function(nums) {
    let temp = [nums[0]]
    let temp2
    for (i=1;i < nums.length; i++) {
        for (j=0; j< temp.length; j++) {
            if (nums[i] === temp[j]) {
                nums.splice(i,1)
                temp2 = j
            }
        }
        if (temp2 !== nums[i]) {
            temp.push(nums[i])
        }
    }
    for (k=0;k <nums.length - 1;k++) {
        if (nums[nums.length -1] === nums[k]) {
            nums.pop()
        }
    }
    for (l=1;l <nums.length;l++) {
        if (nums[0] === nums[l]) {
            nums.shift()
        }
    }
    return nums
};
// console.log(removeDuplicates([1,1,2,4,3,2,6,2,9,4,9,1]))
console.log(removeDuplicates([1,1,2]))