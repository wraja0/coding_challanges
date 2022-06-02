def searchInsert(nums, target: int) -> int:
        if nums[0] == target: return 0
        if len(nums) == 1: 
            if nums[0] > target: return 1
            else: return 0
        l = 0
        r = len(nums) -1
        while l <= r :
            mid = l + (r-l)//2
            print(l,r)
            if nums[mid] == target :
                return mid
            if mid == l : return l+1
            if r-l == 1 :
                if nums[r] == target : return r
                if nums[l] == target : return l
                else: return l+2
            if nums[mid] > target :
                r = mid -1
            else :
                l = mid + 1
                
print(searchInsert([1,3,5,6],2))