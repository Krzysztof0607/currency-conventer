console.log("hi")

let euroValueElement = document.querySelector(".js-euroValue");
let euroRateElement = document.querySelector(".js-euroRate");
let formElement = document.querySelector(".js-form");
let plnValueElement = document.querySelector(".js-plnValue");

euroValueElement.focus();

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let euroRate = euroRateElement.value;
    let euroValue = euroValueElement.value;
    let pln = euroRate * euroValue;

    plnValueElement.innerText = pln.toFixed(2);

})