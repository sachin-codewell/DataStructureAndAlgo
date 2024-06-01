"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
class LinkedList {
    insert(data) {
        let newnode = new Node_1.Node(data);
        if (this.head == null) {
            this.head = newnode;
            this.head.next = null;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newnode;
    }
    print(head) {
        console.log('print');
        if (head != null) {
            let temp = head;
            while (temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
        return;
    }
}
exports.LinkedList = LinkedList;
