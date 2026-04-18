const chai: string[] =  ["Adrak", "Lemon"]

type chaiType = {
    type: string,
    price: number
}

const menu: chaiType[] = [
    {type: 'Masala', price: 15}
]
menu.push({type: 'lemon', price: 25})

const cities: readonly string[]=  ["Jaipur", "Delhi"]
//can't push values init

const table: number[][] = [
    [2,3,4],
    [1,2,3]
]

let chaiTuples: [string, number] = ["Masala", 24]
chaiTuples = ["Adrak", 32]

const location: readonly [number, number] = [29,23]
// location = [23,23]

let userInfo: [name:string, age:number] = ["Ayush", 23]

userInfo = ["Ayush", 21]
userInfo = ["Bhavesh", 25]

const items: [name: string, price: number] = ["masala", 24]

enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}
const output = cupSize.LARGE

enum status {
    OK = 200,
    PENDING, //auto assigned 201
    ERROR //auto assigned 202
}

enum input {
    TEA = "masala",
    GINGER = "ginger"
}
function makeTea (type:input){
    console.log(`making ${type} tea`);
    
}
makeTea(input.TEA)

//not good practice

enum userInfo1 {
    ID = 1,
    NAME = "Baeshali dutta"
}//this is not a good practice of writing enum
//should only declear either String data type or number data type in a single enum

const enum phoneID {
    PHONEID1 = 1,
    PHONEID2 = 2,
    PHONEID3 = 3
}
function phoneIdPrint (inputType: phoneID){
    console.log(inputType);
}
phoneIdPrint(phoneID.PHONEID1)