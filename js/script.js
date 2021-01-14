const calculateResult = (quantity, currency) => {
    const bitcoinRate = 123749.35;
    const etherumRate = 3818.34;
    const litecoinRate = 48.28;

    switch (currency) {
        case "Bitcoin":
            return quantity / bitcoinRate;
        case "Etherum":
            return quantity / etherumRate;
        case "Litecoin":
            return quantity / litecoinRate;
    }
}

const updateResultText = (quantity, currency) => {
    const results = document.querySelector(".js-results");
    const result = calculateResult(quantity, currency);
    results.innerHTML = `Za ${quantity} dostaniesz  ${result.toFixed(2)} ${currency}`;



}

function init() {
    const form = document.querySelector(".js-form");
    form.addEventListener("sumbit", (Event) => {
        Event.preventDefault();
        const quantityElement = document.querySelector(".js-quantity");
        const currencyElemennt = document.querySelector(".js-currency");
        const currency = currencyElemennt.value;
        const quantity = +quantityElement.value;
        updateResultText(quantity, currency);
    });

    init();
}