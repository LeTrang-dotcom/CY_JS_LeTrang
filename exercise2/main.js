const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers: [
            "A.Miến Điện",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 3: Nam Lào là nước nào",
        answers: [
            "A.Campuchia",
            "B.Malaysia",
            "C.Singapore",
            "D.Việt Nam"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 4: Bắc Lào là nước nào",
        answers: [
            "A.Trung Quốc",
            "B.Hàn Quốc",
            "C.Nhật Bản",
            "D.Hoa Kỳ"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
        answers: [
            "A.14",
            "B.15",
            "C.16",
            "D.17"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 6: Đâu là thủ đô của Lào",
        answers: [
            "A.Hà Nội",
            "B.Bangkok",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 7: Lào có biển không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 8: Lào có sân bay quốc tế không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 10: Thủ đô của Brueni là gì",
        answers: [
            "A.Bangkok",
            "B.Bandar Seri Begawan",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 1
    }
];

const questionsNode = document.getElementById("questions");
const questionNode = document.querySelector("p");
const answersNode = document.querySelector(".answers");
const scoreNode = document.querySelector(".score");
const btnNode = document.querySelector("button");
const wrapperNode = document.querySelector(".wrapper");

function active(index) {
    questionNode.innerHTML = questions[index].content;
    let str = "";
    questions[index].answers.forEach((answer) => {
        str +=
            `
            <div class="answer" onclick="select(this)">${answer}</div>
        `;
    })
    answersNode.innerHTML = str;
}

let total_score = 0;
function select(element) {
    const correctAnswer = questions[index].answers[questions[index].correctAnswer];

    if (element.textContent == correctAnswer) {
        total_score += 10;
        alert("Bạn đã trả lời đúng");
        scoreNode.innerHTML = "Score: <span>" + total_score + "</span>";
        element.classList.add('correct');
    } else {
        alert("Bạn đã trả lời sai");
        element.classList.add('incorrect');
    }

    const listAnswer = document.querySelectorAll(".answer");

    listAnswer.forEach((answer) => {
        console.log(answer);
        answer.classList.add('disabled');
    })
}

let index = 0;
active(index);
btnNode.addEventListener("click", (event) => {
    if (index < questions.length - 1) {
        index++;
        active(index);
    } else {
        wrapperNode.innerHTML = "";
        const str =
            `
            <div class="score">Kết thúc bài kiểm tra</div>
            <div class="score">Score: <span>${total_score}</span></div>
        `;
        wrapperNode.innerHTML += str;
    }
});




