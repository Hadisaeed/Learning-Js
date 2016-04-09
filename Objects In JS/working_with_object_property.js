/**
 * Created by hadi on 4/7/2016.
 */
// complex object can contain most of the javascript values as property

var myObject={};

myObject.myFunction=function(){return 'Function'};
myObject.myArray=['hadi','saeed'];
myObject.myString='Hello world';

console.log(myObject.myArray);
console.log(myObject.myString);

//encapsulating complex object in a programmatically beneficial way

var object1 ={

    object1_1:{

        object1_1_1:{name:'hadi'},
        object1_1_2:{fname:'saeed'}


    },

    object1_2:{

        object1_2_1:{name1:'foo'},
        object1_2_2:{name2:'bar'}
    }


}


console.log(object1.object1_1.object1_1_1.name);  //logs hadi
console.log(object1.object1_1.object1_1_2.fname); //logs saeed

console.log(object1.object1_2.object1_2_2.name2); //logs bar


// getting/setting/updating an objects properties using dot notation or brackets


var human= new Object();
human.name='Human name';
human.age='Human age';
human.eat=function(){return 'Human can eat '};


console.log(human);
console.log(human.name);
console.log(human.age);
console.log(human.eat());



var animal= new Object();
animal['name']='Animal Name';
animal['age']='Animal Age';
animal['eat']=function (){return 'Animal can also Eat'};

console.log(animal);
console.log(animal['name']);
console.log(animal['age']);
console.log(animal['eat']());






