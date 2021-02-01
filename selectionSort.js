// implementation of selection sort using array
//  best and worst-cases of complexity of the algorithm is : O(n^2)
class SelectionSort{

    constructor(arr){
        this.arr = arr;
    }


    sort(arr){
        this.arr = arr;
        let n = arr.length;

        for(let i = 0; i < n; i++){    // n 
            let key = arr[i];   //  n
            let index = i;   // n
            for (let j = i+1; j < n; j++){    // n  summation of of j : j = i+1 ...n   = (n - 1) +( n-2) + (n- 3) + ....+  1 = (n - 1)/2 * (n)
                if(arr[j] < key){      // (n-1)*(n)/2
                    key = arr[j]    // (n-1)*(n)/2
                    index = j;       // (n-1)*(n)/2
                }
            }
            let v = arr[i]  // store the item of index i   // n
            arr[i] = key;   // put key in its correct location: in arr[i]   //n
            arr[index] = v   // put previous value of arr[i] to arr[index]  // n
        }

        // total time : n+n+n + 4 * (n-1)*n/2   + 3*n  = 5*n + (n-1)*n/2  = (n^2)/2 - n/2 + 5n ==> O-nation: O(n^2)
    }

    print(){
        console.log(this.arr)
    }
}

// driver program
function main(){
    let arr = []
    let lengthOfArr = 100
    for (let i = 0; i < lengthOfArr; i++){
        arr.push(Math.floor(Math.random() *lengthOfArr +1));
    }

    let selectionSort = new SelectionSort(arr);
    selectionSort.sort(arr);
    selectionSort.print()
}

// start of running the code
main();