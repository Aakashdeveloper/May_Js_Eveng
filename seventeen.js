//local 
//global


//clouser > restrrict the scope

var a = 10;
function add(){
    var b = 20
    return a+b
}



for(i=0;i<3;i++){
    let c = 10
    console.log("from for>>>",i+c+a)
}


console.log("from func>>>",add())
console.log("A>>>>>",a)
console.log("C>>>>>>",c)
console.log("B>>>>>>",b)


var myvar = [];
for(var i=0;i<3;i++) {
    myvar[i]= function(){
        console.log("I am in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}

I am in function  3
I am in function  3
I am in function  3


I am in function  1
I am in function  2
I am in function  3