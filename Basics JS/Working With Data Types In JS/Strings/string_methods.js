/**
 * Created by hadi on 4/10/2016.
 */

var name="My Name Is Muhammad Hadi Saeed";
document.write(name);

// length method is use to find the length of string
console.log(name.length);

var checkCharacter=name.indexOf('M');
console.log("Index Of M In String is " +checkCharacter);
var checkCharacter1=name.indexOf('Z');
console.log("Index Of Z In String is " +checkCharacter1);
var checkCharacter2=name.indexOf('e');
console.log("Index Of e In String is " + checkCharacter2);

// charAT Method

var check=name.charAt(1);
console.log(check);

//substr Method
// if you want to extrac something from string use substr() method

console.log(name.substr(2,6));
 //slice Method

console.log(name.slice(6));

console.log(name.slice(19,24));

// toLowerCase() and toUpperCase() Methods

var name="ramsha";
var name1="AYESHA";

console.log(name.toUpperCase());
console.log(name1.toLowerCase());
