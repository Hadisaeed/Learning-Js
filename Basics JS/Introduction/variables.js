/**
 * Created by hadi on 4/10/2016.
 */

/* variables store data that might change during the program's execution lifetime. variables are declared in javascript
with var Keyword*/

var a=1;
var name='Hadi';

alert(a);
alert("Hello " + name);

// variables in Javascript are not strongly typed

var f_name='Hadi';
console.log(f_name);
f_name=2;
console.log(f_name);

/*A Variable Scope refers to the Location from which its value can be accessed. variables are globally scoped when they
are used outside a function. A globally Scoped Variables can be Accessed throughout your javascript program.*/

var aNewVariable="I'm Global.";
function doSomething(incoming_variable){

    console.log("Global variable Within the Function: "+aNewVariable);
    console.log("Local variable Within the Function: "+incoming_variable);
}
doSomething("Is a Local Variable.");
console.log("Global variable Within the Function: "+aNewVariable);
console.log("Local variable Within the Function: "+incoming_variable);
