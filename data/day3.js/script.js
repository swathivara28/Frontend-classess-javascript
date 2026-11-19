// let text="this is your javascript class";
// // string methods

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.indexOf("java"));
// console.log(text.slice(0,4));
// console.log(text.replace("java","python"));
// console.log(text.split(" "));
// console.log(text.trim());
// // reverse the string
// console.log(text.split(" ").reverse().join(" "));
// console.log(text.split(" ").reverse().join(", "));

// array

// let num=[1,2,3,4,5,6,7,8,9]
// console.log(num)
// console.log(num[5])
// // add end
// num.push(10)
// console.log("after push ", num)
// // add start
// num.unshift(0)
// console.log("after unshift", num)

// // removelast
// num.pop()
// console.log("after pop ", num)
// // removefirstelement
// num.shift()
// console.log("after shift ", num)
// // slice use to showthe slice and display
// console.log("before slice",num)
// console.log("slice data",num.slice(2,5))
// console.log("after slice",num)
// // remove
// console.log("before splice",num)
// num.splice(2,5,10,11,12,13,14)
// console.log("after splice",num)

// // sort

// console.log("before sort",num)
// num.sort((a,b)=> b-a)
// console.log("after sort",num)

// objects

// let student={
//     name:"moulya",
//     age:20,
//     city:"pune"
// }
// console.log(student)
// console.log(Object.values(student))
// console.log(Object.keys(student))
// console.log(Object.entries(student))

// // add in oject
// console.log(student.address="hyd")
// console.log(student)

// // delete
// delete student.address
// console.log(student)

// function
// function hii(){

// console.log("hii")
// }
// hii()
// hii()
// // types

// // named,regular fun
// let text;
// console.log(text);

// function name(){
//     console.log("this is function")

// }
// console.log("my function call",name())

// // return fun
// let num=1000;
// console.log(num);

// function hii(){
//     return 10+20

// }
// console.log("my function ",hii())


// let n1=1000;
// let n2=2000;
// function add(a,b){
//     return a+b;
// }
// console.log(add(n1,n2));


// let num1=1000;
// let num2=2000;

// function sub(a,b){
//     return a-b;
// }
// console.log(sub(num1,num2));

// console.log(add(n1,n2),sub(num1,num2));
// // arguments
// console.log("add call",add(n1,n2,sub(num1,num2)));

// anonymous
// const hii=function(){
//     console.log("hii");
// };
// hii();


// // es6-arrow function
// const data=()=>{
//     console.log("liih");
// }
// data();

// // immediate invoke fun
// (
//     function (){
//         console.log("hii");

//     }
    
// )()
// // 

// function p1(){
//     console.log("p1");

// }
// p1();
// p1();
// p1();

// wakeup,freshup,breakfast,work,lunch,snacks,work,dinner,nap,sleep
// function wakeup() {
//     console.log("Wakeup");
// }

// function freshup() {
//     console.log("Freshup");
// }

// function breakfast() {
//     console.log("Breakfast");
// }

// function work() {
//     console.log("Work");
// }

// function lunch() {
//     console.log("Lunch");
// }

// function snacks() {
//     console.log("Snacks");
// }

// function dinner() {
//     console.log("Dinner");
// }

// function nap() {
//     console.log("Nap");
// }

// function sleep() {
//     console.log("Sleep");
// }

// // Calling Functions

// wakeup();
// freshup();
// breakfast();
// work();
// lunch();
// snacks();
// work();
// dinner();
// nap();
// sleep();
// // createa fun with your name

// function swathi() {
//     console.log("Hello! My name is swathi.");
// }

// swathi();

// // trainer,student
// function trainer() {

//     console.log("Wakeup");
//     console.log("Freshup");
//     console.log("Breakfast");
//     console.log("Work");
//     console.log("Lunch");
//     console.log("Snacks");
//     console.log("Work");
//     console.log("Dinner");
//     console.log("Nap");
//     console.log("Sleep");

// }

// trainer();

// // student daily activity in fun
// function student() {

//     console.log("Wakeup");
//     console.log("Freshup");
//     console.log("Breakfast");
//     console.log("Getting Ready");
//     console.log("Going to College");
//     console.log("Attending Classes");
//     console.log("Lunch");
//     console.log("Attending Lab");
//     console.log("Returning Home");
//     console.log("Snacks");
//     console.log("Study");
//     console.log("Dinner");
//     console.log("Sleep");

// }

// student();


// function wakeup() {
//     return("Wakeup");
// }

// function freshup() {
//     return("Freshup");
// }

// function breakfast() {
//     return("Breakfast");
// }

// function work() {
//     return("Work");
// }

// function lunch() {
//     return("Lunch");
// }

// function snacks() {
//     return("Snacks");
// }

// function dinner() {
//     return("Dinner");
// }

// function nap() {
//     return("Nap");
// }

// function sleep() {
//    return("Sleep");
// }

// function trainer() {

//     return("Wakeup");
//     return("Freshup");
//     return("Breakfast");
//     return("Work");
//     console.log("Lunch");
//     console.log("Snacks");
//     console.log("Work");
//     console.log("Dinner");
//     console.log("Nap");
//     console.log("Sleep");

// }

// trainer();

// // student daily activity in fun
// function student() {

//     console.log("Wakeup");
//     console.log("Freshup");
//     console.log("Breakfast");
//     console.log("Getting Ready");
//     console.log("Going to College");
//     console.log("Attending Classes");
//     console.log("Lunch");
//     console.log("Attending Lab");
//     console.log("Returning Home");
//     console.log("Snacks");
//     console.log("Study");
//     console.log("Dinner");
//     console.log("Sleep");

// }

// student();

// const trainer = () =>{
//     console.log(wakeup(),
//                 freshup(),
//             breakfast(),
//             work(),
//             lunch(),
//             snacks(),)
                
//
