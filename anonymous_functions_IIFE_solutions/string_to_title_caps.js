// convert all the strings to title caps in a string array and

let arr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

let title_case = function (arr){
    for(let i = 0; i < arr.length; i++){

        console.log(arr[i].charAt(0).toUpperCase() +  arr[i].slice(1))  //arr[i].substring(1));

    }
}

title_case(arr);

/* Output: 
First 
Second
Third
Fourth
Fifth
Sixth */

(function(arr){
    
    for(let i = 0; i < arr.length; i++){

        console.log(arr[i].charAt(0).toUpperCase() +  arr[i].slice(1))
    }
})(arr);

/* Output: 
First 
Second
Third
Fourth
Fifth
Sixth */