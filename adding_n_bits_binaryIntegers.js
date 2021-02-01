/* consider the problem of adding two n-bit binary integers , stored in two n-element arrays A and B.
The sum of the two integers should be stored in binary form in an (n+1)-element arrray C.
*/

function addZeroPadding(count, c){
    let s = ''
    for(let z = 0; z < count; z++){
        s+='0'
    }

    return s+c;
}

function addTwoBinInt(a,b){
    let m = a.length; 
    let n = b.length;   
    let max = Math.max(m,n);  

    if(max === m){
       b =  addZeroPadding(m-n,b)   

    }
    if(max == n){
        a = addZeroPadding(n-m,a)
    }
    //console.log(a.length === b.length)
    let c = ''
    let flow = 0;
    for(let j = max-1 ; j >= 0; j--){

        let x = parseInt(a[j])
        let y = parseInt(b[j])
        let sumofBits = x + y + flow

        //reset flow 
        flow = 0
        
        if(sumofBits === 2){
            flow = 1;
            c='0'+c
        }
        else if(sumofBits ===3){
            flow = 1
            c='1'+ c
        }
        else{
            c = sumofBits + c
        } 
        
    }
    if(flow === 1){
       c = '1' + c;
    }

    return  c;
     
 
}

// generate a random n - bits binary numbers 

function generateRandomBinaryIntegers(){
    let A = []
    let B = []
    for(let i= 0; i < 10; i++){
        A.push(Math.floor(Math.random()*15+1).toString(2))
        B.push(Math.floor(Math.random()*15+1).toString(2))
    }
    return [A, B]
}

function main(){

        let A =  [];
        let B =  [];
        let C =  [];

        //let arr = generateRandomBinaryIntegers();A = arr[0];B = arr[1] ; uncomment this & comment the two  lines below;
        A   =   [ '1000', '1101','1001', '1010','1', '1010','1010', '1101','1100', '1100' ]
        B  =   [ '111',  '1',  '1','101',  '1100', '1011','1101', '10',  '1101','1100'   ]

        //2. maintan
        let n = A.length
        for(let i = 0; i < n ; i++){

            let sum = addTwoBinInt(A[i],B[i])
            C.push(sum)  
        }
        // using dictionary to make sure the algorithms is correct
        // let dictObject1 = {}
        // for (let k = 0 ; k < A.length; k++){
        //     dictObject1[k] = parseInt(A[k],2)
        // }

        // console.log(dictObject1)

        // let dictObject2 = {}
        // for (let k = 0 ; k < B.length; k++){
        //     dictObject2[k] = parseInt(B[k],2)
        // }
        // console.log(dictObject2)

        let dictObject3 = {}
        for(let k = 0 ; k < C.length; k++){
            dictObject3[k] = parseInt(C[k],2)
        }
        console.log(dictObject3)

}

//3. run the code
main()


