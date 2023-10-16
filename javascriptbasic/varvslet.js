/*var  vs let vs const
1.var is  globally scoped while let and const are block scope
2. var can be updated are re-declared within its scope
3. let can be updated but can not re-declared 
4. const can neither be updated nor be declared
5. var variables asr initialized with undefined whereas 
let and const variablesare not initialized.

 */
console.log("javascript tutorial 3: var,let and const");
var a= 45;
let b ="sujeet"
var c=null
var c = 4
console.log(c);

var d= undefined
const author = "ramdhari singh dinkar"
console.log(author);
// let author = 5;// throw error because const can be redeclred.


{
    let b="this"
    console.log(b);
}
console.log(b);

