function checkpalindrom(data){
    var rem, temp, final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        console.log("rem>>>>",rem)
        data = parseInt(data/10);
        console.log("data>>>>",data)
        final = final*10+rem   
        console.log("final>>>>",final)
    }
    if(final == temp){
        console.log("Number is palindrom")
    }else{
        console.log("Number is not a palindrom")
    }
}

checkpalindrom(778877)


function stringPalindrom(str){
    var re = /[\W_]/g;
    var mystr = str.toLowerCase().replace(re,'');
    var reverseStr = mystr.split('').reverse().join()
    return reverseStr === mystr
}