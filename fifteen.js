var a =['a','b','c','d']
a.map((data) =>{ return data})

var a =['a','b','c','d']
a.map((data) =>{ return data})
(4) ["a", "b", "c", "d"]
var a =[2,3,4,5]
a.map((data) =>{ return data+1})
(4) [3, 4, 5, 6]

var age = [45,33,23,56,25,32]
age.filter((data) => { return data > 25})


var age = [45,33,23,56,25,32]
age.map((data) => { return data > 25})
(4) [45, 33, 56, 32]

var age = [45,33,23,56,25,32]
age.filter((data) => { return data > 25})
(4) [45, 33, 56, 32]

var age = [45,33,23,56,25,32]
age.map((data) => { return data > 25})
(6) [true, true, false, true, false, true]

var a = [0,1,2,3,4]
a.map((data) => { return data*2})
a.filter((data) => { return data*2})

var a = [0,1,2,3,4]
a.map((data) => { return data*2})
(5) [0, 2, 4, 6, 8]
a.filter((data) => { return data*2})
(4) [1, 2, 3, 4]