'use strict'


let adviceContainer = document.querySelector('.advice-container');
let adviceNumberElement = document.querySelector('.advice-number');
let adviceTextElement = document.querySelector('.advice-text');
let button = document.querySelector('.button');



async function getData() {
    let url = 'https://api.adviceslip.com/advice';

    try {
        let response = await fetch(url, {
            cache: 'no-cache',
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}



async function updateData() {
    let data = await getData();

    adviceNumberElement.innerHTML = 'ADVICE #' + data.slip.id;
    adviceTextElement.innerHTML = data.slip.advice;
}



/* The advice-container is hidden when the page loads. This shows the container after 1.5 seconds */
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        toggleShow();
        updateData();
    }, 1000);
})



button.addEventListener('click', () => {
    toggleHide();
    setTimeout(() => {
        updateData();
        toggleHide();
    }, 1500);
});



function toggleShow() {
    adviceContainer.classList.toggle('show');
}

function toggleHide() {
    adviceContainer.classList.toggle('hide');
}