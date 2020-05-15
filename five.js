var language = "javaScript"
language.toLowerCase()

var language = "javaScript"
language.toLowerCase()
"javascript"
language.toUpperCase()
"JAVASCRIPT"

> "Javascript"

var language = "javaScript"
language.toLowerCase()
"javascript"
language.toUpperCase()
"JAVASCRIPT"
language.length
10
var language = "   javaScript.    "

undefined
language.length
18
var language = "   javaScript.    "

undefined
language.trim()
"javaScript."
language.trim().length
11
language.trim().toUpperCase()
"JAVASCRIPT."
language.trim().length.toUpperCase()


var language = "   javaScript .    "
undefined
language.trim()
"javaScript ."
var a = "i am doing javascript"
undefined
a.replace('javascript','js')
"i am doing js"
var c ="javascript"
undefined
c.replace('a','A')
"jAvascript"
c.replace(/a/,'A')
"jAvascript"
c.replace(/a/g,'A')
"jAvAscript"
var language = "   javaScript .    "
undefined
language.replace(/ /,'')
"  javaScript .    "
language.replace(/ /g,'')
"javaScript."


var city = "londOn"
city.slice(1)

var city = "londOn"
city.slice(1)
"ondOn"
city
"londOn"
city.slice(2)
"ndOn"
city.slice(2,4)
"nd"

var city = "londOn"
city[0]
"l"
var city = "londOn"
city[1]
"o"
city.charAt(0)
"l"
city.charAt(0).toUpperCase()
"L"
city.slice(1)
"ondOn"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

slice(start,end)
substring(start,end)
substr(start,length)

var city = "londOn"
city.substring(1)
"ondOn"
city.substring(2,4)
"nd"

var city = "londOn"
city.substr(1)

var city = "londOn"
city.substr(1)
"ondOn"
var city = "londOn"
city.substr(2,4)
"ndOn"

var city = "londOn"
undefined
city.slice(1)
"ondOn"
city.slice(-1)
"n"
city.slice(-2)
"On"
city.slice(-3)
"dOn"
city.slice(-1,-3)
""
city.slice(1,-3)
"on"
city.slice(1,-2)
"ond"

var city = "londOn"
undefined
city.substring(-1)
"londOn"
city.substring(-2)
"londOn"
city.substring(-1,-3)
""
city.substring(1,-3)
"l"

var city = "Amsterdam"
undefined
city.indexOf('m')
1
city.indexOf('z')
-1
var cities="London, Amsterdam, Paris, Delhi, Newyork"
undefined
cities.indexOf("Paris")
19
cities.indexOf("Mumbai")
-1
city.repeat(2)
"AmsterdamAmsterdam"