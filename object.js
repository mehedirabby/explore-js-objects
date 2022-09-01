//1.creat object using object literals
const player={};
    player.name= 'small nirob'
    player.speciality = 'batsman'
    player.bat=function(){
        console.log('swing your bat')
    }
    // console.log(player);
    // player.bat()

    const student ={    
        name:'pandey',  
        job:'khay andey',
        ball:function(){
        console.log('throw the ball')
    },
        sallery:100000,

}




//2.object constructor
const person = new Object();
// console.log(person)


//3.object creat method
const item = Object.create(student);
// console.log(item.frnd)



//4.class
class Person{
    name= 'abul';
    address='sadarghat';
    constructor(age){
        this.age = age;
    }
} 

const person1 = new Person(56)
console.log(person1)


//5.function

function Car (model){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon',32);


    