const messages = [
    "Ты уверена?",
    "Точно уверена?",
    "100%?",
    "Подумай пожалуйста",
    "Просто подумай",
    "Если ты скажешь нет, я расстроюсь",
    "Я сильно расстроюсь",
    "Я очень очень расстроюсь",
    "Ладно, я перестану спрашивать",
    "Скажи да, пожалуйста! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


