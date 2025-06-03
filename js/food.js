const menu = document.querySelector(".mainmenu");
const burgerBtn = document.querySelector(".navbar-toggler");
burgerBtn.addEventListener("mouseover", ()=>{
    menu.classList.toggle("menu--open");
})

const accordeonQuestions = document.querySelectorAll('.accordeon__question');

accordeonQuestions.forEach(function (accordeonQuestion) {

    accordeonQuestion.addEventListener('click', function () {
        const clickedAnswer = accordeonQuestion.parentElement.querySelector('.accordeon__answer');
        accordeonQuestion.classList.toggle('accordeon__question--active');
        clickedAnswer.classList.toggle('accordeon__answer--visible');

        if (clickedAnswer.classList.contains('accordeon__answer--visible')) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + 'px';
        } else {
            clickedAnswer.style.maxHeight = null;
        }
    });
});