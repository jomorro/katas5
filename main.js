function kata1(string) {
    return [...string].reverse().join('');
}

function kata2(string) {
    return string.split(' ').reverse().join(' ');
}

function kata3(arrayOfNumbers) {
    return arrayOfNumbers.length > 0 ? arrayOfNumbers.reduce((accumulator, element) => Math.min(accumulator, element)) : Number.NaN;
}

function kata4(arrayOfNumbers) {
    return arrayOfNumbers.length > 0 ? arrayOfNumbers.reduce((accumulator, element) => Math.max(accumulator, element)) : Number.NaN;
}

function kata5(numerator, denominator) {
    return numerator % denominator;
}

function kata6(arrayIncludingDuplicates) {
    return [...new Set(arrayIncludingDuplicates)].sort(function (a, b) {
        return Number(a) - Number(b)
    });
}

function kata7(arrayIncludingDuplicates) {
    const arrayWithoutDuplicates = kata6(arrayIncludingDuplicates);
    let returnString = "";
    for (let element of arrayWithoutDuplicates) {
        returnString += element + "(" + arrayIncludingDuplicates.filter((entry) => entry == element).length + ") ";
    }
    return returnString.slice(0, -1);
}

function kata8(expressionString, variableMap) {
    const expressionArray = expressionString.split(/\s/);
    let multiplier = 1;
    let accumulator = 0;
    for (let element of expressionArray) {
        switch (element) {
            case '+':
                multiplier = 1;
                break;
            case '-':
                multiplier = -1;
                break;
            default:
                accumulator += multiplier * variableMap[element];
                break;
        }
    }
    return accumulator;
}