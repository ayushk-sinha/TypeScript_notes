interface chaiwala{
    type : string,
    sugar : boolean
}
const tea: chaiwala = {
    type: "ginger",
    sugar: true
}

interface sum {
    a: number
}
interface sum {
    b: number
}
const sumclass : sum = {
    a: 10,
    b: 20
}

interface a {input:string}
interface b {output:string}

interface c extends a,b{
    sum1 : number
}
const sum2:c = {
    input: "input",
    output: "output",
    sum1 : 10
}

interface rating  {
    [flavour : string] : number
}

const ratingclass : rating = {
    lemon : 5.1,
    ginger: 3.2
}