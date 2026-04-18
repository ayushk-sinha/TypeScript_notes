let response = "42";
let numericLength = response.length;
console.log(numericLength);
let bookString = '{"name" : "who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
//const inputElement = document.getElementById("username") as HTMLInputElement
let value;
value = "Ts is string";
value = [1, 2, 3, 4];
value = 2.5;
//value.toUpperCase();
let newValue;
newValue = "Ts is string";
//newValue = [1,2,3,4]
//newValue = 2.5
if (typeof newValue === "string")
    newValue.toUpperCase();
console.log(newValue);
const data = "string data";
const newData = data;
console.log(newData);
function testFunction(role) {
    if (role === "admin") {
        console.log("admin");
        return;
    }
    else if (role == "superadmin") {
        console.log("superadmin");
        return;
    }
    role;
}
function neverReturns() {
    while (true) {
        console.log("execute");
    }
}
console.log(neverReturns());
export {};
//# sourceMappingURL=moreTypes.js.map