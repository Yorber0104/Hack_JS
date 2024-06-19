/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let numbers = [7,5,3,1];

let new_result = numbers.map(function(x){
    return x *1;
})

for (let i = 0; i < new_result.length; i++) {
    result.push(new_result[i]);
}

console.log(result);

//export result
module.exports = result;