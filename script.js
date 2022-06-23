function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 + num2;
}
function modulus(num1, num2) {
    return num1 % num2
}



function askUser() {
    var num1 = parseInt(prompt("Enter first number"));
    var num2 = parseInt(prompt("Enter second number"));
    var operator = prompt("Enter operator from the list: +,-,*,/ and %");
    var result = 0;
    if (operator == "+") {
        result = num1 + num2;
    }
    else if (operator == "-") {
        result = num1 - num2;
    }
    else if (operator == "*") {
        result = num1 * num2;
    }
    else if (operator == "/") {
        result = num1 / num2;
    }
    else if (operator == "%") {
        result = num1 % num2;
    }
    else {
        alert("Enter a valid operator");
    }
    alert(result);
}
askUser();