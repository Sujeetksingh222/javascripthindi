// array: -collection of items
// create array
console.log("creation of array:");
let heroes=["ironman","hulk","thor"]
console.log(heroes);
// finding the length of array
console.log("finding the length of array:");
console.log(heroes.length);
console.log(typeof heroes);
// array indices
console.log("array indices :");
console.log(heroes[2]);
console.log(heroes[0]);
console.log(heroes[3]);
// strings are immutable(can not change) in javascript
// arrays are mutable in javascript.
heroes[1]="sujeet";
console.log(heroes[1]);
// looping over an array
console.log("looping over array:");
for(let val of heroes)
{
    console.log(val);
}
