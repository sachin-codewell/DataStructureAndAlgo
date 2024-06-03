import { Node } from "./Node";

export class LinkedList<T> {
    head !: Node<T>;

    takeInput(inputs: T[]): void{
        if(inputs.length==0){
            return;
        }
        let tail: Node<T> = this.head;
        for(let i:number = 0; i<inputs.length;i++){
            if(inputs[i]==-1){
                tail.next = null;
                return;
            }
            else{
                let newnode: Node<T> = new Node<T>(inputs[i]);
                if(this.head == null){
                    this.head = newnode;
                    tail = this.head;
                }
                else{
                    tail.next = newnode;
                    tail = newnode;
                }
            }
        }
        tail.next = null;
    }

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