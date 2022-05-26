const ShortestSubArray = function(nums) {
    let findDegree = (nums) => {
        let freq = {}
        for (let i=0; i<nums.length; i++) {
            if (freq[`${nums[i]}`]) {
                freq[`${nums[i]}`] += 1
            }
            else if (!freq[`${nums[i]}`]) {
                freq[`${nums[i]}`] = 1
            }
        }
        const sortednums = Object.entries(freq).sort((a,b)=>b[1] - a[1])
        let degrees = []
        for (let j=0; sortednums[0][1]== sortednums[j][1]; j++) {
            degrees.push(sortednums[j])
        }
        let firstPos 
        let finalPos
        for (k=0; k<nums.length; k++) {
            for (l=0; l < degrees.length; l++) {
                if (nums[k] == degrees[l][0]) {
                    firstPos = k
                    k = nums.length
                    l = degrees.length
                }
            }
        }
        for (m=nums.length; m>0; m--) {
            for (n=0; n<degrees.length; n++) {
                if (nums[m] == degrees[n][0]) {
                    finalPos = m
                    m = 0 
                    n = degrees.length
                }
            }
        }
        return nums.slice(firstPos,finalPos+1)      
    }
    console.log(findDegree(nums))
};
ShortestSubArray([1,2,2,3,1])