def search(nums, target: int) -> int:
    l = 0
    r = len(nums) -1
    if len(nums) == 0 : 
        ans = -1
    mid = int(l + (r -l)/2)
    while l<r:
        if nums[mid] == target : 
            ans = mid
            break
        elif nums[mid] > target :
            r = mid -1
        else : 
            l = mid + 1
    return ans