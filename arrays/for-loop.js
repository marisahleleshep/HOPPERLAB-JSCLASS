let num=[10,30,3,8,7,16,45];
for(let i =0; i<num.length; i++){
    // console.log(i);
    console.log(num[i]);
}


for(let i=0; i<num.length;i++){
    console.log({"break":num[i]})
    if(i===2){
        break;
    }
    // console.log({"num":num[i]})

}

for(let i=0; i<num.length;i++){
    if(i===4){
        continue;
    }
    console.log({"continue":num[i]})

}

// //Using a for loop print all even numbers up to and including n. Don’t include 0.

let num1=0;
for(let i=0;num1<22;i++){
    num1+=2
    console.log(num1)
}

let i=0;
while(i<22){
    i+=2
    console.log(i)

}

//Get the sum of two arrays…actually the sum of all their elements.
//P.S. Each array includes only integer numbers. Output is a number too.
let array1=[1,2,5,9,6,4,12,78]
let array2=[23,8,90,65,5]

let x=0;
for(let i=0;i<array1.length;i++){
    x+=array1[i]
}
for(let i=0;i<array2.length;i++){
    x+=array2[i]
}
console.log(x)

//Using a for loop output the elements in reverse order
const arr=[3,4,5,2,3,12,55,82]
const emptyArray=[]
for(let i=arr.length-1;i>=0;i--){
    const x=arr[i]
    emptyArray.push(x)

}
console.log(emptyArray)

//Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
let y=[12,5,2,4,5]
let g=[1,6,9,2,3]

let d=y.map(function(p,k){
    return p+g[k]
})
console.log(d)

//Given a string change the every second letter to an uppercase ‘Z’. 
//Assume there are no space.
const m="Ilovejavascript"
const l=[]
for(let i=0;i<m.length;i++){
   if(i%2===1){
    l+=z
   }else{
   l+=m.charAt(i)
   }


}
console.log(l)


























