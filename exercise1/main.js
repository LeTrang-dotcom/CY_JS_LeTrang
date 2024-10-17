const number1 = document.getElementsByClassName("num-1")[0];
const number2 = document.getElementsByClassName("num-2")[0];
const listBtn = document.querySelectorAll("button");
const result = document.getElementById("result");


function getResult(str) {
    if (str == 'plus') {
        result.textContent = Number(number1.value) + Number(number2.value);
    }
    if (str == 'sub') {
        result.textContent = Number(number1.value) - Number(number2.value);
    }
    if (str == "multiple") {
        result.textContent = Number(number1.value) * Number(number2.value);
    }
    if (str == "divide") {
        if (Number(number2.value) != 0) {
            result.textContent = Number(number1.value) / Number(number2.value);
        } else {
            result.innerHTML = "";
            document.getElementById("err-message").innerHTML = "Không thể chia cho 0";
            document.getElementById("err-message").style.color = "red";
        }
    }
}