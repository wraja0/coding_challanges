const checkRecord = function(s) {
    let lateCounter = 0
    let absCounter = 0
    for (let i=0; i<s.length;i++) {
        if (s.charAt(i) === 'L') {
            lateCounter ++
        }
        else {
            lateCounter = 0
        }
        if (s.charAt(i) === 'A') {
            absCounter ++
        }
        if (absCounter === 2 || lateCounter === 3) return false
    }
    return true
};