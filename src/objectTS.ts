type Phone = {
    Brand : string,
    screenType: string,
    camera: boolean,
    os: "Android" | "IOS",
}

const AndroidPhone: Phone = {
    Brand:"Samsung",
    screenType:"IPS",
    camera:true,
    os: "Android"
}
console.log(AndroidPhone.os);

type Tea = {
    ChaiType: "Masala"| "cutting" | "Ginger",
    isHot: boolean,
    ingredients: string[]
}

const GingerTea: Tea = {
    ChaiType: "Ginger",
    isHot: true,
    ingredients: ["Ginger","Milk","water","sugar","Tea leaves"]
}
console.log(GingerTea.ingredients);


//omit<>

interface book {
    pages: number,
    chapter: number,
    lesson: string
}
//partial<> 
type updatedBook = Partial<book>

const newbook: updatedBook = {
    pages:10,
    chapter:5,    
}

type obj = {
    num?: number,
    str?: string,
    bool?: boolean
}
//required<>
const objVal: Required<obj> ={
    num:1,
    str:"strVal",
    bool:true
}
//pick<> 

interface newObj{
    date: number,
    id: number,
    name: number,
    bio:string
}

type newObjType = Pick<newObj, "date"|"id">

const dat:newObjType={
    date:20,
    id:32
}


interface userData {
    name: string,
    age: number,
    email: string
}

type userUpdatedData = Omit<userData,"email">

const newUserDat : userUpdatedData = {
    name:"Ayush",
    age: 24,
}

