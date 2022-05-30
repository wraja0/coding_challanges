
const countBits = function(n) {
    res = []
    const hammingWeight = function(n) {
        let ones = 0
        while (n !==0) {
            ones += n & 1
            n = n >>> 1;
        }
        return ones
        };
   for (let i=0; i<=n; i++) {
     res.push(hammingWeight(i))  
   }
    return res
};