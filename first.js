Es5
Es6
Es7
Ecma Script(Base Lib)

/////////////
DataTypes
///////////
> String  "rse" "aakash" "444" '55' 'true' '55.5' "55" "fd5true" 
> Number  876787 8896.56 94897549
> Boolean true false
> null
> undefined

//Es5
var first = "hi"
var b = 10
var cost = true

var _ = 10

typeof(first)
var first = "hi"
var b = 10
var cost = true
undefined
typeof(a)
"undefined"
typeof(first)
"string"
typeof(b)
"number"
typeof(cost)
"boolean"
var d = 10.4646
undefined
typeof(d)
"number"
var e ="4646"
undefined
typeof(e)
"string"


/////////////
Operations
//////////
var a = 10
var b = 20
a+b (add)
30
a-b
-10
a*b
200
a/b
0.5
b%a(modules/ remender)
b%a
0
4%2
0
5%3
2
4%3
1
///Lower modules higher output is lower
2%4
2
3%4
3
4%4
0
4%2
0
4%3
1

string+string = string
string+number = string
number+string = string
number+number = number

"10"+10+10
"101010"
10+10+"10"
"2010"
"10"+10+"10"
"101010"

"10"+10+10-1
101009
10+10+"10"-1
2009
"10"+10+"10"-1
101009

"10"+10+10
"101010"
"101010"-1
101009
"101010"-"a"
NaN

"10"+"10"
"1010"
"10"-"10"
0
"10"*"10"
100
"10"/"10"
1
"10a"/"10"
NaN
"10a"-"10"
NaN


var a = "hiii"
var b = " JavaScript"
a+b (concat)
"hiii JavaScript" 
var c = 10
undefined
a+c
"hiii10"
c+a
"10hiii"
var a = "hiii"
var b = " JavaScript"
undefined
a+b
"hiii JavaScript"
var c = 10
undefined
a+c
"hiii10"
c+a
"10hiii"
var d = "20"
undefined
var e = "20"
undefined
d+e
"2020"

//Only + work with string rest all give NAN
//(not a number)
a-b
NaN
a*b
NaN
a/b
NaN
a%b
NaN