function greet(){
    console.log('Welcome to our site');
};
greet();

let data=[{}];

let createUser=new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=>{resolve('user sucessfully created');},5000)
    }
    else{
        // setTimeout(reject('User already exists')) 
        setTimeout(()=>{reject('user sucessfully created');},5000)
    }
});

function createUserAccount(){
    // let response= await createUser;
    console.log({response});
}
createUserAccount();