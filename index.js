let result_val = 0;
let calc_flg = false;
let opr_flg = false;

let num1="", num2="", opr="";

function element_reset()
{
    document.querySelector(".expression").innerHTML = "";
    document.querySelector(".exp_result").innerHTML = "0";
    num1="";
    num2="";
    opr_flg = false;
    calc_flg = false;
}

function element(value)
{ 
    if(opr_flg == false)
    {
        num1 += value;
        document.querySelector(".expression").innerHTML = num1;
        document.querySelector(".exp_result").innerHTML = '';
    }
    else
    {
        document.querySelector(".expression").innerHTML += value;
        document.querySelector(".exp_result").innerHTML = '';
        num2 += value;
    }
}

function operation(operator)
{
    opr = operator;
    opr_flg = true;

    if(calc_flg == false)
    {
        document.querySelector(".expression").innerHTML += operator;
        document.querySelector(".exp_result").innerHTML = '';
    }
    else
    {
        calc_flg = false;
        num1 = result_val;
        document.querySelector(".expression").innerHTML = num1.toString() + operator;
        document.querySelector(".exp_result").innerHTML = '';
    }
}

function calculate()
{
    num1 = Number(num1);
    num2 = Number(num2);
    
    switch(opr)
    {
        case "+": result_val = num1 + num2; break;
        case "-": result_val = num1 - num2; break;
        case "x": result_val = num1 * num2; break;
        case "/": result_val = num1 / num2; break;
        case "%": result_val = num1 % num2; break;
    }
    
    console.log(result_val);
    document.querySelector(".exp_result").innerHTML = result_val;
    
    num1="";
    num2="";
    opr_flg = false;
    calc_flg = true;
}