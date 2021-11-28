// find the median of two sorted arrays and

let arr1 = [10,11,12,13,15];
let arr2 = [3,7,12,15,13];


let mergeTwo = function (arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
  }

let result = mergeTwo(arr1, arr2);
console.log(result);

let median = function(arr){
    
    if (arr.length % 2 != 0){
        let index = Math.floor(arr.length / 2);
        med = arr[index];
    }
    
    else{
        let index = arr[(arr.length/2)-1] + arr[arr.length/2];
        med = index/2;
    }

    return med
}

console.log(median(result));

// output: 12

(function(arr){
    console.log(arr.length % 2 != 0 ?  arr[Math.floor(arr.length / 2)] : (arr[ (arr.length/2)-1 ] + arr[ arr.length/2 ]) /2); 
})(result);

// output: 12
