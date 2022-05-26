const sumPrimes = function(n) {
    sum = 0 
    if (n<=1 ) return `The Parameter must be an integer greater than 1.`
    else {
        if (n == 2) return 2
        if (n >= 3) sum += 5
        for (i=2; i<=n; i++) {
            j = 2
            while (j <= (Math.sqrt(i))) {
                if (i % j == 0) {
                    j = n
                }
                else {
                    if ((j+1) > (Math.sqrt(i))) {
                        sum += i
                    }
                }
                j++
            }
        }
    }
    return sum
}
console.log(sumPrimes(2000000))
// 142913828922