/**
 * Created by hadi on 4/11/2016.
 */
/*Unary operators have a single operand  or work with a single expression in javascript
 delete remove a property
 void Returns undefined
 typeof returns a string representing the data type
 ++ increments a number
 -- decrements a number
 + converts the operand to a number
 - negates the operand
 ~ Bitwise Not
 ! logical Not*/

// incrementing / decrementing

//post increment

var num=4;
var newNum=num++;
console.log(newNum); // newNum now has a value of 4 but num then has the value 5
console.log(num);

//pre-increment

var num1=10;
var anOtherNum=++num1;
console.log(anOtherNum);
console.log(num1);


//Converting to a number with plus sign

var x="43";
console.log(typeof x,x);

var y=+x;
console.log(typeof y,y);


//converting a negative number with minus sign

var z="223";
console.log(typeof z,z);
var neg= -z;
console.log(typeof neg,neg);


// using delete operator

var myArray=["one","two","three","four"];
console.log(myArray);
delete myArray[1];
console.log(myArray);