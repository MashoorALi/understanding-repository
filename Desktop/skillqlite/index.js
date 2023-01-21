let btn1 = document.getElementById("add");
let btn2 = document.getElementById("sub");
let btn3 = document.getElementById("mul");
let btn4 = document.getElementById("div");
let result = document.getElementById("result");
let num1 = document.getElementById("first");
let num2 = document.getElementById("second");
var a = num1.value
btn1.addEventListener("click", function(){
    let result1 = +num1.value + +num2.value
    result.value = result1
})
btn2.addEventListener("click", function(){
    if (+num2.value > +num1.value) {
        let result1 = +num2.value - +num1.value
    result.value = result1
        } 
    else {
        let result1 = +num1.value - +num2.value
    result.value = result1
    }
    
})
btn3.addEventListener("click", function(){
    let result1 = +num1.value * +num2.value
    result.value = result1
})
btn4.addEventListener("click", function(){
   if (num2.value == 0) {
    result.value = "dumbfuck"
    
   }
    else {
    let result1 = +num1.value / +num2.value
    result.value = result1
   }
})