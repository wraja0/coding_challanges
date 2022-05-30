/*
Given two strings text1 and text2, return the length of their longest common 
subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with 
some characters (can be none) deleted without changing the relative order 
of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
*/
const longestCommonSubsequence = function(text1, text2) {
    let temp
    let m = text1.length
    let n = text2.length
    let dp = []
    dp.length = n + 1
    dp.fill([])
    for (let d=0; d<m+1; d++) {
        dp[0].push(0)
    }
    console.log(dp)
    for (let i=n-1; i>=0; i--) {
        for (let j=m-1; j>=0; j--) {
            if (j!== m+1 || i !==m+1) {
                if (text1.charAt(j) == text2.charAt(i)) {
                    console.log(i,j)
                    dp[i][j] = 1 + dp[i+1][j+1]
                }
                else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
                }
            }
        }
    }
    console.log(dp)
    return dp[0][0]
};
longestCommonSubsequence("ace", "abcde")