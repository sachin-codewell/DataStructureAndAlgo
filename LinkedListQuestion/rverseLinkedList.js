/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// frist approach
function reverseList(head){
    // single node then no need to reverse.
    if(head?.next==null||head==null)return head;

    let preNode = null;
    let hold = null
    // just reverse the pointer.
    while(head!=null){
        hold = head.next;
        head.next = preNode;
        preNode = head;
        head = hold;
    }
    return preNode;
 
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// approach 2
function reverseList(head){
    // base condition
    if(head?.next==null||head==null){
        return head;
    }
    let newNode = reverseList(head.next);
    let frontNode = head.next;
    frontNode.next = head;
    head.next = null;
    return newNode;

    
};