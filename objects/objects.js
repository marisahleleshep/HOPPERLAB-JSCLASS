let person={
    name:"Ann",
    age:20,
    height:"5Ft",
    friends:{
        name:"Beryl",
        age:25
    }
}

let person1=new Object();
console.log({person1})
person1.name="Edith";
person1.age=40;                             //adding new property
console.log({person1});
console.log(person.age);                   //log a value
person["age"]=25;                            //update an existing property
console.log({person});  
console.log(person.friends.age)  
delete person.age;
console.log({person});
                   