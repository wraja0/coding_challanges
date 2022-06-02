
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

