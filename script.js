const inputBtn = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function checkValue() {
    const numberValue = parseInt(inputBtn.value);
    if (isNaN(numberValue) || numberValue <= 0 || numberValue >= 4000) {
        if (isNaN(numberValue)) {
            alert("Please enter a valid number");
        } else if (numberValue <= 0) {
            alert("Please enter a number greater than or equal to 1");
        } else {
            alert("Please enter a number less than or equal to 3999");
        }
        output.hidden = true; // Exibe a mensagem de erro
    } else {
        convertRomanNumbers(numberValue);
        output.hidden = false; // Exibe o output quando o número é válido
    }
}

function convertRomanNumbers(num) {
    const romanNumeralMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let romanNumeral = '';
    for (const { value, numeral } of romanNumeralMap) {
        while (num >= value) {
            romanNumeral += numeral;
            num -= value;
        }
    }
    output.innerText = `${romanNumeral}`;
}
convertBtn.addEventListener("click", checkValue)

inputBtn.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        checkValue();
    }
});