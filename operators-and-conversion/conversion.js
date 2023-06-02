let a =10;
let b ="10";
//implicit coersion

let c = b + a;
console.log({c});
let d = b *1;

let e = +b +a;
console.log({e});


//Explicit coersion
console.log({"number":Number(b)})
console.log({b})

console.log({"string":String(a)})
console.log({"array":Array(b)})