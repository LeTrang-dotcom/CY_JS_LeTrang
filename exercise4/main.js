const originalStr = "Thủ đô của Việt Nam là {{Hà Nội}}. Thủ đô của Nhật Bản là {{Tokyo}}. Thủ đô của Hàn Quốc là {{Seoul}}. Thủ đô của Trung Quốc là {{Bắc Kinh}}. Thủ đô của Indonesia là {{Jakarta}}. Thủ đô của Philippines là {{Manila}}. Thủ đô của Singapore là {{Singapore}}. Thủ đô của Malaysia là {{Kuala Lumpur}}. Thủ đô của Campuchia là {{Phnom Penh}}. Thủ đô của Lào là {{Vientiane}}. Thủ đô của Myanmar là {{Naypyidaw}}. Thủ đô của Thái Lan là {{Bangkok}}. Thủ đô của Ấn Độ là {{New Delhi}}. Thủ đô của Nepal là {{Kathmandu}}. Thủ đô của Bhutan là {{Thimphu}}. Thủ đô của Bangladesh là {{Dhaka}}. Thủ đô của Sri Lanka là {{Colombo}}. Thủ đô của Pakistan là {{Islamabad}}. Thủ đô của Afghanistan là {{Kabul}}. Thủ đô của Iran là {{Tehran}}. Thủ đô của Iraq là {{Baghdad}}. Thủ đô của Ả Rập Xê Út là {{Riyadh}}. Thủ đô của Qatar là {{Doha}}. Thủ đô của Kuwait là {{Kuwait City}}";

const content = document.getElementById("content");

let strOrigin = originalStr;

function filterStr(){
    strOrigin = originalStr;
    let arr = strOrigin.match(/{{.*?}}|\S+/g);
    const arrKeyAnswer = arr.filter((item) => item.match(/{{(.*?)}}/))
        .map((item) => item.replace(/{{(.*?)}}/, '$1'));
    
    console.log(arrKeyAnswer);
    return arrKeyAnswer;
}

function createInputField(){
    let arr  = filterStr();
    arr.forEach((item, index) => {
        const addInput = `
                <span class="group">
                    <span class="circle">${index + 1}</span>
                    <input type="text" class="dotted-input">
                </span>
            `;
        if (strOrigin.includes(item)){
            strOrigin = strOrigin.replace(new RegExp(`{{${item}}}`, 'g'), addInput );
        }
    });
    content.innerHTML = `<p>${strOrigin}</p>`; 
}
function render(){
    createInputField();
}
render();

const replyBtn = document.getElementById("reply");
const redoBtn = document.getElementById("redo");
const listInput = document.querySelectorAll(".dotted-input");
const listCircle = document.querySelectorAll(".circle");

replyBtn.addEventListener("click", (event) => {
    let arr = filterStr();

    listInput.forEach((item, index) =>{
        item.value == arr[index] ? listCircle[index].classList.add("correct") : listCircle[index].classList.add("incorrect");
    });
});

redoBtn.addEventListener("click", (event) => {
    listInput.forEach((item, index) => {
        item.value = "";
        listCircle[index].classList.remove("correct");
        listCircle[index].classList.remove("incorrect")
    });
})