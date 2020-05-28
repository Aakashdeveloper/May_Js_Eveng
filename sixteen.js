var a = 10;
var a; >>>> declaration
a = 10 >>>> assignment

////////////////
var > we can redeclare and reassign
let > we cannot redeclare but can reassign
const >  we cannot redeclare nor reassign

> var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 20
20
> let b = 10
undefined
> b
10
> let b = 11
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> b
20
> let b = 11
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> b
20
> const c = 10
undefined
> c
10
> const c = 11
Thrown:
SyntaxError: Identifier 'c' has already been declared
> c = 11
Thrown:
TypeError: Assignment to constant variable.