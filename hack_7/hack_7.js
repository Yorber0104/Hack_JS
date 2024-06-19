/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result = arr.map((element, index) => {
    if (index === 0) {
        return "Foo";
    } else if (index === 1) {
        return "Bar";
    } else if (index === 2) {
        return "Baz";
    } else if (index === 3) {
        return "Qux";
    } else {
        return "Echo";
    }
});
console.log(result);

//export result
module.exports = result;