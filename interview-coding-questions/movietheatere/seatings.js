
seats1 = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]
let seats2 = [
    [1, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0],
]

function available(row,column,seats) {
    seatRow = seats[row]
    isolated = "This seat would leave an isolated seat!"
    free = "This seat is available!"
    taken = "This seat is taken!"
    if (seatRow[column] === 1) {
        return taken
    }
    if (((column === 1) && (seatRow[0] !==1)) || ((column === seatRow.length -2))&& (seatRow[seatRow.length-1] !==1)) {
        return isolated
    }
    if (column <= 1) {
        if ((seatRow[column + 2] ===1) && (seatRow[column +1]===0)) {
            return isolated
        }
        else return free
    }
    if (column >=seatRow.length -2) {
        if ((seatRow[column -2] === 1 )&& (seatRow[column -1]===0)) {
            return isolated
        }
        else return free
    }
    else if (((seatRow[column + 2] ===1)&& (seatRow[column +1]===0)) || ((seatRow[column - 2] ===1)&& (seatRow[column -1]===0))) {
        return isolated
    }
    else return free
}
console.log("1.")
console.log(available(0,0,seats2))
console.log("2.")
console.log(available(0,1,seats2))
console.log("3.")
console.log(available(0,2,seats2))
console.log("4.")
console.log(available(0,3,seats2))
console.log("5.")
console.log(available(0,4,seats2))
console.log("6.")
console.log(available(0,5,seats2))
console.log("7.")
console.log(available(0,6,seats2))
console.log("8.")
console.log(available(0,7,seats2))