let response: any = "42";

let numericLength:number = (response as string).length;

console.log(numericLength);

type book = {name: string}

let bookString = '{"name" : "who moved my cheese"}';

let bookObject = JSON.parse(bookString) as book
console.log(bookObject);

//const inputElement = document.getElementById("username") as HTMLInputElement

let value: any;

value = "Ts is string"
value = [1,2,3,4]
value = 2.5
//value.toUpperCase();

let newValue: unknown;

newValue = "Ts is string"
//newValue = [1,2,3,4]
//newValue = 2.5
if(typeof newValue === "string")
newValue.toUpperCase();
console.log(newValue);

const data: unknown  = "string data"
const newData: string = data as string;
console.log(newData);

type Role = "admin" | "superadmin" | "user"

function testFunction (role:Role): void{
    if(role === "admin"){
        console.log("admin");
        return
    }else if (role == "superadmin"){
        console.log("superadmin");
        return
    }
    role;
}


function neverReturns(): never{
    while(true){
        console.log("execute");
        
    }
}
console.log(neverReturns());
