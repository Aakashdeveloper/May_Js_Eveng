function country(name,capital){
    this.name = name;
    this.capital = capital
}

var India = new country('India','Delhi')

function database(){
    this.insert = (table,obj) => {
        return `Insert into ${table} name , age VALUES (${obj.name}, ${obj.age})`
    },
    this.find = (table)=>{
        return `Select * from ${table}`
    }
}

////////////ES6///////////////////

class country{
    constructor(name,capital){
        this.name = name;
        this.capital = capital
    }
}


var USA = new country('USA','Newyork')
var USA = new country('USA','Newyork')
undefined
USA.name
"USA"
USA.capital
"Newyork"