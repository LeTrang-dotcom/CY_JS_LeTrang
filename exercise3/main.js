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

let time = 2;
let index = 0;
let flip = 0;
function seeSuggestion(element){
    if (flip <= questions[index].maxShowingCharacter - 1){
        const item = element.getAttribute("data-item");
        element.innerHTML = item;
        flip++;
    }
}
console.log(flip);
function render(){
    console.log(flip);
    notification.innerHTML = `<p>Bạn được quyền lật ${questions[0].maxShowingCharacter} ô</p>`;
    let strQuestion = "";
    strQuestion += 
        `
            <p>${questions[0].content}</p>
        `;
    strQuestion += 
        `
            <div>
                <img src="${questions[0].image}" alt="">
            </div>
        `;
    question.innerHTML += strQuestion;

    let strAnswer = "";

    const arr = [...questions[0].correctAnswer.replace(/\s+/g, '')];
    arr.forEach((item) => {
        strAnswer += 
            `
                <div class="div-result" data-item="${item}" onclick="seeSuggestion(this)"></div>
            `;
    });

    answer.innerHTML = strAnswer;

    nextBtn.addEventListener("click", (event) => {
        if(input.value == questions[0].correctAnswer){
            alert("Bạn đã trả lời đúng");
            strAnswer = "";
            arr.forEach((item) => {
                strAnswer +=
                    `
                <div class="div-result" data-item="${item}" onclick="seeSuggestion(this)>${item}</div>
            `;
            });
            answer.innerHTML = strAnswer;

            setInterval(() => {
                time--;
                countdown.innerHTML = `<small>Bạn sẽ được chuyển sang câu tiếp theo trong ${time} giây</small>`;

                if (time <= 0) {
                    clearInterval();
                }
            }, 1000);
            setTimeout(() => {
                next();
            }, time * 1000);
        }else{
            alert("Bạn đã trả lời sai");
        }
    })
}


render();

function next(){
    index ++;
    if(index < questions.length){
        render();
    }else{
        wrapper.innerHTML = "";
        const str =
            `
            <h1 style="text-align: center"> Kết thúc câu hỏi<h1>
        `;
        wrapper.innerHTML += str;
    }
}
