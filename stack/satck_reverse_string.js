
        let data = [];
        let curr_size = data.length;
        // let max = 6;
         function push(newValue){
                data[curr_size] = newValue;
                curr_size += 1;
            
        }

        function pop(){
           
                lastRemovedItem = data[ curr_size - 1 ];
                curr_size -= 1;
                data.length = curr_size;
                return lastRemovedItem;
        }

        function reverse(item){
            console.log(item);
            for(let i = 0; i < item.length ; i++){
              push(item[i]);
               
            }

            for(let i = 0; i< item.length; i++){
               item[i] = pop();
            }
        }
        
        // push(5);
        // push(15);
        // push(52);
        // push(53);
        // push(5);
        // pop();
        // pop()
        // pop()

        // pop()
        // pop()
        // pop()

        // push(34);
        
        // push(15);
// console.log(data);


        let str = "tripti"
        str= str.split('')
        reverse(str)
        console.log(str.join(''));


        
        
        // console.log(data)
  