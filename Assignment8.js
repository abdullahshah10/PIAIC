// JS chapter 31 to 34
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH

var name = prompt("Enter your name: ")
var day = prompt("Enter birth day: ")
var month = prompt("Enter birth month: ")
var year = prompt("Enter birth year: ")

var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

var yage = 2023 - parseInt(year)
var mage = 12 - parseInt(month)
var dage = 30 - parseInt(day)

var days = (yage * 365) + (mage * 30.44) + dage


let daynow = now.getDate();
let monthnow = now.getMonth() + 1; 
let yearnow = now.getFullYear();


console.log(`"Hello ${name}, Good Morning, AfterNoon, Evening or Night"`)
console.log(`Your DOB is ${hours}:${minutes}:${seconds}`)
console.log(`You are ${yage} years ${mage} Month ${dage} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds old`) 
console.log(`Your age in days ${days}`)

var daysLeft = Math.round((Math.abs(month-monthnow)*30.44) + (Math.abs(day-daynow)))
var hoursLeft = 24 - hours
var minLeft = 60 - minutes
var secLeft = 60 - seconds

if (month != monthnow && day != daynow){
    console.log(`How much time left in your next birthday? ${daysLeft} days ${hoursLeft} hours ${minLeft} minutes ${secLeft} seconds`)
}
else if(month == monthnow && day == daynow){
    console.log(`Happy Birth Day ${name}.  Today is Your ${yage} Birthday`) 
}
