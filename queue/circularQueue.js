class CircularQueue {
    constructor(size){
        this.maxSize = size;
        this.item = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(val) {
        if(this.currentSize !== this.maxSize){
            if(this.rear === this.maxSize-1){
                this.rear = 0;
            }
            else{
                this.rear++;
            }
            this.item[this.rear] = val;
            this.currentSize++;
            if(this.front === -1 ){
                this.front = this.rear;
            }
        }
    }

    dequeue(){
        if(this.currentSize !== 0){
            this.item[this.front] = null;
            if(this.front === this.maxSize - 1){
                this.front = 0;
            }else {
                this.front++;
            }

            this.currentSize--;

        } else{
            // this.front = -1;
            // this.rear = -1;
            alert('queue is empty')
        }
        
    }
    printQueue() {
        console.log(this.item);
        console.log(this.front);
        console.log(this.rear);
        console.log(this.currentSize);
    }
}
let qq = new CircularQueue(5);
qq.enqueue(4);
qq.enqueue(3);
qq.enqueue(3);
qq.enqueue(2);
qq.enqueue(1);
qq.dequeue()
qq.printQueue();
