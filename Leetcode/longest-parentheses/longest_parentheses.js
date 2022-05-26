const isValid = function(s) {
    let openparenthcount = null
    let openarr = null
    let openbracket = null
    for(i=0;i<s.length;i++) {
        if (s.charAt(i) === '(') {
            if (openparenthcount ===null) {
                openparenthcount = 1
            }
            else openparenthcount += 1
        }
        if (s.charAt(i) === '[') {
            if (openarr ===null) {
                 openarr = 1
            }
            else openarr += 1;
    }
        if (s.charAt(i) === '{') {
            if (openbracket ===null) {
                openbracket = 1
            }
         else openbracket += 1
}
if (s.charAt(i) === '}') {
    if (openbracket === 0) {
        return false
    }
    else openbracket -= 1
}
    if (s.charAt(i) === ']')  {
        if (openarr ===0) {
            return false
        }
        else openarr -= 1
}
        if (s.charAt(i) === ')') {
            if (openparenthcount ===0) {
                return false
            }
            else openparenthcount -= 1
        }
        console.log (i)
    }
    if ((openbracket ===0 || openbracket ===null) && (openarr===0 || openarr===null) && (openparenthcount===0 || openparenthcount===null)) {
        return true
    }
    else return false
};
console.log(isValid("()[]{}"))