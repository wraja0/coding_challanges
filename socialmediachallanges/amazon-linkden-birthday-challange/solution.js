// https://www.linkedin.com/posts/blossom-babalola_lets-take-a-crack-at-an-algorithm-shall-activity-6915708614703755268-Oa9w?utm_source=linkedin_share&utm_medium=member_desktop_web
/*
This question was one of the two coding assessments I got from Amazon. I couldn't find the exact question worded online, so here is my paraphrase.

Problem: "As a developer, you collect user birthdays in a string format - 14th Mar 2022, and are required to change it to a date format - YYYY-MM-DD before saving it to the database." (paraphrased)

Sample input:
['14th Mar 1972', '7th Apr 1904', '22nd Dec 2014' ]

Output --> ['1972-03-14', '1904-04-07', '2014-12-22' ]

Note:
👉Days and months with single-digit must have 0 appended to the beginning
👉You must assume that the year will always be 4 digits. 
*/
const convertToYYYYMMDD = (birthdayArr)=> {
    let result = []
    let months = {
        'Jan' : '01',
        'Feb' : '02',
        'Mar' : '03',
        'Apr' : '04',
        'May' : '05',
        'Jun' : '06',
        'Jul' : '07',
        'Aug' : '08',
        'Sep' : '09',
        'Oct' : '10',
        'Nov' : '11',
        'Dec' : '12',
        
    }
    for (i=0; i<birthdayArr.length; i++) {
        const convertionArr = birthdayArr[i].split(' ')
        console.log(convertionArr)
        let day 
        if (convertionArr[0].length == 3) {
            day = 0 + convertionArr[0].slice(0,1)
            console.log('worked for a day less than 10')
        }
        if (convertionArr[0].length == 4) {
            day = convertionArr[0].slice(0,2)
            console.log('worked for a day greater than 10')
        }
        console.log(day)
        let month = months[convertionArr[1]]
        console.log(month)
        result.push(convertionArr[2]+'-'+month+'-'+day )
    }
    return result
}
console.log(convertToYYYYMMDD(['14th Mar 1972', '7th Apr 1904', '22nd Dec 2014']))
