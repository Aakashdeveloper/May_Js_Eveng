array is a collection of homo/hetrogeneous

var a = ['aaa', 'aaaa',4534.4,4364,true,345,'ff',5]
var b = ['aa','bb','cc','dd']
var c = [53,356,436,75]
var d = [true, true, false, true]

var e =[['a','b'],['r4','45']]

var a = ['aaa', 'aaaa',4534.4,4364,true,345,'ff',5]
undefined
a.length
8
a[0]
"aaa"
a[a.length-1]
5

Push >> Insert always at the end of array;
unshift >> Insert always at the start of array;
pop >> Take out always from the end of the array
shift >> Take out always from the start of the array


var city = ['London','NewYork','Delhi']
var city = ['London','NewYork','Delhi']
undefined
city.push('Helsinki')
4
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]
city.push('Paris')
5
city
(5) ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
var city = ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
undefined
city.pop()
"Paris"
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]

var city = ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
city.pop(2)
var city = ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
city.pop(2)
"Paris"
var city = ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
city.pop(2000)
"Paris"
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]


var city = ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
city.shift(0)

var city = ["London", "NewYork", "Delhi", "Helsinki", "Paris"]
city.shift(0)
"London"
city.unshift('Nice')
5
city
(5) ["Nice", "NewYork", "Delhi", "Helsinki", "Paris"]
city.unshift('Amsterdam')
6
city
(6) ["Amsterdam", "Nice", "NewYork", "Delhi", "Helsinki", "Paris"]

var city = ["Amsterdam", "Nice", "NewYork", "Delhi", "Helsinki", "Paris"]
city.slice(2,4)

var city = ["Amsterdam", "Nice", "NewYork", "Delhi", "Helsinki", "Paris"]
city.slice(2,4)
(2) ["NewYork", "Delhi"]
city
(6) ["Amsterdam", "Nice", "NewYork", "Delhi", "Helsinki", "Paris"]
city.splice(1,0,'Dubai')
[]
city
(7) ["Amsterdam", "Dubai", "Nice", "NewYork", "Delhi", "Helsinki", "Paris"]
city.splice(3,0,'London','Innsburg')
[]
city
(9) ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
undefined
city.splice(2,1,'Hongkong')
["Nice"]
city
(9) ["Amsterdam", "Dubai", "Hongkong", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
city.splice(4,2)
(2) ["Innsburg", "NewYork"]
city
(7) ["Amsterdam", "Dubai", "Hongkong", "London", "Delhi", "Helsinki", "Paris"]


var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

undefined
city.indexOf(1)
-1
city.indexOf('London')
3
city.indexOf('Delhi')
6
city.indexOf('Mumbai')
-1
city.indexOf('delhi')
-1


var a = ['a','b','c','d']
var b = [1,2,3,4,5]
a+b
"a,b,c,d1,2,3,4,5"
a.concat(b)
(9) ["a", "b", "c", "d", 1, 2, 3, 4, 5]
var c = ['aa','bb','cc','dd']
a.concat(b,c)
(13) ["a", "b", "c", "d", 1, 2, 3, 4, 5, "aa", "bb", "cc", "dd"]
c.concat(a,b)
(13) ["aa", "bb", "cc", "dd", "a", "b", "c", "d", 1, 2, 3, 4, 5]

var a = 'red,yellow,green,blue'
a.split(',')
var a = 'red,yellow,green,blue'
a.split(',')
(4) ["red", "yellow", "green", "blue"]

var url = "https://www.packtpub.com/in/web-development/hands-on-server-side-web-development-with-koa-js-video"
undefined
url.split('/')
(6) ["https:", "", "www.packtpub.com", "in", "web-development", "hands-on-server-side-web-development-with-koa-js-video"]
var out  = url.split('/')
undefined
out[out.length-1]
"hands-on-server-side-web-development-with-koa-js-video"

var a = "aakash"
a.split('')
["a", "a", "k", "a", "s", "h"]

//Assignment Two//
//Authorize//

Take input of array in which save user name;
if user name start with (A,C,E,G,I,K)
Say you come to office on even day 
esle if user name start with (B,D,F,H,J,L)
Say you come to office on ODD day
eles you should take leave
at last or any point we can check all the user name in array

/*
var name=prompt("enter the name")
var name=name.toUpperCase()
var evenday=['A','C','E','G'];
var odday=['B','D','F'];
if(evenday.indexOf(name.charAt(0))!== -1){
    console.log("even day")
}
else if (odday.indexOf(name.charAt(0))!== -1){
    console.log('Odd day')
}
else{
    console.log('Not applicable')
}
*/


var city = ["Amsterdam", "Dubai",[1,2,3], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

var city = ["Amsterdam", "Dubai",[1,2,3], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
undefined
city.flat()
(12) ["Amsterdam", "Dubai", 1, 2, 3, "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
var city = ["Amsterdam", "Dubai",[1,2,3,['a','b']], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
undefined
city.flat()
(13) ["Amsterdam", "Dubai", 1, 2, 3, Array(2), "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
city.flat(2)
(14) ["Amsterdam", "Dubai", 1, 2, 3, "a", "b", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]



var city = ["Amsterdam", "Dubai",[1,2,3], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

undefined
Array.isArray(city)
true
var d = "sfWE"
undefined
Array.isArray(city)
true
Array.isArray(d)
false