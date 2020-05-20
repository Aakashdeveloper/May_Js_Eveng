localStorage.getItem()
localStorage.setItem()
localStorage.removeItem()


localStorage.setItem('_99k','thisismyytoken')
undefined
localStorage.getItem('_99k')
"thisismyytoken"
"thisismyytoken"
localStorage.removeItem("_99k")
undefined
localStorage.getItem('_99k')
null
localStorage.setItem('mydata',['ee','dd','dff'])
undefined
localStorage.getItem('mydata')
"ee,dd,dff"

sessionStorage.setItem('token','5t5g55gf')
undefined
sessionStorage.getItem('token')
"5t5g55gf"
sessionStorage.removeItem('token')
undefined


//////
Task 1

Create a one luck Game
> take one input form user
> Generate one number between 1 to 20
> if both match user win
> else user loose