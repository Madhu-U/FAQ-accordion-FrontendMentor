const questionList = document.querySelectorAll(".question");

questionList.forEach(item => {
    item.addEventListener("click", function(){
        const answer = this.nextElementSibling;
        const plusIcon = this.querySelector(".plus")
        const minusIcon = this.querySelector(".minus")
        answer.classList.toggle("hidden");
        plusIcon.classList.toggle("hidden");
        minusIcon.classList.toggle("hidden");
    })
})