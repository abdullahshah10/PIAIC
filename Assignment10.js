// JS chapter 39 to 42
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH

var marks1 = parseInt(prompt("Enter marks for course 1:"));
var marks2 = parseInt(prompt("Enter marks for course 2:"));
var marks3 = parseInt(prompt("Enter marks for course 3:"));
var marks4 = parseInt(prompt("Enter marks for course 4:"));
var marks5 = parseInt(prompt("Enter marks for course 5:"));

var totalMarks = 500;
var obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;
var percentage = obtainedMarks * 100 / totalMarks;

var grade;
switch (true) {
  case (percentage >= 90 && percentage <= 100):
    grade = "A+";
    break;
  case (percentage >= 75 && percentage <= 89):
    grade = "A";
    break;
  case (percentage >= 60 && percentage <= 74):
    grade = "B";
    break;
  case (percentage >= 45 && percentage <= 59):
    grade = "C";
    break;
  case (percentage >= 30 && percentage <= 44):
    grade = "D";
    break;
  case (percentage >= 0 && percentage <= 29):
    grade = "F";
    break;
  default:
    grade = "Invalid percentage";
}

alert(`Percentage: ${percentage}%\nGrade: ${grade}`);
