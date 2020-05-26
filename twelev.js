regex> regular Expression

> '^[a-z]$'


var name = "aakash"
name.match('^[a-z]$')

var name = "aakash"
name.match('^([a-z]+)$')

var name = "aakash"
name.match('^([a-z]+)$')
(2) ["aakash", "aakash", index: 0, input: "aakash", groups: undefined]
var name = "Aakash"
name.match('^([a-z]+)$')
null
var name = "Aakash"
name.match('^([a-zA-Z]+)$')
(2) ["Aakash", "Aakash", index: 0, input: "Aakash", groups: undefined]
var name = "AakAsh"
name.match('^([a-zA-Z]+)$')
(2) ["AakAsh", "AakAsh", index: 0, input: "AakAsh", groups: undefined]

var name = "AakAs00h"
name.match('^([a-zA-Z]+)$')

var name = "AakAs00h"
name.match('^([a-zA-Z]+)$')
null
var name = "AakAs00h"
name.match('^([a-zA-Z0-9]+)$')
(2) ["AakAs00h", "AakAs00h", index: 0, input: "AakAs00h", groups: undefined]


var number = 9987987
number.match('^[0-9]$')

var number = "9987987"
number.match('^[0-9]$')
null
var number = "9987987"
number.match('^([0-9]+)$')
(2) ["9987987", "9987987", index: 0, input: "9987987", groups: undefined]
var number = "9987987"
number.match('^([0-9]{10})$')
null
var number = "9987987888"
number.match('^([0-9]{10})$')
(2) ["9987987888", "9987987888", index: 0, input: "9987987888", groups: undefined]
var number = "9987987888"
number.match('^([0-9]{2,5})$')
null

Email>>>>>>>>>>

var email = "a@a.com"
email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')