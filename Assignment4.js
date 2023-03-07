// JS chapter 10 to 14
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH

var value1 = parseInt(prompt("Enter value: "));
var value2 = parseInt(prompt("Enter second value: "));
var value3 = prompt("Enter operator: ");

var result;
switch(value3){
    case "+":
        result = value1 + value2;
        break;
    case "-":
        result = value1 - value2;
        break;
    case "*":
        result = value1 * value2;
        break;
    case "/":
        result = value1 / value2;
        break;
    default:
        result = "Invalid Operator";
        break;
}

alert(result);
