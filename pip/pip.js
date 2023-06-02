let num=[3,6,8,25,7,5,7]

console.log(num.length);

let multiples=num.map(item=>item*2);
console.log({multiples});

let triples=[]
num.forEach(item=>{
   triples.push(item*2)
});
console.log({triples});

let less=num.filter(item=>item<10);
console.log({less})

let getSeven=num.find(item=>item===7);
console.log({getSeven})

