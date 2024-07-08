function nice(name){
    console.log("Hey "+name+" you are good!")
    console.log("Hey "+name+" your t-shirt is nice!")
    console.log("Hey "+name+" your course is good toooo!")
    console.log("Hey "+name+" you are nice!")
}

nice("Amrit")
nice("Prashant")

function sum(a,b,c=5){
    return a+b+c
}

result1 = sum(4, 6 ,2)
result2 = sum(5, 6)
result3 = sum(6, 6)

console.log("The result of sum is:"+result1)
console.log("The result of sum is:"+result2)
console.log("The result of sum is:"+result3)

const fun1 = (x)=>{
    console.log("I am an arrow function",x)
}

fun1(34)
fun1(46)
fun1(65)