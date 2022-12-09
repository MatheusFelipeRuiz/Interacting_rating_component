const voteBtns = document.querySelectorAll('.vote-btn');
const btnSubmit = document.querySelector(".btn-submit-box");
const notaUser = document.querySelector(".nota-user");
const containerBox = document.querySelector(".container-box");
const containerBoxNota = document.querySelector(".display-none");

let contClass = 0;

for (let i = 0; i < voteBtns.length; i++) {
    voteBtns[i].addEventListener("click", function () {
        voteBtns.forEach(checkClass);
        voteBtns[i].classList.add("vote-btn-active");
    });
}

btnSubmit.addEventListener("click", submitResult)

function checkClass (element) {
    element.classList.contains("vote-btn-active") ? contClass++ : console.log();
    if (contClass !== 0) {
        for (let i = 0; i < voteBtns.length; i++) {
            voteBtns[i].classList.remove("vote-btn-active");
        }
    }
}

let nota = 0;
function submitResult () {
    for (let i = 0; i < voteBtns.length; i++) {
        if( voteBtns[i].classList.contains("vote-btn-active")) {
           nota = voteBtns[i].id; 
        }
    }
    containerBox.classList.add("display-none");
    containerBoxNota.classList.add("container-box-nota");
    containerBoxNota.classList.remove("display-none");
    notaUser.textContent = nota;
}

