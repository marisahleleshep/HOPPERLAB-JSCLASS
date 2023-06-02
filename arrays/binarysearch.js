//given an array num of numbers with length of n,find the target 13 in the array
//return the index if the target is found else null

function binary(num,target){
    let left=0
    let right=num.length-1;

    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right=middle-1;
        }
        else{
            left=middle+1;
        }

    }
    
     
}
let num=[2,5,7,9,11,13,17,21,25]
let target=13;

console.log(binary(num,target));