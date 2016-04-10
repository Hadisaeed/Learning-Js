/**
 * Created by hadi on 4/11/2016.
 */
/*Relational operators test expression to find out whether they are greater than or less than each other, or whether
a given value is in a list or is an instance of a certain type.
 > Greater than
 < less than
 >= greater than equal to
 <= less than equal to
 in "contained within expression or object"
 instanceof "is an instance of an object"
 */

if(3>4){

    console.log("3 is greater than 4");
}
else{

    console.log("3 is Not greater than 4");
}

if(3<4){

    console.log("3 is less than 4");

}
else{

    console.log("3 is not less than 4");
}

// The in Operator
/*The in operator is most commonly used to evaluate whether a given property is contained within an object.*/

var mySelf={

    name:"Hadi",
    age:22,
    city:"Karachi"
}
if("city" in mySelf){

    console.log("There is a property called city in this object");

}


// The instanceof operator

var myDate= new Date()
if(myDate instanceof Date){

    console.log("myDate is an instanceof Date");
}
else{

    console.log("myDate is not an instanceof Date");

}
