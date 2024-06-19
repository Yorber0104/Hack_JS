/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let result = [];
let numbers = [1,3,5,7];

let new_result = numbers.map(function(x){
    return x *1;
})

for (let i = 0; i < new_result.length; i++) {
    result.push(new_result[i]);
}

console.log(result);

//export result
module.exports = result;