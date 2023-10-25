// object literals
// Different ways to create object
// object contain key value pair
// declaration of symbol
const mySym = Symbol("key1")
const jsUser={
    name:"sujeet","full name":"sujeet kumar singh",
    age:18,
   [mySym]:"mykey1",
    location:"jaipur",
    email:"sujeetksingh222@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"],
    roll_no:"m220360cs",
    college:"NITC"

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);
// jsUser.email="sujeetksingh3332gmail.com"
// Object.freeze(jsUser)
// jsUser.email="sujeet234@gmail.com"
// console.log(jsUser);

jsUser.greeting = function()
{
    console.log("Hello js User");
}
jsUser.greetingTwo = function()
{
    console.log(`Hello Js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());