//lecture2:- operators  and conditional statements
// this is single line comment
/*  this is multiple line cooment*/
console.log("Hello world!");
// Arithmetic operators
let a=5;
let b=2;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
// modulus:- it gives remainder as result
// ex:5%2=1
console.log("a%b=",a%b);

// Exponentiation: it gives power of a given number: it is represented as **
console.log("a**b=",a**b);
// unary  operator
a++;// post increament operator:- use old value then increament
console.log("a=",a);
b++;// post increament operator
console.log("b=",b);
console.log("a=",++a);
console.log("a=",a--);
// Assignment operator : used to assign the value
let c=2;
let d=5;
c+=d;
console.log(c);
c*=d;
console.log(c);
d**=2
console.log(d);

// comparision operator
a=4
b=3
console.log("comparision operators");
console.log("a==b",a==b);
console.log("a!=b",a!=b);
console.log("a===b",a===b);
console.log("a>b",a>b);
console.log("a>=b",a>=b);

console.log("logical operator");
let cond1=a>b
let cond2=a===4
console.log("cond1 and cond2=",cond1&&cond2);
console.log("cond1 or cond2=",cond1 || cond2);


console.log("conditional statements");
let age=25;
if(age>18)
{
    console.log("you can vote");
}
else 
{
    console.log("you can not vote");
}
let mode="dark";
let color;
if(mode==="dark")
{
    color="dark";
}
console.log(color);
if(mode=="dark")
{
    color="black"
}
else{
    color="white"
}
console.log(color);

// program to check whether the given number is even or odd
let num=10;
if(num&1)console.log("it is odd number ");
else console.log("it is even number");

// else if
if(age<18)console.log("Junior");
else if(age>60)console.log("senior");
else console.log("middle");


console.log("ternary operator");
age>18?console.log("you are eligible for voting"): console.log("you are not eligible for voting");

// practice1:- get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not
let number=prompt("Enter a number")
if(number%5==0)console.log("it is divisible by 5");
else console.log("it is not divisible by 5");

//write a code which can give grades to students according to their scores
let score=prompt("Enter a score")
if(score >=80 && score<=100)console.log("A");
else if(score>=70 && score<=79)console.log("B");
else if(score>=60 && score<=69)console.log("C");
else if(score>=50 && score<=59)console.log("D");
else console.log("F");

 

