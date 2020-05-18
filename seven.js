if(condition){
    output
}else{
    output
}


var name= "john"

if(user === "john"){
    console.log(`Hi ${user}`)
}else{
    console.log(`Sorry ${user} not allowed`)
}


var name= "john"
if(user.toLowerCase() === name.toLowerCase()){
    console.log(`Hi ${name.toUpperCase()}`)
}else{
    console.log(`Sorry ${name.toUpperCase()} not allowed`)
}

var name= "john"
if(user.toLowerCase() === name.toLowerCase()){
    console.log(`Hi ${name.toUpperCase()}`)
}else{
    console.log(`Sorry ${name.toUpperCase()} not allowed`)
}
VM695:3 Hi JOHN
undefined
var name= "John"
if(user.toLowerCase() === name.toLowerCase()){
    console.log(`Hi ${name.toUpperCase()}`)
}else{
    console.log(`Sorry ${name.toUpperCase()} not allowed`)
}
VM706:3 Hi JOHN
undefined
var name= "Johns"
if(user.toLowerCase() === name.toLowerCase()){
    console.log(`Hi ${name.toUpperCase()}`)
}else{
    console.log(`Sorry ${name.toUpperCase()} not allowed`)
}
VM710:5 Sorry JOHNS not allowed



var a = 989233
if(a%2 ===0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a =56
if(a%2 ===0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisible by 3`)
}else
{
    console.log(`Number ${a} is odd`)
}


var a =12
if(a%2 ===0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisible by 3`)
}else
{
    console.log(`Number ${a} is odd`)
}

var a =12
if(a%2 ===0 ){
    console.log(`Number ${a} is even`)
}
if(a%3==0){
    console.log(`Number ${a} is divisible by 3`)
}
else
{
    console.log(`Number ${a} is odd`)
}


var a = 15
if(a%2 === 0 ){
    console.log(`Number ${a} is even`)
}else if(a%3==0 || a%5==0){
    console.log(`Number ${a} is divisible 3 or 5`)
}
else
{
    console.log(`Number ${a} is odd`)
}


var a = 15
if(a%2 === 0 ){
    console.log(`Number ${a} is even`)
}else if(a%3==0 || a%5==0){
    if(a%3==0){
        console.log(`Number ${a} is divisible 3`)
    }else{
        console.log(`Number ${a} is divisible 5`)
    }
}
else
{
    console.log(`Number ${a} is odd`)
}


var test = 10;
if(test){
    console.log(`Hiii`)
}else{
    console.log(`Bie`)
}

//Checking condition is true or not
var test = 10;
if(test){
    console.log(`Hiii`)
}else{
    console.log(`Bie`)
}

VM810:3 Hiii
undefined
var test = -1;
if(test){
    console.log(`Hiii`)
}else{
    console.log(`Bie`)
}

VM814:5 Bie


undefined
null

var a = null;
undefined
a
null
var vv;
vv
undefined
typeof(a)
"object"
typeof(vv)
"undefined"

Truthy  1,22,33,4 true
Falsy  false 0 <0 undefined null


///////
Ternery Operator
Date
Switch