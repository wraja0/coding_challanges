const climbStairs = function(n) {
    let x = 1
    let y = 1
    for (let i=0; i < n-1; i++) {
        let temp = x
        x = x + y
        y = temp
    }
    return x
};