function linearSearch(arr, target) {
    for(let i = 0; i <= arr.length; i++){
        if(target === arr[i]){
           console.log(`found at index ${i}`);
        }
    }

}

const array = [1,2,3,5,6,7,8];
const target = 7
console.log(linearSearch( array, target));