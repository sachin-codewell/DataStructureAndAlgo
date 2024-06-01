export class Node<T> {
    data: T;
    next!: Node<T>|null;
  
    constructor(data: T, next?: Node<T>|null) {
      this.data = data;
      this.next = (next!=undefined?next:null);
    }
  }
  