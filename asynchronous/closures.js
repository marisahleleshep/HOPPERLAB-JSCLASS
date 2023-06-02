let greet=()=>{
    let name='John'
    let displayNames=()=>{
        return `Hi I am ${name}`
    }
    return displayNames
}
let talk=greet();
console.log({talk});

let nums=(num)=>{
    let add=(digit)=>{
        return digit+num
    }
    return add
}
let addition=nums(45);
console.log({addition});
console.log(addition(54));