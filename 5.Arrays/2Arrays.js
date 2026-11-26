// Arrays..Collection of data/items/elements..
// Type = Object..

// Syntax..array literals and array constructor..

// Creation of arrays..

// By array literals..

// let arr = [1,2,3,4,5,6];
// console.log(arr);

// By array constructor..

// let brr = new Array('Satyam',1,true);
// console.log(brr);

// Accessing the element of Array....

// let arr = [1,2,3,4,5,6];
// console.log(arr[3]);

// Built-in methods/fuctions..
// push : insert element at end..
// pop : remove last element..
// shift : remove the first/left most element..
// unshift : insert element at left most..
// slice : get a part from the array..
// splice : to change the content of the array..insert/replace/remove....
// map : run fuction/processing on the set of values..
// /filter/reduce/sort/indexof/find..

// let arr = [1,2,3,4,5,6];
// arr.push('Satyam')
// arr.push(9);
// arr.pop();
// arr.unshift(18);
// arr.shift();
// // console.log(arr.slice(3,5)); // exclude 5th index element..
// arr.splice(1,0,"Satyam");
// console.log(arr);


// Map....


// let arr = [10,20,30];
// arr.map((number) => {
//     console.log(number+1);
// })

// let arr = [10,20,30];
// arr.map((number , index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray = arr.map((number) =>{
//     return number*number;
// })
// console.log(ansArray);


// Filter....Filter data..

// let arr = [10,20,11,21,50,60,97];
// let ansEven = arr.filter((number) =>{
//     return number%2==0;
//     //or
//     // if(number%2==0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(ansEven);

// let arr = [1,2,'Satyam','Shivam',null];
// let ansString = arr.filter((value)=>{
//     if(typeof(value)=='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ansString);


// Reduce..
// Perform operation and get single value..
// Variables..1.Accumulator(acc)..we can initialise by self..if not it get the first value of arr..
// 2.Current(curr)..if acc take the first value..curr get the second value of the array..
// if we already initialise the acc,it get the first value of the array..

// let arr=[10,20,30,40,50];
// let ansAdd = arr.reduce((acc,curr)=>{
//     return acc + curr; 
// },0); // 0 is the value initialise to the acc..
// console.log(ansAdd);
// // Value keep storing in acc..

// Sort..

// let arr = [9,5,4,3,2,7];
// arr.sort();
// console.log(arr);

// Ques..sort in decending order..


// indexof..get index number of the element..

// let arr = [9,5,4,3,2,7];
// console.log(arr.indexOf(3));


// find....
//In JavaScript, the find() function is an array method used to find the first element that satisfies a given condition.
//If the condition is true, it returns that element. Otherwise, it returns undefined.

// let arr = [10, 20, 30, 40, 50];
// let result = arr.find((num) => {
//     return num > 25;
// });
// console.log(result);


// Array lenght..

// let arr = [10, 20, 30, 40, 50];
// let length = arr.length;
// console.log(length);


// For each loop....

// let arr = [10,20,30,40];
// arr.forEach((value,index)=>{
//     console.log("Number: ",value, "Index: ",index);
// })


// for-in....to iterate over array,strings etc..

// let obj = {
//     name: "Satyam",
//     age : 25,
//     weight : 67,
//     greet: function(){
//         console.log("Hello Wolrd!")
//     }
// };
// for(let key in obj){
//     console.log(key, " ",obj[key]);
// }


// for-off....to iterate over array,strings etc..

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// let fullName = 'Satyam';
// for(let val of fullName){
//     console.log(val);
// }


// Arrays with functions....

// let arr = [10,20,30,40,50];
// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let i=0;i<len;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let totalSum= getSum(arr);
// console.log(totalSum);


// let arr = [10,20,30,40,50];
// function getSum(arr){
//     let sum = 0;
//    arr.forEach((value) => {
//     sum+=value;
//    });
//    return sum;
// }
// let totalSum= getSum(arr);
// console.log(totalSum);


// let arr = [10,20,30,40,50];
// let getSum = function(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let i=0;i<len;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let totalSum= getSum(arr);
// console.log(totalSum);


// let arr = [10,20,30,40,50];
// let getSum = (arr) =>{     // Array function creation..
//     let len = arr.length;
//     let sum = 0;
//     for(let i=0;i<len;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let totalSum= getSum(arr);
// console.log(totalSum);