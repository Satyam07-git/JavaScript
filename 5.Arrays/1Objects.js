//Reference type..Objects/Arrays/Functions....

// Memories in JS..
// 1.Stack Memory..Consumes by primative data type..
// 2.Heap Memory..Consumes by reference type..stores actual data..
// To access the heap memory we need a pointer/reference..which made inside the stack..which is the variable..

// Object..collection of key-value pair....
// Syntax..key:value..
// let obj={name:"Satyam" , age:25 , work fuction...};

let obj = {
    name: "Satyam",
    // use double inverted commas when their is sapce between the key..
    // "full Name": "Satyam Chaurasiya",
    age : 25,
    weight : 67,
    // we can also add/create function..
    greet: function(){
        console.log("Hello Wolrd!")
    }
}
console.log(obj);
obj.greet();
console.log(typeof(obj));

// When we copy two objects..their references were copied..
// Their is no differnt objects created..

let obj2 = obj; //Shallow copy bani hai..

// Ques..Shallow copy and Deep copy and how they created in object..





