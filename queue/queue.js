class Queue {
    constructor(size) {
        this.maxSize = size;
        // this.items = {};
        this.items = [];
        this.current_size= 0;
        this.front = 0
        this.tail = 0
    }
    isEmpty(){
        return this.items.length === 0
    }
    isFull(){
        return this.items.length === this.maxSize;
    }
    
    enqueue(item) {
       
        if(this.current_size >= this.maxSize){
            console.log('queue is filled');
        }
        else{
            this.items[this.tail] = item
            this.tail++ ;
            this.current_size++;

        }
    }
    dequeue() {

        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
       
    }
    peek() {
        return this.items[this.front]
    }
    printQueue() {
        console.log(this.items);
    }
}
const qq = new Queue(4)

qq.enqueue(5);
qq.enqueue(7);
qq.enqueue(6);
qq.enqueue(25);
// qq.enqueue(25);
// qq.enqueue(5);



qq.dequeue();
qq.dequeue();
console.log(qq.isFull());

console.log(qq.isEmpty());
qq.printQueue();