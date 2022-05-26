const maxEnvelopes = (arr) => {
    arr.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let dp = []
    for (let i=0; i < arr.length; i++) {
        let h = arr[i][1]
        let left =0 
        let right = dp.length
        while (left < right) {
            let mid = (left + right) >> 1
            if (dp[mid] < h) {
                left = mid + 1
            }
            else {
                right = mid
            }
        }
        dp[left] = h
    }
    return dp.length
}