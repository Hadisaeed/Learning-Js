/**
 * Created by hadi on 4/10/2016.
 */
/* isNAN() function : NAN is an abbreviation for not a number, and it represents an illegal number. you Use the isNAN()
 function to determine whether a number is legal or valid*/

document.write("Is Not a Number: " + isNaN("four"));
document.write("<br>");
document.write("Is Not a Number: " + isNaN("1"));
var numOne='1';
console.log(isNaN(numOne));

//parseInt() Function
var num="172";
console.log(typeof num, num);
var num=parseInt(num);
console.log(typeof num,num);

//parseInt() function Parse number into any number format like octal,binary etc

var num1=parseInt("012",8);
console.log(num1);

var howMany="2 cats are there";
console.log("Before Parse: " + howMany ,"Type:" + typeof howMany);
var convert=parseInt(howMany);
console.log("After parse: " + convert , "Type:"+ typeof convert);

var anotherString="There 4 cat in a Basket";
var convert1=parseInt(anotherString);
console.log(convert1);

// There are another function ParseFloat() which parse floating point numbers
var liter="1.5 liter of milk";
var res=parseFloat(liter);
console.log(res);

