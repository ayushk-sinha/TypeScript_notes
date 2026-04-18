const chai = ["Adrak", "Lemon"];
const menu = [
    { type: 'Masala', price: 15 }
];
menu.push({ type: 'lemon', price: 25 });
const cities = ["Jaipur", "Delhi"];
//can't push values init
const table = [
    [2, 3, 4],
    [1, 2, 3]
];
let chaiTuples = ["Masala", 24];
chaiTuples = ["Adrak", 32];
const location = [29, 23];
// location = [23,23]
let userInfo = ["Ayush", 23];
userInfo = ["Ayush", 21];
userInfo = ["Bhavesh", 25];
const items = ["masala", 24];
var cupSize;
(function (cupSize) {
    cupSize[cupSize["SMALL"] = 0] = "SMALL";
    cupSize[cupSize["MEDIUM"] = 1] = "MEDIUM";
    cupSize[cupSize["LARGE"] = 2] = "LARGE";
})(cupSize || (cupSize = {}));
const output = cupSize.LARGE;
var status;
(function (status) {
    status[status["OK"] = 200] = "OK";
    status[status["PENDING"] = 201] = "PENDING";
    status[status["ERROR"] = 202] = "ERROR"; //auto assigned 202
})(status || (status = {}));
var input;
(function (input) {
    input["TEA"] = "masala";
    input["GINGER"] = "ginger";
})(input || (input = {}));
function makeTea(type) {
    console.log(`making ${type} tea`);
}
makeTea(input.TEA);
//not good practice
var userInfo1;
(function (userInfo1) {
    userInfo1[userInfo1["ID"] = 1] = "ID";
    userInfo1["NAME"] = "Baeshali dutta";
})(userInfo1 || (userInfo1 = {})); //this is not a good practice of writing enum
//should only declear either String data type or number data type in a single enum
var phoneID;
(function (phoneID) {
    phoneID[phoneID["PHONEID1"] = 1] = "PHONEID1";
    phoneID[phoneID["PHONEID2"] = 2] = "PHONEID2";
    phoneID[phoneID["PHONEID3"] = 3] = "PHONEID3";
})(phoneID || (phoneID = {}));
function phoneIdPrint(inputType) {
    console.log(inputType);
}
phoneIdPrint(phoneID.PHONEID1);
export {};
//# sourceMappingURL=ArraysEnums.js.map