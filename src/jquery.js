const currencySelects = $(".currency");
const cuantityInput = $("#cuantity")[0].value;
const cuantityOutput = $("#output");

fetch("https://api.frankfurter.app/currencies")
  .then((res) => {
    return res.json();
  })
  .then((resJSON) => {
    displayData(resJSON);
  });

const displayData = (resJSON) => {
  Object.keys(resJSON).forEach((key) => {
    currencySelects.append(`<option>${resJSON[key]}</option>`);
  });
};

const updateBase = () => {
  const currencyInput = currencySelects[0];
  const currencyOutput = currencySelects[1];
  const currencyValue = cuantityInput;
  
  if (currencyInput !== currencyOutput) {
    convert(currencyValue, currencyInput, currencyOutput);
  }
};

const convert = (value, input, output) => {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${value}&from=${input}&to=${output}`)
    .then((resp) => resp.json())
    .then((data) => {
      alert(`10 GBP = ${data.rates.USD} USD`);
    });
};
