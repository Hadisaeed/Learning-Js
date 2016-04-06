/**
 * Created by hadi on 4/7/2016.
 */



//create the object (name as cody)..

var cody= new Object()

//fill the cody object with properties using dot(.) notation.

cody.living=true;
cody.age=22;
cody.gender='Male';

//logs the cody object

console.log(cody);


// creating a Method

cody.getGender=function(){return cody.gender};

//logs getGender  method


console.log(cody.getGender());

/*Note: We create cody object using a blank object that was provided to us by Invoking the Object() Constructor function
* Constructor function is Just like a cookie cutter for producing pre-defined Objects*/


var myObject= new Object() //produces an Object() object

myObject[0]='h';
myObject[1]='a';
myObject[2]='d';
myObject[3]='1';

console.log(myObject);


var myString= new String('hadi');  //produces an String() object
console.log(myString);
/*

var myString1=new  String();
myString1[0]='f';
myString1[1]='o';
myString1[2]='o';

console.log(myString1);*/


// creating a native / user-define Constructor Function such as Person

var Person= function(name,live,age,gender){

  //"this" below is the new object that is being created (i.e this= new Object())

    this.name=name;
    this.live=live;
    this.age=age;
    this.gender=gender;
    this.getgender=function(){
        return 'Gender Is :' + ' '+ this.gender;
    }

    //when the function is called with the new keyword "this" is returned instead of false
}


var hadi=new Person('Hadi','Karachi',22,'M');

console.log(typeof hadi);
console.log(hadi);
console.log(hadi.getgender());
console.log(hadi.constructor);

var myNumber= new Number(22); // an object
var myNumberLiteral=22; // primitive number value, not an Object

console.log(myNumber.constructor,myNumberLiteral.constructor);



