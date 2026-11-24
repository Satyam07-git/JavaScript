//Variables:- Named memory location..

// 1..var keyword....to create variable..
// Function or Global scoped but not block scoped....

// var age=25; // acts as a global variable use any where....
// if(true){
//     console.log(age);
// }

// function solve(){
//     var age =  25;
//     console.log(age);
// }
// console.log(age);  // not run outside the function...throw ReferenceError: x is not defined..
// solve(); 

// Re-asssignment using var..Possible..make confusion....

// var x = 10;
// console.log(x);  // output: 10

// x = "Satyam";
// console.log(x); // output : Satyam
// // Print both..

// Re-definition using var..Possible..make confussion....

// var x = 10;
// console.log(x);  // output: 10

// var x = "Satyam";
// console.log(x); // output : Satyam
// // Print both..

// We face debugging issues in it....


// 2..let keyword....to create variable....
// Re-assignment possible but 
// Re-definition is not possible(throw error..)....
// Function or Global scoped and block scoped also....

// Blocked Scoped..accessible within the parantheses only..
// {
//     let a=10;
//     console.log(a);
// } // Output : 10..

// {
//     let a=10;
// } 
// console.log(a); // Doesn't print anything..not accessible outside the parantheses....

// Dynamatically typed language..we can insert multiple type of value....
// let a =10;
// a = "Satyam";
// a = true;
// a = null;

// 2..const keyword....to create variable....
// Value can't be changed or re assign,re-declared,re-define....

// const a = 28;
// console.log(a);
// a = 20;
// console.log(a); // Throw error..



// Data Types....

// Type of data we are taking about and their size..

// 1.Primitive Data type:- number(both int and double/float),boolean(True/False),string (Sequence of charactres),
// undefined(no value provided to the variable),null,BigInt(2^53-1),Symbol..

// let marks = 20.2987; 
// marks="Satyam"
// marks=true;

// let marks; // Output:- Undefined..
// let marks=null; // null..
// console.log(marks);

// Type of Data Type....

let marks=false;
console.log(typeof(marks)); //boolean....

