function requireFname(){
    var fname = document.getElementById('fname').value;
    if(fname == ' '||fname==''){
        document.getElementById('fout').innerText="Please enter firstname";
        document.getElementById('fout').style.color="red"
    }else{
        document.getElementById('fout').innerText="";
    }
}

const validatePass =  () => {
    var pass = document.getElementById('pass').value;
    if(pass.length<8){
        document.getElementById('pout').innerText="Min Length is 8";
        document.getElementById('pout').style.color="red"
    }else{
        document.getElementById('pout').innerText="";
    }
}

const validateCPass =  () => {
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    if(pass !== cpass){
        document.getElementById('cout').innerText="Password does not match";
        document.getElementById('cout').style.color="red"
    }else{
        document.getElementById('cout').innerText="";
    }
}

const validateEmail =  () => {
    var email = document.getElementById('email').value;
    document.getElementById('eout').style.color="red"
    if(email == ' '||email==''){
        document.getElementById('eout').innerText="Please enter Email";
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please enter Valid Email";
        }
        else{
            document.getElementById('eout').innerText="";
        }
    }
}

