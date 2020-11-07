let submitButton = document.querySelector(".btn-ghost");

const submitFunction = () => {
    submitButton.style.color = "blue"
}

submitButton.addEventListener('click', submitFunction)