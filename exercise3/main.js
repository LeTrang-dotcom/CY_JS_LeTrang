const questions = [
    {
        content: 'Sông nào chảy qua Hà Nội',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/MatnuocSongHong-06112008333.JPG',
        correctAnswer: 'Sông Hồng',
        maxShowingCharacter: 2
    },
    {
        content: 'Ai là người phát minh ra bóng đèn sợi đốt',
        image: 'https://st.quantrimang.com/photos/image/2016/10/25/thomsa-edison-4.jpg',
        correctAnswer: 'Edison',
        maxShowingCharacter: 3
    },
    {
        content: 'Nguời giàu nhất thế giới ',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
        correctAnswer: 'Jezz Bezos',
        maxShowingCharacter: 2
    },
    {
        content: 'Thủ đô của Belarus',
        image: '',
        correctAnswer: 'Minsk',
        maxShowingCharacter: 3
    }
];

const notification = document.querySelector(".notification");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const input = document.querySelector("input");
const nextBtn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");
const countdown = document.querySelector(".countdown");


let index = 0;
let flip = 0;
let arr = [];
function seeSuggestion(element) {
    if (flip < questions[index].maxShowingCharacter) {
        const item = element.getAttribute("data-item");
        element.innerHTML = item;
        flip++;
        numberOfFlip();
    }
}

function numberOfFlip() {
    notification.innerHTML = `<p>Bạn được quyền lật ${questions[index].maxShowingCharacter - flip} ô</p>`;
}

function prepareAnswer(){
    let trimCorrectAnswer = questions[index].correctAnswer.replace(/\s+/g, '');
    arr = [...trimCorrectAnswer];
}

function render() {
    prepareAnswer();
    numberOfFlip();
    question.innerHTML = `
        <p>${questions[index].content}</p>
        <div>
            <img src="${questions[index].image}" alt="">
        </div>
    `;

    let strAnswer = arr.map((item) => `
        <div class="div-result" data-item="${item}" onclick="seeSuggestion(this)"></div>
    `).join("");

    answer.innerHTML = strAnswer;
    input.value = "";   
}
function displayCorrectAnswer(){
    let strAnswer = arr.map((item) => `
        <div class="div-result" data-item="${item}">${item}</div>
    `).join('');
    answer.innerHTML = strAnswer;
}
function startCountDown(time){
    const countdownInterval = setInterval(() => {
        time--;
        countdown.innerHTML = `<small>Bạn sẽ được chuyển sang câu tiếp theo trong ${time} giây</small>`;

        if (time == 0) {
            clearInterval(countdownInterval);
            countdown.innerHTML = "";
        }
    }, 1000);
}

nextBtn.addEventListener("click", (event) => {
    const timeLimit = 2;
    let time = timeLimit;
    if (input.value == questions[index].correctAnswer) {
        alert("Bạn đã trả lời đúng");
        
        displayCorrectAnswer();

        startCountDown(time);
        
        setTimeout(() => {
            next();
        }, 2000);
    } else {
        alert("Bạn đã trả lời sai");
    }
})

render();

function next() {
    index++;
    if (index < questions.length) {
        flip = 0;
        render();
    } else {
        wrapper.innerHTML = "";
        const str =
            `
            <h1 style="text-align: center"> Kết thúc câu hỏi<h1>
        `;
        wrapper.innerHTML += str;
    }
}
