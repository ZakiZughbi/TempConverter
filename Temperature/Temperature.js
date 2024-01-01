const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

function CtoFandK() {
    const cTemp = parseFloat(celciusInput.value) ;
    const fTemp = (cTemp * (9 / 5)) + 32;
    console.log(fTemp);
    const kTemp = cTemp + 273.15;
    console.log(kTemp);
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function FtoCandK() {
    const fTemp = parseFloat(fahrenheitInput.value) ;
    const cTemp = (fTemp - 32) * (5 / 9);
    console.log(fTemp);
    const kTemp = (fTemp + 459.67) * 5/9;
    console.log(kTemp);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function KtoCandF() {
    const kTemp = parseFloat(kelvinInput.value) ;
    const cTemp = kTemp - 273.15;
    console.log(cTemp);
    const fTemp = 9/5 * (kTemp - 273) + 32;
    console.log(fTemp);
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main(){
    celciusInput.addEventListener('input', CtoFandK);
    fahrenheitInput.addEventListener('input', FtoCandK);
    kelvinInput.addEventListener('input', KtoCandF);
}

main();
