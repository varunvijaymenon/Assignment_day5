// odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6];

let odd_numbers = function (arr){

    for (let i = 0; i < arr.length; i++){
        if (arr[i] %2 != 0){
            console.log(arr[i]);
        } 
    }

}

odd_numbers(arr);

// Output: 1,3,5


(function(arr){

    for (let i = 0; i < arr.length; i++){
        if (arr[i] %2 != 0){
            console.log(arr[i]);
        } 
    }

})(arr);

// Output: 1,3,5