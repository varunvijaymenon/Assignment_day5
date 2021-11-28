// return all palindrome in an array

let arr = ["abba", "wufgwoeufhw", "456985", "121"];


let is_palindrome = function(str){

    let test = '';
    let test2 = '';

        for(let i=0; i<str.length/2; i++){

            test = str[i] + test;

            test2 = str[str.length-1-i] + test2;
        
        }
        if(test == test2){
            return true;
        }
        else {
            return false;
        }
};

let loop_function = function(fun,arr){
    let mask=[];

    for (let i=0; i<arr.length; i++){
        
        mask.push(fun(arr[i]));

    }

    let result = arr.filter((value,i) => mask[i])
    console.log(result)

};

loop_function(is_palindrome,arr);

// output: [ 'abba', '121' ]


(function(a){

    let mask =[];

    for (let i=0; i<a.length; i++){

        mask.push(is_palindrome(a[i]))

    }
    let result = arr.filter((value,i) => mask[i])
    console.log(result)

})(arr);

// output: [ 'abba', '121' ]