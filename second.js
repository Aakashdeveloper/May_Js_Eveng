var a = true
var b = true
var c = false
a+b+c

true is equal to 1
false is equal to 0

true+true = 2
true+false = 1
false+true = 1
false+false = 0

Boolean WITH  math give you number

var a = true
undefined
var b = false
undefined
a+b
1
a+a
2
a-b
1
a*b
0
a/b
Infinity
b/a
0

var a = true
undefined
a+10
11
a+"hi"
"truehi"
"true"+"true"
"truetrue"
"true"-"true"
NaN

"10"-"2"
"true"-1
NaN

/////////////////////////Input//////////////////
console.log()   // debug
alert()         // notification
confirm()       // To ask yes or no
prompt()        // To take any input

///////
console.log("Hiii")
/////
alert("Form Submitted")
//////
confirm("Do you want to leave")
false
confirm("Do you want to leave")
true
var a = confirm("Do you want to leave")
undefined
a
true
var a = confirm("Do you want to leave")
undefined
a
false
//////
prompt("What is your age")
"10"
var age = prompt("What is your age")
undefined
age
"22"


////////Calc///////
var a = prompt("Enter First Value")
var b = prompt("Enter second value")
alert(a+b)

var a = prompt("Enter First Value")
var b = prompt("Enter second value")
alert(a+b)
undefined
var a = prompt("Enter First Value")
var b = prompt("Enter second value")
alert(a+b)
undefined
var a = "1"
undefined
var b = "22"
undefined
a+b
"122"
parseInt(a)
1
parseInt(b)
22
parseInt(a)+parseInt(b)
23


var a = prompt("Enter First Value") 
var b = prompt("Enter second value")
alert(parseInt(a+b))
alert(parseInt(a)+parseInt(b))

var a = prompt("Enter First Value") 
var b = prompt("Enter second value")
alert(parseFloat(a)+parseFloat(b))


/////
Compare

=   //assignment
==  //compare value
=== //compare value and datatype

var a = 20
a == 20

var a = 20
undefined
a
20
a == 20
true
a == "20"
true
a === "20"
false


var a = "Hi"
undefined
a == "Hi"
true
a == "hi"
false
a === "hi"
false
a === "Hi"
true


var z="99a"-1;
undefined
z
NaN
typeof(z)
"number"
var z="99a"-"1";
undefined
typeof(z)
"number"
var z="a"-"a";
undefined
typeof(z)
"number"
var z="a"+"a";
undefined
typeof(z)
"string"
var z="a"*"a";
undefined
typeof(z)
"number"