Date()
"Wed May 20 2020 15:44:27 GMT+0100 (British Summer Time)"
Date().getDay()
var mydate = new Date()
undefined
mydate.getDate()
20
mydate.getTime()
1589985955467
mydate.getYear()
120
mydate.getFullYear
ƒ getFullYear() { [native code] }
mydate.getFullYear()
2020
mydate.getDay()
3

////////////
var type = "admin";

switch(type){
    case 'user':
        console.log('You are user');
        break;
    case 'admin':
        console.log('You are admin');
        break;
    case 'Sadmin':
        console.log('You are Super admin');
        break;
    default:
        console.log("I don't know");
}

switch(mydate.getDay()){
    case 1:
        console.log('Today is Monday');
        break; 
    case 2:
        console.log('Today is Tuedsay');
        break; 
    case 3:
        console.log('Today is Wednesday');
        break;
    default:
        console.log("Wrong Input");   
}


Date()
"Wed May 20 2020 16:19:09 GMT+0100 (British Summer Time)"
var mydate = new Date()
undefined
`${mydate.getDate()}/${mydate.getMonth()}/${mydate.getFullYear()}`

"20/4/2020"