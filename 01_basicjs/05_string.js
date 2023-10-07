const name = "sujeet";
const repoCount = 50;
//console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// it is string interploation
const gameName = new String("sujeetkumar");// another way to create string:- it crates string as  key-value pair
// console.log(gameName[0]);// output s
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// const newString=gameName.substring(0,5);
// console.log(newString);

const anotherString = gameName.slice(-1);// last character
// console.log(anotherString);
// console.log(gameName.slice(0));// whole string
// console.log(gameName.slice(-2));// last two character
// console.log(gameName.slice(-4));// last four charater from -4 to end
// console.log(gameName.slice(-4,-1))
// console.log(gameName.slice(-8,-4))
// replace and trim method
const newStringone = " sujeetkumarsing  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://sujeet.com/sujeet%20singh"
console.log(url.replace('%20',"-"));

console.log(url.includes('sujeet'));
console.log(url.includes('sapna'));
// converting string into array based on delimeter
console.log(url.split('/'));

/*  Note: read string from emdm documentation  from google*/

