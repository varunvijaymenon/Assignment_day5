// remove duplicates in an array

let arr = [1,1,2,2,3,3];

let uniq = function(arr){
    return [...new Set(arr)];
    }
console.log(uniq(arr));

// output: [1,2,3]

(function(arr){
    console.log([...new Set(arr)])
})(arr)

// output: [1,2,3]