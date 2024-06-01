import { Node } from "./Node";

export class LinkedList<T> {
    head !: Node<T>|null;

    insert(data:T): void{
        let newnode: Node<T> = new Node(data); 
        if(this.head==null){
            this.head = newnode;
            this.head.next = null;
            return;
        }
        let temp: Node<T> = this.head;
        while(temp.next!=null){
            temp = temp.next
        }
        temp.next = newnode;
    }

    print(head: Node<T>|null): void{
        console.log('print');
        if(head!=null){
            let temp: Node<T>|null = head;
            while(temp!=null){
                console.log(temp.data);
                temp = temp.next;
            } 
        }
        return ;
    }


}