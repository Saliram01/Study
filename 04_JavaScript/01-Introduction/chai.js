/*========= INTRODUCTION ============*/

/* JavaScript is an interpreted clint side event based object oriented scripting language */
/* It can modified dynamically web pages */
/* It is used to communicate with the server */
/* It is invented in 1995 */
/* It is a case sensative language */
/* It program are run by interpreter build in user browser */
/* It can valid user input */
/* It can be used for cookies */
/* It is full integrated with html and css */
/* It supports all browser */
/* In js complex things are done by simply */

/*============ VARIABLES ============= */
/*
    Var => It is a global bariable and the variable can be re-declear and update.
    let => It is a block scope variable and it can not be re-declear  bit it can be update.
    const => It is block scope variable and it cannot be re-declear and update.
*/

/*============= DATATYPES ============== */
/*
    Premitive
    -> Number
    -> Null
    -> Undefine
    -> Boolean
    -> String
    -> Symbols
*/
/*
    Non-premitive
    -> Array
    -> Object
    -> Function

*/
/* ================ OPEARTORS =============== */
/*
    Arithmetic => + , - , * , / , % , **
    Assignment => = , += , -= , *= , /= , %= , **=
    Logical    => || && !
    Ternary    => ? , :
    Comparison => == , === , != , !=== , > , < , >= , <=
    String => let a = "5" + 5 , let b = 5 + "5" ,
    Bitwise => & , | , ~ , ^ , >> , << ,>>>
*/

/* ============== String ============== */

// first letter capital in all sentence word
/*
const sentence = "saliram chaudhary kailali nepal";
const word = sentence.split(" ");

for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toLocaleUpperCase() + word[i].substring(1);
}
const output = word.join(" ");
console.log(output);
*/
// remove all space in string sentence
/*const strSentence = "I am from dhangadhi";
const space = strSentence.split(" ");
const newWord = space.join("\0");*/
// console.log(newWord);

// Without method remove space in string
// const name = "Saliram Chaudhary";
// let arr = name.split(" ");
// let output = "";
// for(let i = 0; i < arr.length; i++){
//     output += arr[i];
// }
// console.log(output);

// Sum of number
/*const num = 12345;
const strNum = num.toString();
let sum = 0;
for (let i = 0; i <= strNum.length; i++) {
    sum += i;
}*/
// console.log(sum);

// changed the string character to uppercase which index is devisibled by 2
/*let string = "saliramchaudhary";
for (let i = 0; i <= string.length; i++) {
    if (i % 2 == 0) {
        const s = string.charAt(i);
        const u = s.toUpperCase();
        console.log(u);
    }
    else if (i % 2 != 0) {
        const lower = string.charAt(i);
        console.log(lower);
    }

}*/

// Square root

// const num1 = 5;
// const num2 = 5;
// const number = num1 * num1 + num2 * num2;
// const square = Math.sqrt(number);
// console.log(square);

/* ============== Array ============ */

// flat method
// const arr = [10,[20,[30,[40,[50,[60,[70]]]]]]];
// console.log(arr.flat(Infinity));

// const arr = [2,4,6,7,8];
// console.log(typeof arr);

// const arr = new Array(1,2,3,4,5,6,7);
// console.log(arr[0]);

// let marvel_heroes = ["Spiderman", "Thor", "Ironman"];
// let dc_Heroes = ["Superman", "Flash", "Batman"];

// concat method
// const con = marvel_heroes.concat(dc_Heroes);
// console.log(con);

// push method
// marvel_heroes.push(dc_Heroes);
// console.log(marvel_heroes);

// spread operator
// const spre = [...marvel_heroes,...dc_Heroes];
// console.log(spre);

// console.log(Array.isArray("Saliram"));
// console.log(Array.from("Saliram"));

// const num = 100;
// const arr = Array.of(num);
// console.log(arr);

// const numb = 200;
// console.log([numb]);

// Destructure in array
// const arr = [1,2,3,4,5,6];
// const {0:one,1:two} =arr
// console.log(one , two);

// let a,b,rest;
// [a,b] = [10,20]
// console.log(a);
// console.log(b);

// let a,b,rest;
// [a,b,...rest] = [10,20,30,40,50,60,70,80];
// console.log(rest);

/* ============= Object ============ */

// Nested Object
// const obj1 = {
//     name: "Chaudhary",
//     obj2: {
//         address: "Hasuliya",
//         obj3: {
//             age: 22,
//             obj4: {
//                 gender: "Male"
//             }
//         }
//     }
// }

// console.log(obj1.obj2.obj3.obj4.gender);

// const obj = {
//     name : "Saliram",
//     "address" : "Hasuliya",
//     age : 22,
//     gender : "Male",
//     [Symbol] :"123",
// }
// console.log(obj.address);
// console.log(obj["age"]);
// console.log(obj[Symbol]);

// Object.freeze(obj); // we cannot change and update
// Object.seal(obj); // it can be change key and value and cannot delete

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(obj.hasOwnProperty("name"));

// Spread Operator in obj

// const obj1 = {Name: "Saliram", Address : "Rampur"};
// const obj2 = {Name : "Sushil", Address : "Kanchanpur"};

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

/* DESTRUCTURE METHOD */

// const De_Structure = {
//     product : "Laptop",
//     price : 50000,
//     company : "Dell",

//     Destructure : {
//         product : "Desktop",
//         price : 25000,
//     }
// }
// Object.freeze(De_Structure)
// Object.seal(De_Structure.Destructure);
// De_Structure.price = 20000;
// const {price} = De_Structure;
// console.log(price);

// De_Structure.Destructure.price = 10000
// const {Destructure : {price}} = De_Structure;
// console.log(price);


// let obj = {
//     Country : "Nepal",
//     age : 20,
// }
// obj5.price = "1000"; // Adding key and value in obj
// delete obj5.Country // Delete obj
// objUpdate = {Des : obj.Country}
// console.log(objUpdate);

// const {Country , ...rest} = obj; // old key name
// const renameObj = {des : Country,...rest}; // new key name
// console.log(renameObj);

/* ============= Functions ============= */

// Normal function
// No parameter
/*
function func(){
    console.log("Function");
}func();

// with Parameter
function func1(f1){
    return f1
} console.log(func1("Chaudhary"));

// rest operator
((...rest) => {
    let sum = 0;
    for(let i = 0; i <= rest.length; i++){
        sum += i;
    }
    console.log(sum);
})(1,2,3,4,5);


function Scope(){
    var x = 10; // Decleare var in function doesnot access out of function block
}Scope();
// console.log(x);

// Block Scope

{
    var x = 20; //  when we declear var in block  it can be access out of block;
}
console.log(x);

// This keyword in func in obj and access value of object through function;
const obj = {
    language : "English",
    func : function(){
        console.log(this.language);
    }
}
obj.func();

// this keyword in normal function
function func(){
    console.log(this);
}func();

const func1 = () => {
    console.log(this);
}
func1();
*/

/* ========= Function With Object and Array ========== */
/*
const product = {Title : "iphone" , Price : "2000000", Company : "Apple"};
// func with obj
(function func1() { //  IIFE Named function
    console.log(`${product.Title} and Rs ${product.Price}`);
})();

(function(objData) {
    console.log(`${objData.Title} and Rs ${objData.Price}`);
})(product);

(function(data) {
    console.log(`${data.title} and ${data.price}`);
})({title : "Mac", price : "500000",})
*/

/*
// func with array
const arr = ["Apple","Orange","Mango","Banana"];

(() => { // Without named IIFE function
    console.log(arr[0]);
})();

((arrEl) => {
    console.log(arrEl);
})(arr);

((...ele) => {
    console.log(ele);
})(["Dog","Cat","Deer"]);
*/

// Nullish Coalescing Operator (??) : null undefine
// let val;
// val = 10 ?? 20;
// val = null ?? 30;
// val = undefined ?? 40;
// val = undefined ?? null ?? 50;
// console.log(val);

// Terinary Operator

// const teaPrice = 25;
// teaPrice >= 20 ? console.log("Tea price is more than 20") : console.log("Tea price is less than 20")

// Truethy and Falsy
/*
// check obj
const obj = {};

if(Object.keys(obj).length === 0){
    console.log("True");
}
else{
    console.log("False");
}

// check array
const arr = [];
if(arr){
    console.log("Yes");
}
else{
    console.log("No");
}
 */

/* LOOP */
// Table 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + ' * ' + j + ' = ' + i * j);
//     }
// }

// Break and Continue
// for(let i = 1; i < 10; i++){
//     // console.log(i);
//     if(i == 5){
//         console.log(`Detected ${i}`);
//         break
//         // continue
//     }
// }
/*
console.log("For");
for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log("While");
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

console.log("Do while");
let j = 11;
do{
    console.log(j);
    j++;
}while(j <= 10);

*/

/*  ==========Document Object Modal ========== */
/*
<body>
    <div class="container">
        <h1 id="title" class="head">Document Object Modal</h1>
        <p>Welcome for learning document object modal page</p>
    </div>

    <ul>
        <li class="list-item">list 1</li>
        <li class="list-item">list 2</li>
        <li class="list-item">list 3</li>
        <li class="list-item">list 4</li>
    </ul>
</body>
<script>
    const m = document.getElementsByClassName('list-item');
    const n  = Array.from(m); // it is used if we select using getElementByClassName
    n.forEach((e) => {
        e.style.backgroundColor = "blue";
    })
</script>
*/
/*
<body>
    <!-- <div class="parent">
        <div class="day">Sunday</div>
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
        <div class="day">Friday</div>
        <div class="day">Saturday</div>
    </div> -->


    <script>
        // const parent=  document.querySelector('.parent')
        // console.log(week);
        // console.log(week.children);

        // for(let i = 0; i < parent.children.length; i++){
        //     console.log(parent.children[i].innerText);
        // }
        // parent.children[0].style.color = "red";
        // console.log(parent.firstElementChild);
        // console.log(parent.lastElementChild);

        // const day = document.querySelector('.day');
        // console.log(day.parentElement);
        // console.log(day.nextElementSibling);
        // console.log(parent.childNodes);
    </script>

    <script>
        const h2 = document.createElement('h2');
        h2.className = "main";
        h2.id = Math.floor(Math.random() * 7 + 1);
        h2.appendChild(document.createTextNode("Welcome JavaScript"));
        document.querySelector('body').appendChild(h2);

    </script>
    <script>
        const lang = document.querySelector("li:nth-child(4)");
        // lang.outerHTML = "<li>Html</li>";
        const newLi = document.createElement('li');
        newLi.textContent = "Mojo"
        lang.replaceWith(newLi);
    </script>
    */

/* ========= Event ========== */
/*
<body>
<ul>
<li><a href="#">HTML</a></li>
<li><a href="#">CSS</a></li>
<li><a href="#">JavaScript</a></li>
<li id="react"><a href="#">React</a></li>
<li><a href="#">Java</a></li>
<li><a href="#">Spring Boot</a></li>
</ul>
<script>
    // event bubbling and event capturing
    // document.querySelector('ul').addEventListener('click',(e) => {
    //     console.log("Clicked ul");
    // },false)
    
    // document.querySelector('#react').addEventListener('click',(e) => {
    //     // console.log("Clicked react");
    //     e.stopPropagation();
    //     e.defaultPrevented();

    //     console.log(e);
    // },false)


    document.querySelector('ul').addEventListener('click',(e) => {
        console.log(e.target.tagName);
        if(e.target.tagName === "A"){
            let rm = e.target.parentNode;
            rm.remove();
        }
    })
    </script >
    </body >
*/


/*

// Making method and add string prototype for use
    String.prototype.trueLength = function () {
    console.log(`${this.trim().length}`);
}
"chaudhary".trueLength()


<script>
        // const desc = Object.getOwnPropertyDescriptor(Math,"PI");
        // console.log(desc);

        // CLASS
        class User {
            constructor(email, password) {
                this.email = email;
                this.password = password;
            }
            // email
            get email() {
                return this._email.toLowerCase();
            }
            set email(em) {
                this._email = em;
            }

            // password
            get password() {
                return `${this._password}src`;
            }
            set password(val) {
                this._password = val;
            }
        }
        const saliram = new User("saliram@gmail.com", "123");
        console.log("Email : " + saliram.email);
        console.log("Password : " + saliram.password);

        // OBJ

        const Obj = {
            _email : 'src@gmail.com',
            _password : '123456',

            get email(){
                return this._email;
            },

            set email(em){
                this._email = em;
            }
        }

        const tea = Object.create(Obj);
        console.log(tea.email);
    </script>
*/


// const URL = "https://fakestoreapi.com/products/category/jewelery";

        // const user = fetch(URL);
        // console.log(user);

        // CallBack Hell
        // const cart = ["Shoes", "Paint", "Shirt"];

        // createOrder(cart, function (orderId) {
        //     proceedToPayment(orderId, function (paymentInfo) {
        //         showOrderSummary(paymentInfo, function () {
        //             updateWalletBallance();
        //         });
        //     });
        // });

        // createOrder(cart)
        //     .then((orderId) => proceedToPayment(orderId))
        //     .then((paymentInfo) => showOrderSummary(paymentInfo))
        //     .then((paymentInfo) => showOrderSummary(paymentInfo))


        // Another

        // Promise Chaining
        // const cart = ["Shoes", "Paint", "Shirt"];

        // createOrder(cart)
        //     .then((orderId) => {
        //         console.log(orderId);
        //         return orderId;
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     })
        //     .then((orderId) => {
        //        return proceedToPayment(orderId);
        //     })
        //     .then((paymentInfo) => {
        //         console.log(paymentInfo);
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     })
        //     .then((orderId) => {
        //         console.log("No matter what happen , i will definetely be called.");
        //     })

        // function createOrder(cart) {
        //     const p = new Promise((resolve, reject) => {

        //         if (!validateCard(cart)) {
        //             const err = new Error("Cart is not valid");
        //             reject(err);
        //         }
        //         const orderId = "2468";
        //         if (orderId) {
        //             setTimeout(() => {
        //                 resolve(orderId);
        //             }, 5000)
        //         }
        //     });
        //     return p;
        // }
        // function proceedToPayment(orderId) {
        //     return new Promise((resolve, reject) => {
        //         resolve("Payment Successful");
        //     })
        // }
        // function validateCard(cart) {
        //     return true;
        // }

        // project
        /* 
            cart
            createOrder
            processedToPayment
            showOrderSummary
            updateWallet

        */
        /*
                function createOrder(orderData) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log("Order is successfully");
                            resolve({ orderId: 123, ...orderData });
                        }, 2000)
                    });
                    return p;
                }
        
                function processedToPayment(order) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log(`Payment to processed for order id ${order.orderId}`);
                            resolve({ ...order, paymentStatus: "Success" });
                        }, 1500)
                    })
                }
        
                function showOrderSummary(order) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log(`Order summary for orderId : ${order.orderId}`);
                            console.log("Items : ", order.items);
                            console.log("Total cost : ", order.totalCost);
                            resolve(order);
                        })
                    })
                }
        
                function updateWallet(user, amountSpent) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log(`Wallet update ${amountSpent} deducted.`);
                            user.walletBalance -= amountSpent;
                            resolve(user)
                        }, 2000)
                    })
                }
        
                const orderData = {
                    userId: 1,
                    items: ["Item 1", "Item 2"],
                    totalCost: 100,
                }
        
                const user = {
                    userId: 1,
                    walletBalance: 500,
                }
        
                createOrder(orderData)
                    .then((order) => processedToPayment(order))
                    .then((order) => showOrderSummary(order))
                    .then((order) => updateWallet(user, order.totalCost))
                    .then((user) => console.log(`New Wallet Balance ${user.walletBalance}`))
                    .then((err) => console.log(err))
                    */
        // const isBoolean = " "
        // console.log(Boolean(isBoolean))

        /*========= PROMISES ==========*/
        /*
                const p1 = new Promise((resolve,reject) => {
                    // setTimeout(() => resolve("p1 success"),3000); 
                    setTimeout(() => reject("p1 success"),3000);
                })
                const p2 = new Promise((resolve,reject) => {
                    // setTimeout(() => resolve("p2 success"),1000);
                    setTimeout(() => reject("p2 failed"),1000);
                })
                const p3 = new Promise((resolve,reject) => {
                    // setTimeout(() => resolve("p3 success"),2000);
                    setTimeout(() => reject("p3 failed"),2000);
                })
                
                
        */
        // when all are true it is waiting nd get the output all
        // when one is failed then it get the result according to time
        // Promise.all([p1,p2,p3])
        // .then((res) => console.log(res)) 
        // .catch((err) => console.log(err))


        // when all are true it is waiting and get the output all
        // when one is false still it is waiting get the output all
        // Promise.allSettled([p1,p2,p3])
        // .then((res) => console.log(res)) 
        // .catch((err) => console.log(err)) 


        // get result 1st wether it is failed or success according to time;
        // Promise.race([p1,p2,p3]) 
        // .then((res) => console.log(res)) 
        // .catch((err) => console.log(err)) 

        // all are reject then it get the output reject otherwise it gives resolve only according to time if all are same time then it output is 1st
        // Promise.any([p1,p2,p3])
        // .then((res) => console.log(res)) 
        // .catch((err) => {
        // console.log(err)
        // console.log(err.errors) // when all reject then we can write this clg;
        // })


        /* =========== Async and Await =========== */

        // What is async ?
        // -> Async is the keyword that is used before a function to create a async function.
        // ->Async function always return promise.
        // -> async and await are used to handle promises.
        // What is await ?
        // -> Await is a keyword that is only be used inside a async function.

        // promise behind the scene 
        // const p1 = new Promise((resolve, reject) => {
        //     setTimeout(() => resolve("resolve successfully 1"),40000)
        // });

        // const p2 = new Promise((resolve,reject) => {
        //     setTimeout(() => resolve("resolve successfully 2"),20000)
        // });

        // async function handlePromise() {
        //     console.log("Start");

        //     const val1 = await p1;
        //     console.log("Hello world 1");
        //     console.log(val1);

        //     const val2 = await p2;
        //     console.log("Hello World 2");
        //     console.log(val2);
        // }
        // handlePromise();

        // Fetch function
        // Real world example of api

        // const API_URL = "https://fakestoreapi.com/products";

        // (async () => {
        //     try {
        //         const res = await fetch(API_URL);
        //         const data = await res.json();
        //         console.log(data);
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
        // })();