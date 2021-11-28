// rotate an array k times

let arr1 = [1,2,3,4,5,6,7,8,9,10,11];
let k = 15;

let rotate = function(arr1,k){

    let arr = [...arr1]

    if(k>=arr.length){
        k= k % arr.length;
    }

    for(let i = 0; i < k; i++){
        arr.unshift(arr.pop())
    }
    return arr
};

console.log(rotate(arr1,k));

/* output: [
  8, 9, 10, 11, 1,
  2, 3,  4,  5, 6,
  7
]
*/


(function(arr1,k){

    let arr = [...arr1];

    if(k >= arr.length){
        k = k % arr.length
    }

    for(let i=0; i < k; i++){
        arr.unshift(arr.pop())
    }

    console.log(arr)
})(arr1,k)

/* output: [
  8, 9, 10, 11, 1,
  2, 3,  4,  5, 6,
  7
]
*/