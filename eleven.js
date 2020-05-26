for
while
do while
for of 
for in>>Object
Map
filter


for(i=0;i<10;i++){
    console.log(i)
}

for(i=0;i<10;i++){
    console.log(i)
}
VM65:2 0
VM65:2 1
VM65:2 2
VM65:2 3
VM65:2 4
VM65:2 5
VM65:2 6
VM65:2 7
VM65:2 8
VM65:2 9

var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}
var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}
VM70:4 Amsterdam
VM70:4 Dubai
VM70:4 Nice
VM70:4 London
VM70:4 Innsburg
VM70:4 NewYork
VM70:4 Delhi
VM70:4 Helsinki
VM70:4 Paris


var city = ["Amsterdam", "Dubai",[1,2,3], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

///////////////While/////////////
var i = 0;
while(i<10){
    console.log(i)
    i++
}

var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
var i = 0;
while(i<city.length){
    console.log(city[i])
    i++
}
Amsterdam
Dubai
Nice
London
Innsburg
NewYork
VM305:4 Delhi
VM305:4 Helsinki
VM305:4 Paris


///DO while check condition later gurentee it will run once

var i =10
do{
    console.log(i)
    i++
}
while(i<10)

var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

var i =10
do{
    console.log(city[i])
    i++
}
while(i<city.length)


/////For Of///////
var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

for(cities of city){
    console.log(cities)
}

var city = ["Amsterdam", "Dubai",[1,2,3,['a','b'],5,6,['c',[true]]], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

for(cities of city){
    if(Array.isArray(cities)){
        for(num of cities){
            console.log(num)
        }
    }else{
        console.log(cities)
    } 
}