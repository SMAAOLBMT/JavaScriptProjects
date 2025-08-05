function addition_funciton()
{
    var addition = 2 + 2;
    document.getElementById("adds").innerHTML = "2 + 2 = " + addition; 
}

function subtract_funciton()
{
    var subtract = 5 - 3;
    document.getElementById("subs").innerHTML = "5 - 3 = " + subtract;
    //document.getElementById("subs").innerHTML = "-ngtv unary = " + -subtract; 
}

function multiply_funciton()
{
    var multiply = 7 * 7;
    document.getElementById("mply").innerHTML = "7 * 7 = " + multiply; 
}

function divide_funciton()
{
    var divide = 15 / 3;
    document.getElementById("dvd").innerHTML = "15 / 3 = " + divide; 
}

function multiple_operations_funciton()
{
    var math_ops = (1 + 2) * 10 / 2 - 5;
    document.getElementById("mops").innerHTML = "[(1 + 2) * 10 / 2 - 5] 1 plus 2, multiplied by 10, divide in half and then subtracted by 5 equals: " + math_ops; 
}

function modulus_funciton()
{
    var remainder = 25 % 6;
    document.getElementById("mduls").innerHTML = "[25 % 6] When you divide 25 by 6 you have a remainder of: " + remainder; 
}