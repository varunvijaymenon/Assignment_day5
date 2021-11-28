// Convert all the strings to title caps in a string array

let arr = ["abba", "bba", "caa"]

let title_case = arr.map(a => a.charAt(0).toUpperCase() + a.substring(1))

console.log(title_case)

//output: [ 'Abba', 'Bba', 'Caa' ]