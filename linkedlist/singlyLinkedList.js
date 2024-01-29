class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next; 
    }

}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert first
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++ ;
    }

    //insert last
    insertLast(data){
        let node = new Node(data)
        let current;
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size ++;
    }

    //insert at index
    insertAt(data, index) {
        //out of range
        if(index > 0 && index > this.size){
            return;
        }
         
        //at first
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let node = new Node(data)
        let current, previous;


        //set to first node
        current = this.head;
        let count = 0;

        while( count < index) {
            previous = current; //set previous to index
            count++;
            current = current.next; //set after to index
        
        }
        node.next = current;
        previous.next = node;
        this.size++;

    }

    //get at index
    getAt(index) {
       let current = this.head;
       let count = 0;
       
       while(current) {
        if(count === index) {
            console.log(current.data);
        }
        count++;
        current= current.next;
       }

    }

    //removea at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let count = 0;
        let previous;
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count ++
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;


    }

    //clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // reverse list
    reverse() {
        let next = null;
        let current = this.head;
        let prev = null;

        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }


    // display list data
    printData(){
        let current = this.head;
        // console.log(current)
        while(current){
            console.log(current.data);
            current = current.next
        }
        console.log(this.size);

    }

    // traverse(){
    //     let current = this.head;
    //     // console.log(current)
    //     while(current !== null){
    //         console.log(current.data);
    //         current = current.next
    //     }
    //     // console.log(this.size);

    // }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(233)
ll.insertLast(111);
ll.insertAt(444,2)

// ll.getAt(10)

// ll.removeAt(10)
// ll.reverse();
// ll.traverse()
ll.printData()