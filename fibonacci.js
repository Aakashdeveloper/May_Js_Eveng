[0,1,1,2,3,5,8,13,21]


var myfibonacci = function(n){
    if(n === 1){
        return [0,1]
    }else{
        var data = myfibonacci(n-1)
        data.push(data[data.length-1] + data[data.length-2])
        return data
    }
}

var myfibonacci = function(n){
    if(n === 1){
        return [0,1]
    }else{
        var data = myfibonacci(n-1)
        console.log("first>>>>"+data[data.length-1])
        console.log("second>>>>"+data[data.length-2])
        console.log(data[data.length-1] + data[data.length-2])
        data.push(data[data.length-1] + data[data.length-2])
        return data
    }
}