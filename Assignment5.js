// JS chapter 15 16 17
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH

var courses=[] 
var course1 = prompt("course 1", "computer")
var course2 = prompt("course 2", "urdu")
var course3 = prompt("course 3", "english")
var course4 = prompt("course 4", "physics")
var course5 = prompt("course 5", "math")

courses.push(course1)
courses.push(course2)
courses.push(course3)
courses.push(course4)
courses.push(course5)

alert(courses)

var course11=prompt(course1, "course1Value")
var course21=prompt(course2, "course2Value")
var course31=prompt(course3, "course3Value")
var course41=prompt(course4, "course4Value")
var course51=prompt(course5, "course5Value")

if (course1 != course11){
    courses.splice(0,1,course11)
}
if (course2 != course21){
    courses.splice(1,1,course21) 
}
if (course3 != course31){
    courses.splice(2,1,course31) 
}
if (course4 != course41){
    courses.splice(3,1,course41)
}
if (course5 != course51){
    courses.splice(4,1,course51) 
}

alert(courses)
