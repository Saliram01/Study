// const arr = [50,36,10,58,1];
// let x = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < x){
//         x = arr[i];
//     }
// }
// console.log(x);


// function largestElement(arr) {
//     return arr.reduce((largest, current) =>
//         (current < largest ? current : largest), arr[0]);
// }

// let num1 = [10, 15, 38, 20, 13];
// console.log(largestElement(num1));


// const arr = ["Apple","Banana","Mango"];
// const str = "Saliram";

//PRIME NUMBER

// let prime = 5;
// let count = 0;
// for(let i = 1; i <= prime; i++){
//     if( prime % i == 0){
//         count++;
//     }
// }
// if(count == 2){
//     console.log("It is a prime number");
// }
// else{
//     console.log("It's not a prime number");
// }


// FACTORIAL NUMBER

// const num = 5;
// let fibo = 1;

// for(let i = 1; i <= num; i++){
//     fibo = fibo * i;
// }
// console.log(fibo);

// FIBONACII SERIES

// const num = 10;

// let a = 0;
// let b = 1;
// let c = 2;

// for(let i = 1; i <= num; i++){
//     console.log(a);
//     c = a+b;
//     a = b;
//     b = c;
// }

// ASCENDING // DESCENDING

// const arr = [1,3,2,5,4,1,2,4,7];
// let x = arr[0]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= x){
//         x = arr[i];
//     }
// }
// console.log(x);

// Sum of number
// let num = 12345;
// let sum = 0;
// for (let i = 1; i <= num.toString().length; i++) {
//     sum += i;
// }
// console.log(sum);

// const square = Math.hypot(5,5); // 1st step 5 + 5 then 10^10 then square of 100 
// console.log(square);

/* ATM Working Program */

// let BankBalance = 1000;
// const ATM = (function (withdrawAmt) {
//     if (withdrawAmt > BankBalance) {
//         return `Insufficient Balance`;
//     }
//     else {
//         BankBalance -= withdrawAmt;
//         return BankBalance;
//     }
// })
// console.log(ATM(500));
// console.log(ATM(400));
// console.log(ATM(150));

/* ============ Higher Order and Array Loop =========== */

// ["","",""]
// [{},{},{}]

// const arr = [2,4,6,8,];
// for (const element of arr) {
//     console.log(element);
// }

// const obj = {product : "iphone" , price : "100000"};
// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

// const mapping = new Map();
// mapping.set('IN',"India");
// mapping.set('USA',"Unites State of America");
// mapping.set('Fr',"France");
// console.log(mapping);

// for (const [key,value] of mapping) {
//     console.log(key + ':' + value);
// }

// const arr = ["Html","CSS","JS","React","Java","Spring Boot"];

// function printMe(element){
//     console.log(element);
// }
// arr.forEach(printMe)

// const arr = [
//     {
//         languageName : "Javascript",
//         price : 5000,
//     },
//     {
//         languageName : "Java",
//         price : 10000,
//     }
// ]

// arr.forEach((item) => {
//     console.log(item.languageName);
// })

// 5 Method to write for loop

// 1st method 
// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

// 2nd Method
// let i = 0;
// for(; i <= 5; i++){
//     console.log(i);

// }

// 3rd Method
// for(let i = 0; i <= 5;){
//     console.log(i);
//     i++;
// }

// 4th Method
// let i = 0;
// for(; i <= 5 ;){
//     console.log(i);
//     i++;
// }

// 5th Method // infinite loop
// let i = 0;
// for(;;){
//     console.log(i);
//     i++;
// }

/* Prime num find between user input number */
// let num = 100;
// let count = 0;
// console.log(`Prime number between 0 to ${num}`);
// for (let i = 0; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++;
//         }
//     }
//     if (count == 2) 
//         console.log(i);
//         count = 0;
// }


// const arr = ["Elephant","Dog","Deer","Beer"];
/*
for (const ele of arr) {
    console.log(ele); // it return a element of array
}
for (const ele in arr) {
    console.log(ele); // it return a index of array element
}

for (const key in arr) {
    console.log(arr[key]);
}
*/
// const course = { course: "Java", price: 5000, duration: "month", };

// for (const key in course) {
//     console.log(`${key} and ${course[key]}`);
// }

// const m = new Map();
// m.set("Name" , "Saliram");
// m.set("address", "Hasuliys");
// m.set("age", 22);
// m.set("gender","Male");
// console.log(m);
// console.log("=======================");
// console.log(m.get('age'));
// console.log(m.size);
// console.log(m.delete("gender"));
// console.log(m);

// const myArr = [];
// %DebugPrint(myArr);

    // function Display() {
    //     let name = "This is a function";
    // }
    // console.log(Display.name);
    // console.log(Display.length);

    // console.log(typeof (++5));
    // console.log(5++);

    // console.log([] == ![]);

    // if(null || undefined){
    //     console.log("True");
    // }
    // else{
    //     console.log("False");
    // }
    // console.log(null > 0); // output = false
    // console.log(null == 0); // output = 
    // console.log(null === 0);
    // console.log(null >= 0);
    // console.log(null + 0); output = 0

    // var a = 10;
    // function abc() {
    //     var a = 5;
    //     xyz()
    //     a = a + 5;
    // }
    // function xyz() {
    //     a = a + 5;
    //     console.log(a);
    // }
    // abc();
    // console.log(a);

    // console.log(message);

    // console.log("20" + 5);
    // console.log("20" - 5);
    // console.log("20" * 5);
    // console.log("20" / 5);

    // const element = document.querySelector('div');
    // const computedStyle = window.getComputedStyle(element);

    // const contentWidth = parseFloat(computedStyle.width);
    // const contentHeight = parseFloat(computedStyle.height);

    // const paddingLeft = parseFloat(computedStyle.paddingLeft);
    // const paddingRight = parseFloat(computedStyle.paddingRight);
    // const paddingTop = parseFloat(computedStyle.paddingTop);
    // const paddingBottom = parseFloat(computedStyle.paddingBottom);

    // const totalWidth = contentWidth + paddingLeft + paddingRight;
    // const totalHeight = contentHeight + paddingTop + paddingBottom;

    // console.log('Total Width:', totalWidth);
    // console.log('Total Height:', totalHeight);

    // Closer
    // function Clos(mul) {

    //     return function (num) {
    //         return mul * num;
    //     };
    // }
    // const res = Clos(2);
    // console.log(res(5));

    // let a = 5;
    // let b = 10;
    // let c = (++a > 10 && ++b > 5)
    // console.log(a);
    // console.log(b);
    // console.log(c);

    // let a = 10;
    // let b = 5;
    // let c = (--a > 5 || --b > 10)
    // console.log(a);
    // console.log(b);
    // console.log(c);

    // console.log('10' - - '10');

    // const obj = {};
    // let value = "constructor";
    // if(value  in obj){
    //     console.log("True");
    // }
    // else{
    //     console.log("False");
    // }
    // console.log(obj);

    // let str = " this is saliram chaudhary ";
    // str.toLowerCase()
    // console.log(str);

    // console.log(['toString'].length + 1);

    // let a = 5,b;
    // b = ++a + a++ + ++a
    // console.log(b);

    // var x = 20;
    // function foo(){
    //     console.log(x);
    //     let x = 10;
    // }
    // foo()

    // setTimeout(() => {
    //     console.log("TimeOut");
    // },0)
    // Promise.resolve().then(() => console.log('promise'));
    // console.log("End");

    // async function foo(){
    //      return "Hello World";
    // }
    // const res = foo()
    // console.log(res);

    // after this code takes output in string only
    //    foo().then((data) => {
    //     console.log(data);
    //    })

    // First Letter UpperCase
    // const str  = "hi i am saliram";
    // const newStr = str.split(" ");

    // const data = newStr.map((res) => {
    //     return res[0].toUpperCase() + res.slice(1);
    // })
    // console.log(data);


    // function f1(munni) {
    //     let mini = munni
    //     function f2() {
    //         console.log(mini)
    //     }
    // }
    // const fun1 = f1("Groot")
    // console.log(fun1)

    // let num = 5
    // num++
    // let num1 = num
    // console.log(num, num1)

    // console.log(a);
    // console.log(b);
    // var a = b = 5;

    // function doubleAndAdd(x, fn) {
    //     return fn(x * 2)
    // }
    // function addThree(y) {
    //     return y + 3
    // }
    // console.log(doubleAndAdd(5, addThree))

    // Freeze only one property of object 
    // const obj = {
    //     id : 123,
    //     name : "john",
    //     age : 25,
    //     address : {
    //         city : "Banglore",
    //         state : "Karnataka",
    //     }
    // }

    // Object.defineProperties(obj,{name:{writable:false}});
    // obj.name = "saliram";
    // console.log(obj.name);


    // function myfun(a, f1, f2, f3) {
    //     return f1(a * 12), f2(a + 24), f3(a - 1)
    // }

    // function myfun1(x) {
    //     return (x * 5)
    // }
    // function myfun2(y) {
    //     return (y * 5)
    // }
    // function myfun3(z) {
    //     return (z * 5)
    // }

    // console.log(myfun(5, myfun1, myfun2, myfun3))

    // OTP Generator
    // function GenerateOTP(length){
    //     let OTP = "";

    //     for(let i = 0; i < length; i++){
    //         OTP += Math.floor(Math.random() * 10);
    //     }
    //     return OTP;
    // }
    // console.log(GenerateOTP(4));

    // generate the area of circle of different radius in array?
    // let radius =[2,3,4,5,1];
    // let arr = []
    // const PI = 3.14;
    // for (let r of radius) {
    //     let  res = PI * r * r;
    //     arr.push(res)
    // }
    // console.log(arr);

    // Sum of array using prototype 
    // Array.prototype.SumOfArray = function () {
    //     let sum = 0;
    //     for (let i = 0; i < this.length; i++) {
    //         sum += this[i];
    //     }
    //     Array.prototype.name = "SumOfArray";
    //     return sum;
    // }

    // Arrau sum
    // Array.prototype.SumOfArray = function(){
    //  const res = this.reduce((acc,curr) =>acc + curr);
    //  return res;
    // }


    // check every element length
    // const arr = ["January","February","March","April","May","June"];

    // const res = arr.filter((el) => {
    //     return el.length > 5;
    // })
    // console.log(res);

    // How to convert binary number



    // function Binary(x){
    //     return x.toString(2);
    // }
    // const result = arr.map(Binary)
    // console.log(result);

    // convert into binary
    // const arr = [5,2,4,8,6];
    // const output = arr.map((x) => x.toString(2));
    // console.log(output);

    // const arr = [1,2,3,4,5,6,7,8];
    // const res = arr.filter((e) => e % 2 === 1)
    // console.log(res);

    // const employ = [
    //     {firstName : "Saliram", lastName : "Chaudhary", age : 22},
    //     {firstName : "Sushil", lastName : "Chaudhary", age : 28},
    //     {firstName : "Dinesh", lastName : "Chaudhary", age : 37},
    //     {firstName : "Prabhab", lastName : "Rana", age : 37},
    //     {firstName : "Pradeep" , lastName : "Bohara", age : 28},
    // ];

    // const output = employ.reduce((acc,curr) => {
    //     if(acc[curr.age]){
    //         acc[curr.age] += acc[curr.age];
    //     }
    //     else{
    //         acc[curr.age] = 1;
    //     }
    //     return acc;
    // },{})

    // console.log(output);



    // const employ = [
    //     {firstName : "Saliram", lastName : "Chaudhary", age : 22},
    //     {firstName : "Sushil", lastName : "Chaudhary", age : 28},
    //     {firstName : "Dinesh", lastName : "Chaudhary", age : 39},
    //     {firstName : "Prabhab", lastName : "Rana", age : 37},
    //     {firstName : "Pradeep" , lastName : "Bohara", age : 27},
    // ];

    // USING FILTER
    // const output = employ.filter((a) => a.age < 30).map((f) => f.firstName);
    // console.log(output);

    // USING REDUCE

    //   let result = employ.reduce((acc, curr) => {
        //    if(curr.age < 30){
        //         acc += `${curr.firstName} `;
        //    } 
        //    return acc;
        // },[])
        // console.log(result.split(" "));

        // Find Unique value without reduce and set
        // const arr = [2,4,6,8,2,4,6,8];
        // const uniVal = arr.filter((el,ind) => arr.indexOf(el) === ind)
        // console.log(uniVal); 

    /*
        let num = 10;
        console.log(num.toString(2)); // binary to decimal
        console.log(num.toString(8)); // binary to octal
        console.log(num.toString(16)); // binary to hexadecimal
        console.log(parseInt("1010",2)); // decimal to binary
        console.log(parseInt("12",8)); // octal to binary
        console.log(parseInt("a",16)); // hexadecimal to binary

    */
    
