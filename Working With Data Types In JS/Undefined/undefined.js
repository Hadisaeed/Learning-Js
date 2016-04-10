/**
 * Created by hadi on 4/10/2016.
 */
/*Undefined is a state, sometimes used like a value, to represent a variable that hasn't yet contained a value.*/
var myVar;
document.write("Type Of myVar variable is: " + typeof myVar);
console.log(typeof myVar === "undefined");
console.log(typeof myVar == "undefined");
console.log(myVar === "undefined");
if (myVar){

    console.log("True value");

}
else{
    console.log("Flasy value");
}
