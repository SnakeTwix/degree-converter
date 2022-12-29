const input = document.getElementById("degree-input");
const output = document.getElementById("degree-output")

const inputButtons = document.getElementById("input-buttons").querySelectorAll("input");
const outputButtons = document.getElementById("output-buttons").querySelectorAll("input");

input.addEventListener("input", inputHandler);
inputButtons.forEach(button => button.addEventListener("input", inputChangeHandler));
outputButtons.forEach(button => button.addEventListener("input", outputChangeHandler));

const celsiusToKelvin = (degree) => degree + 273;
const celsiusToFahrenheit = (degree) => degree * 9/5 + 32; 
const kelvinToCelsius = (degree) => degree - 273;
const kelvinToFahrenheit = (degree) => (degree - 273) * 9/5 + 32;
const fahrenheitToCelcius = (degree) => (degree - 32) * 5/9;
const fahrenheitToKelvin = (degree) => (degree - 32) * 5/9 + 273;

const degreeConversion = {
    "cf": celsiusToFahrenheit,
    "ck": celsiusToKelvin,
    "kf": kelvinToFahrenheit,
    "kc": kelvinToCelsius,
    "fk": fahrenheitToKelvin,
    "fc": fahrenheitToCelcius,
}

calculateDegree(input.value)

function changeOutputMode(mode) {
    output.dataset.mode = mode;
}

function changeInputMode(mode) {
    input.dataset.mode = mode;
}

function calculateDegree(degree) {
    const inputMode = input.dataset.mode;
    const outputMode = output.dataset.mode;

    degree = parseFloat(degree)
    let outValue = parseFloat(degree) || 0;

    if (inputMode !== outputMode) {
        const methodToUse = `${inputMode}${outputMode}`
        outValue = degreeConversion[methodToUse](degree)
    }

    output.textContent = outValue;

    
}

function outputChangeHandler(event) {
    let mode = event.target.value;
    changeOutputMode(mode);
    calculateDegree(input.value);
}

function inputChangeHandler(event) {
    let mode = event.target.value;
    changeInputMode(mode);
    calculateDegree(input.value);
}

function inputHandler(event) {
    const newValue = event.target.value;
    calculateDegree(newValue);
}



