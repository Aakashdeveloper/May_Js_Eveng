var url = "https://api.exchangeratesapi.io/latest?base="

async function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    var response = await  fetch(`${url}${base}`,{method:'GET'})
    let data = await response.json()
    final = data.rates
    final=`Converted price of ${amount} ${base} is ${(parseFloat(final[output])*parseFloat(amount)).toFixed(2)} ${output}`
    document.getElementById('converted').innerHTML=final
}

/*
function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        //console.log(data)
        final = data.rates
        //final = parseFloat(final[output])*parseFloat(amount)
        final=`Converted price of ${amount} ${base} is ${(parseFloat(final[output])*parseFloat(amount)).toFixed(2)} ${output}`
        document.getElementById('converted').innerHTML=final
    })
}
*/