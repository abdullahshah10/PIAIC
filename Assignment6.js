// JS chapter 18 19 20
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH


var courses=[]; 
var coursess=[]; 

var subjects = ["computer","urdu","english","physics","math"];

for (i = 0; i < subjects.length; i++) {
    courses[i] = prompt("Course " + (i + 1), subjects[i]);
}
alert(courses);

for (i = 0; i < courses.length; i++) {
    coursess[i] = prompt(courses[i], `course${i+1}Value`);
}

for (i = 0; i < courses.length; i++){
    if (courses[i] != coursess[i]){
        courses.splice(i,1,coursess[i])
    }
}

alert(courses);