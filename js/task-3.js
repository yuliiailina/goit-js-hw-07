const userName = document.querySelector("input#name-input");
const output = document.querySelector("#name-output");

userName.addEventListener("input", handlerInput);

function handlerInput(event) {
    const trimmedUserName = event.target.value.trim();
    if (trimmedUserName === "") {
        return "Anonymous";
    } else {
        output.textContent = trimmedUserName;
    }
};

