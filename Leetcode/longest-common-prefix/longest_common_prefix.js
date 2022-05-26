strs = ["flower","flow","flight"]
const shortest = function(arr) {
    temp = arr[0].length
    shortpos = 0
    for (i=1;i<arr.length ;i++) {
        if (arr[i].length < temp) {
            shortpos = i;
            temp = arr[i].length;
        }
    }
    return shortpos; 
}
console.log(shortest(["Larger","Largest","Small","a","b"]))
const longestCommonPrefix = function(arr) {
    let shortestlength = arr[shortest(arr)].length;
    console.log(shortestlength)
    let shortestindex = shortest(arr)
    console.log(shortestindex)
    result = ""
    for(i=0;i<shortestlength;i++) {
        for (j=0;j<arr.length;j++) {
            if (arr[shortestindex].charAt(i) === arr[j].charAt(i)) {
            }
        else return result
        }
        result+= arr[shortestindex].charAt(i);
    }
    return result
};
console.log(longestCommonPrefix(strs))