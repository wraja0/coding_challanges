
# Given two strings text1 and text2, return the length of their longest common 
# subsequence. If there is no common subsequence, return 0.

# A subsequence of a string is a new string generated from the original string with 
# ome characters (can be none) deleted without changing the relative order 
# f the remaining characters.

# or example, "ace" is a subsequence of "abcde".
# A common subsequence of two strings is a subsequence that is common to both strings.

def longestCommonSubsequence(text1: str, text2: str) -> int:
        dp = [[0 for j in range(len(text2)+1)] for i in range(len(text1)+1)]
        for i in range(len(text1) - 1, -1, -1):
            for j in range(len(text2) - 1, -1, -1):
                if (text1[i] == text2[j]):
                    dp[i][j] = 1 + dp[i+1][j+1]
                else :
                    dp[i][j] = max(dp[i+1][j], dp[i][j+1])
        return dp[0][0]
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
