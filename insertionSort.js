
class InsertionSort{
 constructor(arr){
     this.arr = arr;
 }

 sort(arr){
     this.arr = arr;
     for (let j = arr.length-2; j>=0;j--){
         let key = arr[j]

         let i = j + 1;
         
         while(i < arr.length +1 && arr[i] < key){
             arr[i-1] = arr[i];
             i++
         }
         arr[i-1] = key;

     }
 }

 print(){
     console.log(this.arr);
 }
}

function main(){
    let arr = []
    let lengthOfArr = 100
    for (let i = 0; i < lengthOfArr; i++){
        arr.push(Math.floor(Math.random() *lengthOfArr +1));
    }

    let inSort = new InsertionSort(arr);
    inSort.sort(arr);
    inSort.print()
}

// start of running the code
main();