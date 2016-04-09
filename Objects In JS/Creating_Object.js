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


//no object is created when producing primitive values, no use of the "new" keyword


var primitiveString1='string';
var primitiveString2= String('string');


//confrim the type of objects is not object

console.log(typeof primitiveString1, typeof primitiveString2);


// verus the usage of constructor and the new keyword for creating an object.

var objString= new String('hadi');
console.log(typeof objString);


// how primitive values are stored/copy  in js



var myStringValue1='BAR';  // create a primitive value 1
var myStringCopy=myStringValue1; // copy its value into new variable

console.log(myStringCopy);

myStringValue1=null;  // manipulate the value stored in myStringvalue1
console.log(myStringCopy,myStringValue1);


// primitive values by value

var price1=10;
var price2=10;
var price3= new Number(10); // creating a complex object because new keyword is used.
var price4=price3;

//log true
console.log(price1==price2);

//log false because price 3 contains a complex object and price 1 is a primitive values
console.log(price1==price3);

//log true because complex value are equal by reference, not a value

console.log(price4==price3);

price4=10;

console.log(price3==price4);
//log false becuase price 4 is  primitive rather than a complex.



//how complex values are stored

var myObj={};
var copyOfMyObj=myObj; // not copied by value just reference.
myObj.name='HS'; // manipulate the value stored in myObj

console.log(myObj,copyOfMyObj);// they have a same property because they reference the same object


//complex object are equal by reference


var o1={property:'one'}
var o2={property:'one'}

console.log(o1===o2);
console.log(o1==o2);

//logs false because JS does not care that they are identical and of the same object type


var objectA={property:1}
var objectB=objectA;
console.log(objectA===objectB);

// log true because they are referenced by same Object.

// complex object have dynamic property

var ObjectC={property:"true"};
var pointer1=ObjectC;
var pointer2=pointer1;

ObjectC.property=0; // update the Object c property and all reference(pointer1,pointer2) are updated

console.log(ObjectC.property,pointer1.property,pointer2.property);


var val1=null;
console.log(typeof val1);

// the constructor property also work on custom user-define function


var customConstructor= function customConstructor(){return 'Wow'};
var instanceOfCustomObject= new customConstructor();

console.log(instanceOfCustomObject.constructor);
console.log(instanceOfCustomObject.constructor===customConstructor);


// an instance created from a constructor can have its own independent  properties

var myArray = new Array();
myArray.prop='test';
console.log(myArray.prop);


var myBoolean= new Boolean();
myBoolean.prop='test1';
console.log(myBoolean.prop);

//instance properties do not work with primitive/literal values

var stringA='hello';
var numberOne=1;

stringA.prop=true;
numberOne.prop=true;

console.log(stringA.prop,numberOne.prop);



