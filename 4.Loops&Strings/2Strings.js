// Strings..sequence of characters....

// String Creation....
// let firstName = "Satyam";
// let lastName = "Chaurasiya";
// console.log(typeof(firstName));
// console.log(firstName);

// let name1= `Satyam Chaurasiya`;
// console.log(name1);

// let name1= `Satyam 
// Chaurasiya`;
// console.log(name1);

// let name2=new String("Satyam Chaurasiya");
// console.log(name2);


//Operations in string....

// 1. Concatenation of strings(Merge)..

// let opt1 = `English `;
// let opt2 = `Hindi `;
// let ans = opt1 + opt2; //concatenate..
// console.log(ans);

// let opt1 = `English `;
// let opt2 = `Hindi `;
// let finalAns = `${opt1}${opt2}` //concatenation using back-ticks..
// console.log(finalAns);

//2.Lenght of the string..

// let opt1 = `English `;
// let opt2 = `Hindi`;
// console.log(opt2.length);

//3.UpperCase,LowerCase conversion..

// let opt1 = `English `;
// let opt2 = `HINDI`;
// console.log(opt1.toUpperCase());
// console.log(opt2.toLowerCase());

//4.Substring method..to get some part from a string....

// let str = "Satyam";
// console.log(str.substring(2));

// let str = "Satyam";
// console.log(str.substring(2,4)); // Output:- ty ..not includes the character at 4th index..


// 4.Split Method..

// let sentence = "My name is Satyam";
// let words = sentence.split(' ');
// console.log(words); // Basically it returns an array..

// let sentence = "My name is \"Satyam\" Chaurasiya";
// console.log(sentence);

// let sentence = "My name \\is \\Satyam \\Chaurasiya";
// let words = sentence.split('\\');
// console.log(words);

// 5.Join..

let sentence = "My name \\is \\Satyam \\Chaurasiya";
let words = sentence.split('\\');
console.log(words);
console.log(words.join(`,`)); // Join the words....
