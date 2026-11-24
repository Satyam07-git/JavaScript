// Operators -> Symbols -> Perform Specific Operation..

// Types..

// 1.Arithmetic Operators-> (+ , - , / , % , * , **)

// Unary(need one operand.. a++ , a-- , ++a , --a)
// Binary(need two operand.. + , - , / , % , *)

// let a=10;
// let b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// console.log(a**b);
// console.log(++a);
// console.log(a++);
// console.log(--b);
// console.log(b--);


//2.Assignment Operator..(=,+=....)

// let a=10;
// let b=3;
// a+=5
// console.log(a);


//3.Comparison Operator..(>,<,>=,<=,==,!=,===,!==)
// (Strict Equality(===)..value and data type both must be same.. 
// , Loose Equality(==)..compares only the value only the value..return true..)
//Ans..either true or false..

// console.log(10>9);
// console.log(10<9);
// console.log(10==9);
// console.log(10>=9);

// console.log('5' == 5);  //Output: True..
// console.log('5' === 5); //Output: False..



//4.Ternary Operator..
//Syntax:- (Condition) ? value1(if) : value2(else)

// let age = 29;
// let result = (age>=18) ? "Vote" : "Can't Vote";
// console.log(result);



//4.Logical Operator..(used to connect two or more expressions/conditions to make decisions based on the criteria employed)
// [AND(&&) -> If both conditions are true..return true..if either one condition is false..return false..
// , OR(||) -> If any one condition is true..return true..if both are false..return false..
// , NOT(!) -> !(true) -> false , !(false) -> true ]

// let ans = (true && true);
// console.log(ans); 
// let ans = (true && false);
// console.log(ans);

// let ans = (true || false);
// console.log(ans);
// let ans = (false || false);
// console.log(ans);

// let ans = !(false);
// console.log(ans);



// 5.Working with Non-Boolean....
//eg; (false && 'Satyam'), (true || 3)..etc
// Falsey -> undefine,null,0,false,NaN..
// Truthy -> anything which is not falsey..

//Short-Circuiting..
// (false || true || false || true || false)
// Can't check the condition after the first true..

// console.log(false || 'Satyam');
// console.log(false || 7);
// console.log(false || 5 || 9 || 10); // Output:-5 (Short-Circuiting)..



//6.Bitwise Operators..(works on binary representation..)
// Bitwise AND(&)
// Bitwise OR(|)
// Bitwise NOT(~)->Bit level par fliping krta hai..1's compliment..
// Bitwise XOR(^)
// Left Shift(<<)..number multiply by 2^a..
// Right Shift(>>)..number divide by 2^a..

console.log(2 & 5);
console.log(2 | 5);
console.log(~(0));
console.log(2 ^ 2);
console.log(5<<1); // 5 multiply by 2 once..5*2..
console.log(5<<2); // 5 multiply by 2 twice.5*2*2..
console.log(10>>1); // 10 divide by 2 once..10/2..
console.log(10>>2); // 10 divide by 2 once..(10/2)/2..








