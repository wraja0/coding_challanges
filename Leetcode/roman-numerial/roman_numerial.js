const romanToInt = function(str) {
    total = 0
    for(i=0;i<str.length;i++) {
        if ((str.charAt(i) === "I") && (str.charAt(i+1) === "V")){
            total += 4;
            i++;
            console.log(total)
            console.log(i)
            
        }
        else if ((str.charAt(i) === "I") && (str.charAt(i+1) === "X")){
            total += 9;
            i++;
            console.log(total)
            console.log(i)
        }
        else if ((str.charAt(i) === "X") && (str.charAt(i+1) === "L")){
            total += 40;
            i++;
            console.log(total)
            console.log(i)
        }
        else if ((str.charAt(i) === "X") && (str.charAt(i+1) === "C")){
            total += 90;
            i++;
            console.log(total)
            console.log(i)
        }
        else if ((str.charAt(i) === "C") && (str.charAt(i+1) === "D")){
            total += 400;
            i++;
            console.log(total)
            console.log(i)
        }
        else if ((str.charAt(i) === "C") && (str.charAt(i+1) === "M")){
            total += 900;
            i++;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "M") {
            total += 1000;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "D") {
            total += 500;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "C") {
            total += 100;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "L") {
            total += 50;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "X") {
            total += 10;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "V") {
            total += 5;
            console.log(total)
            console.log(i)
        }
        else if (str.charAt(i) === "I") {
            total += 1;
            console.log(total)
            console.log(i)
        }
    }
    return total
}
romanToInt("MCMXCIV")
