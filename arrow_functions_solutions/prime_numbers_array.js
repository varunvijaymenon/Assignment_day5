// Return all the prime numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10]


let prime = arr.filter(value => {

    for (let i=2; i<value; i++){
        if(value % i == 0){
            return false
        }
    }
    return true
}
)

console.log(prime)

//output: [ 1, 2, 3, 5, 7 ]