//1.Reverse string.// TESTED! console.log(kata1("this is a string"));
function kata1(string) {
    return [string].reverse().join('');
}

console.log(kata1("this is a string"));

//2.Reverse a sentence.// TESTED! console.log(reverseSent("this is a string"));
function reverseSent(string) {
    return string.split('').reverse().join('');
}

console.log(reverseSent("this is a string"));

//3.Minimum value in an array.// TESTED! console.log(arrayMin([4, 1, 2, -4, 2]));
function arrayMin(array) {
    return array.reduce((a, b) => Math.min(a, b));
}

console.log(arrayMin([4, 1, 2, -4, 2]));

//4.Maximum value in an array.// TESTED! console.log(arrayMax([4, 1, 2, -4, 2]));
function arrayMax(array) {
    return array.reduce((a, b) => Math.max(a, b));
}

console.log(arrayMax([4, 1, 2, -4, 2]));

//5.Calculate the remiander.// TESTED! console.log(remainder(5, 3));
function remainder(numerator, denominator) {
    return numerator % denominator;
}
console.log(remainder(5, 3));

//6.Return distinct values from a list of duplicates.// TESTED! console.log(duplicate([1, 2, 4, 6, 2, 1, 1, 4]));
function duplicate(arrayWIthDuplicates) {
    return arrayWIthDuplicates.sort(function (a, b) {
        return Number(a) - Number(b)
    });
}
console.log(duplicate([1, 2, 4, 6, 2, 1, 1, 4]));

//7.Return distinct values from a list and count them.// TESTED! console.log(countDuplicates([1, 2, 4, 6, 2, 1, 1, 4]));
function countDuplicates(arrayWithDuplicates) {
    const arrayWithoutDuplicates = duplicate(arrayWithDuplicates);
    let outcome = "";
    for (let element of arrayWithoutDuplicates) {
        outcome += element + ":(" + arrayWithDuplicates.filter((text) => text == element).length + " times) ";
    }
    return outcome.slice(0, -1);
}
console.log(countDuplicates([1, 2, 4, 6, 2, 1, 1, 4]));

//8. Return the result of the expression ("a+b+c-d")// TESTED! console.log(expressions("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}));
function expressions(strExpression, calcMap) {
    const arrayExpression = strExpression.split(/\s/);
    let multiple = 1;
    let increase = 0;
    for (let element of arrayExpression) {
        switch (element) {
            case '+':
                multiple = 1;
                break;
            case '-':
                multiple = -1;
                break;
            default:
                increase += multiple * calcMap[element];
                break;

        }
    }
    return increase;
}
console.log(expressions("a + b + c - d", {
    a: 1,
    b: 7,
    c: 3,
    d: 14
}));

