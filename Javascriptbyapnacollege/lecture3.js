// loops: used to execute  a piece of code again and again
console.log("for loop");
for( let i=0;i<=5;i++)
{
  console.log("sujeet kumar");
}
console.log("while loop");
let i=0;
while(i<=5)
{
    console.log("this is while loop");
    i++;
}
console.log("do-while loop");
let j=0;
do{
    console.log("this is do while loop");
    j++;
}while(j<5);
let fullname="sujeet";
console.log("for of loop");
for(let val of fullname)
{
    console.log(val);
}
// calculate the length of string
let str="sujeet";
let len=0;
for(let val of str)
{
    len++;
}
console.log("length of string=",str," is:",len);

console.log("for in loop");
let student={
    name:"sujeet kumar ",
    age:24,
    cgpa:8.13,
    ispass:true
}
for(let key in student)
{
    console.log("key=",key,"value=",student[key]);
}
// practice
// print all even numbers between 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==0)console.log("it is even number=",i);
}
// practice 2:
// create a game where you start with any random game number . ask the user to keep guessing the game number untill the user enters correct value
// let num="25";
// let number=prompt("Guess the game number:")
// while(num!=number)
// {
//    number= prompt("you entered wrong number.Guess again:");

// }
// console.log("congratulations,you entered the right number:");

console.log("----------------string-------------------------");
let str1="sujeet"
console.log("length of string is :",str1.length);
// template literal
let specialString=`this is template string`
console.log(specialString);
let obj={
    item:"pen",
    price :10
};

console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

let str2="sujeet"
console.log(str2.toUpperCase());
let str3="SUJEET kumar singh"
console.log(str3.toLowerCase());
let  str4="  this is very good boy  "
console.log(str4.trim());
console.log(str2.slice(3,6));
console.log(str2.concat(str3));
console.log(str2.charAt(4));
console.log(str2.replace('e','k'));


// practice:-
// prompt the user to enter their full name . generate a username for them based on the input .
// start username with @ followed  by their full name and ending with the fullname length
