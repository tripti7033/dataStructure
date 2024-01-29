class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    //insert At start
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        if(this.head) {
            this.head.prev = newNode
        }
        this.head = newNode;
    }

    //insert At last
    addLast(data) {
        const newNode = new Node(data)
        
        if(!this.head){
            this.head= newNode
            return
        }
        let current = this.head;

        while(current.next) {
            current = current.next;
        }
        newNode.prev = current;
        current.next = newNode

    }

    //size
    size() {
        let count = 0;
        let current = this.head;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }

    //add at specified position
    addAt(index, data ) {
        if(index < 0 && index > this.size()){
            return;
        }

        const newNode=  new Node(data)
        if(index === 0 ){
            newNode.next = this.head;
            if(this.head){
                this.head.prev = newNode;
            }
            this.head = newNode
         
        }

        let current = this.head;
       for(let i = 0; i< index ; i++){
            current = current.next;
        }
        newNode.prev = current;
        newNode.next = current.next

        if(current.next) {
            current.next.prev = newNode;
        }

        current.next= newNode
    }

    //get the data
    getAt(index) {
        if( index < 0 && index > this.size()) {
            return;
        }
        let current = this.head; 
        let count = 0;
        while(current) {
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next
        }
    }

    //removefirst
    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;

        if(this.head) {
            this.head.prev = null;
        }

    }

    //remove from last
    removeLast() {
        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return
        }

        let current = this.head;
        let previous;
        // while(current.next) {
        //     previous = current
        //     current = current.next;
        // }
        //  previous.next = null;
        // current = previous;

        while(current.next.next) {
            current = current.next;
        }
        current.next = null;

    }


    //remove from list
    removeAt(index){
        if( index < 0 && index > this.size()) {
            return;
        }

        let current = this.head;
        let count = 0;
        let previous ;

        if(index === 0){
           this.head = current.next;
        }

        if(this.head){
            this.head.prev = null;
        }


        while(count < index) {
            count++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        current = current.next;
        current.prev = previous

    }


    //clear list
    removeAll() {
        this.head = null;
    
    }

    display() {
        let current = this.head;
        // console.log(current.data);
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const dll  = new DoublyLinkedList();
dll.addFirst(122);
dll.addFirst(444);
dll.addLast(345)
dll.addAt(1, 78)
// dll.getAt(2)
// dll.removeAt(1)
// dll.removeFirst();
// dll.removeLast();
dll.display()

dll.removeAll()

dll.display()

