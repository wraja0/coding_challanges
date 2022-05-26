const search = (nums,target)=> {
    if (nums.length == 0) return -1
    let left = 0
    let right = nums.length -1
    if (nums[left] == target) return left
    if (nums[right] == target) return right
    if (nums[right] > nums[left]) {
        let mid = left + Math.floor((right - left) /2)
        if (nums[mid] < target) {
            while (mid < nums.length) {
                if (nums[mid] == target) return mid
                else {
                    mid += 1
                }
            }
        }
        else {
            while (mid >= 0) {
                if (nums[mid] == target) return mid
                else {
                    mid -= 1
                }
            }
        }
    }
    while (left < right) {
        let mid = left + Math.floor((right - left) /2)
        console.log(mid)
        if (nums[mid] == target) return mid
        if (nums[mid +1] == target) return mid +1
        if (nums[right] == target) return right
        if (nums[left] == target) return left
        else if(nums[0] < nums[mid]) {
            if (nums[mid] > target && nums[0]< target) {
                right = mid -1
            }
            else {
                left = mid + 1
            }
        }
        else {
            if (nums[mid] < target &&  nums[nums.length -1] > target) {
                left = mid + 1
            }
            else {
                right = mid - 1
            }
        }
    }
    return -1
}
console.log(search([4,5,6,7,0,1,2],5))