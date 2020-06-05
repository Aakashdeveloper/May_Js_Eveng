var person = {
    fullname: function(){
        return `${this.firstname}_${this.lastname}`
    }
}


var john = {
    firstname:'John',
    lastname:'Eva'
}

person.fullname.call(john)
"John_Eva"
person.fullname.apply(john)
"John_Eva"

///////////////

var person = {
    fullname: function(city,country){
        return `${this.firstname}_${this.lastname}_${city}_${country}`
    }
}


var john = {
    firstname:'John',
    lastname:'Eva'
}

person.fullname.call(john,'Delhi','India')
"John_Eva"
person.fullname.apply(john,'Delhi','India')
VM446:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:17


person.fullname.call(john,['Delhi','India'])
    "John_Eva_Delhi,India_undefined"
person.fullname.apply(john,['Delhi','India'])
    "John_Eva_Delhi_India"
