let people=[
    {name:"Ann",age:30,height:"5F"},
    {name:"Henry",age:20,height:"4F"},
    {name:"Susan",age:50,height:"6F"}

];
let age=people.map(item=>item.age)
console.log({age})

let weight=people.map(item=>{
    return{
        ...item,
        weight:50,
    }
})
console.log({weight});

let changeWeight=weight.map(item=>{
    if(item.name==="Ann"){
        item.weight=60;
    }
    return item
});
console.log({changeWeight});

let changeHenry=weight.map(item=>{
    if(item.name==="Henry"){
        item.age=20;
    }
    return item
});
console.log({changeHenry});