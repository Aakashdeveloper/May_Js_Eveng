//literal notation
//constructor notation

var country = {
    name:'India',
    capital:'Delhi',
    population:978758743
}

country
{name: "India", capital: "Delhi", population: 978758743}
typeof(country)
"object"
country.namr
undefined
country.name
"India"
country.capital
"Delhi"
country.language = ['Hindi','Tamil','Punjabi']
(3) ["Hindi", "Tamil", "Punjabi"]
country
{name: "India", capital: "Delhi", population: 978758743, language: Array(3)}
country.language
(3) ["Hindi", "Tamil", "Punjabi"]
country.language[0]
"Hindi"
country.language.push('Bangali')
4
country
{name: "India", capital: "Delhi", population: 978758743, language: Array(4)}
country.state={"name":"Haryana","capital":"Chandigarh"}
{name: "Haryana", capital: "Chandigarh"}
country
{name: "India", capital: "Delhi", population: 978758743, language: Array(4), state: {…}}
country.state
{name: "Haryana", capital: "Chandigarh"}
country.state.name
"Haryana"
delete country.state
true
country
{name: "India", capital: "Delhi", population: 978758743, language: Array(4)}capital: "Delhi"language: (4) ["Hindi", "Tamil", "Punjabi", "Bangali"]name: "India"population: 978758743state: (2) [{…}, {…}]__proto__: Object
country.state=[{"name":"Haryana","capital":"Chandigarh"},{"name":"Maharastra","capital":"Mumbai"}]

country
{name: "India", capital: "Delhi", population: 978758743, language: Array(4), state: Array(2)}capital: "Delhi"language: (4) ["Hindi", "Tamil", "Punjabi", "Bangali"]name: "India"population: 978758743state: Array(2)0: {name: "Haryana", capital: "Chandigarh"}1: {name: "Maharastra", capital: "Mumbai"}length: 2__proto__: Array(0)__proto__: Object
country['language'][0]
"Hindi"
country['state'][0]['name']
"Haryana"


//constructor notation
var car = new Object()
car.brand="Bmw"
car.color="Black"
car.price=334634

334634
car
{brand: "Bmw", color: "Black", price: 334634}
car.brand
"Bmw"
car.color="Germany"
"Germany"
car
{brand: "Bmw", color: "Germany", price: 334634}
car.color="black"
"black"
car.year=2020
2020
car
{brand: "Bmw", color: "black", price: 334634, year: 2020}


//////////


sayHi
{firstname: "Keith", lastname: "Jackson", greet: ƒ}
sayHi.firstname
"Keith"
sayHi.greet()
"Hi Welcome to JS"


//////////////
var firstname = "John"
var lastname="Ammy"

function add(a){
    return a+a
}

var sayHi = {
    firstname:'Keith',
    lastname:'Jackson',
    greet:function(){
        return `Hi  ${this.firstname} ${this.lastname} Welcome to JS`
    }
}

sayHi.greet()
"Hi  Keith Jackson Welcome to JS"


function add(a){
    return a+a
}

var sayHi = {
    firstname:'Keith',
    lastname:'Jackson',
    data: 10,
    sum:function(){
        return add(this.data) 
    }
       
}

///////
function add(a){
    return a+a
}

var sayHi = {
    firstname:'Keith',
    lastname:'Jackson',
    data: 10 
}

add(sayHi.data)



