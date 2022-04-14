//It is recommended to write script inside body

/*
    1. Ways to print in Js
    console.log("Hello");
    alert("me");
    document.write("Hitesh");
 */
// Javascript console API
console.log("i", "2+2", 2 + 2);
console.warn("Hii");
console.error("Cle");
// 3. Javascript variables
// Containers to store data values are called variables
var number1 = 34;
var num2 = 56;
console.log(number1 + num2);
// 4.Data types in Js
// Numbers
var num1 = 34;
var num2 = 5.6;
// strings
var str1 = "This is a string";
var str2 = "This is also a string";
// objects
var marks = {
    ravi: 34,
    hitesh: 95.9
}
console.log(num1, num2, marks);
// Boolean
var a = true;
var b = false;
console.log(a, b);
var und = undefined;
var d;
console.log(und, d);
var n = null;
console.log(n);
/*At a very high level, there are two types of data types in Js 
1. Primitive : undefined,null,number,string,boolean,symbol
2. Reference : Arrays,objects
*/
var arr = [1, 2, 3, "Hitless", true];
console.log(arr, arr[1], arr[3], arr[4]);
// Operators in Js- Arithmetic
var a = 1,
    b = 1;
console.log(a + b);
// assignment operators
var c = a + b;
c -= 2;
c /= 0;
console.log(c);
// Logical operators and ,or and not
// functions
function avg(a, b) {
    return (a + b) / 2;
}
console.log(avg(5, 6));
// Conditionals in Js -> if else, else if, for loops
for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
arr.forEach(element => {
    console.log(element);
});
let j = 0;
const ac = 0;
// while loop, do while loop,break,continue;
// array methods
console.log(arr.length);
arr.pop();
console.log(arr);
arr.push("Hii");
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(1);
console.log(arr);
// tostring function in JS, sort function,splice,value of
// string methods in Js
let s = "Hitesh is my is name";
console.log(s.length, s.indexOf("is"), s.lastIndexOf("is"), s.slice(1, 5), );
console.log(s.replace("Hitesh", "Rohan")); // replace only first occurence
// date
let da = new Date();
console.log(da.getTime(), da.getFullYear(), da.getMonth(), da.getDay(), da.getMinutes());
console.log(da.getHours());
// DOM MANIPULATion
let cl = document.getElementById('click');
console.log(cl);
let con = document.getElementsByClassName('container');
console.log(con);
// con[0].style.background = "yellow";
con[0].classList.add('bg-primary');
con[0].classList.add('text-success');
// con[0].classList.remove('bg-primary');
// console.log(cl.innerHTML);
// console.log(cl.innerText);
// console.log(con[0].innerHTML);
// console.log(con[0].innerText);
tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is bold para";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild function
//selecting query selector
console.log(1);
sel = document.querySelector('.container')
console.log(sel);
sel2 = document.querySelectorAll('.container');
console.log(sel2);

function clicked() {
    console.log("This button was clicked");
}
window.onload = function() {

        console.log("This window is loaded");
    }
    // events in Js
click.addEventListener('click', function() {
    document.querySelectorAll('.container')[0].innerHTML = "<b>We have clicked</b>"
    console.log("click hua");
});
click.addEventListener('mouseover', function() {
    console.log("mouse hua");
});
click.addEventListener('mouseout', function() {
    console.log("mouse out hua");
});
click.addEventListener('mouseup', function() {
    console.log("mouse up hua");
});
click.addEventListener('mousedown', function() {
    console.log("mouse doen hua");
});
// arrow functions
sum = (a, b) => {
        return a + b;
    }
    // settimeout and setInterval
logkaro = () => {
    console.log("logged");
};
setTimeout(logkaro, 2000);
setInterval(logkaro, 3000);
// clearInterval can stop setInterval
//clearTimeout(clr) to cancel setTimeout
// Javascript localStorage
/*
    localStorage.setItem('name','hitesh');
    localStorage.getItem('name');
    localStorage.removeItem;
    localStorage.clear()
*/
// JSON
obj = { name: "hitesh", length: 1 };
jso = JSON.stringify(obj);
console.log(jso);
par = JSON.parse(`{ "name": "hitesh", "length": 1 }`);
console.log(par);
// BackTicks also called template Literals
abb = 34;
console.log(`this is ${abb}`);;