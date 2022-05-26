/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 let mergeTwoLists = function(list1, list2) {
    temp = []
    let totallength = list1.length + list2.length
    for (i=0;i < totallength;i++) {
        if (list1[0] >= list2[0]) {
            temp.push(list2[0])
            list2.shift()
        }
        else if (list1[0] < list2[0])  {
            temp.push(list1[0])
            list1.shift()
        }
        else if  (list1.length === 0) {   
            results = temp.concat(list2)
        }
        else if (list2.length === 0) {
            results=temp.concat(list1)
        }
    }
    return results
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))