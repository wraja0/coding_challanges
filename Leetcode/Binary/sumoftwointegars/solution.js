var getSum = function(a, b) {
    let temp
    while (b !=0) {
        temp = a
        a = a^b
        b = (temp&b) <<1
    }
    return a
};