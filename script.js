const userTemp = document.getElementById("userTemp");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let convertedTemp;

function convert() {
    if (toFarenheit.checked) {
        convertedTemp = userTemp.value * (9 / 5) + 32;
        result.textContent = convertedTemp.toFixed(1) + "degrees Fahrenheit";

    } else if (toCelsius.checked) {
        convertedTemp = ((userTemp.value - 32) * 5) / 9;
        result.textContent = convertedTemp.toFixed(1) + " degrees Celsius";

    } else {
        result.textContent = "select a type"
    }
}


