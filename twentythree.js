class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long = long
    }
}

class country extends geo{
    constructor(name,capital,lat,long){
        super(lat,long)
        this.name = name;
        this.capital = capital
    }
}


var England = new country('UK','England',10.00,71.23)


var England = new country('UK','England',10.00,71.23)
undefined
England
country {lat: 10, long: 71.23, name: "UK", capital: "England"}
England.capital
"England"
England.lat
10

/////////////////////////////////////
function human(name){
    this.name =name;
    this.city = "London"
}

function robot(name,country){
    this.name=name;
    this.legs = 2;
    this.country= country
}
robot.prototype = new human()
var pepper = new robot('Pepper','Japan');

var pepper = new robot('Pepper','Japan');




function human(name){
    this.name =name;
    this.city = "London"
}

function robot(name,country){
    this.name=name;
    this.legs = 2;
    this.country= country
}
robot.prototype = new human()
var pepper = new robot('Pepper','Japan');
human {name: undefined, city: "London"}
pepper
robot {name: "Pepper", legs: 2, country: "Japan"}
pepper.city
"London"