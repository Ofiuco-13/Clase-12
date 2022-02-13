const currencySelects = $(".currency");
const cuantityInput = $("#cuantity");
const cuantityOutput = $("#output");

const fetchCurrencies = () => {
  fetch("https://api.frankfurter.app/currencies")
    .then((res) => {
      return res.json();
    })
    .then((resJSON) => {
      displayData(resJSON);
    });
};

const displayData = (res) => {
  Object.keys(res).forEach((key) => {
    currencySelects.append(`<option>${[key]}</option>`);
  });
};

const updateBase = () => {
  const currencyInput = currencySelects[0].value;
  const currencyOutput = currencySelects[1].value;
  const currencyValue = cuantityInput[0].value;

  if (currencyInput !== currencyOutput) {
    convert(currencyValue, currencyInput, currencyOutput);
  }
};

const convert = (value, input, output) => {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${value}&from=${input}&to=${output}`)
    .then((res) => {
      return res.json();
    })
    .then((resJSON) => {
      $("#last-update").text(`Last update: ${resJSON.date}`);
      cuantityOutput[0].value = Object.values(resJSON.rates)[0];
      $("#from-currency").text(`${value} ${input} equal to`);
      $("#to-currency").text(`${cuantityOutput[0].value} ${output}.`);
    });
};
