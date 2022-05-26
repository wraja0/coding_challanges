const task = function (arr) {
    resultindex = 0 
    shortest = arr[0]
    for (z=0; z<arr.length -1 ; z++) {
        if (shortest < arr[z +1].length)
            {shortest = arr[z]}
    }
    for (j=0;j<shortest.length;j++){
        for (i=0;i<arr.length;i++) {
            let temp = shortest.charAt(j)
            if ((arr[i].charAt(j)===temp) &(i === arr.length - 1)) {
                resultindex +=1;
            }
            if(arr[i].charAt !== temp) {
                result = ""
                for (k=0;k < resultindex;k++) {
                    result += shortest.charAt(k)
                    return result 
                }
            }
        }
    }
    return shortest
}
console.log(task(["1234","123","1235"]))