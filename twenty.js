var bob = new Object();
bob.age = 10;
bob.city = "Newyork";
bob.setAge = function(newAge){
    bob.age = newAge
}

var tony = new Object();
tony.age = 10;
tony.city = "Newyork";
tony.setAge = function(newAge){
    tony.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}


var bob = new Object();
bob.age = 10;
bob.city = "Newyork";
bob.setAge = createAge

var tony = new Object();
tony.age = 10;
tony.city = "Newyork";
tony.setAge = createAge

////////////////////////
var calc = {
    sum:(a,b) => {return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(1,2)


var db = {
    insert:(table,obj) => {
        return `Insert into ${table} name , age VALUES (${obj.name}, ${obj.age})`
    },
    find:(table)=>{
        return `Select * from ${table}`
    }
}



var db = {
    insert:(table,obj) => {
        return `Insert into ${table} name , age VALUES (${obj.name}, ${obj.age})`
    },
    find:(table)=>{
        return `Select * from ${table}`
    }
}
undefined
db.insert('student',{name:'john', age:10})
"Insert into student name , age VALUES (john, 10)"
db.find('emp')
"Select * from emp"