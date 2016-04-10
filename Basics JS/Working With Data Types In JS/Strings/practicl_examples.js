/**
 * Created by hadi on 4/10/2016.
 */

//Example 1:

var name="My Name Is Muhammad Hadi Saeed";
if(name.indexOf("i") !== -1)
{
    console.log("i Exist In String!!!");
}
else
{
    console.log("i Does not Exits In String!!!")
}


//Example 2:

var month=prompt("Enter Month");
if(month.length>3){

    month_abb=month.slice(0,3);
    console.log(month_abb);
}
else{

    console.log(month);
}
