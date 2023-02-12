{
    const euroValueElement = document.querySelector(".js-euroValue");
    euroValueElement.focus();


    const updateResultText = (euroRate, euroValue, plnValueElement) => {

        const pln = euroRate * euroValue;
        plnValueElement.innerText = pln.toFixed(2);
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        const euroRateElement = document.querySelector(".js-euroRate");
        const plnValueElement = document.querySelector(".js-plnValue");

        const euroRate = euroRateElement.value;
        const euroValue = euroValueElement.value;

        updateResultText(euroRate, euroValue, plnValueElement);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}