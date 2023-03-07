// JS chapter 21 to 30
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH


var number = parseFloat(prompt("Enter a decimal point number: "))

var newNum = Math.ceil(number)

var string = "Hello World"

var newStr = string.slice(0,newNum)

var reversed = []

for (i=newStr.length; i >= 0 ; i--){
    reversed.push(newStr[i])
}

alert(reversed.join(""))
