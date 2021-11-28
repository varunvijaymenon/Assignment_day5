// find the sum of all the numbers in an array

let arr = [1,2,3,4,5];

let total = function(arr){

    return arr.reduce((acc,current) => acc + current)
}

console.log(total(arr));

//output: 15

(function(arr){

    console.log(arr.reduce((acc,current) => acc + current))

})(arr);

//output: 15