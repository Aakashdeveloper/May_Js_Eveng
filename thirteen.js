function
methods
arrow
anonymos/IFFI
Generator

////////
var a = 10
var b = 20

console.log(a+b)

///function
function add(a,b){
    return a+b
}

add(1,2)
3

//method
var add = function(a,b){
    return a+b
}

add(1,2)


var isEven= function(uinput){
    var output;
    if(uinput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}

isEven(4)

//Arrow functions

var add = (a,b) => {return a+b}
add(2,3)


var isEven= (uinput)=>{
    var output;
    if(uinput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}