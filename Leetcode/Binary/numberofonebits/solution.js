const hammingWeight = function(n) {
    let ones = 0
    while (n !==0) {
        ones += n & 1
        n = n >>> 1;
    }
    return ones
};