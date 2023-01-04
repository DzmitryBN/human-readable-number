module.exports = function toReadable(number) {
    let readableNumber;
    const numberToString = String(number);
    const numberLenth = numberToString.length;

    let readableDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let readableDigitsMoreTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let readableDecades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const digitToReadable = (digit) => readableDigits[digit];
    const secondDevisionToReadable = (digit) => readableDigitsMoreTen[digit];
    const decadesToReadable = (digit) => readableDecades[digit];

    if (number === 0) {
        return "zero"
    }

    if (numberLenth === 1) {
        readableNumber = digitToReadable(number)
    }

    if (number > 9 && number < 20) {
        readableNumber = secondDevisionToReadable(numberToString[numberLenth - 1])
    }
    else if (number > 9) {
        readableNumber = decadesToReadable(numberToString[numberLenth - 2]) + ' ' + digitToReadable(numberToString[numberLenth - 1])
    }

    if (number > 99) {
        readableNumber = digitToReadable(numberToString[numberLenth - 3]) + ' hundred ' + readableNumber.trimStart();
    }

    if (number > 999) {

        if (numberLenth === 4) {
            readableNumber = digitToReadable(numberToString[numberLenth - 4]) + ' thousand ' + readableNumber.trimStart();
        }

        if (number > 9999 && numberToString[numberLenth - 5] === 1) {
            readableNumber = secondDevisionToReadable(numberLenth - 4) + ' thousand ' + readableNumber.trimStart();
        }
        else {
            readableNumber = decadesToReadable(numberToString[numberLenth - 5]) + ' ' + digitToReadable(numberToString[numberLenth - 4]) + ' thousand ' + readableNumber.trimStart();
        }

        if (number > 99999) {
            readableNumber = digitToReadable(numberToString[numberLenth - 6]) + ' hundred ' + readableNumber.trimStart();
        }
    }
    return readableNumber.trimEnd();
}
