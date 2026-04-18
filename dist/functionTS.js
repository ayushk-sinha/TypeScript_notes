function makingChai(type, cups) {
    console.log(`Making ${cups} cups of ${type} chai`);
}
makingChai("masala", 5);
function getChaiPrice() {
    return 25;
}
function chaiLog() {
    console.log(`chai is ready`);
}
function complexChai(type, cupSize, noOfCUps, price, ingredients) {
    if (cupSize > 10) {
        return cupSize + 1;
    }
    else if (noOfCUps > 10) {
        return noOfCUps;
    }
    return price;
}
export {};
//# sourceMappingURL=functionTS.js.map