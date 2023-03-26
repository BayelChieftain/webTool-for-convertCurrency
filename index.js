const valueInput = document.querySelector('.js-input');
const currencySelector = document.querySelector('.js-currency-slc');
const outputNode = document.querySelector('.js-output');

valueInput.addEventListener('input', function(){
    // проверка console.log(valueInput.value);
    const rub = Number(valueInput.value)
    const currency = currencySelector.value;
    const result = convert(rub, currency);
    
    // проверка console.log(result);

    outputNode.innerHTML = result;
})

currencySelector.addEventListener('change', function() {
        
        const rub = Number(valueInput.value)
        const currency = currencySelector.value;
        const result = convert(rub, currency);
        
        outputNode.innerHTML = result;

})