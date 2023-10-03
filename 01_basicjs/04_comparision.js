// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1)
// console.log(2!=1);
// console.log("2">1)// true
// console.log("02">1);//true
/* is tarah  comparision confusion deti h
// console.log(null >0);// false
// console.log(null==0);// false
// console.log(null>=0);// true
/*  the reason is that an equality check == and comparisions > < >=
<= works differently
comparisions conver null to a number , treating it as 0;
that's why null>=0 is true and null>0 is false
 */

// console.log(undefined==0);// false
// console.log(undefined>0);// false
// console.log(undefined>=0);// false
//
// strict check : ===
// strict check is done with ===.
// it also checks data type of variable.
console.log("2"===2);// false