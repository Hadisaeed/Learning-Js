/**
 * Created by hadi on 4/10/2016.
 */
/*Objects in Js are collection of properties, each of which can contain a value. these properties__ think of them as key
* __ enable access to values.Each value stored in the properties can bea value another object or even a function*/

var myObject={
    name:"Hadi",
    age:22,
    learning:"Programming"
}

for(var prop in myObject){

    console.log(prop + " = " + myObject[prop]);
}