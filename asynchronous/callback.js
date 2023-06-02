function talk(statement,callbacks){
    console.log(statement);
    callbacks();  //the function
}
function greet(){
    console.log('Hello there');
}
talk('I love the coronation',greet)
