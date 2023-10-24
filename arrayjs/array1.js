const myArr = [0,1,2,3,4,5]
// // javascript is like a dynamic array.
// // it is combination of heterogenous data types.
// console.log(myArr[0]);
// //shallow copy share same reference
// // deep copy share different reference
// // Diiferent way to declare array
// const myHeroes= ["shaktiman","naagraj"]
// const myArr2= new Array(1,2,3,4,5)
// console.log(myArr2[0]);
// // Array methods
// // push : used to add an element at end of array
// // pop:- used to pop element from end of array
// myArr.push(6) 
// console.log(myArr);
// // # unshift : is uded to insert value at the start
// myArr.unshift(9)

// console.log(myArr);
// // shift : is used to remove element from beginning of array
// myArr.shift()
// console.log(myArr);
// // includes():- used to check whether an element present or not. it returns either ture or no
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// // join(): combine the array and changes the data type to string

// console.log(myArr);
// console.log(newArr)


// slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
/*
difference between slice and splice :-
slice:- only takes a part of array and array remains same
splice:- it also takes a part of array but array  gets changes .
actually splice removes a part of array.
*/



