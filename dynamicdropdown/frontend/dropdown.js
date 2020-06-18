const url = "http://localhost:7800/"
const getCity =() => {
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((out) => {
        for(i=0;i<out.length;i++){
            console.log(out[i].name)
            var option = document.createElement("option")
            var textnode = document.createTextNode(out[i].name)
            option.appendChild(textnode)
            document.getElementById('city').appendChild(option)
        }
    })
}