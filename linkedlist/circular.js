class Node{
    constructor(data){
        this.data = data,
        this.next = null;

    }
}
class CircularLinkedList {
    constructor(){
        this.head = null;
    }

    add(data){
        const node = new Node(data)
        if(!this.head) {
            this.head = node;
            node.next = this.head;
        } else{
            let current = this.head;
            while(current.next !== this.head){
                current= current.next
            }
            current.next = node;
            node.next= this.head
        }
    }
    display(){
      let current= this.head;
      do{
          console.log(current.data);
          current = current.next;
      }
      while(current !== this.head){
      }
    }
}



const cc1 = new CircularLinkedList()
cc1.add(34);
cc1.display();