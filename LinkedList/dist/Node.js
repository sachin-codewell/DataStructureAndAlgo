"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = (next != undefined ? next : null);
    }
}
exports.Node = Node;
