//var mydb = require('./first');
import mydb from './first';

console.log(mydb.records)

console.log(mydb.insert(mydb.records[0].name,{name:mydb.records[0].colume[0].name,age:mydb.records[0].colume[0].age}))