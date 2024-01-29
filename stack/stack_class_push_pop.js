
        class Stack{
            data = [];
            currentSize;
            maxSize;

            constructor(size){
                this.maxSize = size;
                this.currentSize = this.data.length;
            }
            
            push(newValue) {
                if(this.currentSize >= this.maxSize){
                    alert("stack is full can't add "+newValue);
                }
                else{
                    this.data[this.currentSize] = newValue;
                    this.currentSize++ ;
                }

            }

            pop(){
                if(this.data.length > 0){
                    this.currentSize --;
                    this.data.length = this.currentSize;
                }
                else{
                    console.warn("data is alrready empty")
                }

            }

            display(){
                console.warn(this.data)

            }
        }

        st1= new Stack(4);
        // st1.push(3)
        // st1.push(13);
        // st1.pop();
        // st1.push(133);

        // st1.display()
 