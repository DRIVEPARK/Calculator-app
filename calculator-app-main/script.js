const radio1 = document.querySelector("#one");

const radio2 = document.querySelector("#two");

const radio3 = document.querySelector("#three ");

const inputs = document.querySelectorAll("input");


inputs.forEach((input) => {addEventListener("change", changeTheme =>{

    //theme 1

    if(radio1.checked){

        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";

        document.getElementsByTagName("form")[0].style.backgroundColor = "hsl(223, 31%, 20%)";

        radio1.style.border = "6px solid hsl(6, 63%, 50%)";

        document.querySelector(".top").style.color = "hsl(0, 0%, 100%)";

        document.querySelector("#text").style.backgroundColor = "hsl(224, 36%, 15%)";

        document.querySelector(".calc").style.backgroundColor = "hsl(223, 31%, 20%)";

        for(let i = 0; i<18;i++){
            document.getElementsByClassName("button")[i].style.backgroundColor = "hsl(30, 25%, 89%)";

            document.getElementsByClassName("button")[i].style.color = "hsl(221, 14%, 31%)";

            document.getElementsByClassName("button")[i].style.boxShadow = " hsl(28, 16%, 65%) 0px 1px 1px,hsl(28, 16%, 65%) 0px 2px 3px 0px, hsl(28, 16%, 65%) 0px -2px 0px inset";
        }

        document.querySelector(".del").style.backgroundColor = "hsl(225, 21%, 49%)";

        document.querySelector(".del").style.boxShadow = "hsl(224, 28%, 35%) 0px 1px 1px,hsl(224, 28%, 35%) 0px 2px 3px 0px, hsl(224, 28%, 35%) 0px -2px 0px inset";

        document.querySelector(".del").style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)";

        document.querySelector(".reset").style.boxShadow = "hsl(224, 28%, 35%) 0px 1px 1px,hsl(224, 28%, 35%) 0px 2px 3px 0px, hsl(224, 28%, 35%) 0px -2px 0px inset";

        document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";

        document.querySelector(".equal").style.boxShadow = "hsl(6, 70%, 34%) 0px 1px 1px,hsl(6, 70%, 34%) 0px 2px 3px 0px, hsl(6, 70%, 34%) 0px -2px 0px inset";

        document.querySelector(".equal").style.color = "hsl(0, 0%, 100%)";

        document.querySelector("#result").style.backgroundColor = "hsl(224, 36%, 15%)";

        document.querySelector("#result").style.color = "hsl(0, 0%, 100%)";

        radio2.style.border = "0";

        radio3.style.border = "0";
    }
    
    else if(radio2.checked){

        //theme 2

        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";

        document.getElementsByTagName("form")[0].style.backgroundColor = "hsl(0, 5%, 81%)";

        radio2.style.border = "6px solid hsl(6, 63%, 50%)";

        document.querySelector(".top").style.color = "hsl(198, 20%, 13%)";

        document.querySelector("#text").style.backgroundColor = "hsl(0, 0%, 93%)";

        document.querySelector(".calc").style.backgroundColor = "hsl(0, 5%, 81%)";

        for(let i = 0; i<18;i++){
            document.getElementsByClassName("button")[i].style.backgroundColor = "hsl(45, 7%, 89%)";

            document.getElementsByClassName("button")[i].style.color = "hsl(198, 20%, 13%)";

            document.getElementsByClassName("button")[i].style.boxShadow = " hsl(28, 16%, 65%) 0px 1px 1px,hsl(28, 16%, 65%) 0px 2px 3px 0px, hsl(28, 16%, 65%) 0px -2px 0px inset";
        }

        document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";

        document.querySelector(".del").style.boxShadow = "hsl(185, 58%, 25%) 0px 1px 1px,hsl(185, 58%, 25%) 0px 2px 3px 0px, hsl(185, 58%, 25%) 0px -2px 0px inset";

        document.querySelector(".del").style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";

        document.querySelector(".reset").style.boxShadow = "hsl(185, 58%, 25%) 0px 1px 1px,hsl(185, 58%, 25%) 0px 2px 3px 0px, hsl(185, 58%, 25%) 0px -2px 0px inset";

        document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";

        document.querySelector(".equal").style.boxShadow = "hsl(25, 99%, 27%) 0px 1px 1px,hsl(25, 99%, 27%) 0px 2px 3px 0px, hsl(25, 99%, 27%) 0px -2px 0px inset";

        document.querySelector(".equal").style.color = "hsl(0, 0%, 100%)";

        document.querySelector("#result").style.backgroundColor = "hsl(0, 0%, 93%)";

        document.querySelector("#result").style.color = "hsl(198, 20%, 13%)";

        radio1.style.border = "0";

        radio3.style.border = "0";
    }
    
    else if(radio3.checked){

        //theme 3

        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";

        document.getElementsByTagName("form")[0].style.backgroundColor = "hsl(268, 71%, 12%)";

        document.querySelector(".top").style.color = "hsl(52, 100%, 62%)";

        document.querySelector("#text").style.backgroundColor = "hsl(268, 71%, 12%)";

        document.querySelector(".calc").style.backgroundColor = "hsl(268, 71%, 12%)";

        for(let i = 0; i<18;i++){
            document.getElementsByClassName("button")[i].style.backgroundColor = "hsl(268, 47%, 21%)";

            document.getElementsByClassName("button")[i].style.color = "hsl(52, 100%, 62%)";

            document.getElementsByClassName("button")[i].style.boxShadow = " hsl(290, 70%, 36%) 0px 1px 1px,hsl(290, 70%, 36%) 0px 2px 3px 0px, hsl(290, 70%, 36%) 0px -2px 0px inset";
        }

        document.querySelector(".del").style.backgroundColor = "hsl(281, 89%, 26%)";

        document.querySelector(".del").style.boxShadow = "hsl(285, 91%, 52%) 0px 1px 1px,hsl(285, 91%, 52%) 0px 2px 3px 0px, hsl(285, 91%, 52%) 0px -2px 0px inset";

        document.querySelector(".del").style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".reset").style.backgroundColor = "hsl(281, 89%, 26%)";

        document.querySelector(".reset").style.boxShadow = "hsl(285, 91%, 52%) 0px 1px 1px,hsl(285, 91%, 52%) 0px 2px 3px 0px,hsl(285, 91%, 52%) 0px -2px 0px inset";

        document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".equal").style.backgroundColor = "hsl(176, 100%, 44%)";

        document.querySelector(".equal").style.boxShadow = "hsl(177, 92%, 70%) 0px 1px 1px,hsl(177, 92%, 70%) 0px 2px 3px 0px, hsl(177, 92%, 70%) 0px -2px 0px inset";

        document.querySelector(".equal").style.color = "hsl(198, 20%, 13%)";

        document.querySelector("#result").style.backgroundColor = "hsl(268, 71%, 12%)";

        document.querySelector("#result").style.color = "hsl(52, 100%, 62%)";

        radio3.style.border = "6px solid hsl(176, 100%, 44%)";

        radio2.style.border = "0";

        radio1.style.border = "0";
    }
})});

function changeTheme(){
    
}


// calculations

const mainNumber = document.querySelector("#result");

const numberBtn = document.querySelectorAll(".number");

const operatorBtn = document.querySelectorAll(".operator");

const equalBtn = document.querySelector(".equal");

const resetBtn = document.querySelector(".reset");

const delBtn = document.querySelector(".del");

numberBtn.forEach((button) => button.addEventListener("click", addNumber)); 

operatorBtn.forEach((button) => button.addEventListener("click", calculate));

equalBtn.addEventListener("click", showResult);

resetBtn.addEventListener("click", reset);

delBtn.addEventListener("click", del);

mainNumber.innerHTML = "";

var result = "";

var firstNumber = "";

var secondNumber = "";

var sign = "";

function addNumber(){

    if(this.textContent === "." && mainNumber.innerHTML.includes(".")){
        return;
    }

    if(this.textContent === "." && mainNumber.innerHTML === ""){
        return mainNumber.innerHTML = "0.";
    }

    mainNumber.innerHTML += this.textContent;
}

function calculate(){

    if(mainNumber.innerHTML === "" && this.textContent === "-"){
        mainNumber.innerHTML = "-"
        return;
    }

    else if(mainNumber.innerHTML === ""){
        return;
    }

    firstNumber = Number(mainNumber.innerHTML);

    if(firstNumber !== "" && secondNumber !== "" && sign !== ""){
        showResult();
    }

    mainNumber.innerHTML = "";
    sign = this.textContent;

}

function showResult(){

    secondNumber = Number(mainNumber.innerHTML);

    if(firstNumber === "" || secondNumber === ""){
        return;
    }

    switch(sign){
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
         case "/":
            result = firstNumber / secondNumber;           
    }

    mainNumber.innerHTML = result;
    firstNumber = "";
    secondNumber = "";
    sign = "";

}
function reset(){
    mainNumber.innerHTML = "";
    result = "";
}

function del(){

    if(result !== "" || result === mainNumber.innerHTML){
        return;
    }

    let before = mainNumber.innerHTML;

    let after = before.slice(0,-1);

    mainNumber.innerHTML = after;
}



