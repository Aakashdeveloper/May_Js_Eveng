//IFFI

(function(){
    console.log("Hii To Js")
}())


/*function sayhi(){
    console.log("Hii To Js")
}

sayhi()*/

////GeneratorFunction////
function loop(){
    for(i=0;i<5;i++){
        console.log(i)
    }
}


function * loop(){
    for(i=0;i<5;i++){
        yield i
    }
}

var data = loop()
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}