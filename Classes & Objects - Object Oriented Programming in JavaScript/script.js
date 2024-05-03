//[[Prototype]]

//JavaScript objects have a special property called prototype that is either null or references another object


// let obj = {
//     a: 1,
//     b: "Akanksha"
// }

// console.log(obj)
//output{a: 1, b: "Akanksha"}

// console.log(obj.a)
//output:1

// console.log(obj.b)
//Akanksha

// let animal ={
//     eats: true
// };

// let rabbit ={
//     jumps: true
// };

// rabbit.__proto__ = animal; 
//sets rabbit.[[prototype]] = animal
//rabbit ke andar eats:true bhi aayega

// console.log(animal)
// output : {eats: true}

// console.log(rabbit)
//output : {jumps true}

// console.log(rabbit.eats)
//output : true

// console.log(rabbit.jumps)
//output : true

//Class : In Object-Oriented Programming,a class is an extensible program-code template for creating objects,providing initial values for state(member variables) and implementation of behavior(member functions)

//Constructor() Method : The Constructor() method is called automatically by  new, so we can initialize the object there

//Method Overriding: If we create our own implementation of "eats()" it will not taken from the animal class.This is called Method Overriding

//Overriding Constructor : With a constructor,things are a bit tricky/different .According to the specificator,if a class extends another class and has no constructor,then the following empty constructor is generated
// class Monkey extends Animal{
//     //auto generated
//     constructor(....args){
//         super(..args);
//     }
// }

//super keyword: When we override a method, we don't want the method of the previous class to go in vain.We can execute it using super keyword
//e.g. super(name) -------Call parent constructor

//Class Inheritance : Class Inheritance is a way for one class to extend another class.This is done by using the extends keyword

//The extends keyword: extends keyword is used to extend another class

class Animal{
    constructor(name){
        //this is used to create properties in one object
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("khaa rha hu..")
    }

    jumps(){
        console.log('khud rha hu');     
    }
}

class Lion extends Animal{
    //Overriding Constructor
    constructor(name){
        super(name)   //calls parent constructor
        console.log("Object is created and i am lion....")
    }

    eats(){
        super.eats()  //cals parent function
        console.log("khaa rha hoon roar");
    }
}

let a = new Animal("Bunny");

console.log(a)
//Output: Object is created...
//output :Animal {name: 'Bunny'}

console.log(a.name)
//output: Bunny

a.eats()
//Output : khaa rha hu..

let l = new Lion("Sheru");

console.log(l)
// Output : Object is created...
// Output: Object is created and i am lion....
// Output : Lion {name: 'Sheru'}

console.log(l.name)
//Output : " Sheru"

l.eats()
//khaa rha hu..
//khaa rha hoon roar


//static method : Static methods are used to implement functions that belong to a class as a whole and not to any particular object.Static method aren't available for individual objects

class Employee{
    static sMethod(){
        alert("Hey");
    }
}

Employee.sMethod()

//Getters and Setters : Classes may include getters and setters to get and set the computed properties

//FIrst the name property is changed to _name to avoid the name collision with the getter and setter.Then the getter uses the get keyword as shown below

class Person{
    constructor(name){
        this._name= name
    }
     get name(){
        return this._name;
     }
     set name(newName){
        if(newName.length < 3){
            console.log("Name is too short");
            return;
        }
        this._name = newName;
     }
}

let p = new Person("Akanksha")  //yeh get ko call karega
console.log(p.name);
// Output : Akanksha

p.name = "Uma"   //yeh set ko call karega
console.log(p.name)
//Output : Uma


//Instanceof Operator
//The instanceof Operator allows to check whether an object belongs to a certain class

//The syntax is:
//<obj>instanceof<class>

//It returns true if obj belongs to the class or any other class inheriting from it

console.log(l instanceof Lion)
//Output : True
//l object hai lio ka

console.log(a instanceof Animal)
//Output : True
// a object hai animal ka

console.log(l instanceof Animal)
//Output : True
// l object animal class se bana hai

console.log(a instanceof Lion);
//Output : False
//a object nhi hai lion ka ,a object animal ka hai..




