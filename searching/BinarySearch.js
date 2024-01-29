function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(target === arr[mid]) {
            return mid;
        } else if(target < arr[mid]) {
            right = mid -1 ;

        } else{
            left = mid + 1
        }
        return 'not found';
    }

}
const array = [1,2,3,5,6,7,8];
const target = 10
console.log(binarySearch( array, target));