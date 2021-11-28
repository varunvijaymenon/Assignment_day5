// return all the prime numbers in an array


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let prime = function(value){

    for (let i=2; i<value; i++){
        if(value % i == 0){
            continue;
        }
    }
    return value
}

var result =[];

for (let k=0; k<arr.length; k++){

    result.push(prime(arr[k]))

}

console.log(result);

/* output: [
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
] */


var result = [];

(function(arr){

    for (let k=0; k<arr.length; k++){

        result.push(prime(arr[k]))
    }

})(arr);

console.log(result);

/* output: [
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
] */