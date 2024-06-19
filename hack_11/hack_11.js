/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];


for (let i = 0; i < numberArray.length; i++) {
    if (i % 3 === 0) {
      result.push("h@ck");
    } else if (numberArray[i] === 1) {
      result.push("one");
    } else if (numberArray[i] === 2) {
      result.push(2);
    } else if (numberArray[i] === 3) {
      result.push("three");
    } else if (numberArray[i] === 4) {
      result.push(4);
    } else if (numberArray[i] === 5) {
      result.push("five");
    }
  }
  
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "foo") {
      result.push("f00");
    } else if (stringArray[i] === "bar") {
      result.push("Bar");
    } else if (stringArray[i] === "baz") {
      result.push("b@z");
    } else if (stringArray[i] === "qux") {
      result.push("quX");
    } else if (stringArray[i] === "echo") {
      result.push("3ch0");
    }
  }
  
  console.log(result);

//export result
module.exports = result;